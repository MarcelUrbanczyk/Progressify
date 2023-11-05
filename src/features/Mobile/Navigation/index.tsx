import { Header, Menu, Options, StyledNavigation, Link } from "./styled";

const Navigation = () => (
  <StyledNavigation>
    <Link>
      <Menu />
    </Link>
    <Header>Projectize</Header>
    <Link>
      <Options />
    </Link>
  </StyledNavigation>
);

export default Navigation;
