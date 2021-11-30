import {
  Case,
  CaseDetails,
  CaseImage,
  CasesArrow,
  CasesContainer,
  CasesNav,
  CaseSpan,
  CasesSection,
  CaseTitle,
  Row,
} from "./styles/cases";
import { ReactComponent as CasesNext } from "../../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../../assets/arrow-left.svg";

export default function Cases({ children, ...restProps }) {
  return (
    <CasesSection>
      <CasesContainer className="container-fluid">
        <CasesNav>
          <CasesArrow prev disabled>
            <CasesPrev />
          </CasesArrow>
          <CasesArrow next>
            <CasesNext />
          </CasesArrow>
        </CasesNav>
        <Row className="row">{children}</Row>
      </CasesContainer>
    </CasesSection>
  );
}

Cases.Case = function CasesCase({ children, ...restProps }) {
  return <Case {...restProps}>{children}</Case>;
};

Cases.CaseDetails = function CasesDetails({ children, ...restProps }) {
  return <CaseDetails {...restProps}>{children}</CaseDetails>;
};

Cases.CaseSpan = function CasesSpan({ children, ...restProps }) {
  return <CaseSpan {...restProps}>{children}</CaseSpan>;
};

Cases.CaseTitle = function CasesCaseTitle({ children, ...restProps }) {
  return <CaseTitle {...restProps}>{children}</CaseTitle>;
};

Cases.CaseImage = function CasesCaseImage({ img, ...restProps }) {
  return (
    <CaseImage className="case-image" {...restProps}>
      <img src={`${process.env.PUBLIC_URL}/images/${img}.png`} alt={img} />
    </CaseImage>
  );
};
