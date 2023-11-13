import styled from "styled-components";

export const Wrapper = styled.span`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 10px;
`;

export const TaskCreatorWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 5px;
`;

export const TaskTileWrapper = styled.span`
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

export const ProjectButton = styled.button`
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

export const TaskButton = styled(ProjectButton)`
  border-radius: 6px;
  width: 20px;
  height: 20px;
`;

export const TaskSubmitButton = styled(ProjectButton)`
  height: 30px;
  width: auto;
  text-align: center;
  color: white;
  font-family: "Mitr";
  font-weight: 300;
  padding: 0 10px;
  border-radius: 4px;
`;

export const ProjectSubmitButton = styled(TaskSubmitButton)`
  margin: 10px;
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

export const Divider = styled.hr`
  width: 97%;
  height: 1px;
  margin: 5px;
  border: none;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const FormWrapper = styled.span`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  padding: 10px;
  grid-row-gap: 12px;
`;

export const Label = styled.label`
  color: white;
  font-weight: 300;
`;

export const Input = styled.input`
  background-color: #28323c;
  border-radius: 4px;
  width: 120px;
  color: white;
  border: 1px solid #4f6272;
`;
