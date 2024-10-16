import { useState } from "react";
import HomeCardsContainer from "../components/homecard/HomeCardsContainer";

import PowerFUlContainer from "../components/power/PowerFulContainer";
import HomeSection from "../components/homepage/Hero";
import FindCareContainer from "../components/findcare/FindCareConatiner";
import HeroSlider from "../components/homepage/HeroSlider";
import HeroWrapper from "../components/homepage/HeroWrapper";
import FaqsContainer from "../components/Faqs/FaqsContainer";
import KnowledgeContainer from "../components/knowledge/KnowledgeContainer";
import PlacingHelpSection from "../components/Placeing/placeing";
import PopularContainer from "../components/popularserviceCard/PopularContainer";

function HomePage() {
  return (
    <>
      <HomeSection />
      <HeroWrapper />
      <HomeCardsContainer />
      <PopularContainer/>
      <PowerFUlContainer />
      <FindCareContainer />
      <HeroSlider />
      <FaqsContainer />

      <KnowledgeContainer />
      <PlacingHelpSection />
    </>
  );
}

export default HomePage;
