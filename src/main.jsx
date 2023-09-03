import React from "react";
import ReactDOM from "react-dom/client";
import { TicketApp } from "./TicketApp.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { SocketProvider } from "./context/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{ token: { colorPrimary: "yellowgreen" } }}>
        <BrowserRouter>
          <SocketProvider>
            <TicketApp />
          </SocketProvider>
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
