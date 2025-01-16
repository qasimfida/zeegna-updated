"use client";

import React, { useCallback, useEffect, useState } from "react";
import data from "./data/usa-map-dimensions";
import USAState from "./USAState";
import { calculateArea, calculateCenter, calculateTop } from "@/utils/helper";

const USAMap = ({
  onClick,
  width = 959,
  height = 593,
  title = "Blank US states map",
  defaultFill = "#D3D3D3",
  selected = "",
  stateRate = "",
  customize = {},
  scale = 1,
}) => {
  const [hoveredState, setHoveredState] = useState("");

  const clickHandler = useCallback(
    (stateAbbreviation) => {
      onClick(stateAbbreviation);
    },
    [onClick]
  );

  const stateClickHandler = useCallback(
    (state) => {
      if (customize && customize[state] && customize[state].clickHandler) {
        return customize[state].clickHandler;
      }
      return clickHandler;
    },
    [customize, clickHandler]
  );

  useEffect(() => {
    if (hoveredState) {
      stateClickHandler(hoveredState);
    }
  }, [hoveredState, stateClickHandler]);

  const fillStateColor = useCallback(
    (state) => {
      if (customize && customize[state] && customize[state].fill) {
        return customize[state].fill;
      }
      return defaultFill;
    },
    [customize, defaultFill]
  );

  const buildStateNames = () => {
    const stateNames = [];
    const dataStates = data();

    for (const stateKey in dataStates) {
      const stateData = dataStates[stateKey];
      const name = stateData.name;
      const center = calculateTop(stateData.dimensions);
      const stateName = stateData.name;

      const textElement = (
        <text
          key={`text-${stateKey}`}
          x={center.centerX}
          y={selected === name ? center.centerY + 40 : center.centerY}
          fill="black"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="10px"
          fontWeight={600}
        >
          {stateName}
        </text>
      );

      stateNames.push(textElement);
    }
    return stateNames;
  };

  const buildPaths = () => {
    const paths = [];
    const dataStates = data();

    for (const stateKey in dataStates) {
      const stateData = dataStates[stateKey];

      const path = (
        <USAState
          key={stateKey}
          state={stateData.name}
          dimensions={stateData.dimensions}
          fill={fillStateColor(stateKey)}
          onClick={stateClickHandler(stateKey)}
          className="hover:fill-primary"
          onMouseEnter={() => handleMouseEnter(stateData.name)}
          onMouseLeave={handleMouseLeave}
        />
      );

      paths.push(path);
    }
    return paths;
  };

  const handleMouseEnter = useCallback((stateKey) => {
    setHoveredState(stateKey);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredState("");
  }, []);

  const buildCircles = () => {
    const circles = [];
    const dataStates = data();

    for (const stateKey in dataStates) {
      const stateData = dataStates[stateKey];

      const area = calculateArea(stateData.dimensions);
      const center = calculateCenter(stateData.dimensions);
      let radius = Math.sqrt(area) / 10;

      const circleElements = (
        <React.Fragment key={stateKey}>
          <circle
            className="hover:animate-pulse"
            cx={center.centerX}
            cy={center.centerY}
            r={radius > 0 ? radius : "8"}
            fill="rgb(165 203 201)"
            strokeOpacity="0.3"
            onMouseEnter={() => handleMouseEnter(stateData.name)}
            onMouseLeave={handleMouseLeave}
          />
          <circle
            className="hover:animate-pulse"
            cx={center.centerX}
            cy={center.centerY}
            r={radius > 0 ? radius - 6 : "4"}
            fill="rgb(16 144 136)"
            strokeOpacity="1"
            onMouseEnter={() => handleMouseEnter(stateData.name)}
            onMouseLeave={handleMouseLeave}
          />
        </React.Fragment>
      );
      circles.push(circleElements);
    }
    return circles;
  };

  const buildPointers = () => {
    const pointers = [];
    const dataStates = data();

    for (const stateKey in dataStates) {
      const stateData = dataStates[stateKey];
      const name = stateData.name;

      const { centerX, centerY } = calculateCenter(stateData.dimensions);
      const transform = `translate(${centerX - 50}, ${centerY - 50})`;

      const pointerElement = (
        <g transform={transform}>
          <g filter="url(#filter0_d_861_15236)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 6C14.2386 6 12 8.23858 12 11V27C12 29.7614 14.2386 32 17 32H43.0352L50.2929 39.2577C50.6834 39.6483 51.3166 39.6483 51.7071 39.2577L58.9648 32H85C87.7614 32 90 29.7614 90 27V11C90 8.23858 87.7614 6 85 6H17Z"
              fill="white"
            />
          </g>
          <text
            key={`text-`}
            x={50}
            y={20}
            fill="#1ECA63"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="14px"
            fontWeight={600}
          >
            {stateRate}
          </text>
          <defs>
            <filter
              id="filter0_d_861_15236"
              x="0"
              y="0"
              width="102"
              height="57.5508"
              filterUnits="userSpaceOnUse"
              color-interpolationfilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="6" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.542767 0 0 0 0 0.542767 0 0 0 0 0.542767 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_861_15236"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_861_15236"
                result="shape"
              />
            </filter>
          </defs>
        </g>
      );

      if (selected === name || hoveredState === name) {
        pointers.push(pointerElement);
      }
    }
    return pointers;
  };

  return (
    <svg
      className="us-state-map"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox={`0 0 ${width} ${height}`}
    >
      <g className="outlines " transform={`scale(${scale})`}>
        <title>{title}</title>
        <g className="outlines">{buildPaths()}</g>
        {buildCircles()}
        {buildStateNames()}
        {buildPointers()}
      </g>
    </svg>
  );
};

export default USAMap;
