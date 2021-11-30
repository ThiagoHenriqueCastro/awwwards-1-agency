import { useEffect } from "react";
import { BannerContainer, HeaderContainer } from "../containers";

export default function Home() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  return (
    <>
      <HeaderContainer />
      <BannerContainer />
    </>
  );
}
