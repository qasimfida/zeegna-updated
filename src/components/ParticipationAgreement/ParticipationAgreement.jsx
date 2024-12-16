"use client";

import { Icon } from "@/svgs";
import { agreementData } from "@/utils/data";
import CustomCheckbox from "@/components/CustomCheckbox";
import { useState } from "react";
import { usePageLayout } from "@/contexts/PageLayout";
import cls from "classnames";
import { useRouter } from "next/navigation";
import Button from "../Button";

export const ParticipationAgreement = () => {
  const router = useRouter();
  const [agreementChecked, setAgreementChecked] = useState(false);
  const { setGlobalValue, globalValue } = usePageLayout();

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      className={cls`p-3 ${
        globalValue.hasTabbar ? "mt-5" : ""
      } bg-white rounded-2xl`}
    >
      <div>
        <div className="flex justify-between w-full border-b pb-2 items-center gap-2  ">
          <div className="flex items-center gap-3">
            <Icon
              name="back"
              className="min-w-10 min-h-10 hover:border-primary "
              aria-hidden="true"
              handleClick={() => {
                handleScroll();
                setGlobalValue({
                  hasRightbar: true,
                  hasTabbar: true,
                });
                router.push("/profile/documents");
              }}
            />
            <h4 className="text-5xl text-grey-400">Participation Agreement</h4>
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

        {agreementData.map((data, index) => {
          return (
            <div
              key={`${data.heading}-option-${index + 1}`}
              className="mt-4 mb-4"
            >
              {/* <h4 className="text-base font-bold text-primary leading-6 mb-2 mt-4">
                {data.heading}
              </h4> */}
              <p className="mb-2">
                <span className="text-grey-400 text-base font-medium leading-6 ">
                  {data.paragraph}
                </span>
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-2xl ">
        <CustomCheckbox
          label="I have read and understand the Participation Agreement and
                  agree to all termsas"
          variant="primary"
          checked={agreementChecked}
          setChecked={() => setAgreementChecked(!agreementChecked)}
        />
        <h4 className="text-sm font-medium text-primary leading-5 mb-4 mt-4">
          Signature
        </h4>
        <div className="flex gap-3 items-center">
          <input
            type="text"
            name="price"
            id="price"
            className="block rounded-full border py-3 px-4 text-grey-400 placeholder:text-grey-400 sm:text-sm sm:leading-6 bg-white w-full  focus:outline-none"
            placeholder="Enter Full Name here"
          />
          {/* <button
            type="button"
            className="rounded-3xl bg-primary flex items-center text-base font-medium text-white px-16 py-2.5 leading-6 hover:bg-primary-light"
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
  );
};
