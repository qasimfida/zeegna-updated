import React from "react";

import TrustProviderData from "../../data/TrustProviderData";
import TrustProviderCard from "./TrustProviderCard";

const TrustedProviderSection = () => {
  return (
    <section className="bg-[#116B64] md:py-[80px] md:px-[77px] px-[16px] py-[50px]">
      <div className=" mx-auto gap-[48px] max-sm:gap-[30px] flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-[60%] text-white   rounded-lg ">
          <h2 className="text-[21px] md:text-[27px] font-semibold leading-tight">
            Become the trusted go-to provider for seniors aging at home
          </h2>
          <p className="mt-4 md:text-[18px] text-[16px] font-medium">
            Partner with a network trusted by seniors looking for reliable
            services to stay comfortable at home. Gain clients, build your
            reputation, and grow your business.
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-x-[77px] gap-y-[30px] max-sm:gap-y-[30px]  ">
          {TrustProviderData.map((card) => (
            <TrustProviderCard
              key={card.id}
              title={card.title}
              description={card.description}
              Icon={card.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedProviderSection;
