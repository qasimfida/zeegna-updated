import React from "react";
import ExploreCard from "./ExploreCard";
import ExploreData from "../../data/ExploreData";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-arrow`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-arrow`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
}

function ExploreContainer() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="bg-white poppin mb-[80px]">
      <div className=" mx-[70px]">
        <div className="text-center mt-10">
          <h2 className="font-semibold text-xl md:text-[32px] text-[#1C1C1C] ">
            Explore help at home by city{" "}
          </h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-4"></div>
          <p class="font-medium text-sm md:text-xl text-[#575757] mt-[20px] lg:w-[846px] mx-auto leading-5	    ">
            From home repairs to cleaning to specialized care and more, find
            trusted professionals to keep your home running smoothly in your
            city.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-[50px]">
          {ExploreData.map((card) => (
            <ExploreCard
              key={card.id}
              image={card.image}
              title={card.title}
              bgColor={card.bgColor} // Ensure bgColor is applied in ExploreCard if needed
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreContainer;
