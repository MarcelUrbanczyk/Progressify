import { Main } from "../common/Main";
import ProjectList from "../features/Projects/ProjectList/index";
import React from "react";
import MobileNavigation from "../features/Navigation/Mobile";
import DesktopNavigation from "../features/Navigation/Desktop";

const App = () => {
  return (
    <>
      <DesktopNavigation />
      <MobileNavigation />
      <Main>
        <ProjectList />
      </Main>
    </>
  );
};

export default App;
