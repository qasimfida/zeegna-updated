import React, { useState } from "react";

const FamilyHelpCard = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 131;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const trimmedDescription =
    description.length > maxLength && !isExpanded
      ? description.slice(0, maxLength) + "..."
      : description;

  return (
    <div className="max-w-2xl	 mx-auto bg-white    relative group cursor-pointer poppin">
      <div className="xl:px-5 py-2">
        <h5 className="mb-2 text-xl font-bold ">{title}</h5>

        <p className="mb-5 font-medium text-lg	 text-[#5E5E6F]">
          {trimmedDescription}
          {description.length > maxLength && (
            <span
              onClick={toggleExpand}
              className="text-[#06C] cursor-pointer ml-2 font-medium"
            >
              {isExpanded ? "See less" : "See more"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default FamilyHelpCard;
