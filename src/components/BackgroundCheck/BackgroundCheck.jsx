"use client";

import { Icon } from "@/svgs";
import { disclousureData } from "@/utils/data";
import { usePageLayout } from "@/contexts/PageLayout";
import { useRouter } from "next/navigation";
import cls from "classnames";
import CustomCheckbox from "../CustomCheckbox";
import Button from "../Button";

export const BackgroundCheck = () => {
  const router = useRouter();
  const { setGlobalValue, globalValue } = usePageLayout();

  return (
    <div>
      <div
        className={cls`p-5 ${
          globalValue.hasTabbar ? "mt-5" : ""
        } bg-white rounded-2xl`}
      >
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <div className="flex items-center gap-3">
            <Icon
              name="back"
              className="min-w-10 min-h-10  hover:border-primary"
              aria-hidden="true"
              handleClick={() => {
                setGlobalValue({
                  hasRightbar: true,
                  hasTabbar: true,
                });
                router.push("/profile/documents");
              }}
            />
            <h4 className="text-5xl text-grey-400">
              Background Check Release Consent
            </h4>
          </div>
          <div className="flex items-center text-grey-400 hover:text-primary">
            <Icon
              name="download"
              className="min-w-10 min-h-10 hover:border-primary "
              iconCls="-top-[2px] relative"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="mt-4 mb-4">
          <p className="mb-2">
            <span className="text-grey-400 text-base font-medium leading-6 ">
              Please check this box if you would like to receive a copy of an
              investigative consumer report or consumer credit report at no
              charge if one is obtained by the Company whenever you have a right
              to receive such a copy under California law.
            </span>
          </p>
          <h4 className="text-base font-bold text-primary leading-6 mb-4 mt-4">
            Receive Report?
          </h4>
          <div className="flex items-center mb-4 gap-5">
            <CustomCheckbox
              className="!gap-2 !mt-0"
              labelClass="!text-base font-medium text-grey-400"
              label="Yes"
              color="default"
            />
            <CustomCheckbox
              className="!gap-2 !mt-0"
              labelClass="!text-base font-medium text-grey-400"
              label="No"
              color="default"
            />
          </div>

          {disclousureData.map((data, index) => {
            return (
              <p key={`${data.paragraph}-option-${index + 1}`} className="mb-2">
                <span className="text-grey-400 text-base font-medium leading-6 ">
                  {data.paragraph}
                </span>
              </p>
            );
          })}
        </div>
        <div
          className={cls` ${globalValue.hasTabbar ? "mt-6" : ""} rounded-2xl`}
        >
          <div className="flex gap-3 mt-4 flex-wrap md:flex-nowrap">
            <input
              type="text"
              name="price"
              id="price"
              className=" text-center md:text-start block rounded-full border px-4 py-3 text-sm text-grey-400 placeholder:text-grey-400 sm:text-sm sm:leading-6 bg-white w-full md:w-unset focus:outline-none focus:ring-offset-0"
              placeholder="Signature For Background Check Release"
            />
            <input
              type="text"
              name="price"
              id="price"
              className=" text-center md:text-start block rounded-full border px-4 py-3 text-sm text-grey-400 placeholder:text-grey-400 sm:text-sm sm:leading-6 bg-white w-full md:w-unset focus:outline-none focus:ring-offset-0"
              placeholder="Signature For Disclosure"
            />
            {/* <button
            type="button"
            className="w-full justify-center md:w-auto rounded-3xl text-center bg-primary flex items-center text-base font-medium text-white px-16 py-2.5 leading-6 hover:bg-primary-light"
          >
            Sign
          </button> */}
            <Button color="success" variant="darkContained" size="xxl">
              <p className="mr-2">Sign</p>
              {/* <ArrowRightIcon aria-hidden="true" /> */}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
