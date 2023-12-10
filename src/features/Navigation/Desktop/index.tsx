import React from "react";
import {
  StyledNavigation,
  Logo,
  Wrapper,
  NavLinkWrapper,
  NavLink,
} from "./styled";
import { useLocation } from "react-router-dom";
import { toProjects, toTasks, toGoals } from "../../../core/routes";

const DesktopNavigation = () => {
  const location = useLocation();
  return (
    <StyledNavigation>
      <Wrapper>
        <Logo to="/">Progressify</Logo>
        <NavLinkWrapper>
          <NavLink
            to={toProjects}
            $active={location.pathname.startsWith("/projects")}
          >
            Projects
          </NavLink>
          <NavLink
            to={toTasks}
            $active={location.pathname.startsWith("/tasks")}
          >
            Tasks
          </NavLink>
          <NavLink
            to={toGoals}
            $active={location.pathname.startsWith("/goals")}
          >
            Goals
          </NavLink>
        </NavLinkWrapper>
      </Wrapper>
    </StyledNavigation>
  );
};

export default DesktopNavigation;
