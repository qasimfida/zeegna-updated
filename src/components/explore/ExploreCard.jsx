import React from "react";

const ExploreCard = ({ image, title }) => {
  return (
    <div className="relative max-w-xl rounded-[15px] overflow-hidden cursor-pointer mx-4 md:mx-0 group max-sm:mx-0">
      {/* Image with hover scale effect */}
      <img
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
        src={image}
        alt={title}
      />

      {/* Gradient overlay with hover darken effect */}
      <div className="absolute bottom-0 left-0 w-full p-[15px] bg-gradient-to-t from-black/60 via-transparent to-transparent text-white group-hover:from-black/80 transition-colors duration-500">
        <h5 className="text-base font-semibold">{title}</h5>
        <div className="flex items-center gap-[10px] mt-[5px]">
          <p className="text-sm font-medium">Find help</p>
          <div className="transition-transform duration-300 group-hover:translate-x-2">
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
                fill="#FFFFFF"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
