import { Main } from "../common/Main";
import ProjectList from "../features/Projects/ProjectList/index";
import Navigation from "../features/Navigation/index";
import { HashRouter, Switch, Route } from "react-router-dom";
import React from "react";
import { toProjects } from "../features/routes";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Main>
        <Switch>
          <Route path={toProjects}>
            <ProjectList />
          </Route>
        </Switch>
      </Main>
    </HashRouter>
  );
};

export default App;
