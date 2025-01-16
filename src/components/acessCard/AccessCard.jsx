import React from "react";
import Doller from "../../assets/icons/doller/Doller";

const AccessCard = ({ image, title, para }) => {
  console.log({ title });
  return (
    <div className="bg-white border rounded-[15px] border-[#EAEAF1] relative group cursor-pointer poppin xl:mx-0 overflow-hidden">
      <a href="#">
        <img
          className="rounded-t-[15px] transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-4"
          src={image}
          alt={title}
        />
      </a>

      <div className="px-5 pt-[10px] pb-[20px] max-sm:px-[10px] flex flex-col items-start justify-between">
        <div className="flex w-full justify-between">
          <h5 className="text-base font-semibold text-[#1C1C1C] max-sm:text-[16px]">
            {title}
          </h5>
          <div className="flex items-center gap-2">
            <p className="text-[#5E5E6F] text-[14px] font-medium">join now</p>

            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.86323 0.19527C9.12358 -0.06509 9.54569 -0.06509 9.80603 0.19527L15.1394 5.5286C15.3997 5.78895 15.3997 6.21106 15.1394 6.4714L9.80603 11.8048C9.54569 12.0651 9.12358 12.0651 8.86323 11.8048C8.60287 11.5444 8.60287 11.1223 8.86323 10.8619L13.0585 6.66667H1.33464C0.966449 6.66667 0.667969 6.36819 0.667969 6C0.667969 5.63182 0.966449 5.33334 1.33464 5.33334H13.0585L8.86323 1.13807C8.60287 0.877723 8.60287 0.455617 8.86323 0.19527Z"
                fill="#109088"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-[3px] justify-between pt-[5px]">
          <Doller />
          <p className="text-[#5E5E6F] text-[14px] font-medium">{para}</p>
        </div>
      </div>
    </div>
  );
};

export default AccessCard;
