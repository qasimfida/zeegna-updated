import React from "react";

function PrivacyCard({ heading, text }) {
  return (
    <div className="lg:max-w-[840px] mx-auto  poppin max-sm:px-[16px]   ">
      <div>
        <h2 className="md:font-bold font-semibold text-[18px] leading-7	 pb-[10px]">
          {heading}
        </h2>
      </div>
      <div className="text-[16px] text-[#5E5E6F] font-medium">
        {text.slice(0, 14).map((paragraph, index) => (
          <p key={index} className="mb-[24px]">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default PrivacyCard;
