import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { breakpoints, colors } from "../../../constants/theme";

export const CasesSection = styled.div`
  height: 50vh;
  height: calc(var(--vh, 1vh) * 50);
`;

export const CasesContainer = styled.div``;

export const CasesNav = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 6;
  padding: 32px;
  box-sizing: border-box;
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const CasesArrow = styled.div`
  background: rgba(0, 0, 0, 0.4);
  height: 72px;
  width: 72px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  svg {
    color: ${colors.whiteColor};
    height: 28px;
    width: 28px;
  }
`;

export const Row = styled.div`
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const Case = styled.div`
  position: relative;
  background: ${colors.blackColor};
  cursor: pointer;
  &:hover {
    .case-image {
      opacity: 0.4;
    }
  }
`;

export const CaseDetails = styled.div`
  width: 33.333vw;
  height: 50vh;
  height: calc(var(--vh, 1vh) * 50);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
  box-sizing: border-box;
  position: relative;
  @media (max-width: ${breakpoints.tablet}) {
    width: 100vw;
  }
  @media (max-width: ${breakpoints.phone}) {
    padding: 16px;
  }
`;

export const CaseSpan = styled.span`
  margin-top: 156px;
  font-size: 1.6rem;
  opacity: 0.8;
  color: ${colors.whiteColor};
  font-weight: 600;
  @media (max-width: ${breakpoints.desktop}) and (min-width: ${breakpoints.tablet}) {
    font-size: 1.4rem;
  }
  @media (max-width: ${breakpoints.phone}) {
    font-size: 1.2rem;
    line-height: 2.2rem;
  }
`;

export const CaseTitle = styled.h2`
  font-size: 2.4rem;
  line-height: 3.4rem;
  width: 85%;
  margin-top: 16px;
  color: ${colors.whiteColor};
  @media (max-width: ${breakpoints.desktop}) and (min-width: ${breakpoints.tablet}) {
    font-size: 2rem;
    line-height: 2.2rem;
  }
  @media (max-width: ${breakpoints.phone}) {
    font-size: 1.7rem;
    line-height: 2.2rem;
    margin-top: 8px;
  }
`;

export const CaseImage = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  opacity: 0.65;
  transition: 0.4s, cubic-cubic-bezier(0.6, -0.85, 0.1, 0.99);

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
