import { Main } from "../common/Main";
import ProjectPage from "../features/Projects/ProjectPage";
import ProjectList from "../features/Projects/ProjectList/index";
import Navigation from "../features/Navigation";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import { toGoals, toProject, toProjects, toSettings, toTasks } from "./routes";
import Settings from "../features/Settings";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Main>
        <Switch>
          <Route path={toProject}>
            <ProjectPage />
          </Route>
          <Route path={toProjects}>
            <ProjectList />
          </Route>
          <Route path={toTasks}>
            <span></span>
          </Route>
          <Route path={toGoals}>
            <span></span>
          </Route>
          <Route path={toSettings}>
            <Settings />
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
