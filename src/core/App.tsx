import MobileNavigation from "../features/MobileNavigation/index";
import { Main } from "../common/Main";
import ProjectList from "../features/Projects/ProjectList/index";
import React from "react";
import Navigation from "../features/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <MobileNavigation />
      <Main>
        <ProjectList />
      </Main>
    </>
  );
};

export default App;
