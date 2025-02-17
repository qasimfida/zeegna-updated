import React from "react";
import img1 from "../../../public/images/stay (1).png";
import img2 from "../../../public/images/stay (2).png";
import img3 from "../../../public/images/stay (3).png";
import img4 from "../../../public/images/stay (4).png";

function StayConnectedSection({ MarginTop = "md:mt-0" }) {
  return (
    <div
      className={`mx-auto pb-[80px] max-sm:pb-[50px] text-center poppin relative max-sm:mx-[16px] ${MarginTop}  max-lg:mx-[27px] lg:mx-[70px]`}
    >
      {/* Form Section */}
      <div className="relative bg-[#DFFFEE] py-[50px] px-[25px] max-sm:px-[20px] rounded-[40px] flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-[1300px] mx-auto ">
        {/* Left-side avatars */}
        <div className="hidden xl:flex flex-col gap-4">
          <img
            className="w-[61px] h-[61px] rounded-full object-cover max-w-[61px] absolute top-[101px]"
            src={img4}
            alt="Person"
          />
          <img
            className="w-[93px] h-[93px] rounded-full object-cover max-w-[93px] absolute left-[80px] bottom-[57px]"
            src={img3}
            alt="Person"
          />
        </div>

        {/* Form Content */}
        <div className="text-center w-full">
          <h3 className="text-[27px] font-semibold mb-[10px] text-[#1C1C1C] max-lg:text-[21px]">
            Stay connected with the latest in senior care
          </h3>
          <p className="text-[#575757] mb-[18px] text-[18px] font-medium max-lg:text-[16px]">
            Get expert tips and updates to help your loved ones age comfortably
            at home.
          </p>

          {/* Form */}
          <form className="max-w-md mx-auto">
            <div className="flex flex-col gap-[15px] w-full">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-[15px] border border-gray-300 bg-[#DFFFEE] 
                rounded-[10px] text-[16px] font-medium text-[#5E5E6F] h-[50px] focus:outline-none 
                max-w-full touch-action-manipulation appearance-none -webkit-text-size-adjust:100% 
                outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-[15px] focus:outline-none max-w-full touch-action-manipulation 
                appearance-none -webkit-text-size-adjust:100% outline-none border border-gray-300 
                bg-[#DFFFEE] rounded-[10px] text-[16px] font-medium text-[#5E5E6F] h-[50px]"
              />
              <button
                type="submit"
                className="bg-[#1C1C1C] text-white py-[13px] font-medium rounded-[27px] hover:bg-white border-2 border-black hover:text-black transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="hidden xl:flex flex-col gap-4">
          <img
            className="w-[73px] h-[73px] rounded-full object-cover max-w-[73px] absolute top-[56px] right-[23px]"
            src={img2}
            alt="Person"
          />
          <img
            className="w-[86px] h-[86px] rounded-full object-cover max-w-[86px] absolute right-[67px] bottom-[17%]"
            src={img1}
            alt="Person"
          />
        </div>
      </div>
    </div>
  );
}

export default StayConnectedSection;
