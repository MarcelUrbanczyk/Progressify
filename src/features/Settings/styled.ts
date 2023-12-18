import styled from "styled-components";
import { BoxStyles } from "../../common/styles/box";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto;
`;

export const Box = styled.div`
  ${BoxStyles}
  padding: 20px;
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: 20px;
`;
