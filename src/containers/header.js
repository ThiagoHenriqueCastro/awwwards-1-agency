import { Header } from "../components";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Logo to="/">AGENCY.</Header.Logo>
      <Header.Nav />
    </Header>
  );
}
