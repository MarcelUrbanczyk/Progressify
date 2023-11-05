import Navigation from "./Navigation/index";
import { Main } from "../../common/Main";
import ProjectList from "./ProjectList/index";
import React from "react";

const MobileApp = () => (
  <>
    <Navigation />
    <Main>
      <ProjectList />
    </Main>
  </>
);

export default MobileApp;
