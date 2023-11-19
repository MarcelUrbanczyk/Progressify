import styled from "styled-components";
import { ButtonStyles } from "../../common/button";

export const StyledNavigation = styled.nav`
  background-color: ${({ theme }) => theme.colors.background.box};
  height: 100px;
  box-shadow: ${({ theme }) => theme.shadows.nav};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const Navlink = styled.a`
  ${ButtonStyles}
`;

export const Wrapper = styled.span`
  margin: auto;
  max-width: 1000px;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ButtonWrapper = styled.span``;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-family: "Mitr";
  font-size: 32px;
  font-weight: 400;
  margin: 0;
`;
