"use client";

import React, { useRef } from "react";
import BlogsWithHeader from "@/components/BlogsWithHeader";
import { blogs } from "./data";
import Tab from "@/components/Tab";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/svgs/ArrowRightIcon";
import Button from "@/components/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { BlogPromo } from "@/components/Blog/Blog";
import Select from "@/components/Select";

const CustomDots = ({ slides, currentSlide, goToSlide }) => {
  return (
    <ul className="flex justify-center space-x-1.5 bottom-0 lg:bottom-5 left-0 absolute">
      {slides.map((slide, index) => (
        <li key={index}>
          <button
            className={`${
              index === currentSlide ? "bg-primary" : "bg-white-500"
            } w-2 h-2 rounded-full`}
            onClick={() => goToSlide(index)}
          ></button>
        </li>
      ))}
    </ul>
  );
};

export const Blogs = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const ref = useRef();
  const router = useRouter();
  const params = useSearchParams();
  const tab = params.get("tab") || "all";

  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (slide) => {
      setCurrentSlide(slide);
    },
    appendDots: (dots) => (
      <CustomDots
        slides={dots}
        currentSlide={currentSlide}
        goToSlide={(index) => {
          setCurrentSlide(index);
          ref.current.slickGoTo(index);
        }}
      />
    ),
  };

  const promo = {
    id: 1,
    image: "/images/blogs/promo.png",
    topic: "Featured",
    title: "Employment Abroad: The Fastest Way to Get a Healthcare Job in 2024",
    description:
      "The World Health Organization has been highlighting the acute shortage of workers for quite some time. In particular, experts predict that by 2030 the world will be short of more than 18 million doctors. The shortage of doctors is greatest in developed countries such as the US, UK, Germany, Sweden, Australia, Singapore and Japan.",
  };

  const tags = [
    { id: "all", name: "All Articles" },
    { id: "most-popular", name: "Most Popular" },
    { id: "careers", name: "Careers" },
    { id: "lifestyle", name: "Lifestyle" },
    { id: "financing", name: "Financing" },
    { id: "education", name: "Continuing Education" },
  ];

  const selectedTab = tags.find((i) => i.id === tab);
  return (
    <div>
      <div className="rounded-2xl bg-white overflow-hidden px-5 mb-5 pb-8 lg:pb-0">
        <Slider ref={ref} {...settings}>
          <div>
            <div className="flex flex-nowrap items-center ">
              <div className="relative w-full lg:w-2/4 xl:w-[55%] py-8 pb-11 xl:py-5 xl:pb-5">
                <h3 className="block text-grey-400 text-2xl font-semibold max-w-lg ">
                  Mapping your path to success in the nursing career
                </h3>
                <p className="block text-base font-normal text-grey-400 mt-1 mb-4">
                  The World Health Organization has been highlighting the acute
                  shortage of workers for quite some time. In particular,
                  experts predict that by 2030...
                </p>
                <Link
                  href="#"
                  className="flex gap-2 items-center text-base text-primary font-semibold hover:text-primary "
                >
                  Read more <ArrowRightIcon />
                </Link>
              </div>
              <div className="relative h-96 xl:w-[45%] lg:w-2/4 hidden lg:block ">
                <Image
                  src="/images/blogs/slider/1.png"
                  fill
                  style={{ objectFit: "contain" }}
                  alt="slider-promo"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-nowrap items-center ">
              <div className="relative w-full lg:w-2/4 xl:w-[55%] py-8 pb-11 xl:py-5 xl:pb-5">
                <h3 className="block text-grey-400 text-2xl font-semibold max-w-lg ">
                  Mapping your path to success in the nursing career
                </h3>
                <p className="block text-base font-normal text-grey-400 mt-1 mb-4">
                  The World Health Organization has been highlighting the acute
                  shortage of workers for quite some time. In particular,
                  experts predict that by 2030...
                </p>
                <Link
                  href="#"
                  className="flex gap-2 items-center text-base text-primary font-semibold hover:text-primary "
                >
                  Read more <ArrowRightIcon />
                </Link>
              </div>
              <div className="relative h-96 xl:w-[45%] lg:w-2/4 hidden lg:block ">
                <Image
                  src="/images/blogs/slider/1.png"
                  fill
                  style={{ objectFit: "contain" }}
                  alt="slider-promo"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="bg-white p-5 rounded-2xl mb-5 hidden lg:block">
        <div className="flex gap-x-4 gap-y-2 flex-wrap">
          {tags?.map((tag) => (
            <Tab key={`activites-${tag.id + 1}`} tab={tab} tag={tag} />
          ))}
        </div>
      </div>

      <div className="mb-4 lg:hidden h-16 bg-white rounded-2xl flex items-center">
        <Select
          options={tags}
          value={selectedTab}
          onChange={(tag) => router.push(`?tab=${tag.id}`)}
          variant="simple"
          selectClass="!rounded-2xl font-medium !ring-0 "
        />
      </div>

      <div className="mb-5">
        <BlogPromo blog={promo} />
      </div>

      {(tab === "all" || tab === "most-popular") && (
        <BlogsWithHeader
          blogs={blogs}
          heading="Most Popular"
          className="mb-5"
        />
      )}
      {(tab === "all" || tab === "careers") && (
        <BlogsWithHeader blogs={blogs} heading="Careers" className="mb-5" />
      )}
      {(tab === "all" || tab === "lifestyle") && (
        <BlogsWithHeader blogs={blogs} heading="Lifestyle" className="mb-5" />
      )}
      {(tab === "all" || tab === "financing") && (
        <BlogsWithHeader blogs={blogs} heading="Financing" className="mb-5" />
      )}
      {(tab === "all" || tab === "education") && (
        <BlogsWithHeader
          blogs={blogs}
          heading="Continuing Education"
          className=""
        />
      )}
    </div>
  );
};
