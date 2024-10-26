import React from "react";
import HomeCard from "../homecard/HomeCard";
import cardsData from "../../data/CardsData";
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

const BusinessContainer = ({ title, description, Icon }) => {
  const isBusiness = true; // set this condition as needed
  const dataToDisplay = isBusiness ? BusinessStepsData : FindCard;

  return (
    <>
      {/* section 1 */}
      <section className="flex justify-center flex-col">
        <div className="flex flex-col items-center pt-[80px]">
          <h1 className="text-4xl font-semibold text-center">
            Seize the opportunity
          </h1>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-3"></div>
          <p className="pt-4 text-xl text-[#5E5E6F] text-center">
            Transform homes. Transform lives
          </p>
        </div>
        <div className="grid gap-10 sm:gap-0 sm:grid-cols-3 justify-center mt-12 justify-items-center">
          <div className="flex items-center flex-col gap-3 w-[60%]">
            <PeopleIcon />
            <h1 className="text-6xl font-semibold">77M</h1>
            <p className="text-xl text-center text-[#5E5E6F]">
              Number of seniors by 2034
            </p>
          </div>
          <div className="flex items-center flex-col gap-3 w-[60%]">
            <HouseIcon />
            <h1 className="text-6xl font-semibold">90%</h1>
            <p className="text-xl text-center text-[#5E5E6F]">
              Seniors showing desire to age in their homes
            </p>
          </div>
          <div className="flex items-center flex-col gap-3 w-[60%]">
            <MoneyHandIcon />
            <h1 className="text-6xl font-semibold">$460B</h1>
            <p className="text-xl text-center text-[#5E5E6F]">
              Estimated worth of total home care market
            </p>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="bg-[#F7F7F7]">
        <div className="sm:mx-20 py-20 mt-20">
          <div className="text-center">
            <h2 className="font-semibold text-[32px] max-sm:text-[24px]">
              Expand reach. Increase revenue
            </h2>
            <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
            <p className="font-medium text-xl text-[#5E5E6F] py-4">
              Be part of the solution millions of families are searching for
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[50px] max-sm:mt-[30px] max-sm:gap-[10px] max-sm:px-[15px]">
            {cardsData.map((card) => (
              <HomeCard
                key={card.id}
                title={card.title}
                description={card.description}
                Icon={card.Icon}
                bgColor={card.bgColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section>
        <div className="poppin">
          <div className="mx-20 max-sm:mx-6 max-sm:pt-[50px] pt-[80px]">
            <div className="text-center">
              <h2 className="font-semibold text-[32px] max-sm:text-3xl max-sm:text-[24px]">
                Drive your business forward
              </h2>
              <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-10 max-sm:gap-y-[30px] mt-[50px] max-sm:mt-[30px]">
              {BusinessData.map((card) => (
                <PowerFulCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  Icon={card.Icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section>
        <AccessContainer />
      </section>

      {/* section 5 */}
      <section>
        <div className="bg-[#F7F7F7]">
          <div className="mx-[70px] max-sm:mx-[16px] py-[80px] max-sm:py-[50px]">
            <div className="text-center">
              <h2 className="font-semibold text-[24px] md:text-[32px]">
                Simple steps. Lasting impact
              </h2>
              <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
              <p className="mt-5 text-xl font-medium max-sm:text-[16px] text-[#5E5E6F]">
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
            <div className="mt-[50px] flex justify-center">
              <button className="text-white bg-black px-[30px] py-[9px] rounded-full">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* section 6 */}
      <section>
        <BusinessResults />
      </section>

      {/* section 7 */}
      <section className="sm:px-[20px] md:px-[27px] lg:px-[70px] md:pb-[80px] max-sm:px-[16px] max-sm:pb-[50px]">
        <div className="flex flex-col md:flex-row items-center bg-[#E8FFF1] rounded-[40px] max-sm:rounded-[30px] hover:bg-gray-100 px-[20px] md:px-[40px] lg:px-[80px] py-[40px]">
          <div className="flex flex-col justify-between p-4 max-sm:p-0 leading-normal md:w-2/3">
            <div className="lg:w-[430px] max-sm:text-center">
              <h5 className="mb-[20px] max-sm:mb-[10px] text-[24px] md:text-[28px] lg:text-[32px] font-semibold lg:w-[430px]">
                Ready for your next great move?
              </h5>
              <p className="mb-[20px] max-sm:mb-[10px] font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[#5E5E6F]">
                Join our provider network to reach more clients and do more
                business. Make it count.
              </p>
              <button className="bg-[#1C1C1C] text-white px-[20px] md:px-[25px] lg:px-[30px] py-[10px] md:py-[12px] lg:py-[13px] font-medium rounded-full w-fit max-sm:mb-[40px] max-sm:w-[250px]">
                Get started
              </button>
            </div>
          </div>
          <img
            className="object-cover w-full  md:h-auto md:w-[300px] xl:w-[498px] rounded-b-lg md:rounded-none md:rounded-r-lg"
            src="/public/images/BusinessCard.png"
            alt="Business Card"
          />
        </div>
      </section>
    </>
  );
};

export default BusinessContainer;
