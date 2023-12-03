import { Main } from "../common/Main";
import ProjectList from "../features/Projects/ProjectList/index";
import Navigation from "../features/Navigation/index";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
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
          <Route path="/">
            <Redirect to={toProjects} />
          </Route>
        </Switch>
      </Main>
    </HashRouter>
  );
};

export default App;
