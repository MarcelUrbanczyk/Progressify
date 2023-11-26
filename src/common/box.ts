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
