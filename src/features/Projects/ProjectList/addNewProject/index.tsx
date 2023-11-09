import PlusIcon from "./plusIcon";
import MinusIcon from "./minusIcon";
import {
  Wrapper,
  ProjectButton,
  Paragraph,
  Divider,
  Form,
  Label,
  Input,
  TaskButton,
  TaskCreatorWrapper,
  SubmitButton,
  TaskWrapper,
} from "./styled";
import { useState } from "react";
import React from "react";
import { AlternativeBox } from "../../../../common/alternativeBox";
import TrashBinIcon from "./trashbinIcon";

export default () => {
  interface Task {
    name: string;
    isDone: boolean;
  }

  const [addNewProject, setAddNewProject] = useState(true);
  const [projectName, setProjectName] = useState("");
  const [projectDeadline, setProjectDeadline] = useState("");
  const [addNewTask, setAddNewTask] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([] as Task[]);

  console.log(tasks);

  const addTask = () => {
    if (taskName !== "") {
      setTasks([...tasks, { name: taskName.trim(), isDone: false }]);
      setTaskName("");
      setAddNewTask(false);
    }
  };

  if (!addNewProject) {
    return (
      <Wrapper>
        <ProjectButton
          onClick={() => {
            setAddNewProject(!addNewProject);
          }}
        >
          {!addNewProject ? <PlusIcon /> : <MinusIcon />}
        </ProjectButton>
        <Paragraph>Add new project</Paragraph>
      </Wrapper>
    );
  }
  return (
    <>
      <Wrapper>
        <ProjectButton
          onClick={() => {
            setAddNewProject(!addNewProject);
          }}
        >
          {!addNewProject ? <PlusIcon /> : <MinusIcon />}
        </ProjectButton>
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

      <AlternativeBox>
        <TaskCreatorWrapper>
          <TaskButton
            onClick={() => {
              setAddNewTask(!addNewTask);
            }}
          >
            {!addNewTask ? <PlusIcon /> : <MinusIcon />}{" "}
          </TaskButton>
          <Paragraph>{!addNewTask ? "Add new task" : "Set task"}</Paragraph>
        </TaskCreatorWrapper>
        {addNewTask && (
          <Form>
            <Label>Task name: </Label>
            <Input
              type="text"
              required
              value={taskName}
              onChange={(event) => {
                setTaskName(event.target.value);
              }}
            />
            <SubmitButton onClick={addTask}>Add task</SubmitButton>
          </Form>
        )}
      </AlternativeBox>
      {tasks.length > 0 &&
        tasks.map((task) => (
          <AlternativeBox>
            <TaskWrapper>
              <Paragraph>{task.name}</Paragraph>
              <TrashBinIcon
                onClick={() => {
                  setTasks(tasks.filter((t) => t.name !== task.name));
                }}
              />
            </TaskWrapper>
          </AlternativeBox>
        ))}
    </>
  );
};
