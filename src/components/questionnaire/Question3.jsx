import React, { useState } from "react";
import Question2Card from "./Question2Card";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function Question3() {
  const Question2Data = [
    { id: 1, title: "Grab bars and handrails" },
    { id: 2, title: "Non-slip mats or flooring" },
    { id: 3, title: "Elevated or comfort-height toilet seat" },
    { id: 4, title: "Adjustable or handheld showerheads" },
    { id: 5, title: "Shower seat or bench" },
    { id: 6, title: "Motion-sensor lighting" },
    { id: 7, title: "Motion-activated or lever-handle faucets" },
    { id: 8, title: "Additional lighting for visibility" },
    { id: 9, title: "Bidet attachments" },
    { id: 10, title: "Anti-scald devices" },
    { id: 11, title: "Toilet safety frames" },
    { id: 12, title: "Door lever handles (replacing knobs)" },
    { id: 13, title: "Simple cabinet hardware changes" },
    { id: 14, title: "Bath steps or rails" },
    { id: 15, title: "Transfer benches" },
    { id: 16, title: "Portable ramps" },
    { id: 17, title: "Threshold ramps" },
    { id: 18, title: "Voice-activated controls for fixtures" },
    { id: 19, title: "Emergency call buttons or pull cords" },
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

  const isNextDisabled = selectedItems.length === 0;

  return (
    <div className="pt-[50px] pb-[100px] md:pt-[100px] md:pb-[215px] max-sm:px-[16px] flex items-center justify-center poppin">
      <div className="w-full max-w-[600px]">
        <h2 className="md:text-[18px] text-[17px] font-semibold leading-[28px] mb-[15px]">
          Which specific safety features are you interested in installing?
          (Select all that apply)
        </h2>

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

          <div className="flex flex-col mt-[5px]">
            <input
              type="text"
              placeholder="Other (optional)"
              className="border border-gray-400 bg-[#F7F7F7] rounded-[10px] text-[14px] text-black font-medium px-4 py-[14px]"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-[40px] md:mt-[60px] flex justify-between items-center gap-4">
          <Link to="/question2">
            <button className="text-[#5E5E6F] text-[16px] font-medium">
              &lt; Previous
            </button>
          </Link>

          <Link to={isNextDisabled ? "#" : "/question4"}>
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

export default Question3;
