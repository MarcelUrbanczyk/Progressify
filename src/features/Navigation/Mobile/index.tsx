import { Header, StyledNavigation, Link } from "./styled";
import React from "react";
import Menu from "./menu";
import Options from "./options";

const MobileNavigation = () => (
  <StyledNavigation>
    <Link>
      <Menu />
    </Link>
    <Header>Progressify</Header>
    <Link>
      <Options />
    </Link>
  </StyledNavigation>
);

export default MobileNavigation;
