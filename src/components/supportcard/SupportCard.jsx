import React from "react";

const SupportCard = ({
  headingLine1 = "Can't find what you are looking for?",

  description = "Get the care you need to stay happy and healthy in your home",
  buttonText = "Contact Support",
  imageSrc = "images/Rectangle.png",
  onButtonClick,
}) => {
  return (
    <section className="sm:mt-6 lg:mt-8 mt-12 max-w-5xl mx-auto px-4 max-md:px-5 sm:px-6 lg:px-8 bg-[#E5FFEF] rounded-[40px] poppin">
      <div className="mb-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 mt-0 lg:px-8 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row py-16 md:text-center">
        <div className="max-md:text-center lg:text-left">
          <h1 className="text-2xl	 tracking-tight font-semibold max-sm:text-lg max-md:text-xl">
            <span className="block xl:inline mt-2 max-md:text-center">
              {headingLine1}
            </span>
          </h1>
          <p className="mt-3 text-xl text-[#5E5E6F] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 xl:w-[50%]">
            {description}
          </p>
          <div className="mt-10 md:flex max-md:justify-center max-md:items-center">
            <button
              onClick={onButtonClick}
              className="rounded-full flex items-center justify-center gap-4 px-20 lg:w-96 text-base font-medium py-3.5 max-sm:py-2 bg-[#1C1C1C] text-white"
            >
              {buttonText}
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-[20px]"
            src={imageSrc}
            alt="Support"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportCard;
