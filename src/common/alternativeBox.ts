import styled from "styled-components";

export const AlternativeBox = styled.div`
  background-color: ${({ theme }) => theme.colors.background.alternativeBox};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.item};
  margin: 10px;
  max-height: 40px;
  transition: 0.5s;
`;
