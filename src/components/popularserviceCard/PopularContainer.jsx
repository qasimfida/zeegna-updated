import React from "react";
import Slider from "react-slick";
import PopularData from "../../data/PopularData";
import PopularCard from "./PopularCard";

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

function PopularContainer() {
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
    <>
      <div className="bg-[#fffff] poppin mb-[80px]">
        <div className="max-w-7xl mx-auto max-sm:py-0">
          <div className="text-center max-sm:mt-10	">
            <h2 className="font-semibold text-xl md:text-[32px] ">
              Popular services
            </h2>
            <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
          </div>

          {/* <div className="block md:hidden mt-[50px]">
            <Slider {...settings}>
              {PopularData?.map((card) => (
                <PopularCard
                  key={card.id}
                  image={card.image}
                  title={card.title}
                  bgColor={card.bgColor}
                />
              ))}
            </Slider>
          </div> */}

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-[50px]">
            {PopularData?.map((card) => (
              <PopularCard
                key={card.id}
                image={card.image}
                title={card.title}
                bgColor={card.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularContainer;
