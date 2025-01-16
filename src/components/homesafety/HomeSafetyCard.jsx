import React from "react";
import { Link } from "react-router-dom";

<<<<<<< HEAD
function HomeSafetyCard({ title, redirectTo }) {
=======
function HomeSafetyCard({ title, url }) {
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
  return (
    <div className="md:w-[220px] w-full flex items-start cursor-pointer">
      <div className="flex flex-col">
        <Link
<<<<<<< HEAD
          to={redirectTo}
          className="text-[#2D7CD9] font-medium text-[18px]"
=======
          to={`/services/${url}`}
          className="text-[#2D7CD9] font-medium text-[18px] "
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
        >
          {title}
        </Link>
      </div>
    </div>
  );
}

export default HomeSafetyCard;
