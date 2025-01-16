<<<<<<< HEAD
import { useState } from "react";
=======
import React, { useState } from "react";

>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
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
<<<<<<< HEAD
=======
import person from "/images/person.png";
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9

function HomePage() {
  return (
    <>
      <HomeSection />
      <HeroWrapper />
      <HomeCardsContainer />
      <PopularContainer />
      <PowerFUlContainer />
      <FindCareContainer />
<<<<<<< HEAD
      <HeroSlider />
=======
      <HeroSlider img={person} name={"Sara R. Charlotte, NC"} />
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
      <FaqsContainer />

      <KnowledgeContainer />
      <PlacingHelpSection />
      <HomeCareSlider />
      <ExploreContainer />
      <StayConnectedSection />
    </>
  );
}

export default HomePage;
