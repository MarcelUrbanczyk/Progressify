import PlusIcon from "../../../../common/svg/plusIcon";
import MinusIcon from "../../../../common/svg/minusIcon";
import {
  AlternativeBox,
  Container,
  Wrapper,
  ProjectButton,
  Paragraph,
  Divider,
  Label,
  Input,
  TaskButton,
  TaskCreatorWrapper,
  TaskSubmitButton,
  TaskTile,
  FormWrapper,
  ProjectSubmitButton,
  IconWrapper,
} from "./styled";
import { useState } from "react";
import React from "react";
import TrashBinIcon from "../../../../common/svg/trashbinIcon";
import { nanoid } from "nanoid";
import { formatDate } from "../../../formatDate";
import { useAppDispatch } from "../../../reduxHooks";
import { addProject } from "../../projectSlice";

export default () => {
  interface Task {
    name: string;
    isDone: boolean;
    id: string;
  }

  const [addNewProject, setAddNewProject] = useState(true);
  const [projectName, setProjectName] = useState("");
  const [projectDeadline, setProjectDeadline] = useState("");
  const [addNewTask, setAddNewTask] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([] as Task[]);

  const dispatch = useAppDispatch();

  const addTask = () => {
    if (taskName !== "") {
      setTasks([
        ...tasks,
        { name: taskName.trim(), isDone: false, id: nanoid() },
      ]);
      setTaskName("");
      setAddNewTask(false);
    }
  };

  const onFormSubmit = () => {
    if (projectName && projectDeadline && tasks.length > 0) {
      console.log(projectName, projectDeadline, tasks);
      setProjectName("");
      setProjectDeadline("");
      setTasks([]);
      setAddNewProject(false);
      const newProject = {
        creationDate: formatDate(new Date()),
        deadline: projectDeadline,
        name: projectName,
        tasks: tasks,
        id: nanoid(),
      };
      dispatch(addProject(newProject));
    }
  };

  if (!addNewProject) {
    return (
      <Container>
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
      </Container>
    );
  }
  return (
    <Container style={{ maxHeight: "500px" }}>
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
            <TaskTile>
              <Paragraph>{task.name}</Paragraph>
              <IconWrapper>
                <TrashBinIcon
                  onClick={() => {
                    setTasks(tasks.filter((t) => t.id !== task.id));
                  }}
                />
              </IconWrapper>
            </TaskTile>
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
    </Container>
  );
};
