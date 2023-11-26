import React from "react";
import {
  Title,
  DaysLeft,
  Project,
  TasksCompleted,
  TitleWrapper,
  IconWrapper,
  ProgressIndicator,
} from "./styled";
import AddNewProject from "./addNewProject";
import { useAppSelector } from "../../reduxHooks";
import getDaysLeft from "../../getDaysLeft";
import ArrowToRight from "./arrowToRight";
import { countPrecentage } from "../../countPrecentage";

const ProjectList = () => {
  const projects = useAppSelector((state) => state.projects);
  return (
    <>
      <AddNewProject />
      {projects.map((project) => (
        <Project key={project.id}>
          <TitleWrapper>
            <Title>{project.name}</Title>
          </TitleWrapper>
          <DaysLeft>
            {getDaysLeft(project.deadline) <= 0
              ? "Expired"
              : getDaysLeft(project.deadline) + " days left"}
          </DaysLeft>
          <ProgressIndicator
            completion={countPrecentage(
              project.tasks.filter((task) => task.isDone).length,
              project.tasks.length
            )}
          >
            <TasksCompleted>
              {project.tasks.filter((task) => task.isDone).length +
                "/" +
                project.tasks.length}
            </TasksCompleted>
          </ProgressIndicator>
          <IconWrapper>
            <ArrowToRight />
          </IconWrapper>
        </Project>
      ))}
    </>
  );
};

export default ProjectList;
