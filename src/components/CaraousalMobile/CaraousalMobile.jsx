"use client";

import React, { useRef, useState } from "react";
import CardCaraousalMobile from "@/components/CardCaraousalMobile";
import { Icon } from "@/svgs";
import JobCard from "@/components/JobCard";
import { ClockIcon } from "@/svgs/icons";
import JobAppliedCard from "../JobAppliedCard";

export const CaraousalMobile = ({
  heading,
  sliderData = [],
  jobCardVariant = "invite",
  viewAll,
}) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;

  const totalCardSets = Math.ceil(sliderData.length / cardsToShow);

  const currentCards = sliderData.slice(
    currentIndex * cardsToShow,
    (currentIndex + 1) * cardsToShow
  );

  const next = () => {
    if (currentIndex < totalCardSets - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      sliderRef.current?.slickNext();
    }
  };

  const previous = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      sliderRef.current?.slickPrev();
    }
  };

  return (
    <div className="flex flex-col justify-between sm:auto relative bg-white rounded-2xl min-h-28 p-3 mt-5">
      <div className="flex justify-between w-full border-b pb-2.5 items-center">
        <p className="text-5xl text-grey-400">{heading}</p>
        <div className="flex gap-4 items-center cursor-pointer">
          <p
            className="text-base font-semibold text-grey-400"
            onClick={viewAll}
          >
            View all
          </p>
        </div>
      </div>
      {currentCards?.map(({ icon, respondBy, cardData }, index) => {
        return (
          <JobAppliedCard
            key={`${respondBy}-option-${index + 1}`}
            isInRightbar={false}
            variant={jobCardVariant}
            cardData={cardData}
          >
            {jobCardVariant === "invite" && (
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-grey-400 flex items-center gap-1.5">
                  <ClockIcon
                    className="min-w-4 min-h-4 max-w-4 max-h-4 text-warning "
                    aria-hidden="true"
                  />{" "}
                  {respondBy}
                </p>
              </div>
            )}
          </JobAppliedCard>
        );
      })}
    </div>
  );
};
