import React from "react";

const CreateHomeCard = () => {
  return (
    <div className="flex flex-col items-center bg-[#D2D4FF] md:flex-row justify-between mx-[70px] max-sm:mx-[16px] rounded-[30px] py-[20px] md:pl-[40px] md:pr-[10px] shadow-sm  max-sm:pt-[30px] max-sm:pb-0 max-sm:h-[590px] max-sm:my-[50px]  md:mb-[30px]">
      <div className=" text-left md:w-[600px] px-[20px]">
        <h4 className="text-[24px] font-semibold mb-[10px] max-sm:text-[21px] ">
          Create a safer home to age independently at home{" "}
        </h4>
        <p className="text-[16px] max-sm:text-left font-medium mb-[30px] max-sm:mb-[20px] ">
          Take our home evaluation quiz to get a custom, room-by-room plan for
          older adults, focusing on mobility and accessibility to make your home
          safer and more comfortable.
        </p>
        <button className="bg-transparent border-2 border-black text-black rounded-full py-[13px] px-[20px] font-medium hover:bg-black hover:text-white transition-all max-sm:w-full">
          Take home evaluation quiz
        </button>
      </div>

      <div className=" flex justify-center mt-[30px] md:mt-0">
        <img
          src="images/HeartIMage.png"
          alt=""
          className=" h-[259px] md:w-[453px] md:h-[294px] max-sm:ml-[10px] overflow-hidden"
        />
      </div>
    </div>
  );
};

export default CreateHomeCard;
