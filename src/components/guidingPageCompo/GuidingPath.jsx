import React from "react";

function GuidingPath() {
  return (
    <div className="bg-[#F7F7F7] py-24	poppin">
      <div className="text-center">
        <h2 className="font-semibold text-4xl">
          Principles that guide our path
        </h2>
        <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
      </div>
      {/* card 1 */}
      <div className="text-gray-600 body-font  ">
        <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
            <h1 className="text-2xl font-semibold leading-9 tracking-tight mb-3 text-gray-900  sm:text-4xl sm:leading-10 md:text-3xl md:leading-normal">
              Build with passion
            </h1>
            <p className="mb-8 md:pl-0 pl-2 pr-2 leading-relaxed text-xl	w-9/12 text-[#5E5E6F]	">
              Our passion is the driving force behind everything we do at
              ZyraHealth. We're passionate about creating something truly
              remarkable that's infused with a sense of purpose and enthusiasm.
              We strive to build superior experiences for those we serve, create
              work that is meaningful, and help make a positive
              impact on their lives.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="images/GuidingPath1.png"
            />
          </div>
        </div>
      </div>
      {/* card 2 */}
      <div className="text-gray-600 body-font  ">
        <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="images/GuidingPath2.png"
            />
          </div>
          <div className="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2 lg:pl-24 md:pl-16 flex flex-col  mb-16 md:mb-0 items-center ">
            <h1 className="text-2xl font-semibold leading-9 tracking-tight mb-3 text-gray-900  sm:text-4xl sm:leading-10 md:text-3xl md:leading-normal ">
              Inspire for better
            </h1>
            <p className="mb-8 md:pl-0 pl-2  leading-relaxed text-xl	w-9/12  text-[#5E5E6F]	">
              We believe in raising the standard for how society approaches
              aging. Our vision is to build a future where aging at home is
              embraced as the natural, dignified choice with families and
              communities coming together to make that possible. We're striving
              to create a more compassionate world, where seniors are valued and
              families are empowered.
            </p>
          </div>
        </div>
      </div>

      {/* card 3 */}
      <div className="text-gray-600 body-font  ">
        <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-2xl font-semibold leading-9 tracking-tight mb-3 text-gray-900  sm:text-4xl sm:leading-10 md:text-3xl md:leading-normal">
              Deliver for many
            </h1>
            <p className="mb-8 md:pl-0 pl-2 pr-2 leading-relaxed text-xl	w-9/12 text-[#5E5E6F]	">
              We believe aging at home is a fundamental right, not a privilege.
              It's our vision to build a care system where every senior can age
              in the comfort of their home surrounded by people and places they
              love. We're dedicated to create a platform that is not just
              functional but truly impactful - accessible, inclusive, and built
              to support every family on this journey.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="images/GuidingPath3.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuidingPath;
