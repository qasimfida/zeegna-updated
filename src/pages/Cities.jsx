import React, { useState } from "react";

import KnowledgeContainer from "../components/knowledge/KnowledgeContainer";
import ExpertTipsContainer from "../components/expertTips/ExpertTips";
import StayConnectedSection from "../components/stayConnected/StayConnected";
import NewHomeCardsContainer from "../components/newHomeCard/NewHomeCardsContainer";
import CitiesContainer from "../components/cities/CitiesContainer";
<<<<<<< HEAD
// import HomeSafetyContainer from "../components/homesafety/HomeSafetyContainer";
=======
import HomeSafetyContainer from "../components/homesafety/HomeSafetyContainer";
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
import CreateHomeCard from "../components/createHome/CreateHomeCard";
import CitiesHeroSection from "../components/cities/CitiesHeroSection";

function CitiesPage() {
  return (
    <>
      <CitiesHeroSection />
      <NewHomeCardsContainer />
      <CreateHomeCard />
<<<<<<< HEAD
      {/* <HomeSafetyContainer /> */}
=======
      <HomeSafetyContainer />
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
      <CitiesContainer />
      <ExpertTipsContainer />
      <StayConnectedSection />
    </>
  );
}

export default CitiesPage;
