import React from "react";
import { Box } from "../../../common/box";
import { Section } from "./styled";
import AddNewProject from "./addNewProject";

const ProjectList = () => (
  <Section>
    <Box>
      <AddNewProject />
    </Box>
    <Box></Box>
  </Section>
);

export default ProjectList;
