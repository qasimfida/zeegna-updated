import React, { useState } from "react";
import Question2Card from "./Question2Card";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function Question2() {
  const Question2Data = [
    { id: 1, title: "Zero-threshold or curbless shower" },
    { id: 2, title: "Walk-in bathtub" },
    { id: 3, title: "Custom walk-in shower" },
    { id: 4, title: "Widened doorways" },
    { id: 5, title: "Lowered countertops and sinks" },
    { id: 6, title: "New bathroom flooring (e.g., tiles, heated floors)" },
    { id: 7, title: "New bathroom cabinets or vanities" },
    { id: 8, title: "Upgraded lighting design" },
    { id: 9, title: "Smart home integration (e.g., voice-activated controls)" },
    { id: 10, title: "Ventilation improvements" },
    { id: 11, title: "Underfloor heating" },
    { id: 12, title: "Relocating fixtures (toilet, shower, sink)" },
    { id: 13, title: "Adding or expanding windows for natural light" },
    { id: 14, title: "Waterproofing enhancements" },
    { id: 15, title: "Custom tile work" },
    { id: 16, title: "Adding a second sink or vanity" },
    { id: 17, title: "Luxury fixtures (e.g., rain shower, freestanding tub)" },
    { id: 18, title: "Improved storage solutions" },
    { id: 19, title: "Other (optional)" },
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectionChange = (id, isChecked) => {
    if (isChecked) {
      setSelectedItems((prev) => [...prev, id]);
    } else {
      setSelectedItems((prev) => prev.filter((item) => item !== id));
    }
  };

  const isNextDisabled = selectedItems.some((id) => id <= 18) === false;

  return (
    <div className="pt-[50px] pb-[100px] md:pt-[100px] md:pb-[215px] max-sm:px-[16px] flex items-center justify-center poppin">
      <div className="w-full max-w-[600px]">
        {/* Question Title */}
        <h2 className="md:text-[18px] text-[17px] font-semibold leading-[28px] mb-[15px]">
          What specific features or upgrades are you interested in for your
          bathroom remodel? (Select all that apply)
        </h2>

        {/* Checkbox List */}
        <div className="grid grid-cols-1 justify-center gap-[10px]">
          {Question2Data.map((item) => (
            <Question2Card
              key={item.id}
              title={item.title}
              onChange={(isChecked) =>
                handleSelectionChange(item.id, isChecked)
              }
            />
          ))}

          {/* Other Option */}
          <div className="flex flex-col mt-[5px]">
            <input
              type="text"
              placeholder="Other (optional)"
              className="border border-gray-400 rounded-[10px] bg-[#F7F7F7] text-[14px] text-black font-medium px-4 py-[14px]"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-[40px] md:mt-[60px] flex justify-between items-center gap-4">
          <Link to="/question1">
            <button className="text-[#5E5E6F] text-[16px] font-medium">
              &lt; Previous
            </button>
          </Link>

          <Link to={isNextDisabled ? "#" : "/question3"}>
            <button
              className={`rounded-full flex items-center justify-center gap-4 w-[200px] py-[12px] text-base font-medium text-white border-[#1C1C1C] ${
                isNextDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#1C1C1C] border-2 hover:bg-white hover:text-black"
              }`}
              disabled={isNextDisabled}
            >
              Next
              <FaChevronRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Question2;
