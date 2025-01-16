"use client";

import React, { forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardCaraousalMobile = forwardRef(({ children }, ref) => {
  const slidesToShow = 1;
  var settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
  };
  return (
    <Slider ref={ref} {...settings}>
      <div>{children}</div>
    </Slider>
  );
});
CardCaraousalMobile.displayName = "CardCaraousalMobile";

export { CardCaraousalMobile };
