"use client";

import React from "react";
import { Blog } from "../Blog/Blog";
import { useRouter } from "next/navigation";
import { usePageLayout } from "@/contexts/PageLayout";

export const BlogsWithHeader = ({
  blogs = [],
  heading,
  viewAll = false,
  className = "",
}) => {
  const { setGlobalValue } = usePageLayout();
  const router = useRouter();
  return (
    <div
      className={`flex flex-col justify-between sm:auto relative bg-white rounded-2xl min-h-28 px-5 py-4 ${className}`}
    >
      <div className="flex justify-between w-full border-b pb-2.5 items-center  mb-4">
        <h4 className="text-5xl text-grey-400">{heading}</h4>
        {viewAll && (
          <div className="flex gap-4 items-center cursor-pointer">
            <h4
              className="text-base font-semibold text-grey-400"
              onClick={() => router.push("/blogs")}
            >
              View all
            </h4>
          </div>
        )}
      </div>
      <div className="w-full grid gap-5 lg:grid-cols-2 lg:grid xl:grid-cols-3">
        {blogs?.map((item) => {
          return <Blog key={`${item.id}-item.id`} blog={item} />;
        })}
      </div>
    </div>
  );
};
