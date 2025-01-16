import React from "react";

function ArticleCard({ heading, text }) {
  return (
<<<<<<< HEAD
    <div className="lg:w-[840px] mx-auto pb-[30px] poppin md:px-[27px] lg:px-0">
=======
    <div className=" mx-auto pb-[30px] poppin md:px-[27px] lg:px-0">
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
      <div className="">
        <h2 className="font-semibold text-[20px] pb-[10px]">{heading}</h2>
      </div>
      <div className="text-[17px] text-[#5E5E6F] font-medium">
        {text.slice(0, Math.min(text.length, 3)).map((paragraph, index) => (
          <p key={index} className="mb-[10px]">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ArticleCard;
