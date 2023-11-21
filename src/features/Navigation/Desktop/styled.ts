import styled from "styled-components";
import { ButtonStyles } from "../../../common/button";

export const StyledNavigation = styled.nav`
  background-color: ${({ theme }) => theme.colors.background.box};
  height: 100px;
  box-shadow: ${({ theme }) => theme.shadows.nav};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
    visibility: hidden;
  }
`;

export const NavLink = styled.a`
  ${ButtonStyles}
  border-radius: 16px;
`;

export const Wrapper = styled.span`
  margin: auto;
  max-width: 1000px;
  display: flex;
  gap: 100px;
  align-items: center;
  height: 100%;
  @media (max-width: 1040px) {
    max-width: 95vw;
  }
`;

export const NavLinkWrapper = styled.span`
  margin-top: 5px;
  display: flex;
  gap: 12px;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-family: "Mitr";
  font-size: 32px;
  font-weight: 400;
  margin: 0;
`;