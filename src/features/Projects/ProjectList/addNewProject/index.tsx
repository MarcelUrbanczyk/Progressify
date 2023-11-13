import PlusIcon from "./plusIcon";
import MinusIcon from "./minusIcon";
import {
  Wrapper,
  ProjectButton,
  Paragraph,
  Divider,
  Label,
  Input,
  TaskButton,
  TaskCreatorWrapper,
  TaskSubmitButton,
  TaskTileWrapper,
  FormWrapper,
  ProjectSubmitButton,
} from "./styled";
import { useState } from "react";
import React from "react";
import { AlternativeBox } from "../../../../common/alternativeBox";
import TrashBinIcon from "./trashbinIcon";
import { Box } from "../../../../common/box";

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

  const addTask = () => {
    if (taskName !== "") {
      setTasks([...tasks, { name: taskName.trim(), isDone: false }]);
      setTaskName("");
      setAddNewTask(false);
    }
  };

  const onFormSubmit = () => {
    if (projectName !== "" && projectDeadline !== "") {
      console.log(projectName, projectDeadline, tasks);
      setProjectName("");
      setProjectDeadline("");
      setTasks([]);
      setAddNewProject(false);
    }
  };

  if (!addNewProject) {
    return (
      <Box>
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
      </Box>
    );
  }
  return (
    <Box style={{ maxHeight: "500px" }}>
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
      <form>
        <FormWrapper>
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
        </FormWrapper>

        {tasks.length > 0 &&
          tasks.map((task) => (
            <AlternativeBox>
              <TaskTileWrapper>
                <Paragraph>{task.name}</Paragraph>
                <TrashBinIcon
                  onClick={() => {
                    setTasks(tasks.filter((t) => t.name !== task.name));
                  }}
                />
              </TaskTileWrapper>
            </AlternativeBox>
          ))}

        <AlternativeBox
          style={!addNewTask ? { maxHeight: "40px" } : { maxHeight: "200px" }}
        >
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
            <FormWrapper>
              <Label>Task name: </Label>
              <Input
                type="text"
                required
                value={taskName}
                onChange={(event) => {
                  setTaskName(event.target.value);
                }}
              />
              <TaskSubmitButton onClick={addTask}>Add task</TaskSubmitButton>
            </FormWrapper>
          )}
        </AlternativeBox>
      </form>
      <ProjectSubmitButton onClick={onFormSubmit}>
        Create project
      </ProjectSubmitButton>
    </Box>
  );
};
