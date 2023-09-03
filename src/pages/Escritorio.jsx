import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Button, Divider } from "antd";
import React, { useMemo, useContext, useState } from "react";
import { useUi } from "../hooks";
import { getUsuarioStorage } from "../helpers";
import { Navigate, useNavigate } from "react-router-dom";
import { SocketContext } from "../context";

const { Title, Text } = Typography;

export const Escritorio = () => {
  useUi(false);
  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();
  const usuario = useMemo(() => getUsuarioStorage(), []);
  const [ticket, setticket] = useState({});
  const salir = () => {
    localStorage.removeItem("agente");
    localStorage.removeItem("escritorio");
    navigate("/ingresar", { replace: true });
  };
  const siguienteTicket = () => {
    console.log(usuario);
    socket.emit("siguiente-ticket-trabajar", usuario, (ticket) => {
      setticket(ticket);
    });
  };
  if (!usuario.agente || !usuario.escritorio) {
    return <Navigate to="/ingresar" />;
  }
  return (
    <>
      <Row>
        <Col span={20}>
          <Title>{usuario.agente}</Title>
          <Text>Usted esta trabajando en el: </Text>
          <Text type="success"> {usuario.escritorio}</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="primary" danger onClick={salir}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      {ticket && (
        <Row>
          <Col>
            <Text>Está atentiendo el ticket número: </Text>
            <Text style={{ fontSize: 30 }} type="danger">
              {ticket.numero}
            </Text>
          </Col>
        </Row>
      )}

      <Row justify="end">
        <Button onClick={siguienteTicket} type="primary">
          <RightOutlined />
          Siguiente
        </Button>
      </Row>
    </>
  );
};
