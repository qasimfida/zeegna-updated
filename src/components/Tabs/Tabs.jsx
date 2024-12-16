import React, { useState } from "react";

const tabs = [
  "In Review",
  "Shortlisted",
  "Interviewing",
  "Background Check",
  "Offer Received",
  "Hired",
];

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("In Review");

  return (
    <div className="flex app-scroll overflow-x-auto overflow-y-hidden h-12 mt-4 mx-5 ">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`relative w-full min-w-[180px] cursor-pointer `}
          onClick={() => setActiveTab(tab)}
        >
          <div className="absolute h-10 w-full  flex items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute ${
                activeTab === tab ? "stroke-primary" : "stroke-grey-100"
              } stroke-2`}
              width="100%"
              height="100%"
              viewBox="0 0 223 59"
              preserveAspectRatio="none"
              fill="none"
              style={{ backgroundColor: "#F7F7F7" }}
            >
              <path d="M222 29L190 1H1V58H190L222 29Z" />
            </svg>
            <span
              className={`absolute  font-sans text-sm font-semibold ${
                activeTab === tab ? "text-primary" : "text-grey-400"
              } antialiased`}
            >
              {tab}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

{
  /* <div
          key={index}
          className={`text-center h-10 items-center justify-center flex w-full border-r-grey-800 rounded-lg cursor-pointer ${
            activeTab === tab
              ? "text-primary border border-primary"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div> */
}
