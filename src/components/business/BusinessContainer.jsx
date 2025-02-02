import React from "react";
import HomeCard from "../homecard/HomeCard";
import PartnerCardData from "../../data/PartnerCardData";
import PowerFulCard from "../power/PowerFulCard";
import FindCare from "../findcare/FindCare";
import { FindCard, BusinessStepsData } from "../../data/FindCareData";
import BusinessData from "../../data/BusinessData";
import Slider from "../slider/Slider";
import BusinessResults from "../businessResults/BusinessResults";
import Banner from "../../../public/images/Banner.png";
import AccessContainer from "../acessCard/AccessContainer";
import HouseIcon from "../../assets/icons/becomePartner/HouseIcon";
import MoneyHandIcon from "../../assets/icons/becomePartner/MoneyHandIcon";
import PeopleIcon from "../../assets/icons/becomePartner/PeopleIcon";
import TrustedProviderSection from "../trustedProvider/TrustProvider";
import CitiesContainer from "../cities/CitiesContainer";
import FaqsContainer from "../faqs/FaqsContainer";
import { BusinessBannerData } from "../../data/CitiesCardsData";
import { faqsData } from "../../data/FaqsData";
import BecomePartnerFaqData from "../../data/contents/BecomePartnerFaqData";

const BusinessContainer = ({ title, description, Icon }) => {
  const isBusiness = true;
  const dataToDisplay = isBusiness ? BusinessStepsData : FindCard;

  return (
    <>
      {/* section 1 */}
      <section className="bg-[#F7F7F7] flex justify-center md:py-[80px] max-sm:py-[50px] flex-col font-poppins">
        <div className="flex flex-col items-center  ">
          <h1 className="text-[27px] font-semibold text-center max-sm:text-[21px]">
            Seize the opportunity
          </h1>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-1"></div>
          <p className="md:pt-4 pt-[20px] text-[18px] text-[#5E5E6F] font-medium text-center max-sm:text-[16px]">
            Transform homes, transform lives
          </p>
        </div>
        <div className="flex items-center  justify-center lg:gap-[152px] md:gap-[37px] md:mx-[37px] mt-[80px] max-sm:mt-[30px] justify-items-center max-sm:flex-col max-sm:mx-[64px] max-sm:gap-y-[30px]	">
          <div className="flex items-center flex-col gap-[6px] md:gap-3 md:w-[211px] ">
            <PeopleIcon />
            <h1 className="lg:text-[64px] md:text-[48px] text-[36px] font-semibold">
              77M
            </h1>
            <p className="md:text-[18px] text-[16px] font-medium text-center text-[#5E5E6F]">
              Number of seniors age 65+ by 2034
            </p>
          </div>
          <div className="flex items-center flex-col md:gap-3 gap-[6px] md:w-[211px] ">
            <HouseIcon />
            <h1 className="lg:text-[64px] md:text-[48px] text-[36px] font-semibold">
              90%
            </h1>
            <p className="md:text-[18px] text-[16px] font-medium text-center text-[#5E5E6F]">
              Seniors showing desire to age in their homes
            </p>
          </div>
          <div className="flex items-center flex-col md:gap-3 gap-[6px] md:w-[248px]">
            <MoneyHandIcon />
            <h1 className="lg:text-[64px] md:text-[48px] text-[36px] font-semibold">
              $460B
            </h1>
            <p className="md:text-[18px] text-[16px] font-medium text-center text-[#5E5E6F]">
              Estimated to be worth of total home care market
            </p>
          </div>
        </div>
      </section>
      {/* section 4 */}
      <section>
        <AccessContainer />
      </section>
      <TrustedProviderSection />

      {/* section 5 */}
      <section>
        <div className=" font-poppins">
          <div className="mx-[70px] max-sm:mx-[16px] py-[80px] max-sm:py-[50px]">
            <div className="text-center">
              <h2 className="font-semibold text-[21px] md:text-[27px]">
                Simple steps, lasting impact
              </h2>
              <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
              <p className="mt-5 text-[18px] font-medium max-sm:text-[16px] text-[#5E5E6F]">
                Take your business to new heights with ease
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 max-sm:gap-y-[30px] gap-y-10 mt-[50px] max-sm:mt-[30px]">
              {dataToDisplay.map((card) => (
                <FindCare
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  count={card.count}
                  bgColor={card.bgColor}
                />
              ))}
            </div>
            <div className="md:mt-[50px] mt-[30px] flex justify-center">
              <button className="text-white bg-black px-[30px] py-[9px] rounded-full hover:bg-white hover:text-black border-2 border-black">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <CitiesContainer data={BusinessBannerData} />
      </section>
      <FaqsContainer
        headingChange="Got questions? We've answers"
        faqsData={BecomePartnerFaqData}
      />
      {/* section 6 */}
      <section>
        <BusinessResults />
      </section>

      {/* section 7 */}
      <section className="pt-[50px] md:pt-[80px] sm:px-[20px] md:px-[27px] lg:px-[70px] font-poppins md:pb-[80px] max-sm:px-[16px] max-sm:pb-[50px]">
        <div className="flex flex-col md:flex-row items-center bg-[#E8FFF1] rounded-[40px] max-sm:rounded-[20px]  px-[15px] max-sm:py-[30px] md:px-[40px] lg:px-[80px] py-[35px]">
          <div className="flex flex-col justify-between  max-sm:p-0 leading-normal md:w-2/3">
            <div className="lg:w-[430px] max-sm:text-center">
              <h5 className="mb-[10px] max-sm:mb-[10px] text-[24px]  font-semibold lg:w-[430px]">
                Ready for your next great move?
              </h5>
              <p className="mb-[20px] max-sm:mb-[10px] font-medium text-[18px] text-[#5E5E6F]">
                Join our provider network to reach more clients and do more
                business. Make it count.
              </p>
              <button className="bg-[#1C1C1C] text-white px-[20px] md:px-[25px] lg:px-[30px] py-[10px] md:py-[12px] lg:py-[12px] font-medium rounded-full w-fit max-sm:mb-[40px] max-sm:w-[250px]  hover:bg-white hover:text-black border-2 border-black">
                Get started
              </button>
            </div>
          </div>
          <img
            className="object-cover w-full  md:h-auto md:w-[300px] lg:w-[487px] lg:h-[287px] rounded-b-lg md:rounded-none md:rounded-r-lg"
            src="images/BusinessCard.png"
            alt="Business Card"
          />
        </div>
      </section>
    </>
  );
};

export default BusinessContainer;
