"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";

export const MultiRangeSlider = ({ readOnly }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const min = 0;
  const max = 100;
  const [minThumb, setMinThumb] = useState(35);
  const [maxThumb, setMaxThumb] = useState(35);

  const mintrigger = () => {
    // Ensure minPrice doesn't exceed maxPrice - 50
    const minPriceAdjusted = Math.min(minPrice, maxPrice - 50);
    setMinPrice(minPriceAdjusted);
    setMinThumb(((minPriceAdjusted - min) / (max - min)) * 100);
  };

  const maxtrigger = () => {
    // Ensure maxPrice doesn't go below minPrice + 50
    const maxPriceAdjusted = Math.max(maxPrice, minPrice + 50);
    setMaxPrice(maxPriceAdjusted);
    setMaxThumb(100 - ((maxPriceAdjusted - min) / (max - min)) * 100);
  };

  return (
    <div className="flex justify-center mt-2.5 relative ">
      {readOnly && <div className="w-full h-full z-10 absolute "></div>}
      <div className="relative max-w-xl w-full">
        <div>
          <input
            type="range"
            step="100"
            min={min}
            max={max}
            value={minPrice}
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
            onInput={mintrigger}
            className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
          />

          <input
            type="range"
            step="100"
            min={min}
            max={max}
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            onInput={maxtrigger}
            className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
          />

          <div className="relative z-10 h-2">
            <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>

            <div
              className="absolute z-20 top-0 bottom-0 rounded-md bg-primary"
              style={{ right: `${maxThumb}%`, left: `${minThumb}%` }}
            ></div>

            <div
              className="absolute z-30 w-6 h-6 top-0 left-0  -mt-2 -ml-1"
              style={{ left: `${minThumb}%` }}
            ></div>

            <div
              className="absolute z-30 w-6 h-6 top-0 right-0  -mt-2 -mr-3"
              style={{ right: `${maxThumb}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-2.5">
          <div className="w-24">
            <input
              type="text"
              maxLength="5"
              value={`${minPrice}$`}
              onChange={(e) => setMinPrice(parseInt(e.target.value))}
              onInput={mintrigger}
              className=" py-2 text-sm font-semibold text-grey-400 w-full text-start"
            />
          </div>
          <div className="w-24">
            <input
              type="text"
              maxLength="5"
              value={`${maxPrice}$`}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              onInput={maxtrigger}
              className=" py-2 text-sm font-semibold text-grey-400 w-full text-end"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
