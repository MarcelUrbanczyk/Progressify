import { Main } from "../common/Main";
import ProjectList from "../features/Projects/ProjectList/index";
import Navigation from "../features/Navigation/index";
import React from "react";

const App = () => {
  return (
    <>
      <Navigation />
      <Main>
        <ProjectList />
      </Main>
    </>
  );
};

export default App;
