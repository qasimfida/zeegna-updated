import React from "react";
import CityScape from "../../public/images/cityscape.png";
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
import BathroomRemodelContainer from "../components/bathroomRemodel/BathroomRemodelContainer";
import { useParams } from "react-router-dom";
import HomeSafetyData from "../data/HomeSafetyData";
import person1 from "/images/person1.png";
import NewPopularData from "../data/NewHomePopularData";
import Benefits from "../components/bathroomRemodel/Benefits";
import Features from "../components/bathroomRemodel/Features";
import ProfessionalServiceContent from "../data/contents/ProfessionalServiceContent";
import { useNavigate } from "react-router-dom";
import HomeCardNew from "../components/newHomeCard/HomeCardsNew";
import NewPopularContainer from "../components/newHomePopularService/NewPopularContainer";
import HomeHeroComp from "../components/homeHeroComp/HomeHeroComp";
import BannerTwo from "../components/banner2/BannerTwo";
import pro_services_icon from "../../public/images/pro_services_icon.png";
import ProfessionalPopularData from "../data/ProfessionalPopularData";
import ProServiceBlogData from "../data/ProServiceBlogData";

function ProfessionalService() {
  return (
    <div>
      <div className="max-w-[849px] mx-auto text-center max-sm:mx-[16px] max-sm:text-left mt-[90px] mb-[60px] md:mt-[100px] md:mb-[175px]    md:px-0 lg:px-[121.5px] poppin">
        <div className="flex flex-col items-center justify-center md:gap-[15px] gap-[10px]">
          <img
            src={pro_services_icon}
            alt="cityscape"
            className="w-[27px] h-[27px]"
          />

          <h2 className="font-semibold text-[27px] max-sm:text-[21px] text-center">
            {ProfessionalServiceContent.header.title}
          </h2>
          <p className="text-[#5E6E6F] text-[18px] font-medium  mb-[25px] md:px-[40px] text-center">
            {ProfessionalServiceContent.header.description}
          </p>
        </div>

        <button className="bg-[#1C1C1C] text-white py-[13px] border-2 px-9 rounded-full font-medium hover:text-black hover:bg-white hover:border-black md:mt-[5px] md:mb-[5px] mb-[10px] md:ml-[5px] md:mr-[5px] max-sm:w-full">
          {ProfessionalServiceContent.header.button1}
        </button>

        <button className="bg-white text-black py-[13px] px-9 rounded-full font-medium border-2 border-black hover:text-white hover:bg-[#1C1C1C] md:mt-[5px] md:mb-[5px] md:ml-[5px] md:mr-[5px] max-sm:w-full">
          {ProfessionalServiceContent.header.button2}
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-col max-sm:flex-col-reverse	 items-center justify-center md:gap-[80px] md:flex-row w-full bg-[#F7F7F7] py-[80px] max-sm:py-[50px] max-sm:px-[15px]">
        <div className="md:w-[657px]">
          <h4 className="mb-[20px] max-sm:my-[15px] md:w-[580px] max-sm:text-[18px] text-[24px] font-semibold">
            {ProfessionalServiceContent.section1.title}
          </h4>
          <p className="text-[#5E5E6F] text-[16px] font-medium">
            {ProfessionalServiceContent.section1.description}
          </p>
        </div>

        {/* Image Section */}
        <div className="shrink-0 md:w-[560px] overflow-hidden">
          <img
            src={ProfessionalServiceContent.section1.image}
            alt="Home Modification Experts"
            className="h-full w-full rounded-[10px] object-cover"
          />
        </div>
      </div>

      <section>
        <div className="md:pt-[80px] max-sm:mb-[50px]">
          <div className="md:px-2 md:mx-[70px] pb-20 poppin max-sm:pb-0">
            <div className="text-center max-sm:px-[16px]">
              <h2
                className={`font-semibold md:text-[27px] text-[21px] max-sm:pt-[50px] max-sm:px-[30px]  leading-[30px] `}
              >
                Navigate important decisions with ease
              </h2>
              <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
              <p className="font-medium text-[16px] md:text-[18px] text-[#575757] pt-4 max-sm:pt-[20px]">
                Access professional support for legal, financial, and planning
                needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[50px] max-sm:mt-[30px] max-sm:gap-[10px] max-sm:px-[15px]">
              {ProfessionalServiceContent.section7.map((card) => (
                <HomeCardNew
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  Icon={card.Icon}
                  bgColor={card.bgColor}
                  onClick={() => Navigate(card.path)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F7]  ">
        <Benefits
          content={ProfessionalServiceContent.section2}
          height="h-[320px]"
          BtnPadding="max-sm:px-0"
        />
      </section>

      <section className="#FFFFFF">
        <Features content={ProfessionalServiceContent.section3} />
      </section>

      <section className="bg-[#F7F7F7]">
        <FindCareContainer
          headingText="Finding the right help with Zeegna is simple"
          description=""
        />
      </section>

      <NewPopularContainer
        fontSize="text-[27px] max-sm:text-[21px]"
        marginBottom="md:my-[80px]"
        paddin="py-[30px] max-sm:py-[50px]"
        title="Top professional services near me"
        popularContent={ProfessionalPopularData}
      />

      <HeroSlider
        title="Trusted by families like yours"
        top="top-[92%]"
        bg="bg-[#9AEBBF]"
        MarginTop="mt-[55px] max-sm:!mt-[30px]"
        PaddingBottom="max-sm:pb-[20px]"
        fontSize="text-[27px] max-sm:text-[21px]"
        content={ProfessionalServiceContent.section6}
      />

      <FaqsContainer
        headingChange={`${ProfessionalServiceContent.section5.title}`}
        fontSize="text-[27px] max-sm:text-[21px]"
        faqContent={ProfessionalServiceContent.section5.faqs}
      />

      <ExpertTipsContainer
        title="Expert tips and resources for safe and independent living"
        fullWidth
        background="bg-[#F7F7F7] md:mb-0"
        popularContent={ProServiceBlogData}
      />

      <BannerTwo content={ProfessionalServiceContent.section4} />
    </div>
  );
}

export default ProfessionalService;
