import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints, colors } from "../../../constants/theme";

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 128px;
  z-index: 4;
  @media (max-width: ${breakpoints.phone}) {
    height: 96px;
  }
`;

export const Container = styled.div``;

export const Row = styled.div``;

export const Logo = styled.div``;

export const LinkTo = styled(Link)`
  font-size: 1.2rem;
  letter-spacing: 0.5rem;
  color: ${colors.blackColor};
  text-decoration: none;
  font-weight: 700;
`;

export const Nav = styled.div`
  width: 25px;
  @media (max-width: ${breakpoints.phone}) {
    height: 20px;
  }
`;

export const HamburguerMenu = styled.span`
  margin-bottom: 0.3rem;
  background: ${colors.blackColor};
  height: 2px;
  width: 100%;
  display: block;
`;
