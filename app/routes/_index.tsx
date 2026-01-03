import type { MetaFunction } from "@remix-run/node";
import { HomeAboutSection, HomeGetInvolvedSection, HomeHero, HomeProgramSection, IntroductorySection, Testimonials } from "~/components/header";
// import { PromotionCarouselContainer } from "~/components/taabasamucarousel.client";

export const meta: MetaFunction = () => {
  return [
    { title: "Taabasamu" },
    { name: "description", content: "A non-profit organization" },
  ];
};

export default function Index() {
  return (
    <div className="routesmainlayoutcontainer" id="home">
      <HomeHero/>
      <IntroductorySection/>
      <HomeAboutSection/>
      <HomeProgramSection/>
      <HomeGetInvolvedSection/>
      <Testimonials/>
      {/* <HomeNewsEvents/> */}
    </div>
  );
}
