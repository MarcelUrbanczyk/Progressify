import { css } from "styled-components";

export const ButtonStyle = css`
  background-color: ${({ theme }) => theme.colors.dominant};
  color: white;
  white-space: nowrap;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 4px 10px;
  width: auto;
  height: auto;
  transition: 0.3s;
  font-family: "Mitr";
  &:hover {
    transform: scale(1.05);
  }
`;

export const SquareButtonStyle = css`
  background-color: ${({ theme }) => theme.colors.dominant};
  border-radius: 12px;
  border: none;
  cursor: pointer;
  height: 40px;
  padding: 2px 0 0;
  transition: 0.3s;
  width: 40px;
  &:hover {
    transform: scale(1.05);
  }
`;
