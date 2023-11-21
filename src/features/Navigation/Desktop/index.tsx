import React from "react";
import {
  StyledNavigation,
  Header,
  Wrapper,
  NavLinkWrapper,
  NavLink,
} from "./styled";

const DesktopNavigation = () => (
  <StyledNavigation>
    <Wrapper>
      <Header>Projectize</Header>
      <NavLinkWrapper>
        <NavLink>Projects</NavLink>
        <NavLink>Daily Tasks</NavLink>
        <NavLink>Goals</NavLink>
        <NavLink>Settings</NavLink>
      </NavLinkWrapper>
    </Wrapper>
  </StyledNavigation>
);

export default DesktopNavigation;
