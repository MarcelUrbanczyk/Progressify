import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/App";
import { GlobalStyle } from "./core/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
