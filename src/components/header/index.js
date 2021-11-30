import {
  HeaderContainer,
  Container,
  Row,
  Logo,
  LinkTo,
  Nav,
  HamburguerMenu,
} from "./styles/header";

export default function Header({ children, ...restProps }) {
  return (
    <HeaderContainer>
      <Container className="container">
        <Row className="row v-center space-between">{children}</Row>
      </Container>
    </HeaderContainer>
  );
}

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return (
    <Logo>
      <LinkTo {...restProps}>{children}</LinkTo>
    </Logo>
  );
};

Header.Nav = function HeaderNav({ children, ...restProps }) {
  return (
    <Nav>
      <HamburguerMenu />
      <HamburguerMenu />
    </Nav>
  );
};
