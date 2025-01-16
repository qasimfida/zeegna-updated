import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { BsCheckLg } from "react-icons/bs";

function Features({ content }) {
  return (
    <div className="flex flex-col max-sm:flex-col justify-center md:gap-[80px] md:flex-row w-full py-[80px] max-sm:py-[50px] max-sm:px-[15px] ">
      <div className="shrink-0 md:w-[560px] overflow-hidden">
        <img
          src={content.image}
          alt="Home Modification Experts"
          className="h-full w-full rounded-[10px] object-cover"
        />
      </div>

      <div className="md:w-[657px]">
        <h4 className="mb-[20px] max-sm:mt-[15px] md:w-[585px] max-sm:text-[18px]  text-[24px] font-semibold">
          {content.title}
        </h4>
        <ul className="list-none m-0 p-0">
          {content.bullets.map((text, index) => (
            <li className="flex items-start md:mb-4 mb-[10px]" key={index}>
              <BsCheckLg className="w-5 h-5 mr-2 self-start text-[#109088]" />
              <p className="text-[#5E5E6F] text-[16px] font-semibold">
                {text.split(":")[0]}:{" "}
                <span className="font-medium font-semibod">
                  {text.split(":")[1]}
                </span>
              </p>
            </li>
          ))}
        </ul>

        <button className="bg-[#1C1C1C] text-white py-[13px] border-2 px-9 rounded-full font-medium hover:text-black hover:bg-white hover:border-black md:mt-[5px] max-sm:mt-[10px] md:mb-[5px] md:ml-[5px] md:mr-[5px] max-sm:w-full">
          {content.button}
        </button>
      </div>
    </div>
  );
}

export default Features;
