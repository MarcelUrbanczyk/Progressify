import styled from "styled-components";

export const Wrapper = styled.div`
  align-content: center;
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 10px;
`;

export const Button = styled.button`
  background-color: #28323c;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  padding: 2px 0 0;
  width: 40px;
  height: 40px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  color: #fff;
  font-family: "Mitr";
  font-size: 16px;
  font-weight: 300;
  user-select: none;
`;
