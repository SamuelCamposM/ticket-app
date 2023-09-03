import { Card, Col, Divider, List, Row, Tag, Typography } from "antd";
import { useUi } from "../hooks";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context";
import { getTickets } from "../helpers/getTickets";

const { Title, Text } = Typography;
export const Cola = () => {
  useUi(false);
  const [tickets, settickets] = useState([]);

  const { socket } = useContext(SocketContext);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTickets();
      settickets(data)
    };
    fetchData();
  }, []);

  useEffect(() => {
    socket.on("ticket-asignado", (asignados) => {
      settickets(asignados);
    });
    return () => {
      socket.off("ticket-asignado");
    };
  }, []);

  return (
    <>
      <Title level={2}>Atendiendo al cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agente} </Tag>,
                    <Tag color="magenta">{item.escritorio}</Tag>,
                  ]}
                >
                  <Title>No. {item.numero} </Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider> Historial </Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No ${item.numero}`}
                  description={
                    <>
                      <Text type="secondary"> En el escritorio: </Text>
                      <Tag color="magenta">{item.escritorio}</Tag>
                      <Text type="secondary"> Agente: </Text>
                      <Tag color="volcano">{item.agente} </Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
