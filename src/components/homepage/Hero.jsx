import React from "react";
import DownArrow from "../../assets/icons/arrow/DownArrow";
import Typewriter from "../typeWriteing/TypeWriter";
import { useNavigate } from "react-router-dom";
import BannerHome from "../banner/BannerHome";

function HomeSection() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="poppin">
        <div className="mx-auto text-center max-sm:h-[500px] max-lg:h-[950px]">
          {/* Left Image and Text */}
          <div
            className="flex pt-[148px] pl-[29px] pr-[58px] h-[700px] justify-center relative pb-[36px] 
        max-sm:flex-col max-sm:h-auto max-sm:py-[90px] max-sm:px-[16px] max-sm:pb-[20px]"
          >
            <div className="text-center max-sm:w-full">
              {/* Heading */}
              <h1 className="text-[64px] xl:leading-[80px] font-semibold text-gray-800 mb-5 max-sm:text-[28px] poppin text-4xl max-lg:text-[48px]">
                Comfort. Choice. Home.
              </h1>
              <p className="text-2xl	font-medium	 mb-10 text-[#5E5E6F] max-sm:w-full	mx-auto max-sm:text-[19px] max-md:text-xl   leading-[38px]		">
                Find trusted vendors to help with{" "}
                <br className="hidden lg:block" />
                <span className="text-[#109088] max-sm:block font-semibold animate-fadeIn">
                  <Typewriter />
                </span>
                <br className="max-sm:hidden	" />
                to live the best of your days at home.
              </p>

              {/* Call to Action Button */}
              <button
                className="bg-[#1C1C1C] text-white py-[13px]	 px-9	 rounded-full font-medium  mb-10 max-sm:mb-0 hover:text-black hover:bg-white hover:border-black hover:border-2 max-sm:mb-0"
                onClick={() => navigate("/find-help")}
              >
                Find the help you need
              </button>
            </div>
          </div>
        </div>

        <BannerHome />
      </section>
    </div>
  );
}

export default HomeSection;
