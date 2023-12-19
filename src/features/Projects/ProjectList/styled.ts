import { keyframes, styled, css } from "styled-components";
import { Link } from "react-router-dom";
import { BoxStyles } from "../../../common/styles/box";
import { SquareButtonStyle } from "../../../common/styles/button";

const slideAnimation = keyframes` 
  0% {
    transform: translateX(0);
  }
  20%{
    transform: translateX(-100%);
  }
  40%{
    transform: translateX(-100%);
  }
  60%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(0);  
  }
`;

export const StyledLink = styled(Link)`
  ${SquareButtonStyle}
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2<{ slide?: boolean }>`
  animation: ${({ slide }) => (slide ? slideAnimation : "")} 8s linear infinite;
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: 400;
  margin: 0;
`;

export const TitleWrapper = styled.span`
  overflow: hidden;
`;

export const ProgressIndicator = styled.span<{ completion?: number }>`
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 50px;
  ${({ completion }) =>
    css`
      background: radial-gradient(
          closest-side,
          ${({ theme }) => theme.colors.box} 90%,
          transparent 80% 100%
        ),
        conic-gradient(
          white ${completion}%,
          ${({ theme }) => theme.colors.dominant} 0
        );
    `}
`;

export const DaysLeft = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 300;
  margin-top: 3px;
  margin: 0;
`;

export const TasksCompleted = styled(DaysLeft)`
  margin-top: 0;
  color: ${({ theme }) => theme.colors.dominant};
`;

export const Project = styled.div`
  ${BoxStyles}
  align-items: center;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 2fr 1fr 1fr;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: 1fr;
  }
`;
