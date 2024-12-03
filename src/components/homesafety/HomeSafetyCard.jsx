import React from "react";
import { Link } from "react-router-dom";

function HomeSafetyCard({ title, redirectTo }) {
  return (
    <div className="md:w-[220px] w-full flex items-start cursor-pointer">
      <div className="flex flex-col">
        <Link
          to={redirectTo}
          className="text-[#2D7CD9] font-medium text-[18px]"
        >
          {title}
        </Link>
      </div>
    </div>
  );
}

export default HomeSafetyCard;