import React from "react";
import leaderImage from "../../../public/images/employer/leaderImage.png";
import Image from "next/image";

export const Award = ({ award }) => {
  const { image, title, awardedBy } = award;
  return (
    <div className="flex flex-col sm:flex-row gap-5 w-full items-start sm:items-center border rounded-2xl p-2.5">
      <div className="flex justify-center items-center  border rounded-2xl  px-5 py-1.5">
        <Image
          className="min-w-24 max-w-24 min-h-16"
          src={image ? image : leaderImage}
          alt="Career Image"
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <p className={`text-4xl text-grey-400`}>{title}</p>
        <p className={`text-base text-grey-500 font-medium`}>
          <span className={`text-base text-grey-500 font-medium mr-1`}>
            Awarded By:
          </span>
          {awardedBy}
        </p>
      </div>
    </div>
  );
};
