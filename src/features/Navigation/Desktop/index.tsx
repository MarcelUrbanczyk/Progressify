import React from "react";
import {
  StyledNavigation,
  Header,
  Wrapper,
  NavLinkWrapper,
  NavLink,
} from "./styled";
import { useLocation } from "react-router-dom";
import { toProjects, toTasks, toGoals } from "../../routes";

const DesktopNavigation = () => {
  const location = useLocation();
  return (
    <StyledNavigation>
      <Wrapper>
        <Header>Projectize</Header>
        <NavLinkWrapper>
          <NavLink
            to={toProjects()}
            active={location.pathname.startsWith("/projects")}
          >
            Projects
          </NavLink>
          <NavLink
            to={toTasks()}
            active={location.pathname.startsWith("/tasks")}
          >
            Daily Tasks
          </NavLink>
          <NavLink
            to={toGoals()}
            active={location.pathname.startsWith("/goals")}
          >
            Goals
          </NavLink>
          <NavLink>Settings</NavLink>
        </NavLinkWrapper>
      </Wrapper>
    </StyledNavigation>
  );
};

export default DesktopNavigation;
