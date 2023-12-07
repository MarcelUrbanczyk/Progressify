import styled from "styled-components";
import { ButtonStyles } from "../../../../common/styles/button";
import { BoxStyles, AlternativeBoxStyles } from "../../../../common/styles/box";

export const Container = styled.div`
  ${BoxStyles}
`;

export const Wrapper = styled.span`
  align-items: center;
  display: flex;
  gap: 12px;
  padding: 10px;
`;

export const TaskCreatorWrapper = styled.span`
  align-items: center;
  display: flex;
  gap: 12px;
  padding: 5px;
  width: 100%;
`;

export const AlternativeBox = styled.div`
  ${AlternativeBoxStyles}
  grid-column-end: 3;
  grid-column-start: 1;
`;

export const TaskTile = styled.span`
  ${AlternativeBoxStyles}
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

export const ProjectButton = styled.button`
  background-color: #28323c;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  height: 40px;
  padding: 2px 0 0;
  transition: 0.3s;
  width: 40px;
  &:hover {
    transform: scale(1.05);
  }
`;

export const TaskButton = styled(ProjectButton)`
  border-radius: 6px;
  height: 20px;
  width: 20px;
`;

export const TaskSubmitButton = styled(ProjectButton)`
  ${ButtonStyles}
`;

export const ProjectSubmitButton = styled(TaskSubmitButton)`
  ${ButtonStyles}
  margin: 10px;
`;

export const Paragraph = styled.p`
  color: #fff;
  font-family: "Mitr";
  font-size: 16px;
  font-weight: 300;
  margin: 0;
  padding: 0;
  user-select: none;
`;

export const Divider = styled.hr`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  border: none;
  height: 1px;
  margin: 5px;
  width: 100%;
`;

export const FormWrapper = styled.span`
  display: grid;
  grid-row-gap: 12px;
  grid-template-columns: auto auto;
  justify-content: space-between;
  padding: 10px;
`;

export const Label = styled.label`
  color: white;
  font-weight: 300;
`;

export const Input = styled.input`
  background-color: #28323c;
  border-radius: 4px;
  border: 1px solid #4f6272;
  color: white;
  width: 120px;
`;
