import React, { useState } from "react";

import KnowledgeContainer from "../components/knowledge/KnowledgeContainer";
import ExpertTipsContainer from "../components/expertTips/ExpertTips";
import StayConnectedSection from "../components/stayConnected/StayConnected";
import NewHomeCardsContainer from "../components/newHomeCard/NewHomeCardsContainer";
import CitiesContainer from "../components/cities/CitiesContainer";
import HomeSafetyContainer from "../components/homesafety/HomeSafetyContainer";
import CreateHomeCard from "../components/createHome/CreateHomeCard";
import CitiesHeroSection from "../components/cities/CitiesHeroSection";
import { useParams } from "react-router-dom";
import ExploreData from "../data/ExploreData";
import HomeCareSlider from "../components/homeCareSlider/HomeCareSlider";
import HeroSlider from "../components/homepage/HeroSlider";
import person1 from "/images/person1.png";

function CitiesPage() {
  const params = useParams();

  let filteredData = ExploreData.filter(
    (data) => data.param === params.cityname
  );

  const content = [
    {
      id: 1,
      testimonial: `Thanks to Zeegna, I found a local expert who installed grab bars and a walk-in shower in my bathroom. The process was smooth, and I feel much safer now. Zeegna made it so easy to connect with someone who truly understands my needs!`,
      name: "Larry",
      image: person1,
    },
    {
      id: 2,
      testimonial: `When my father struggled with stairs, Zeegna connected me with a local vendor who installed a ramp that made his home accessible again. It’s been a game-changer for his independence, and I’m so grateful!`,
      name: "Sara, W",
      image: person1,
    },
    {
      id: 3,
      testimonial: `When my mom needed help making her home safer, we didn’t know where to start. Zeegna’s free questionnaire guided us through identifying her needs and creating a plan of care. It connected us with the perfect provider, and now her home is safe and comfortable!`,
      name: "Linda, S",
      image: person1,
    },
  ];

  return (
    <>
      <CitiesHeroSection
        cityname={filteredData[0].title}
        image={filteredData[0].image}
      />

      <NewHomeCardsContainer
        textSize="md:text-[27px] max-sm:text-[21px]"
        backGroundColor="bg-[#FFFFFF]"
        title="A safer, smarter, and more comfortable home starts here"
        subtitle="We bring together vetted home support services to provide the support you and your family need"
      />

      <CitiesContainer />
      <HeroSlider
        img={person1}
        name={"Larry"}
        bg="bg-[#D2D4FF]"
        content={content}
      />

      <HomeSafetyContainer />
      <KnowledgeContainer
        titleText={"Expert tips and resources for safe and independent living"}
      />
      <section className="my-[80px]">
        <CreateHomeCard />
      </section>
    </>
  );
}

export default CitiesPage;
