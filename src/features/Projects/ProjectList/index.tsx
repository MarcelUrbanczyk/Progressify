import React from "react";
import { Box } from "../../../common/box";
import {
  Title,
  DaysLeft,
  ProjectWrapper,
  TasksCompleted,
  TitleWrapper,
  IconWrapper,
} from "./styled";
import AddNewProject from "./addNewProject";
import { useAppSelector } from "../../reduxHooks";
import getDaysLeft from "../../getDaysLeft";
import ArrowToRight from "./arrowToRight";

const ProjectList = () => {
  const projects = useAppSelector((state) => state.projects);
  return (
    <>
      <AddNewProject />
      {projects.map((project) => (
        <Box key={project.id}>
          <ProjectWrapper>
            <TitleWrapper>
              <Title slide={project.name.length >= 9}>{project.name}</Title>
            </TitleWrapper>
            <DaysLeft>
              {getDaysLeft(project.deadline) <= 0
                ? "Expired"
                : getDaysLeft(project.deadline) + " days left"}
            </DaysLeft>
            <TasksCompleted>
              {project.tasks.filter((task) => task.isDone).length +
                "/" +
                project.tasks.length}
            </TasksCompleted>
            <IconWrapper>
              <ArrowToRight />
            </IconWrapper>
          </ProjectWrapper>
        </Box>
      ))}
    </>
  );
};

export default ProjectList;
