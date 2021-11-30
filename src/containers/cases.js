import { Cases } from "../components";
import { casesStudies } from "../fixtures/cases";

export default function CasesContainer({ children }) {
  return (
    <Cases>
      {casesStudies.map((caseItem) => (
        <Cases.Case key={caseItem.id}>
          <Cases.CaseDetails>
            <Cases.CaseSpan>{caseItem.subtitle}</Cases.CaseSpan>
            <Cases.CaseTitle>{caseItem.Title}</Cases.CaseTitle>
          </Cases.CaseDetails>
          <Cases.CaseImage img={caseItem.img} />
        </Cases.Case>
      ))}
    </Cases>
  );
}
