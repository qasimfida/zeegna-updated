import React, { useState } from "react";

import NewHomePage from "../components/newHomePage/NewHomePage";
import NewHomeCardsContainer from "../components/newHomeCard/NewHomeCardsContainer";
import NewPopularContainer from "../components/newHomePopularService/NewPopularContainer";

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
import Larry from "../../public/images/larry.png";
import Angela from "../../public/images/angelina.png";
import Mark from "../../public/images/mark.png";
import HomeBannerNew from "../components/homeBannerNew/HomeBannerNew";
import { faqsData } from "../data/FaqsData";

function HomePageNew() {
  const content = [
    {
      id: 1,
      testimonial: `My son told me about Zeegna when I mentioned having trouble with my old bathtub. Zeegna’s home quiz made it easy to figure out what I needed, and they connected me with a great local contractor who put in a walk-in shower that’s just right for me.`,
      name: "Larry",
      image: Larry,
    },
    {
      id: 2,
      testimonial: `My dad was having trouble using his old kitchen, and we knew it needed an update. Zeegna connected us with a great contractor who created a safer, more functional space. Now, he cooks comfortably, and I feel so much better knowing he’s safe!`,
      name: "Angela",
      image: Angela,
    },
    {
      id: 3,
      testimonial: `I wanted my mom to be safe and independent at home. Zeegna connected me with a contractor who set up a great monitoring system, and now I can check in anytime. It’s been such a relief for both of us.`,
      name: "Mark",
      image: Mark,
    },
  ];

  return (
    <>
      <NewHomePage />
      <section className="bg-[#F7F7F7] md:pb-[80px] pb-[50px]">
        <NewHomeCardsContainer
          textSize="md:text-[27px] max-sm:text-[21px]"
          paddingBottom="md:pb-[20px]"
          marginBtm="max-sm:mb-[10px] md:pt-[80px]"
        />
        <HomeBannerNew />
      </section>

      <NewPopularContainer
        fontSize="text-[27px] max-sm:text-[21px] "
        marginBottom="md:mb-[0px]"
      />
      <PowerFUlContainer textSize="max-sm:text-[21px] text-[27px]" />

      <FindCareContainer
        headingText="Finding care just got simplified"
        fontSize="text-[27px] max-sm:text-[22px]"
        description=""
      />
      <HeroSlider
        name={"Larry"}
        fontSize="text-[27px] max-sm:text-[22px]"
        textSize="text-[18px] max-sm:text-[18px]"
        bg="bg-[#F7F7F7]"
        img={false}
        top="top-[93%]"
        PaddingBottom="max-sm:pb-[35px]"
        MarginTop="mt-[55px] max-sm:!mt-[30px]"
        content={content}
      />
      <FaqsContainer
        fontSize="text-[27px] max-sm:text-[21px]"
        faqsData={faqsData}
      />

      <KnowledgeContainer
        textSize="text-[27px] max-sm:text-[21px]"
        titleText={"Your guide to a safer living at home"}
      />

      <section className="md:my-[80px]">
        <ExploreContainer marginTop="max-sm:mt-0" />
      </section>

      <PlacingHelpSection textSize="lg:text-[27px] max-sm:text-[21px]" />
    </>
  );
}

export default HomePageNew;
