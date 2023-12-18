import { styled, css } from "styled-components";
import { BoxStyles } from "../../common/styles/box";
import { SquareButtonStyle } from "../../common/styles/button";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto;
`;

export const Box = styled.div`
  ${BoxStyles}
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: 20px;
`;

export const AnimationWrapper = styled.span<{ $flip?: boolean }>`
  transition: 0.3s;
  transform: rotate(90deg);
  ${({ $flip }) => css`
    transform: rotate(90deg);
  `}
`;

export const Button = styled.button`
  ${SquareButtonStyle}
`;
