import React, { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useUi } from "../hooks";
const { Header, Sider, Content } = Layout;
export const Layouyt = ({ children }) => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { ocultarMenu } = useUi();
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        collapsible
        hidden={ocultarMenu}
        collapsedWidth={"0"}
        breakpoint="md"
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              label: "Ingresar",
              icon: <UserOutlined />,
              onClick: () => navigate("/ingresar"),
            },
            {
              key: "2",
              label: "Cola De Tickets",
              icon: <VideoCameraOutlined />,
              onClick: () => navigate("/cola"),
            },
            {
              key: "3",
              label: "Crear Ticket",
              icon: <UploadOutlined />,
              onClick: () => navigate("/crear"),
            },
          ]}
        />
      </Sider>
      <Layout>
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        ></Header> */}
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
