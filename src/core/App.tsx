import { Main } from "../common/Main";
import ProjectList from "../features/Projects/ProjectList/index";
import Navigation from "../features/Navigation";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import { toGoals, toProjects, toTasks } from "./routes";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Main>
        <Switch>
          <Route path={toProjects}>
            <ProjectList />
          </Route>
          <Route path={toTasks}>
            <span></span>
          </Route>
          <Route path={toGoals}>
            <span></span>
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
