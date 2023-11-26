import { keyframes, styled, css } from "styled-components";
import { BoxStyles } from "../../../common/box";

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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-height: 20px;
  overflow: hidden;
`;

export const Title = styled.h2<{ slide?: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  animation: ${({ slide }) => (slide ? slideAnimation : "")} 8s linear infinite;
`;

export const TitleWrapper = styled.span`
  overflow: hidden;
`;

export const ProgressIndicator = styled.span<{ completion?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  ${({ completion }) =>
    css`
      background: radial-gradient(
          closest-side,
          ${({ theme }) => theme.colors.background.box} 90%,
          transparent 80% 100%
        ),
        conic-gradient(white ${completion}%, gray 0);
    `}
`;

export const DaysLeft = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  font-weight: 300;
  font-size: 16px;
  margin-top: 3px;
`;

export const TasksCompleted = styled(DaysLeft)`
  margin-top: 0;
`;

export const Project = styled.div`
  ${BoxStyles}
  display: grid;
  grid-template-columns: 3fr 3fr 1fr 1fr;
  align-items: center;
  gap: 20px;
`;
