import { keyframes, styled } from "styled-components";

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

interface TitleProps {
  slide?: boolean;
}

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2<TitleProps>`
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  animation: ${({ slide }) => (slide ? slideAnimation : "")} 8s linear infinite;
`;

export const TitleWrapper = styled.span`
  overflow: hidden;
`;

export const DaysLeft = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  font-weight: 300;
  font-size: 16px;
  margin-top: 3px;
`;

export const TasksCompleted = styled(DaysLeft)``;

export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 1fr 1fr;
  align-items: center;
  gap: 20px;
`;
