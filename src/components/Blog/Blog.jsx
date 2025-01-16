"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import healcareImage from "../../../public/images/healcareImage.png";
import { useRouter } from "next/navigation";
import { usePageLayout } from "@/contexts/PageLayout";
import Link from "next/link";
import { ArrowRightIcon } from "@/svgs/ArrowRightIcon";

export const Blog = ({ blog }) => {
  const { image, topic, heading, id } = blog;
  const { setGlobalValue } = usePageLayout();
  const router = useRouter();
  return (
    <div
      className="card w-full  ring-0 sm:hover:ring-1 rounded-2xl sm:hover:ring-black sm:hover:shadow-xl sm:ease-in cursor-pointer  cursor:pointer "
      onClick={() => {
        setGlobalValue({
          hasRightbar: false,
          hasTabbar: false,
        });
        router.push(`/blogs/${String(id)}`);
      }}
    >
      <div className="w-full border-0">
        <Image
          className="w-full rounded-t-2xl"
          src={image ? image : healcareImage}
          alt="Career Image"
        />
      </div>
      <div className="border rounded-b-2xl ">
        <Button
          className="mt-4 mx-4 !px-2 !h-6 !text-sm"
          variant="tagOutlined"
          size="sm"
        >
          {topic}
        </Button>
        <p className="mx-4 mt-1 text-base font-semibold text-grey-400 w-11/12">
          {heading}
        </p>
        <div className="mx-4 mt-1 mb-4 text-sm font-normal text-grey-400 flex flex-wrap items-center">
          <span className="   min-w-max ">Zeyra Health</span>
          <div className="w-[5px] mx-2.5 bg-grey-400 rounded-full h-[5px]"></div>
          <span className="  min-w-max">Apr 24, 2024</span>
          <div className="w-[5px] mx-2.5 bg-grey-400 rounded-full h-[5px]"></div>
          <span className=" min-w-max ">5 min</span>
        </div>
      </div>
    </div>
  );
};

export const BlogPromo = ({ blog }) => {
  const { image, topic, title, id, description, href } = blog;
  const { setGlobalValue } = usePageLayout();
  const router = useRouter();
  return (
    <div
      className="card min-h-80 w-full bg-white rounded-2xl border sm:hover:border-success cursor-pointer sm:hover:shadow-xl sm:ease-in cursor:pointer flex flex-wrap lg:flex-nowrap overflow-hidden lg:items-center"
      onClick={() => {
        setGlobalValue({
          hasRightbar: false,
          hasTabbar: false,
        });
        router.push(`/blogs/${String(id)}`);
      }}
    >
      <div className="w-full lg:w-5/12 relative h-full min-h-40 lg:min-h-80 ">
        <Image
          src={"/images/blogs/promo.png"}
          alt="Career Image"
          style={{ objectFit: "cover" }}
          fill
        />
      </div>
      <div className=" w-full p-4 lg:p-5 lg:w-7/12 ">
        <Button
          className="mb-1 lg:mb-4 !px-2 !h-6"
          variant="tagOutlined"
          size="sm"
        >
          {topic}
        </Button>
        <p className="mt-1 text-5xl text-grey-400 w-11/12">{title}</p>
        <p className="mt-2.5 mb-1 lg:mb-4 text-base font-normal text-grey-400 line-clamp-3">
          {description}
        </p>
        <Link
          href={href || "#"}
          className="flex gap-2 items-center text-base text-grey-400 font-semibold text-primary "
        >
          Read more <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
};
