import styled from "styled-components";

export const DisplayMobileNavigation = styled.span`
  display: none;
  visibility: hidden;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: block;
    visibility: visible;
  }
`;

export const DisplayDesktopNavigation = styled.span`
  display: block;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
    visibility: hidden;
  }
`;
