import { keyframes, styled, css } from "styled-components";
import { BoxStyles } from "../../../common/styles/box";

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

export const IconWrapper = styled.span`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  max-height: 20px;
  overflow: hidden;
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
          ${({ theme }) => theme.colors.button} 90%,
          transparent 80% 100%
        ),
        conic-gradient(white ${completion}%, gray 0);
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
`;

export const Project = styled.div`
  ${BoxStyles}
  align-items: center;
  display: grid;
  gap: 20px;
  grid-template-columns: 3fr 3fr 1fr 1fr;
  &:hover {
    background-color: ${({ theme }) => theme.colors.button};
    cursor: pointer;
    transform: scale(1.02);
  }
`;
