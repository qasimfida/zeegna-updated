"use client";

import React from "react";
import greetings from "../../../public/images/greetings.png";
import shapesGreetings from "../../../public/images/shapesGreetings.png";
import Image from "next/image";

export const GreetingsCard = ({
  imageType = "ribbon",
  variant = "outlined",
}) => {
  return (
    <div
      className={`flex flex-col justify-between sm:auto relative overflow-hidden bg-${
        variant === "outlined" ? "white" : "primary"
      } rounded-2xl `}
    >
      <div className="absolute h-full rounded-full left-0 md:left-[45%] z-0 top-0 w-full md:w-[55%]">
        <Image
          className=""
          src={imageType === "ribbon" ? greetings : shapesGreetings}
          style={{ objectFit: "cover" }}
          alt="particales"
          fill
        />
      </div>
      <div className="w-[75%] md:w-[55%] p-3 md:py-5 px-7 z-10 ">
        <h4
          className={`text-5xl bg-white text-${
            variant === "outlined" ? "grey-400" : "white"
          } pb-1.5`}
        >
          Good Morning James!
        </h4>
        <p
          className={`text-sm bg-white ${
            variant === "outlined" ? "text-grey-400" : "text-white/70"
          } font-medium`}
        >
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
    </div>
  );
};
