import React from "react";

function ArticleCard({
  heading,
  text,
  title,
  takeaway,
  bgColor,
  description,
  padding = "20px",
  borderRadius = "15px",
}) {
  return (
    <div
      className={`mx-auto mb-[30px] md:mt-[40px] mt-[30px] md:w-[840px] poppin ${bgColor} ${padding} ${borderRadius}`}
    >
      <div className="text-[17px]">
        <div className="mx-auto  poppin">
          <h2 className="font-semibold text-[18px] pb-[10px]">{title}</h2>
          <div className="text-[#5E5E6F] text-[16px] leading-6 font-medium">
            {" "}
            {description}
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
}

export default ArticleCard;
