import { styled } from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  padding: 20px;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktopMid}) {
    max-width: 1000px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    max-width: 600px;
  }
`;
