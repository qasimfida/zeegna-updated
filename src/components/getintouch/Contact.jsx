import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../assets/css/sliderTouch.css";

import PhoneIcon from "../../assets/icons/contacticons/PhoneIcon";
import Dollericon from "../../assets/icons/contacticons/Dollericon";
import Personicon from "../../assets/icons/contacticons/Personicon";
import Clockicon from "../../assets/icons/contacticons/Clockicon";
import Form from "../form/Form";
import Salesform from "../form/Salesform";
import TouchCard from "../TouchCard/TouchCard";

const Contact = () => {
  const [activeTab, setActiveTab] = useState(1);
  const swiperRef = useRef(null);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(tabIndex - 1);
    }
  };

  const handleSlideChange = (swiper) => {
    if (activeTab === null) {
      setActiveTab(swiper.realIndex + 1);
    }
  };

  return (
    <section className="sm:mx-[180px] max-sm:mx-[16px] flex flex-col items-center poppin">
      {/* Swiper for Mobile */}
      <div className="block sm:hidden max-sm:mt-[0px] mt-[50px] max-sm:mb-[30px] relative">
        <Swiper
          className="swiper1 max-sm:!w-[100%]"
          ref={swiperRef}
          cssMode={true}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
        >
          {[1, 2, 3].map((tabIndex) => (
            <SwiperSlide
              key={tabIndex}
              className="flex justify-center !w-[100%]"
            >
              <TouchCard
                icon={
                  tabIndex === 1 ? (
                    <PhoneIcon />
                  ) : tabIndex === 2 ? (
                    <Personicon />
                  ) : (
                    <Dollericon />
                  )
                }
                heading={
                  tabIndex === 1
                    ? "I have a question"
                    : tabIndex === 2
                    ? "I have an idea"
                    : "I need to talk to Sales"
                }
                details={
                  tabIndex === 1
                    ? "Need more information? We're here to help. Get answers to your questions quickly."
                    : tabIndex === 2
                    ? "Have a suggestion or feedback? Share your ideas with us – we'd love to hear from you!"
                    : "Ready to take the next step? Connect with our sales team for personalized assistance."
                }
                activeTab={activeTab}
                tabIndex={tabIndex}
                onClick={handleTabClick}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid for Large Screen */}
      <div className="grid md:grid-cols-3 gap-[20px] w-full max-md:hidden">
        {[1, 2, 3].map((tabIndex) => (
          <div
            key={tabIndex}
            className={`border border-[#e5dbdb] rounded-2xl p-[15px] cursor-pointer hover:bg-[#F8F8F8] ${
              activeTab === tabIndex ? "bg-[#F8F8F8] border-black" : ""
            }`}
            onClick={() => handleTabClick(tabIndex)} // Handle tab click for grid view
          >
            <div className="flex justify-between items-center">
              <div>
                {tabIndex === 1 && <PhoneIcon />}
                {tabIndex === 2 && <Personicon />}
                {tabIndex === 3 && <Dollericon />}
              </div>
              <input
                type="checkbox"
                checked={activeTab === tabIndex}
                readOnly
              />
            </div>
            <h2 className="text-[16px] font-semibold py-2">
              {tabIndex === 1
                ? "I have a question"
                : tabIndex === 2
                ? "I have an idea"
                : "I need to talk to Sales"}
            </h2>
            <p className="text-[13px] lg:text-[14px] text-[#5E5E6F] font-medium">
              {tabIndex === 1
                ? "Need more information? We're here to help. Get answers to your questions quickly."
                : tabIndex === 2
                ? "Have a suggestion or feedback? Share your ideas with us – we'd love to hear from you!"
                : "Ready to take the next step? Connect with our sales team for personalized assistance."}
            </p>
          </div>
        ))}
      </div>

      {/* Form Rendering based on Active Tab */}
      {activeTab === 1 && <Form />}
      {activeTab === 2 && <Form />}
      {activeTab === 3 && <Salesform />}

      {/* Support Hours */}
      <div className="w-full flex gap-4 bg-[#F3EDFF] md:p-[20px] max-sm:py-[20px] max-sm:px-[15px] md:mb-[60px] md:h-[128px] rounded-[15px] md:mt-[60px] mt-[50px]">
        <div className="flex items-center justify-center">
          <Clockicon />
        </div>
        <div>
          <h1 className="text-[18px] font-semibold mb-[5px]">Support Hours</h1>
          <p className="md:text-[16px] text-[14px] font-medium">
            Please note that support tickets are reviewed Monday through Friday
            from 8:00 a.m to 5:00 p.m. EST, <br className="max-sm:hidden" />{" "}
            except for holidays.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
