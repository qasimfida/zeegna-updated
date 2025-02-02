import React from "react";
import Searchbar from "../searchbar/Searchbar";

function NewHomePage() {
  return (
    <div className="">
      <section className="bg-[#FFFFFF] poppin">
        <div className="mx-auto text-center ">
          <div
            className="flex md:pt-[100px] max-sm:pt-[90px] pl-[29px] pr-[58px] justify-center relative md:pb-[175px] 
            max-sm:flex-col max-sm:h-auto max-sm:pb-[60px] max-sm:px-[16px]"
          >
            <div className="text-center max-sm:w-full max-w-[739px] mx-auto">
              {/* Heading */}
              <h1 className="text-[55px] xl:leading-[72px] font-semibold md:mb-[15px] mb-[10px] max-sm:text-[27px] poppin">
                Discover services for aging at home
              </h1>
              <p className="text-[20px] font-medium mb-10 max-sm:mb-[20px] text-[#5E5E6F] max-sm:w-full mx-auto max-sm:text-[18px] md:leading-[38px]">
                Explore a network of vetted service providers to help you live
                the best of your days at home
              </p>

              <Searchbar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewHomePage;
