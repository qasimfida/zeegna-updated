import React, { useState } from "react";

import KnowledgeContainer from "../components/knowledge/KnowledgeContainer";
import ExpertTipsContainer from "../components/expertTips/ExpertTips";
import StayConnectedSection from "../components/stayConnected/StayConnected";
import NewHomeCardsContainer from "../components/newHomeCard/NewHomeCardsContainer";
import CitiesContainer from "../components/cities/CitiesContainer";
import HomeSafetyContainer from "../components/homesafety/HomeSafetyContainer";
import CreateHomeCard from "../components/createHome/CreateHomeCard";
import CitiesHeroSection from "../components/cities/CitiesHeroSection";

function CitiesPage() {
  return (
    <>
      <CitiesHeroSection />
      <NewHomeCardsContainer />
      <CreateHomeCard />
      <HomeSafetyContainer />
      <CitiesContainer />
      <ExpertTipsContainer />
      <StayConnectedSection />
    </>
  );
}

export default CitiesPage;
