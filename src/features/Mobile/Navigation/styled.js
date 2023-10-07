import { styled } from "styled-components";
import { ReactComponent as MenuIcon } from "./menu.svg";
import { ReactComponent as OptionsIcon } from "./options.svg";

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-family: "Mitr";
  font-size: 32px;
  font-weight: 400;
  margin: 0;
`;

export const StyledNavigation = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.box};
  box-shadow: ${({ theme }) => theme.shadows.nav};
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const Menu = styled(MenuIcon)`
  height: auto;
  margin: 14px 10px 10px;
  width: 28px;
`;

export const Options = styled(OptionsIcon)`
  height: auto;
  margin: 14px 10px 10px;
  width: 28px;
`;

export const Link = styled.a`
  margin: 0;
  padding: 0;
`;
