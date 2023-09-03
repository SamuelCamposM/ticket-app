import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import { useUi } from "../hooks";
import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { useState } from "react";
const { Title, Text } = Typography;

export const CrearTicket = () => {
  useUi(true);
  const { socket } = useContext(SocketContext);
  const [ticket, setticket] = useState(null);
  const nuevoTicket = () => {
    socket.emit("solicitar-ticket", null, (ticket) => {
      // ESTE CALLBACK SE EJECUTA CUANDO EL BACKEND QUIERA
      setticket(ticket);
    });
  };
  return (
    <>
      <Row justify="center">
        <Col
          span={14}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Title level={2}> Presione el botón para un nuevo ticket</Title>
          <Button type="primary" shape size="large" onClick={nuevoTicket}>
            <DownloadOutlined />
            Nuevo ticket
          </Button>
        </Col>
      </Row>
      {ticket && (
        <Row justify="center" style={{ marginTop: 100 }}>
          <Col
            span={14}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Text level={2}>Su número</Text>
            <Divider>
              <Text type="success" style={{ fontSize: 55 }}>
                {ticket.numero}
              </Text>
            </Divider>
          </Col>
        </Row>
      )}
    </>
  );
};
