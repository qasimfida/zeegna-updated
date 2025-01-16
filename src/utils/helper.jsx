"use client";

import { Button } from "@/components/Button/Button";
import { AddPlusIcon } from "@/svgs/icons";

export const renderProfileCardData = (value) => {
  if (Array.isArray(value)) {
    return (
      <>
        {value.map(({ name, type }, index) =>
          type === "text" ? (
            <p
              key={`${name}-option-${index + 1}`}
              className="text-sm md:text-base text-grey-500 font-medium"
            >
              {name}
            </p>
          ) : (
            <Button
              key={`${name}-option-${index + 1}`}
              color={type}
              variant="tagFilled"
              size="md"
            >
              {name}
            </Button>
          )
        )}
        <button
          type="button"
          className="rounded-3xl flex items-center text-sm md:text-base font-medium text-grey-500 py-1 px-2"
        >
          <span>
            <AddPlusIcon className="w-4 h-4" aria-hidden="true" />
          </span>
          View More
        </button>
      </>
    );
  } else {
    return value;
  }
};

export const calculateArea = (pathData) => {
  const commands = pathData.match(/([a-zA-Z][^a-zA-Z]*)/g);
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  let currentX = 0,
    currentY = 0;

  commands.forEach((command) => {
    const type = command[0];
    const argsString = command.slice(1).trim().split(/[ ,]+/);
    const args = [];
    for (const element of argsString) {
      args.push(parseFloat(element));
    }

    for (let i = 0; i < args.length; i += 2) {
      let x = args[i];
      let y = args[i + 1];

      // Apply transformations based on the command type
      switch (type) {
        case "m":
        case "l":
          currentX += x;
          currentY += y;
          break;
        case "M":
        case "L":
          currentX = x;
          currentY = y;
          break;
        case "h":
          currentX += x;
          break;
        case "H":
          currentX = x;
          break;
        case "v":
          currentY += y;
          break;
        case "V":
          currentY = y;
          break;
      }
      minX = Math.min(minX, currentX);
      maxX = Math.max(maxX, currentX);
      minY = Math.min(minY, currentY);
      maxY = Math.max(maxY, currentY);
    }
  });

  const width = maxX - minX;
  const height = maxY - minY;
  const area = width * height; // Calculate the area of the bounding box

  return area;
};

export const calculateCenter = (pathData) => {
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  let currentX = 0,
    currentY = 0;
  const commands = pathData.match(/([a-zA-Z][^a-zA-Z]*)/g);
  commands.forEach((command) => {
    const type = command[0];
    const args = command.slice(1).trim().split(/[ ,]+/).map(parseFloat);

    for (let i = 0; i < args.length; i += 2) {
      let x = args[i],
        y = args[i + 1];
      switch (type) {
        case "m":
        case "l":
          currentX += x;
          currentY += y;
          break;
        case "M":
        case "L":
          currentX = x;
          currentY = y;
          break;
        default:
        // handle other commands
      }
      minX = Math.min(minX, currentX);
      maxX = Math.max(maxX, currentX);
      minY = Math.min(minY, currentY);
      maxY = Math.max(maxY, currentY);
    }
  });
  return { centerX: (minX + maxX) / 2, centerY: (minY + maxY) / 2 };
};

export const calculateTop = (pathData) => {
  const commands = pathData.match(/([a-zA-Z][^a-zA-Z]*)/g);

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  let currentX = 0;
  let currentY = 0;

  commands.forEach((command) => {
    const type = command[0];
    const argsString = command.slice(1).trim().split(/[ ,]+/);
    const args = [];
    for (const element of argsString) {
      args.push(parseFloat(element));
    }

    for (let i = 0; i < args.length; i += 2) {
      let x = args[i];
      let y = args[i + 1];

      if (type === "m" || type === "l") {
        currentX += x;
        currentY += y;
      } else if (type === "M" || type === "L") {
        currentX = x;
        currentY = y;
      } else if (type === "h") {
        currentX += x;
        y = 0;
        i -= 1;
      } else if (type === "H") {
        currentX = x;
        y = 0;
        i -= 1;
      } else if (type === "v") {
        y = x;
        currentY += y;
        x = 0;
        i -= 1;
      } else if (type === "V") {
        y = x;
        currentY = y;
        x = 0;
        i -= 1;
      } else {
        // Add more cases as needed for 'c', 's', 'q', 't'
      }

      minX = Math.min(minX, currentX);
      maxX = Math.max(maxX, currentX);
      minY = Math.min(minY, currentY);
      maxY = Math.max(maxY, currentY);
    }
  });

  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2 - 20;

  return { centerX, centerY };
};
