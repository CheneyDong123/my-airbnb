import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "normalize.css";
import "@/assets/css/index.less";
import "@/assets/css/common.less";
import "@/assets/css/index.less";

import store from "@/store";
import { ThemeProvider } from "styled-components";
import theme from "@/assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
);
