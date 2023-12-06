import styled from "styled-components";

export const DisplayMobileNavigation = styled.span`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: block;
  }
`;

export const DisplayDesktopNavigation = styled.span`
  display: block;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;
