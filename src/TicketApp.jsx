import { Button } from "antd";
import React, { useContext } from "react";
import { AppRouter } from "./router/AppRouter";
import { SocketContext } from "./context/SocketContext";

export const TicketApp = () => {
  const { socket } = useContext(SocketContext);
  console.log(socket);
  return (
    <>
      <AppRouter />
    </>
  );
};
