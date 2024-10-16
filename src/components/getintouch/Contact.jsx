import React from "react";
import PhoneIcon from "../../assets/icons/contacticons/PhoneIcon";

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
    <section className="mt-3 sm:mx-40 flex flex-col items-center poppin">
      <div className="grid md:grid-cols-3 gap-5">
        {/* Tab one */}
        <div
          className={`border border-[#e5dbdb] rounded-md px-4 py-4 cursor-pointer ${
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
          <h2 className="text-base font-semibold py-2">I have a question</h2>
          <p className="text-sm font-medium">
            Need more information? We're here to help. Get answers to your
            questions quickly.
          </p>
        </div>
        {/* Tab two */}
        <div
          className={`border border-[#e5dbdb] rounded-md px-4 py-4 cursor-pointer ${
            activeTab === 2 ? "bg-[#F8F8F8] border-black" : ""
          }`}
          onClick={() => handleTabClick(2)}
        >
          <div className="flex justify-between items-center">
            <div>
              <PhoneIcon />{" "}
            </div>
            <input type="checkbox" checked={activeTab === 2} readOnly />
          </div>
          <h2 className="text-base font-semibold py-2">I have an idea</h2>
          <p className="text-sm font-medium">
            Have a suggestion or feedback? Share your ideas with us – we'd love
            to hear from you!
          </p>
        </div>
        {/* Tab three */}
        <div
          className={`border border-[#e5dbdb] rounded-md px-4 py-4 cursor-pointer ${
            activeTab === 3 ? "bg-[#F8F8F8] border-black" : ""
          }`}
          onClick={() => handleTabClick(3)}
        >
          <div className="flex justify-between items-center">
            <div>
              <PhoneIcon />{" "}
            </div>
            <input type="checkbox" checked={activeTab === 3} readOnly />
          </div>
          <h2 className="text-base font-semibold py-2">
            I need to talk to Sales
          </h2>
          <p className="text-sm font-medium">
            Ready to take the next step? Connect with our sales team for
            personalized assistance.
          </p>
        </div>
      </div>
      {activeTab === 1 && <Form />}
      {activeTab === 2 && <Form />}
      {activeTab === 3 && <Salesform />}
      <div className=" flex gap-4 bg-[#f7f7f7] p-5  rounded-lg mt-5">
        <Clockicon />
        <div className="">
          <h1 className="text-lg font-semibold">Support Hours</h1>
          <p className="text-[#5E5E6F] text-sm font-medium">
            Please note that support tickets are reviewed Monday through Friday
            from 8:00 a.m to 5:000 p.m. EST, except for holidays
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
