"use client";

import React, { useEffect, useState } from "react";
import cls from "classnames";
import feature from "../../../public/images/feature.png";
import Image from "next/image";
import {
  ClockImageIcon,
  ThumbsUpIcon,
  ArrowRightIcon,
  StarBadgeIcon,
} from "@/svgs/icons";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const JobApplyCard = ({ type, variant = "rightbar" }) => {
  const router = useRouter();
  const [id, setId] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const parts = pathname?.split("/");
    const lastPart = parts[parts.length - 1];
    setId(lastPart);
  }, [pathname]);

  return (
    <div className="flex overflow-hidden bg-white rounded-2xl gap-4  min-h-28 w-full lg:min-w-[350px]">
      <div className="flex flex-col focus-within:z-10 w-full relative ">
        <div className={cls`flex flex-col`}>
          <div
            className={`flex items-center rounded-t-2xl justify-between  border-b border-grey-100  ${
              variant === "rightbar" ? "py-5 px-4" : "py-4 mx-5"
            } relative`}
          >
            <div className="flex justify-between items-center gap-3">
              <div className="flex items-center justify-center max-w-16 md:max-w-20 min-w-16 md:min-w-20 max-h-16 md:max-h-20 min-h-16 md:min-h-20 rounded-[10px] bg-white border border-grey-100 relative">
                {
                  <Image
                    className="w-full rounded-[10px] "
                    src={feature}
                    alt="Career Image"
                    style={{ objectFit: "cover", padding: "2px" }}
                    fill
                  />
                }
              </div>
              <div>
                <p className="text-sm font-semibold text-primary flex items-center gap-1">
                  <StarBadgeIcon className="min-w-6 max-w-6 min-h-6 max-h-6" />
                  Trusted Partner
                </p>
                <p className="text-sm md:text-base font-semibold text-grey-400 line-clamp-1">
                  Bayada Home Care Charlotte Charlotte
                </p>
                <p className="text-sm font-medium text-grey-400 line-clamp-1">
                  Part of Bayada Home Care
                </p>
              </div>
            </div>
            <div className=""></div>
          </div>
          <div
            className={variant === "rightbar" ? "p-5" : "px-5 py-4 border-b"}
          >
            <div className="flex flex-col gap-2.5">
              <p className="text-sm font-semibold md:text-4xl text-grey-400 line-clamp-2">
                Director, Women’s and Infants Services (RN)
              </p>
              <p
                className={`text-sm md:text-base text-grey-500 font-medium flex gap-1`}
              >
                <span
                  className={`text-sm md:text-base text-grey-400 font-medium `}
                >
                  Employer Type:
                </span>
                Home Health Agency
              </p>
              <p
                className={`text-sm md:text-base text-grey-500 font-medium flex gap-1`}
              >
                <span
                  className={`text-sm md:text-base text-grey-400 font-medium `}
                >
                  Employer Size:
                </span>
                500-1000 employees
              </p>
              <p
                className={`text-sm md:text-base text-grey-500 font-medium flex gap-1`}
              >
                <span
                  className={`text-sm md:text-base text-grey-400 font-medium `}
                >
                  Website:
                </span>
                <Link
                  href="#"
                  className="text-sm md:text-base decoration-none text-primary-2600"
                >
                  www.bayadahomecare.com
                </Link>
              </p>
              <p
                className={`text-sm md:text-base text-grey-500 font-medium flex gap-1`}
              >
                <span
                  className={`text-sm md:text-base text-grey-400 font-medium `}
                >
                  Location:
                </span>
                Conroe, TX
              </p>
              <p
                className={`text-sm md:text-base text-grey-500 font-medium flex gap-1`}
              >
                <span
                  className={`text-sm md:text-base text-grey-400 font-medium `}
                >
                  Staff to Patient Ratio:
                </span>
                3x1
              </p>
              <p
                className={`text-sm md:text-base text-grey-500 font-medium flex gap-1 pb-0 md:pb-2.5`}
              >
                <span
                  className={`text-sm md:text-base text-grey-400 font-medium `}
                >
                  Bed Count:
                </span>
                110
              </p>
            </div>
            {variant === "rightbar" && (
              <div className="">
                <div className="flex items-center gap-4 border-b border-grey-100 border-t py-2.5">
                  <div className="text-primary">
                    <ClockImageIcon className="w-8" />
                  </div>
                  <div className="flex gap-1 flex-col">
                    <p className="text-sm text-grey-400 font-medium">
                      Posted 5 days ago.
                    </p>
                    <p className="text-sm text-grey-400 font-medium">
                      Deadline to apply: 6/15/24
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-b border-grey-100  py-2.5 min-h-[52px]">
                  <div className="text-primary">
                    <ThumbsUpIcon className="w-8" />
                  </div>
                  <div>
                    <p className="text-sm text-grey-400 font-medium">
                      80% match to your profile
                    </p>
                  </div>
                </div>
              </div>
            )}
            {variant === "rightbar" && (
              <div className="flex focus-within:z-10  w-full items-center justify-center mt-4 ">
                <button
                  type="button"
                  className={` rounded-3xl w-full flex text-base font-medium text-white  h-10 leading-6  items-center justify-center gap-2.5 ${
                    type === "expired" || type === "applied"
                      ? "bg-grey-200"
                      : "bg-grey-1800 hover:bg-grey-1100 "
                  }`}
                  onClick={() => router.push(`/work/discover/${id}?tab=apply`)}
                >
                  Apply
                  <ArrowRightIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
