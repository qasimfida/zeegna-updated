import React, { useState } from "react";

import HomeCardsContainer from "../components/homecard/HomeCardsContainer";

import PowerFUlContainer from "../components/power/PowerFulContainer";
import HomeSection from "../components/homepage/Hero";
import FindCareContainer from "../components/findcare/FindCareConatiner";
import HeroSlider from "../components/homepage/HeroSlider";
import HeroWrapper from "../components/homepage/HeroWrapper";
import FaqsContainer from "../components/faqs/FaqsContainer";
import KnowledgeContainer from "../components/knowledge/KnowledgeContainer";
import PlacingHelpSection from "../components/placeing/placeing";
import PopularContainer from "../components/popularserviceCard/PopularContainer";
import ExploreContainer from "../components/explore/ExploreContainer";
import HomeCareSlider from "../components/homeCareSlider/HomeCareSlider";
import StayConnectedSection from "../components/stayConnected/StayConnected";
import person from "/images/person.png";

function HomePage() {
  return (
    <>
      <HomeSection />
      <HeroWrapper />
      <HomeCardsContainer />
      <PopularContainer />
      <PowerFUlContainer />
      <FindCareContainer />
      <HeroSlider img={person} name={"Sara R. Charlotte, NC"} />
      <FaqsContainer />
      <PlacingHelpSection />
      <KnowledgeContainer
        titleText={"Expert tips and resources for safe and independent living"}
      />
      <HomeCareSlider />
      <ExploreContainer />
      <StayConnectedSection />
    </>
  );
}

export default HomePage;
