import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.colors.background};
  color:${({ theme }) => theme.colors.text};
  box-sizing: border-box;
  margin: 0;
  font-family: "Mitr";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;
