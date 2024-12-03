import React, { useState } from "react";

import NewHomePage from "../components/newHomePage/NewHomePage";
import NewHomeCardsContainer from "../components/newHomeCard/NewHomeCardsContainer";
import NewPopularContainer from "../components/newHomePopularService/NewPopularContainer";
// import HomeHeroComp from "../components/homeHeroComp/HomeHeroComp";

import PowerFUlContainer from "../components/power/PowerFulContainer";
import FindCareContainer from "../components/findcare/FindCareConatiner";
import HeroSlider from "../components/homepage/HeroSlider";
import FaqsContainer from "../components/faqs/FaqsContainer";
import KnowledgeContainer from "../components/knowledge/KnowledgeContainer";
import PlacingHelpSection from "../components/placeing/placeing";
import PopularContainer from "../components/popularserviceCard/PopularContainer";
import ExploreContainer from "../components/explore/ExploreContainer";
import HomeCareSlider from "../components/homeCareSlider/HomeCareSlider";
import StayConnectedSection from "../components/stayConnected/StayConnected";

function HomePageNew() {
  return (
    <>
      <NewHomePage />
      <HomeHeroComp />
      <NewHomeCardsContainer />

      <NewPopularContainer />
      <PowerFUlContainer />
      <FindCareContainer />
      <HeroSlider />
      <FaqsContainer />

      <KnowledgeContainer />
      <PlacingHelpSection />
      <HomeCareSlider />
      <ExploreContainer />
      <StayConnectedSection />
    </>
  );
}

export default HomePageNew;
