import PlusIcon from "./plusIcon";
import MinusIcon from "./minusIcon";
import {
  Wrapper,
  Button,
  Paragraph,
  Divider,
  Form,
  Label,
  Input,
} from "./styled";
import { useState } from "react";
import React from "react";

export default () => {
  const [addNewProject, setAddNewProject] = useState(true);
  const [projectName, setProjectName] = useState("");
  const [projectDeadline, setProjectDeadline] = useState("");

  if (!addNewProject) {
    return (
      <Wrapper>
        <Button
          onClick={() => {
            setAddNewProject(!addNewProject);
          }}
        >
          {!addNewProject ? <PlusIcon /> : <MinusIcon />}
        </Button>
        <Paragraph>Add new project</Paragraph>
      </Wrapper>
    );
  }
  return (
    <>
      <Wrapper>
        <Button
          onClick={() => {
            setAddNewProject(!addNewProject);
          }}
        >
          {!addNewProject ? <PlusIcon /> : <MinusIcon />}
        </Button>
        <Paragraph>Project creation</Paragraph>
      </Wrapper>
      <Divider />
      <Form>
        <Label>Project name: </Label>
        <Input
          type="text"
          required
          value={projectName}
          onChange={(event) => {
            setProjectName(event.target.value);
          }}
        />
        <Label>Deadline: </Label>
        <Input
          type="date"
          required
          value={projectDeadline}
          onChange={(event) => {
            setProjectDeadline(event.target.value);
          }}
        />
      </Form>
    </>
  );
};
