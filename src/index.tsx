import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/App";
import { GlobalStyle } from "./core/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme";
import store from "./core/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
