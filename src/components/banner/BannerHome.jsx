import React from "react";

function BannerHome() {
  return (
    <div
      className="flex flex-col md:flex-row rounded-3xl shadow-lg mx-4 sm:mx-4 lg:mx-auto md:mx-[17px]"
      style={{ maxWidth: "1260px",backgroundColor: "#D2D4FF" }}
    >
      <div className="md:w-1/2 text-center md:text-left p-10 flex-[0_0_60%]">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Create a safer home to age independently at home
        </h2>
        <p className="text-gray-600 mb-6">
          Take our home evaluation quiz to get a custom, room-by-room plan for
          older adults, focusing on mobility and accessibility to make your home
          safer and more comfortable.
        </p>
        <button className="px-4 py-2 border-2 rounded-full border-black font-medium">
          Take home evaluation quiz
        </button>
      </div>
      <div className="md:w-1/2 flex-[0_0_40%] ">
        <div className="flex justify-end items-end">
          <img
            src="/images/banner_heart.png"
            alt="Older adult smiling"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default BannerHome;
