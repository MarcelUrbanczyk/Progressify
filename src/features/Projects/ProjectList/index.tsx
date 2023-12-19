import React from "react";
import {
  Title,
  DaysLeft,
  Project,
  TasksCompleted,
  TitleWrapper,
  StyledLink,
  ProgressIndicator,
  Section,
} from "./styled";
import AddNewProject from "./addNewProject";
import { useAppSelector } from "../../reduxHooks";
import getDaysLeft from "../../getDaysLeft";
import ArrowToRight from "../../../common/svg/arrowToRight";
import { countPrecentage } from "../../countPrecentage";

const ProjectList = () => {
  const projects = useAppSelector((state) => state.projects);
  return (
    <Section>
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
          <StyledLink to={`/projects/${project.id}`}>
            <ArrowToRight />
          </StyledLink>
        </Project>
      ))}
      <AddNewProject />
    </Section>
  );
};

export default ProjectList;
