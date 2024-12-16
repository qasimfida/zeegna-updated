"use client";

import React, { Children, forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardCaraousal = forwardRef(({ children }, ref) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const newArr = Children.toArray(children);

  return (
    <div className="slider-container ">
      <Slider ref={ref} {...settings}>
        {newArr?.length > 0 &&
          newArr?.map((child, index) => {
            return <div key={`option-${index + 1}`}>{child}</div>;
          })}
      </Slider>
    </div>
  );
});
CardCaraousal.displayName = "CardCaraousal";

export { CardCaraousal };
