import React, { useState } from "react";
import Banner from "../../../public/images/bannerHomeCare.png";
import HomeCareSlides from "./HomeCareSlides";
import { useNavigate } from "react-router-dom";

const HomeCareSlider = () => {

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      title: "How to prevent bathroom falls at home for older adults?",
      description:
        "Take our home evaluation quiz to discover what older adults need for a safer bathroom—whether it’s grab bar installations, walk-in showers, non-slip flooring, or other essential enhancements. Get personalized recommendations and connect with trusted professionals to prevent falls and support independence for older adults.",
      buttons: [
        "Take our home evaluation quiz",
        "Find bathroom remodel solutions near me",
      ],
    },
    {
      title: "How to make your kitchen safer and senior-friendly?",
      description:
        "Take our home evaluation quiz to explore solutions for stair safety and accessibility for older adults—whether it’s installing stair lifts, adding handrails, improving lighting, or creating non-slip surfaces. Receive personalized recommendations and connect with trusted professionals to modify your stairs for enhanced safety, comfort, and independence for older adults.",
      buttons: [
        "Take our home evaluation quiz",
        "Find kitchen remodel solutions near me",
      ],
    },
    {
      title: "How to prevent falling on stairs for seniors aging at home?",
      description:
        "Take our home evaluation quiz to explore solutions for stair safety and accessibility—whether it’s installing stair lifts, adding handrails, improving lighting, or creating non-slip surfaces. Receive personalized recommendations and connect with trusted professionals to modify your stairs for enhanced safety, comfort, and independence.",
      buttons: [
        "Take our home evaluation quiz",
        "Find stair modification solutions near me",
      ],
    },

    {
      title: "How to make your entryway safer and accessible for seniors?",
      description:
        "Take our home evaluation quiz to discover accessibility improvements for your entryway designed for senior people—whether it’s installing wheelchair ramps, widening doorways, adding handrails, or upgrading lighting. Receive personalized recommendations and connect with trusted professionals to modify your entryway for a safer and more accessible home for seniors.",
      buttons: [
        "Take our home evaluation quiz",
        "Find entryway adjustment solutions near me",
      ],
    },

    {
      title:
        "How to prevent falls for seniors with the best flooring solutions?",
      description:
        "Take our home evaluation quiz to explore the best flooring options for safety and comfort tailored to senior people—whether it’s installing non-slip surfaces, replacing loose rugs, creating smooth transitions between rooms, or upgrading to durable, senior-friendly materials. Get personalized recommendations and connect with trusted professionals to make your home safer and more fall-resistant for seniors.",
      buttons: [
        "Take our home evaluation quiz",
        "Find flooring solutions near me",
      ],
    },

    {
      title:
        "How to improve home safety for seniors with smart lighting and electrical upgrades?",
      description:
        "Take our home evaluation quiz to discover lighting and electrical solutions designed for the safety and convenience of seniors—whether it’s motion-sensor lights, outlet and switch installation, or a smart lighting system. Get tailored recommendations and connect with trusted professionals to create a safer, more functional living space that meets the unique needs of older adults.",
      buttons: [
        "Take our home evaluation quiz",
        "Find lighting and electrical solutions near me",
      ],
    },
    {
      title:
        "How to improve home safety for older adults with expert installations and mounting?",
      description:
        "Take our home evaluation quiz to discover installation and mounting solutions tailored to the needs of older adults—whether it’s securely mounting grab bars, installing safety railings, or setting up wall-mounted shelves and appliances. Get personalized recommendations and connect with trusted professionals to enhance safety, functionality, and organization in your home for older adults.",
      buttons: ["Take our home evaluation quiz", "Find handyman near me"],
    },
    {
      title: "How to enhance home safety for seniors with smart automation?",
      description:
        "Take our home evaluation quiz to explore safety and automation solutions tailored for seniors—whether it’s smart locks, motion-sensor lights, security cameras, or automated systems for lighting and temperature control. Get personalized recommendations and connect with trusted professionals to create a safer, smarter, and more senior-friendly living space.",
      buttons: [
        "Take our home evaluation quiz",
        "Find home safety and automation solutions near me",
      ],
    },
  ];

  return (
    <>
      <section className=" gap-0 lg:gap-[106px] max-sm:pt-[58px] pt-[60px] lg:pt-[80px] max-sm:pl-[16px] max-sm:pr-[14px] px-[27px] lg:pl-[90px] lg:pr-[71px] pb-[50px] lg:h-[494px] flex bg-[#F7F7F7]">
        <div className="w-[364px] hidden lg:block">
          <img src={Banner} alt="img" />
        </div>
        <div className=" lg:w-[804px] w-full">
          <div className="pb-[30px]">
            <HomeCareSlides activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <h2 className="pb-[10px] max-sm:text-[17px]  text-[18px] font-semibold">
            {tabs[activeTab].title}
          </h2>
          <p className="max-sm:text-[16px] text-[18px] font-medium text-[#5E5E6F] ">
            {tabs[activeTab].description}
          </p>
          <div className="flex max-sm:flex-col gap-3 pt-[30px]">
            <button className="border border-black text-[16px] font-medium px-[26px] py-[13px] rounded-full hover:bg-black hover:text-white">
              {tabs[activeTab].buttons[0]}
            </button>
            <button className="bg-black text-white px-[26px] py-[13px] text-[16px] font-medium rounded-full hover:text-black hover:bg-transparent hover:border hover:border-black" onClick={() => navigate("/find-help")}>
              {tabs[activeTab].buttons[1]}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCareSlider;
