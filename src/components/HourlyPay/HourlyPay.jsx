"use client";

import React, { useState } from "react";
import { ExclaimationIcon } from "@/svgs/icons";
import MultiRangeSlider from "@/components/MultiRangeSlider";
import RangeSlider from "@/components/RangeSlider";
import USAMap from "@/components/USAMap";
import { Icon } from "@/svgs";
import { activityType } from "../Modals/data";
import { SuggestionDropdown } from "@/components/Select/Select";

export const HourlyPay = () => {
  const [selectedState, setSelectedState] = useState("");
  const [stateRate, setStateRate] = useState("20$-45$");
  const [range, setRange] = useState({ min: 10, max: 100 });

  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    setScale(scale * 1.1);
  };

  const handleZoomOut = () => {
    setScale(scale * 0.9);
  };

  const mapHandler = (event) => {
    if (event.target.dataset.name === selectedState) {
      setSelectedState("");
    } else {
      setSelectedState(event.target.dataset.name);
    }
  };

  return (
    <div className="my-5">
      <div className="hidden lg:flex sm:flex-col sm:items-center sm:justify-center lg:items-start  md:flex-col sm:auto sm:auto relative bg-white rounded-2xl min-h-28">
        <div className="px-5 pt-4 w-full">
          <p className="text-5xl text-grey-400 border-b pb-2.5">
            Know Your Worth
          </p>
        </div>
        <div className="w-full p-5 ">
          <div className="flex  m-auto border rounded-2xl">
            <div className="w-full min-h-[20rem] xl:h-full md:w-full lg:w-[71.7%] md:border-1 lg:justify-between lg:flex lg:flex-col h-full  border-1 sm:border-r relative">
              <div className="overflow-hidden w-[88%] m-auto">
                <USAMap
                  defaultFill="#E4E4E4"
                  onClick={mapHandler}
                  selected={selectedState}
                  stateRate={stateRate}
                  scale={scale}
                  title={selectedState}
                />
              </div>
              <div className="flex justify-end gap-4 px-5 pb-5 pt-4 absolute right-0 bottom-0">
                <Icon
                  name="minus"
                  className="min-w-9 min-h-9  hover:border-primary"
                  onClick={handleZoomOut}
                />
                <Icon
                  name="add"
                  className="min-w-9 min-h-9  hover:border-primary"
                  onClick={handleZoomIn}
                />
              </div>
            </div>
            <div className="w-full px-5 pt-0 border-t lg:border-0  lg:w-[28.3%]">
              <div className=" w-full border-b pb-[30px] mt-10">
                <SuggestionDropdown
                  className=""
                  placeholder="Job Function"
                  label="Job Function"
                  options={activityType}
                />
              </div>
              <div className="pt-[30px]">
                <p className="text-sm font-normal text-grey-400">
                  Texas Nurses National Hourly Pay
                </p>
                <div className="flex justify-center items-center mt-[14px]">
                  <div className="w-full border-b pb-3">
                    <div className="flex justify-center border rounded-md w-fit items-center m-auto bg-primary text-white h-6 mb-3">
                      <p className="text-base font-semibold text-white">
                        ${range.min} - ${range.max}
                      </p>
                    </div>
                    <RangeSlider
                      min={0}
                      max={125}
                      variant="primary"
                      readOnly
                      values={range}
                      onChange={({ min, max }) => {
                        setRange({ min, max });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex p-4 border rounded-2xl min-h-20 items-center gap-2.5 mt-[30px] mb-10">
                <div className="text-primary">
                  <ExclaimationIcon />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-medium text-grey-400 ">
                    Registered Nurse In Texas make 50% more than the average
                    national median.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-col items-center justify-center  md:flex-col xl:flex-row sm:auto sm:auto relative bg-white rounded-2xl min-h-28 mt-5">
        <div className="lg:hidden flex flex-col items-center justify-center w-full md:flex-col xl:flex-row sm:auto sm:auto relative bg-white rounded-2xl min-h-28">
          <div className="w-full min-h-[20rem] xl:min-h-[30rem] md:w-full xl:w-3/5 md:border-0 xl:border-r object-contain border-0 sm:border-r p-1.5">
            <div className="w-full overflow-hidden pt-8">
              <USAMap
                defaultFill="#E4E4E4"
                onClick={mapHandler}
                selected={selectedState}
                stateRate={stateRate}
                scale={scale}
                title={selectedState}
              />
            </div>
            <div className="flex justify-end gap-4 px-5 pb-5 pt-4">
              <Icon
                name="minus"
                className="min-w-9 min-h-9  hover:border-primary"
                onClick={handleZoomOut}
              />
              <Icon
                name="add"
                className="min-w-9 min-h-9  hover:border-primary"
                onClick={handleZoomIn}
              />
            </div>
          </div>
        </div>
        <div className="w-full  md:w-full xl:w-2/5 px-3 pt-3">
          <div className="border-b pb-3">
            <p className="text-4xl text-grey-400">Know Your Worth</p>
          </div>
          <div className=" w-full border-b pb-[30px] mt-10">
            <SuggestionDropdown
              className=""
              placeholder="Job Function"
              label="Job Function"
              options={activityType}
            />
          </div>
          <div className="pt-[30px]">
            <p className="text-sm font-normal text-grey-400">
              Texas Nurses National Hourly Pay
            </p>
            <div className="flex justify-center items-center mt-[14px]">
              <div className="w-full border-b pb-3">
                <div className="flex justify-center border rounded-md w-fit items-center m-auto bg-primary text-white h-6 mb-3">
                  <p className="text-base font-semibold text-white">
                    ${range.min} - ${range.max}
                  </p>
                </div>
                <RangeSlider
                  min={0}
                  max={125}
                  variant="primary"
                  readOnly
                  values={range}
                  onChange={({ min, max }) => {
                    setRange({ min, max });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex p-4 border rounded-2xl min-h-20 items-center gap-2.5 mt-[30px] mb-10">
            <div className="text-primary">
              <ExclaimationIcon />
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium text-grey-400 ">
                Registered Nurse In Texas make 50% more than the average
                national median.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
