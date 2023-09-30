import { styled } from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Project = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background.box};
  box-shadow: ${({ theme }) => theme.shadows.item};
  height: 220px;
`;
