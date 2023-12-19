import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProjectPage = () => {
  const { id } = useParams();
  console.log(id);
  return <span></span>;
};

export default ProjectPage;
