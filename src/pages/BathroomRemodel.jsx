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
import BathroomRemodelContainer from "../components/bathroomRemodel.jsx/BathroomRemodelContainer";

import person1 from "/images/person1.png";

function BathroomRemodel() {
  return (
    <>
      <BathroomRemodelContainer />

      <FindCareContainer
        headingText="Matching on Zeegna is simple and easy"
        fontSize="text-[27px] max-sm:text-[21px]"
        backGround="bg-[#F7F7F7]"
      />

      <FaqsContainer
        headingChange="Bathroom remodel FAQs"
        fontSize="text-[27px] max-sm:text-[21px]"
      />

      <HeroSlider
        title="Trusted by families like yours"
        img={person1}
        name={"Larry"}
        fontSize="text-[27px] max-sm:text-[21px]"
      />

      <ExpertTipsContainer
        title="The homeowners guide to appliance repair"
        fullWidth
        background="bg-white mb-0"
        data={AllServicesData}
      />

      <ExploreContainer
        title="Explore help at home by city"
        description="From home repairs to cleaning to specialized care and more, find trusted professionals to keep your home running smoothly in your city."
        fontsize="max-sm:text-[21px] "
        background="bg-[#F7F7F7] max-sm:mb-0"
        marginTop="mt-0 max-sm:mt-0 py-[80px] max-sm:py-[50px] mb-0 "
        padding="pb-[2px]"
        showDescription={true}
      />

      <HomeSafetyContainer />

      <StayConnectedSection />
    </>
  );
}

export default BathroomRemodel;
