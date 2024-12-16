"use client";

import React, { useRef, useState } from "react";
import CardCaraousal from "@/components/CardCaraousal";
import { Icon } from "@/svgs";
import JobCard from "@/components/JobCard";
import { ClockIcon, ThumbDownIcon, TimeTagIcon } from "@/svgs/icons";
import CardCaraousalMobile from "../CardCaraousalMobile";
import TaskCard from "../TaskCard";
import ActivitiesCard from "../ActivitiesCard";
import JobAppliedCard from "../JobAppliedCard";

export const Caraousal = ({
  heading,
  sliderData = [],
  variant = "card",
  jobCardVariant = "invite",
  viewAll,
}) => {
  let sliderRef = useRef(null);
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };
  return (
    <div className="flex flex-col justify-between sm:auto relative bg-white rounded-2xl min-h-28 p-5 mt-5">
      <div className="flex justify-between w-full border-b pb-2.5 items-center">
        <p className="text-5xl text-grey-400">{heading}</p>
        <div className="flex gap-4 items-center cursor-pointer">
          <p
            className="text-base font-semibold text-grey-400"
            onClick={viewAll}
          >
            View all
          </p>
          <div className="flex gap-1">
            {variant !== "task" && (
              <>
                <Icon
                  name="back"
                  className="min-w-10 min-h-10 color-white hover:border-primary"
                  aria-hidden="true"
                  onClick={previous}
                />
                <Icon
                  name="next"
                  className="min-w-10 min-h-10 color-white hover:border-primary"
                  aria-hidden="true"
                  onClick={next}
                />
              </>
            )}
          </div>
        </div>
      </div>
      {variant === "card" ? (
        <CardCaraousal ref={sliderRef}>
          {sliderData?.map(({ icon, respondBy, cardData }, index) => {
            return (
							<JobAppliedCard
								key={`${respondBy}-option-${index + 1}`}
								isInRightbar={false}
								variant={jobCardVariant}
								cardData={cardData}
								hasMessage={jobCardVariant === "job" ? false: true}
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
        </CardCaraousal>
      ) : (
        <div className="flex  flex-col gap-2.5 mt-4">
          {sliderData?.map((notification, index) => {
            const id = index + 1;
            return (
              <ActivitiesCard
                key={`notification-${id}`}
                notification={notification}
                actionButton={false}
                discoverButton={true}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
