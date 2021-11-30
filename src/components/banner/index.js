import {
  BannerSection,
  BannerTitle,
  ButtonRow,
  ButtonRowLink,
  Container,
  Line,
  LineSpan,
  Row,
} from "./styles/banner";
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";

export default function Banner({ children, ...restProps }) {
  return (
    <BannerSection>
      <Container className="container">
        <Row className="row">{children}</Row>
      </Container>
    </BannerSection>
  );
}

Banner.Title = function BannerLineTitle({ children, ...restProps }) {
  return <BannerTitle>{children}</BannerTitle>;
};

Banner.Line = function BannerLine({ children, ...restProps }) {
  return (
    <Line>
      <LineSpan>{children}</LineSpan>
    </Line>
  );
};

Banner.ButtonRow = function BannerButtonRow({ children, ...restProps }) {
  return (
    <ButtonRow>
      <ButtonRowLink {...restProps}>
        {children} <RightArrow />
      </ButtonRowLink>
    </ButtonRow>
  );
};
