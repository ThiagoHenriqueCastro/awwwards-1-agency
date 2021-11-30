import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints, colors } from "../../../constants/theme";

export const BannerSection = styled.div`
  height: 50vh; // fallback
  height: calc(var(--vh, 1vh) * 50);
  background-color: ${colors.whiteColor};
`;

export const Container = styled.div``;

export const Row = styled.div`
  flex-direction: column;
  justify-content: center;
`;

export const BannerTitle = styled.h2`
  font-size: 3rem;
  line-height: 4.2rem;
  font-weight: 700;
  z-index: 10;
  color: ${colors.whiteColor};
  mix-blend-mode: difference;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.4rem;
    line-height: 3rem;
  }
  @media (max-width: ${breakpoints.phone}) {
    margin-top: 72px;
    font-size: 1.7rem;
    line-height: 2.2rem;
  }
`;

export const Line = styled.div`
  margin-bottom: 8px;
  height: 56px;
  position: relative;
  overflow: hidden;
  @media (max-width: ${breakpoints.tablet}) {
    height: 48px;
  }
  @media (max-width: ${breakpoints.phone}) {
    height: 32px;
  }
`;

export const LineSpan = styled.span`
  position: absolute;
`;

export const ButtonRow = styled.div`
  width: 256px;
  position: relative;
  z-index: 2;
`;

export const ButtonRowLink = styled(Link)`
  display: inline-block;
  font-size: 1.6rem;
  color: ${colors.blackColor};
  text-decoration: none;
  display: flex;
  align-items: center;
  font-weight: 600;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.3rem;
  }
  @media (max-width: ${breakpoints.phone}) {
    font-size: 1.1rem;
  }

  svg {
    margin-left: 16px;
    border: 2px solid ${colors.blackColor};
    padding: 12px;
    height: 24px;
    width: 24px;
    border-radius: 100px;
    transition: 0.4s ease-in-out;
    @media (max-width: ${breakpoints.tablet}) {
      padding: 6px;
      width: 20px;
      height: 20px;
    }
    @media (max-width: ${breakpoints.phone}) {
      padding: 4px;
      width: 16px;
      height: 16px;
    }
  }

  &:hover {
    svg {
      background: ${colors.blackColor};
      color: ${colors.whiteColor};
    }
  }
`;
