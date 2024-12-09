import React, { useState } from "react";

import NewHomePage from "../components/newHomePage/NewHomePage";
import NewHomeCardsContainer from "../components/newHomeCard/NewHomeCardsContainer";
import NewPopularContainer from "../components/newHomePopularService/NewPopularContainer";
import HomeHeroComp from "../components/homeHeroComp/HomeHeroComp";

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
// import person1 from "/images/person1.png";

function HomePageNew() {
  return (
    <>
      <NewHomePage />
      <HomeHeroComp />
      <NewHomeCardsContainer textSize="md:text-[27px] max-sm:text-[21px]" />

      <NewPopularContainer
        fontSize="text-[27px] max-sm:text-[21px]"
        marginBottom="mb-[50px]"
      />
      <PowerFUlContainer textSize="max-sm:text-[21px] text-[27px]" />
      <FindCareContainer fontSize="text-[27px] max-sm:text-[21px]" />
      <HeroSlider
        // img={person1}
        name={"Larry"}
        fontSize="text-[27px] max-sm:text-[21px]"
        textSize="text-[18px] max-sm:text-[18px]"
      />
      <FaqsContainer fontSize="text-[27px] max-sm:text-[21px]" />

      <KnowledgeContainer textSize="text-[27px] max-sm:text-[21px]" />
      <PlacingHelpSection textSize=" lg:text-[27px] max-sm:text-[21px]" />
      <HomeCareSlider />
      <ExploreContainer />
      <StayConnectedSection />
    </>
  );
}

export default HomePageNew;
