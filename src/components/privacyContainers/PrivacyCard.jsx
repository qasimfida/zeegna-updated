import React from "react";

function PrivacyCard({ heading, text }) {
  return (
    <div className="lg:w-[840px] mx-auto pb-[30px] poppin md:px-[27px] lg:px-25px px-[16px]">
      <div>
        <h2 className="font-semibold text-[20px] pb-[10px]">{heading}</h2>
      </div>
      <div className="text-[17px] text-[#5E5E6F] font-medium">
        {text.slice(0, 14).map((paragraph, index) => (
          <p key={index} className="mb-[10px]">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default PrivacyCard;