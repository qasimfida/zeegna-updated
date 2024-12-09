import React, { useState } from "react";

import ExpertTipsContainer from "../components/expertTips/ExpertTips";
import StayConnectedSection from "../components/stayConnected/StayConnected";
import HomeSafetyContainer from "../components/homesafety/HomeSafetyContainer";
import CreateHomeCard from "../components/createHome/CreateHomeCard";
import AllServicesHero from "../components/allServices/AllServicesHero";
import FindCareContainer from "../components/findcare/FindCareConatiner";
import HeroSlider from "../components/homepage/HeroSlider";
import FaqsContainer from "../components/faqs/FaqsContainer";
import ExploreContainer from "../components/explore/ExploreContainer";
import AllServicesData from "../data/AllServicesData";

import person1 from "/images/person1.png";

function AllServicesCategories() {
  return (
    <>
      <AllServicesHero />

      <HomeSafetyContainer backgroundClass="bg-[#F7F7F7]" />

      <FindCareContainer
        headingText="Matching on Zeegna is simple and easy"
        fontSize="text-[27px] max-sm:text-[21px]"
      />

      <CreateHomeCard margin="md:mb-0" paddingTB="max-sm:py-0" />

      <FaqsContainer
        headingChange="How to choose the right experts for senior home needs"
        fontSize="text-[27px] max-sm:text-[21px]"
      />

      <HeroSlider
        title="Helping families create safer homes"
        img={person1}
        name={"Larry"}
        fontSize="text-[27px] max-sm:text-[21px]"
      />

      <ExpertTipsContainer
        title="Tips, trends, and resources for senior home support"
        fullWidth
        background="bg-white md:mb-0"
        data={AllServicesData}
      />

      <ExploreContainer
        title="Find top home service providers in your city"
        description=""
        fontsize="max-sm:text-[21px]"
        background="bg-[#F7F7F7]"
        marginTop="mt-0 max-sm:mt-0 py-[80px] max-sm:py-[50px]"
        padding="pb-[30px]"
        showDescription={false}
      />

      <StayConnectedSection />
    </>
  );
}

export default AllServicesCategories;
