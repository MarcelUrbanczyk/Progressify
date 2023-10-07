import { styled } from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Project = styled.div`
  background-color: ${({ theme }) => theme.colors.background.box};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.item};
  height: 220px;
`;
