import { styled, css } from "styled-components";
import { ButtonStyle } from "../../common/styles/button";
import { Link } from "react-router-dom";

export const StyledNavigation = styled.nav`
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.nav};
  height: 100px;
`;
export const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-family: "Mitr";
  font-size: 32px;
  font-weight: 400;
  text-decoration: none;
`;

export const NavLink = styled(Link)<{ $active?: boolean }>`
  ${ButtonStyle}
  border-radius: 14px;
  background-color: white;
  text-decoration: none;
  border: 2px solid ${({ theme }) => theme.colors.dominant};
  color: ${({ theme }) => theme.colors.text};
  ${({ $active }) =>
    $active &&
    css`
      color: white;
      background-color: ${({ theme }) => theme.colors.dominant};
    `};
`;

export const Wrapper = styled.span`
  align-items: center;
  display: flex;
  gap: 100px;
  height: 100%;
  margin: auto;
  max-width: 1200px;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktopMid}) {
    max-width: 1000px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    max-width: 600px;
    justify-content: space-between;
  }
`;

export const IconWrapper = styled.span<{ $flipped?: boolean }>`
  display: none;
  max-width: 40px;
  cursor: pointer;
  transition: 0.3s;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: block;
  }
  ${({ $flipped }) =>
    $flipped &&
    css`
      transform: rotate(-90deg);
    `}
`;

export const NavLinkWrapper = styled.span`
  display: flex;
  gap: 12px;
  margin-top: 5px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;
