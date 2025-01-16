import React, { useState } from "react";
import Question2Card from "../questionnaire/Question2Card";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const QuizEleven = () => {
  const Question2Data = [
    { id: 1, title: "Bathroom" },
    { id: 2, title: "Kitchen" },
    { id: 3, title: "Entryways" },
    { id: 4, title: "Outdoor spaces" },
    { id: 5, title: "Entire home" },
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
    <>
      <div className="pt-[49px] md:pl-[26px] pb-[100px] md:pb-[215px] max-sm:px-[16px] flex items-center justify-center poppin ">
        <div className="w-full max-w-[600px]">
          {/* Question Title */}
          <h2 className="md:text-[18px] text-[17px] font-semibold leading-[28px] mb-[15px]">
            What areas of the home do you want to focus on during the
            consultation? (Select all that apply)
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
          </div>

          {/* Navigation Buttons */}
          <div className="mt-[40px] md:mt-[60px] flex justify-between items-center gap-4">
            <Link to="/quiz-10">
              <button className="text-[#5E5E6F] text-[16px] font-medium">
                &lt; Previous
              </button>
            </Link>

            <Link to={isNextDisabled ? "#" : "/quiz-12"}>
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
    </>
  );
};
export default QuizEleven;
