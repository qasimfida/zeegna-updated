"use client";
import {
  QuestionIcon,
  SheildIcon,
  CoverIcon,
  LockIcon,
  ArrowRightIcon,
} from "../../svgs/icons";

export const Footer = () => {
  return (
    <footer className="w-full bg-white rounded-2xl">
      <div className="flex flex-col gap-4 lg:gap-0 lg:flex lg:flex-row lg:items-center xl:gap-0 justify-between px-4 py-8 md:px-3 md:py-6 items-start">
        <div className="flex flex-col gap-2.5 md:gap-2.5 w-full lg:w-auto">
          <div className="flex justify-start md:justify-center">
            <div className="flex items-center justify-center rounded-full border-2 text-grey-1800 border-grey-1800 min-w-10 max-w-10 min-h-10 max-h-10 hover:text-grey-400 hover:border-grey-400">
              <QuestionIcon aria-hidden="true" />
            </div>
          </div>
          <div className="flex flex-col md:items-center ">
            <p className="text-4xl text-grey-400 mb-[5px]">Drop a Line</p>

            <p className="text-sm text-grey-400 font-normal text-start md:text-center w-full md:w-[95%] mb-2.5">
              Questions or feedback? We are all ears and ready to help!
            </p>
            <button
              type="button"
              className="flex text-base font-medium text-primary leading-6 md:items-center gap-2 hover:text-primary-light"
            >
              Start Convo
              <ArrowRightIcon className="w-5 h-5 ml-1.5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 md:gap-2.5 w-full lg:w-[450px]">
          <div className="flex justify-start md:justify-center">
            <div className="flex items-center justify-center rounded-full border-2 text-grey-1800 border-grey-1800 min-w-10 max-w-10 min-h-10 max-h-10 hover:text-grey-400 hover:border-grey-400">
              <SheildIcon aria-hidden="true" />
            </div>
          </div>
          <div className="flex flex-col md:items-center items-start  gap-1">
            <p className="text-4xl text-grey-400 mb-1">Support Hub</p>

            <p className="text-sm text-grey-400 font-normal text-start md:text-center mb-1  ">
              Navigate your way through solutions, common queries, and FAQs.
            </p>
            <button
              type="button"
              className="rounded-3xl flex items-center text-base font-medium text-primary justify-center leading-6 gap-2 hover:text-primary-light"
            >
              Support Center
              <ArrowRightIcon className="w-5 h-5 ml-1.5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 md:gap-2.5 w-full lg:w-[500px]">
          <div className="flex justify-start md:justify-center">
            <div className="flex items-center justify-center rounded-full border-2 text-grey-1800 border-grey-1800 min-w-10 max-w-10 min-h-10 max-h-10 hover:text-grey-400 hover:border-grey-400">
              <CoverIcon aria-hidden="true" />
            </div>
          </div>
          <div className="flex flex-col md:items-center items-start   gap-1">
            <p className="text-4xl text-grey-400 text-center mb-1">
              Rules of Engagement
            </p>

            <p className="text-sm text-grey-400 font-normal  text-start md:text-center mb-1">
              Quick insights into our terms. Understand your rights and ours in
              a snap.
            </p>
            <button
              type="button"
              className="rounded-3xl flex items-center text-base font-medium text-primary justify-center leading-6 gap-2 hover:text-primary-light"
            >
              Terms of Use
              <ArrowRightIcon className="w-5 h-5 ml-1.5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 md:gap-2.5 w-full lg:w-auto">
          <div className="flex justify-start md:justify-center">
            <div className="flex items-center justify-center rounded-full border-2 text-grey-1800 border-grey-1800 min-w-10 max-w-10 min-h-10 max-h-10 hover:text-grey-400 hover:border-grey-400">
              <LockIcon aria-hidden="true" />
            </div>
          </div>
          <div className="flex flex-col md:items-center items-start  gap-1">
            <p className="text-4xl text-grey-400 mb-1">Privacy First</p>

            <p className="text-sm text-grey-400 font-normal text-start md:text-center mb-1  ">
              Dive into how we respect and protect your data. Your privacy
              matters!
            </p>
            <button
              type="button"
              className="rounded-3xl flex items-center text-base font-medium text-primary justify-center leading-6 gap-2 hover:text-primary-light"
            >
              Privacy Policy
              <ArrowRightIcon className="w-5 h-5 ml-1.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full p-4 md:px-5 md:py-[14px] border-t ">
        <div>
          <p className="text-sm font-normal text-grey-1800">
            2023 © ZyraHealth
          </p>
        </div>
        <div>
          <p className="text-sm font-normal text-grey-1800">
            Made with love in Boston
          </p>
        </div>
      </div>
    </footer>
  );
};
