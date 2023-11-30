import { css } from "styled-components";

export const BoxStyles = css`
  background-color: ${({ theme }) => theme.colors.background.box};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.item};
  max-height: 60px;
  transition: all 0.5s;
  overflow: hidden;
  padding: 10px;
`;

export const AlternativeBoxStyles = css`
  background-color: ${({ theme }) => theme.colors.background.alternativeBox};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.item};
  margin: 10px;
  max-height: 40px;
  transition: 0.5s;
`;
