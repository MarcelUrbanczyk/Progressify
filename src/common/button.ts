import { css } from "styled-components";

export const ButtonStyles = css`
  background-color: ${({ theme }) => theme.colors.button};
  color: white;
  white-space: nowrap;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 4px;
  width: auto;
  height: auto;
  transition: 0.3s;
  font-family: "Mitr";
  &:hover {
    transform: scale(1.05);
  }
`;
