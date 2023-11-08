import styled from "styled-components";

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.background.box};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.item};
  min-height: 60px;
`;
