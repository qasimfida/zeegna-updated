import React from "react";

import { faqsData } from "../../data/FaqsData";
import FaqsCard from "./Faqs";

function FaqsContainer({ headingChange = " Got questions? We've answers" }) {
  return (
    <>
      <div className="max-w-7xl mx-auto py-[80px] max-sm:py-[50px]  px-5 poppin max-sm:px-[15px]">
        <div className="text-center">
          <h2 className="font-semibold text-[27px] max-sm:text-[21px]">
            {headingChange}
          </h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-[10px] mt-[50px] max-sm:mt-[30px] justify-items-center	content-center	">
          {faqsData.map((faq) => (
            <FaqsCard
              key={faq.id}
              title={faq.title}
              description={faq.description}
              bgColor="bg-white"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default FaqsContainer;
