import React from "react";
<<<<<<< HEAD
import {useNavigate} from 'react-router-dom';

const PopularCard = ({ image, title }) => {

  const navigate = useNavigate();

  return (
    <div className="max-w-xl bg-white border rounded-lg border-[#EAEAF1] relative group cursor-pointer poppin max-sm:mx-4 xl:mx-0 overflow-hidden" onClick={() => navigate("/find-help")}>
      <a href="#">
        <img
          className="rounded-t-lg transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-4 w-full"
=======

const PopularCard = ({ image, title, link }) => {
  const handleCardClick = () => {
    window.location.href = link;
  };

  return (
    <div
      className="max-w-xl bg-white border rounded-lg border-[#EAEAF1] relative group cursor-pointer poppin max-sm:mx-4 xl:mx-0 overflow-hidden"
      onClick={handleCardClick}
    >
      <a>
        <img
          className="rounded-t-lg transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-4"
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
          src={image}
          alt={title}
        />
      </a>

      <div className="px-5 py-[15px] flex items-center justify-between">
<<<<<<< HEAD
        <h5 className=" text-base font-semibold text-[#1C1C1C] ">{title}</h5>
        <div className="flex items-center gap-2">
          <p className="text-[#5E5E6F] text-sm font-medium hover:text-[#109088]	">
            Find help
          </p>
=======
        <h5 className="text-base font-semibold text-[#1C1C1C]">{title}</h5>
        <div className="flex items-center gap-2">
          <a
            href={link}
            className="text-[#5E5E6F] text-sm font-medium hover:text-[#109088]"
          >
            Find help
          </a>
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9

          <div className="transition-transform duration-300 hover:translate-x-2">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
<<<<<<< HEAD
                fill-rule="evenodd"
                clip-rule="evenodd"
=======
                fillRule="evenodd"
                clipRule="evenodd"
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
                d="M8.86323 0.19527C9.12358 -0.06509 9.54569 -0.06509 9.80603 0.19527L15.1394 5.5286C15.3997 5.78895 15.3997 6.21106 15.1394 6.4714L9.80603 11.8048C9.54569 12.0651 9.12358 12.0651 8.86323 11.8048C8.60287 11.5444 8.60287 11.1223 8.86323 10.8619L13.0585 6.66667H1.33464C0.966449 6.66667 0.667969 6.36819 0.667969 6C0.667969 5.63182 0.966449 5.33334 1.33464 5.33334H13.0585L8.86323 1.13807C8.60287 0.877723 8.60287 0.455617 8.86323 0.19527Z"
                fill="#109088"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
