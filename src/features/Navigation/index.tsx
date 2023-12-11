import React from "react";
import { useState } from "react";
import {
  StyledNavigation,
  Logo,
  Wrapper,
  NavLinkWrapper,
  NavLink,
  IconWrapper,
} from "./styled";
import { useLocation } from "react-router-dom";
import { toProjects, toTasks, toGoals } from "../../core/routes";
import Menu from "./menu";
import Options from "./options";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [areSettingsOpened, setAreSettingsOpened] = useState(false);

  const toggleIsMenuOpened = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const toggleAreSettingsOpened = () => {
    setAreSettingsOpened(!areSettingsOpened);
  };

  return (
    <StyledNavigation>
      <Wrapper>
        <IconWrapper $flipped={isMenuOpened}>
          <Menu onClick={toggleIsMenuOpened} />
        </IconWrapper>
        <Logo to="/">Progressify</Logo>
        <IconWrapper $flipped={areSettingsOpened}>
          <Options onClick={toggleAreSettingsOpened} />
        </IconWrapper>
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
      {isMenuOpened || areSettingsOpened ? (
        <>
          <NavLinkWrapper></NavLinkWrapper>
        </>
      ) : (
        ""
      )}
    </StyledNavigation>
  );
};

export default Navigation;
