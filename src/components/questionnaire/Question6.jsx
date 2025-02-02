import React, { useState } from "react";
import Question2Card from "./Question2Card";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function Question6() {
  const Question2Data = [
    { id: 1, title: "Master bathroom" },
    { id: 2, title: "Guest bathroom" },
    { id: 3, title: "Family bath (shared by everyone)" },
    { id: 4, title: "Half bath" },
    { id: 5, title: "Only bathroom in the home" },
    { id: 20, title: "Other (optional)" },
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
          Which bathrooms are you considering for worked on? (Select all that
          apply)
        </h2>

        {/* Checkbox List */}
        <div className="grid grid-cols-1 justify-center gap-[10px]">
          {Question2Data.map((item) => (
            <Question2Card
              key={item.id}
              title={item.title}
              id={item.id}
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
              className="border border-gray-400 rounded-[10px] bg-[#F7F7F7] 
              text-[16px] text-black font-medium px-4 py-[14px] 
              w-full h-[50px] focus:outline-none max-w-full touch-action-manipulation 
              appearance-none -webkit-text-size-adjust-100"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-[40px] md:mt-[60px] flex justify-between items-center gap-4">
          <Link to="/question5">
            <button className="text-[#5E5E6F] text-[16px] font-medium">
              &lt; Previous
            </button>
          </Link>

          <Link to={isNextDisabled ? "#" : "/question7"}>
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

export default Question6;
