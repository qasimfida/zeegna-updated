import React, { useState } from "react";
import Banner from "../../../public/images/bannerHomeCare.png";
import HomeCareSlides from "./HomeCareSlides";

const HomeCareSlider = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      title: "How to find the right home care near me?",
      description: "Take our care quiz to find help with daily activities like bathing, dressing, meal prep, and companionship. Connect with trusted home care agencies to help you and your loved ones age at home safely and comfortably.",
    },
    {
      title: "Home Care Basics",
      description: "Understand the fundamental aspects of home care and how it can benefit you and your loved ones.",
    },
    {
      title: "Personalized Care Options",
      description: "Explore customized care plans tailored to meet individual needs and preferences.",
    },
    {
      title: "Finding Qualified Caregivers",
      description: "Learn how to identify and hire qualified caregivers who can provide the best support.",
    },
    {
      title: "Home Safety Solutions",
      description: "Discover strategies to make your home safer for elderly individuals and those with disabilities.",
    },
    {
      title: "Transportation Services",
      description: "Find reliable transportation options for medical appointments and daily activities.",
    },
    {
      title: "Professional Services Overview",
      description: "Get an overview of various professional services available to support home care needs.",
    },
    {
      title: "Legal Considerations in Home Care",
      description: "Understand the legal aspects involved in home care, including contracts and caregiver rights.",
    },
    {
      title: "Financial Planning for Home Care",
      description: "Explore financial options and resources to help manage the costs of home care services.",
    },
    
  ];
  return (
    <>
      <section className="max-sm:gap-0 gap-[106px] max-sm:pt-[58px] pt-[80px] max-sm:pl-[16px] max-sm:pr-[14px] pl-[90px] pr-[71px] pb-[64px] h-[494px] flex bg-[#F7F7F7]">
        <div className="w-[364px] max-sm: hidden">
          <img src={Banner} alt="img" />
        </div>
        <div className=" w-[804px] max-sm:w-full max-md:w-full">
          <div className="pb-[30px]">
            <HomeCareSlides activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <h2 className="pb-[10px] max-sm:text-[19px]  text-[24px] font-semibold">
          {tabs[activeTab].title}
          </h2>
          <p className="text-[20px] max-sm:text-[16px] font-medium text-[#5E5E6F] ">
          {tabs[activeTab].description}
          </p>
          <div className="flex max-sm:flex-col gap-3 pt-[30px] max-sm:pb-[50px]">
            <button className="border border-black text-[16px] font-medium px-[26px] py-[13px] rounded-full hover:bg-black hover:text-white">
              Take our care quiz
            </button>
            <button className="bg-black text-white px-[26px] py-[13px] text-[16px] font-medium rounded-full hover:text-black hover:bg-transparent hover:border hover:border-black">
              Find home care near me
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCareSlider;
