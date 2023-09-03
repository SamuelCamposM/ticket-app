import React, { useMemo } from "react";
import { Button, Typography, Form, Input, Divider, InputNumber } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
import { useUi } from "../hooks";
import { getUsuarioStorage } from "../helpers";

const { Title, Text } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const itemLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export const Ingresar = () => {
  useUi(false);
  const navigate = useNavigate();
  const usuario = useMemo(() => getUsuarioStorage(), []);
  const onFinish = ({ agente, escritorio }) => {
    localStorage.setItem("agente", agente);
    localStorage.setItem("escritorio", escritorio);
    navigate("/escritorio", { replace: true });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (usuario.agente && usuario.escritorio) {
    return <Navigate to="/escritorio" />;
  }
  return (
    <>
      <Title level={2}> Ingresar</Title>
      <Text>Ingrese su nombre y número de escritorio</Text>
      <Divider />
      <Form
        {...layout}
        name="basic"
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre Agente"
          name="agente"
          rules={[
            {
              required: true,
              message: "Por favor ingrese su nombre",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Escritorio"
          name="escritorio"
          rules={[
            {
              required: true,
              message: "Ingrese el número de escritorio",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item {...itemLayout}>
          <Button type="primary" htmlType="submit">
            <SaveOutlined />
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
