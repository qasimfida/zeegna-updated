import React, { useState } from "react";
import SearchIcon from "../../assets/icons/arrow/SearchIcon";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedTrends, setSelectedTrends] = useState([]);
  const navigate = useNavigate();

  // Options with paths
  const options = [
    { label: "Home modifications", path: "/home-modifications" },
    { label: "Home safety", path: "/homes-safety" },
    { label: "Home automation", path: "/homes-automation" },
    { label: "Home care", path: "/homes-care" },
    { label: "Home maintenance", path: "/home-maintenance" },
    { label: "Professional services", path: "/professional-service" },
  ];

  const showDropdown = () => setDropdownVisible(true);
  const hideDropdown = () => setTimeout(() => setDropdownVisible(false), 150);

  const handleSelection = (selectedOption) => {
    setSearchValue(selectedOption.label);
    setDropdownVisible(false);

    if (!selectedTrends.some((trend) => trend.label === selectedOption.label)) {
      setSelectedTrends((prev) => [...prev, selectedOption]);
    }

    navigate(selectedOption.path);
  };

  return (
    <form className="max-w-[739px] mx-auto relative">
      <div className="relative overflow-hidden">
        <input
          type="search"
          id="default-search"
          className="w-full md:py-[18px] py-[15px] focus:outline-none pl-[20px] pr-[5px] 
            md:text-[16px] text-[16px] sm:text-[16px] outline-none rounded-[30px] 
            bg-[#F7F7F7] max-w-full touch-action-manipulation appearance-none 
            -webkit-text-size-adjust-100"
          placeholder="What type of help do you need?"
          value={searchValue}
          onFocus={showDropdown}
          onBlur={hideDropdown}
          onChange={(e) => setSearchValue(e.target.value)}
          required
        />

        <div
          className="bg-black md:w-[50px] w-[40px] h-[40px] absolute top-[7px] 
              md:top-[5px] right-[5px] md:h-[50px] rounded-[50%] flex items-center justify-center"
        >
          <SearchIcon />
        </div>
      </div>

      {/* Dropdown Section */}
      {dropdownVisible && (
        <div
          id="dropdown"
          className="absolute md:top-[60%] top-[40%] left-0 w-full bg-[#F7F7F7] border border-[#EAEAF1] shadow-md rounded-[15px] z-10"
        >
          <ul className="py-2">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-[20px] py-[15px] font-medium hover:bg-[#F0F0F0] cursor-pointer"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleSelection(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Trending Section */}
      <div className="mt-[25px] max-sm:mt-[15px] flex items-center justify-center max-sm:flex-col gap-[10px]">
        <p className="text-[#5E5E6F] font-medium md:text-[16px] text-[14px]">
          Trending
        </p>
        <div className="md:flex items-center gap-[10px] max-sm:grid-cols-2 max-sm:grid">
          {[
            { label: "Personal care", path: "/services/personal-care" },
            { label: "Bathroom remodel", path: "/services/bathroom-safety" },
            {
              label: "Kitchen remodel",
              path: "/services/kitchen-accessibility",
            },
            {
              label: "Stairlift installation",
              path: "/services/stair-modifications",
            },
            ...selectedTrends, // Add dynamically selected options here
          ].map((trend, index) => (
            <button
              key={index}
              className="px-[13px] py-[5px] leading-[20px] text-[14px] bg-[#DCEFDF] font-medium rounded-[30px] hover:bg-[#D4EADD] transition"
              onClick={() => navigate(trend.path)}
            >
              {trend.label}
            </button>
          ))}
        </div>
      </div>
    </form>
  );
}

export default Searchbar;
