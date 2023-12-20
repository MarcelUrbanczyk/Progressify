import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getProjectById } from "../projectSlice";
import { useAppSelector } from "../../reduxHooks";
import { Section, Title, Wrapper } from "./styled";

const ProjectPage = () => {
  const { id } = useParams();
  const project = useAppSelector((state) => getProjectById(state, id));
  console.log(project);
  return (
    <Section>
      <Wrapper>
        <Title>{project.name}</Title>
      </Wrapper>
    </Section>
  );
};

export default ProjectPage;
