import React from "react";
import PhoneIcon from "../../assets/icons/contacticons/PhoneIcon";
import Dollericon from "../../assets/icons/contacticons/Dollericon";
import Personicon from "../../assets/icons/contacticons/Personicon";
import "../../assets/css/input.css";
import { useState } from "react";
import Clockicon from "../../assets/icons/contacticons/Clockicon";
import Form from "../form/Form";
import Salesform from "../form/Salesform";

const Contact = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <section className="mt-[40px] sm:mx-[135px] max-sm:mx-[16px] flex flex-col items-center poppin">
      <div className="grid md:grid-cols-3 gap-[20px]">
        {/* Tab one */}
        <div
          className={`border border-[#e5dbdb] rounded-2xl p-[15px] cursor-pointer hover:bg-[#F8F8F8] ${
            activeTab === 1 ? "bg-[#F8F8F8] border-black" : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          <div className="flex justify-between items-center">
            <div>
              <PhoneIcon />{" "}
            </div>
            <input type="checkbox" checked={activeTab === 1} readOnly />
          </div>
          <h2 className="text-[16px] font-semibold py-2">I have a question</h2>
          <p className="text-[13px] lg:text-[14px] text-[#5E5E6F] font-medium">
            Need more information? We're here to help. Get answers to your
            questions quickly.
          </p>
        </div>
        {/* Tab two */}
        <div
          className={`border border-[#e5dbdb] rounded-2xl px-4 py-4 cursor-pointer hover:bg-[#F8F8F8] ${
            activeTab === 2 ? "bg-[#F8F8F8] border-black" : ""
          }`}
          onClick={() => handleTabClick(2)}
        >
          <div className="flex justify-between items-center">
            <div>
              <Personicon />{" "}
            </div>
            <input type="checkbox" checked={activeTab === 2} readOnly />
          </div>
          <h2 className="text-base font-semibold py-2">I have an idea</h2>
          <p className="text-[13px] lg:text-[14px] text-[#5E5E6F]  font-medium">
            Have a suggestion or feedback? Share your ideas with us – we'd love
            to hear from you!
          </p>
        </div>
        {/* Tab three */}
        <div
          className={`border border-[#e5dbdb] rounded-2xl px-4 py-4 cursor-pointer hover:bg-[#F8F8F8] ${
            activeTab === 3 ? "bg-[#F8F8F8] border-black" : ""
          }`}
          onClick={() => handleTabClick(3)}
        >
          <div className="flex justify-between items-center">
            <div>
              <Dollericon />{" "}
            </div>
            <input type="checkbox" checked={activeTab === 3} readOnly />
          </div>
          <h2 className="text-base font-semibold py-2">
            I need to talk to Sales
          </h2>
          <p className="text-[13px] lg:text-[14px] text-[#5E5E6F]  font-medium">
            Ready to take the next step? Connect with our sales team for
            personalized assistance.
          </p>
        </div>
      </div>
      {activeTab === 1 && <Form />}
      {activeTab === 2 && <Form />}
      {activeTab === 3 && <Salesform />}
      <div className=" w-full flex gap-4 bg-[#f7f7f7] p-5 mb-[80px] md:h-[128px] max-sm:mb-[50px] rounded-[15px] mt-[24px]">
        <Clockicon />
        <div className="">
          <h1 className="text-[19px] font-semibold">Support Hours</h1>
          <p className="text-[#5E5E6F] text-[16px] font-medium">
            Please note that support tickets are reviewed Monday through Friday
            from 8:00 a.m to 5:000 p.m. EST, <br /> except for holidays
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
