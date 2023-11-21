import { styled } from "styled-components";

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
  display: none;
  visibility: hidden;
  justify-content: space-between;
  padding: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: flex;
  }
`;

export const Link = styled.a`
  margin: 14px 10px 10px;
  padding: 0;
`;
