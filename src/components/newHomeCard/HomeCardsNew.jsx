import React from "react";



function HomeCardNew({ title, description, Icon, bgColor, onClick }) {
  return (
    <div className="w-full  border border-[#DBDBE0] rounded-[15px] p-[15px] flex items-start gap-[15px] cursor-pointer hover:bg-[#EBEBF3]" onClick={onClick}>
      {/* Icon Section */}
      <div className={`p-[15px] rounded-[12px] ${bgColor}`}>
        <Icon />
      </div>

      {/* Text Section */}
      <div className="flex flex-col">
        {/* Title and Arrow */}
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-[16px]">{title}</h3>
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
              d="M8.86226 0.19527C9.12261 -0.06509 9.54471 -0.06509 9.80506 0.19527L15.1385 5.5286C15.3987 5.78895 15.3987 6.21106 15.1385 6.4714L9.80506 11.8048C9.54471 12.0651 9.12261 12.0651 8.86226 11.8048C8.6019 11.5444 8.6019 11.1223 8.86226 10.8619L13.0575 6.66667H1.33366C0.965472 6.66667 0.666992 6.36819 0.666992 6C0.666992 5.63182 0.965472 5.33334 1.33366 5.33334H13.0575L8.86226 1.13807C8.6019 0.877723 8.6019 0.455617 8.86226 0.19527Z"
              fill="#109088"
            />
          </svg>
        </div>

        {/* Description */}
        <p className="text-[#5E5E6F] font-medium text-[16px]  ">
          {description}
        </p>
      </div>
    </div>
  );
}

export default HomeCardNew;
