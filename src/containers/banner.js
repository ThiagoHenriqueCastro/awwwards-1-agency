import { Banner } from "../components";

export default function BannerContainer({ children }) {
  return (
    <Banner>
      <Banner.Title>
        <Banner.Line>Creating unique brands is</Banner.Line>
        <Banner.Line>what we do.</Banner.Line>
      </Banner.Title>
      <Banner.ButtonRow to="/">More about us</Banner.ButtonRow>
    </Banner>
  );
}
