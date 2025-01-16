"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Button from "../Button";
import {
  FaceBookOutlinedIcon,
  LinkedInOutlinedIcon,
  MailOutlinedIcon,
  TwitterOutlinedIcon,
} from "@/svgs/icons";
import BlogsWithHeader from "../BlogsWithHeader";
import { blogs } from "@/containers/Blogs/data";

export const BlogDetails = () => {
  const params = useParams();
  const { id } = params;
  return (
    <div className="flex flex-col justify-between sm:auto relative bg-transparent rounded-2xl min-h-28 ">
      <div className="w-full flex flex-col sm:flex sm:flex-row bg-cover rounded-2xl overflow-hidden bg-primary-1200  md:items-center mb-5">
        <div className="w-full lg:w-1/2 p-5 text-grey-400 flex flex-wrap gap-4 ">
          <Button className="!h-8 px-2.5 py-1 rounded-2xl !font-medium !text-sm !bg-transparent !text-grey-400 border !border-grey-400 ">
            Most Popular
          </Button>
          <h4 className="text-2xl font-semibold text-start">
            Your Guide to Getting a Compact State Nursing License
          </h4>
          <div className=" text-sm text-grey-400 flex flex-wrap items-center">
            <span className="   min-w-max ">Zeyra Health</span>
            <div className="w-[5px] mx-2.5 bg-grey-400 rounded-full h-[5px]"></div>
            <span className="  min-w-max">Apr 24, 2024</span>
            <div className="w-[5px] mx-2.5 bg-grey-400 rounded-full h-[5px]"></div>
            <span className=" min-w-max ">5 min</span>
          </div>
          <div className="w-full flex gap-1 mt-1">
            <div className="border border-grey-400 rounded-full h-9 w-9 flex items-center justify-center ">
              <FaceBookOutlinedIcon />
            </div>
            <div className="border border-grey-400 rounded-full h-9 w-9 flex items-center justify-center ">
              <TwitterOutlinedIcon />
            </div>
            <div className="border  border-grey-400 rounded-full h-9 w-9 flex items-center justify-center ">
              <LinkedInOutlinedIcon />
            </div>
            <div className="border border-grey-400 rounded-full h-9 w-9 flex items-center justify-center ">
              <MailOutlinedIcon />
            </div>
          </div>
        </div>
        <div className="w-2/4 relative h-96 hidden lg:block  ">
          <Image src={"/images/blogs/articles/1.png"} alt="Career Image" fill />
        </div>
      </div>
      <div className="py-5 px-4 text-grey-400 bg-white rounded-2xl lg:p-8">
        <div className="mb-4 lg:mb-6">
          <p className="font-medium text-grey-500">
            If you&apos;re dreaming of taking your nursing career across state
            lines without the headache of juggling multiple licenses, a Compact
            State Nursing License (also known as an Enhanced Nurse Licensure
            Compact, or eNLC) is your golden ticket. This special type of
            license lets you work in any of the eNLC member states using just
            one multistate license. Ready to expand your horizons? Here’s your
            friendly guide to smoothly navigate through the application process.
          </p>
        </div>
        <div className="mb-4 lg:mb-6">
          <h4 className="text-lg text-grey-400 mb-2 font-semibold ">
            Step 1: Are You Eligible? Let’s Find Out!
          </h4>
          <p className="font-medium text-grey-500">
            <strong>First up, let’s make sure you’re ready to roll.</strong> To
            apply for the eNLC, you need an active RN or LPN/VN license without
            any disciplinary actions. Your primary residence should be in one of
            the eNLC states. Think of this as your home base—where you vote, pay
            taxes, and maybe even root for the local football team. Each state
            has specific eligibility criteria, so a quick visit to your state
            nursing board’s website will clear up what’s required. They lay it
            all out for you, and it’s a great first step in this journey.
          </p>
        </div>
        <div className="mb-4 lg:mb-6">
          <h4 className="text-lg text-grey-400 mb-2 font-semibold ">
            Step 1: Are You Eligible? Let’s Find Out!
          </h4>
          <p className="font-medium text-grey-500">
            <strong>First up, let’s make sure you’re ready to roll.</strong> To
            apply for the eNLC, you need an active RN or LPN/VN license without
            any disciplinary actions. Your primary residence should be in one of
            the eNLC states. Think of this as your home base—where you vote, pay
            taxes, and maybe even root for the local football team. Each state
            has specific eligibility criteria, so a quick visit to your state
            nursing board’s website will clear up what’s required. They lay it
            all out for you, and it’s a great first step in this journey.
          </p>
        </div>
        <div className="mb-4 lg:mb-6">
          <h4 className="text-lg text-grey-400 mb-2 font-semibold ">
            Step 1: Are You Eligible? Let’s Find Out!
          </h4>
          <p className="font-medium text-grey-500">
            <strong>First up, let’s make sure you’re ready to roll.</strong> To
            apply for the eNLC, you need an active RN or LPN/VN license without
            any disciplinary actions. Your primary residence should be in one of
            the eNLC states. Think of this as your home base—where you vote, pay
            taxes, and maybe even root for the local football team. Each state
            has specific eligibility criteria, so a quick visit to your state
            nursing board’s website will clear up what’s required. They lay it
            all out for you, and it’s a great first step in this journey.
          </p>
        </div>
        <div className="mb-4 lg:mb-6">
          <h4 className="text-lg text-grey-400 mb-2 font-semibold ">
            Step 1: Are You Eligible? Let’s Find Out!
          </h4>
          <p className="font-medium text-grey-500">
            <strong>First up, let’s make sure you’re ready to roll.</strong> To
            apply for the eNLC, you need an active RN or LPN/VN license without
            any disciplinary actions. Your primary residence should be in one of
            the eNLC states. Think of this as your home base—where you vote, pay
            taxes, and maybe even root for the local football team. Each state
            has specific eligibility criteria, so a quick visit to your state
            nursing board’s website will clear up what’s required. They lay it
            all out for you, and it’s a great first step in this journey.
          </p>
        </div>
        <div className="">
          <h4 className="text-lg text-grey-400 mb-2 font-semibold ">
            Step 1: Are You Eligible? Let’s Find Out!
          </h4>
          <p className="font-medium text-grey-500">
            <strong>First up, let’s make sure you’re ready to roll.</strong> To
            apply for the eNLC, you need an active RN or LPN/VN license without
            any disciplinary actions. Your primary residence should be in one of
            the eNLC states. Think of this as your home base—where you vote, pay
            taxes, and maybe even root for the local football team. Each state
            has specific eligibility criteria, so a quick visit to your state
            nursing board’s website will clear up what’s required. They lay it
            all out for you, and it’s a great first step in this journey.
          </p>
        </div>
      </div>
      <BlogsWithHeader blogs={blogs} heading="Most popular" className="mt-5" />
    </div>
  );
};
