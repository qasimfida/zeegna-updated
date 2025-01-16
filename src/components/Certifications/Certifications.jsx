"use client";

import React from "react";
import { AddPlusIcon } from "@/svgs/icons";

export const Certifications = () => {
  return (
    <div className="px-5 flex flex-col  cursor-pointer ">
      <div className={`flex w-full items-center`}>
        <h4 className="xt-sm font-semibold md:text-5xl text-grey-400">
          Certifications:
        </h4>
      </div>
      <div className="pl-5 mt-2.5 pb-5 border-b">
        <ul className="list-disc flex flex-col gap-2.5">
          <li className="text-sm md:text-base font-medium text-grey-400">
            Nurse Executive Education (NE-BC)
          </li>
          <li className="text-sm md:text-base font-medium text-grey-400">
            Certified Nurse Midwife (CNM)
          </li>
          <li className="text-sm md:text-base font-medium text-grey-400">
            Neonatal Intensive Care Nursing Certification (RNC-NIC)
          </li>
          <li className="text-sm md:text-base font-medium text-grey-400">
            Obstetric Nursing Certification (RNC-OB)
          </li>
          <li className="text-sm md:text-base font-medium text-grey-400">
            Maternal Newborn Nursing Certification (RNC-MNN)
          </li>
          <li className="text-sm md:text-base font-medium text-grey-400">
            Healthcare Management Certification (e.g. Certified Professional in
            Healthcare Management – CPHM)
          </li>
          <li className="text-sm md:text-base font-medium text-grey-400">
            Certified in Healthcare Leadership (CHL)
          </li>
          <li className="text-sm md:text-base font-medium text-grey-400">
            Certified in Healthcare Compliance (CHC)
          </li>
          <li className="text-sm md:text-base font-medium text-grey-400">
            Advanced Cardiac Life Support Certification (ACLS)
          </li>
          <div className="flex items-center flex-wrap gap-2 font-medium text-sm md:text-base text-grey-400">
            <li className="text-sm md:text-base text-grey-400">
              Advanced Cardiac Life Support Certification (ACLS)
            </li>
            <button
              type="button"
              className="rounded-3xl flex items-center text-sm md:text-base font-medium text-grey-400 py-1 px-2"
            >
              <span>
                <AddPlusIcon className="w-4 h-4" aria-hidden="true" />
              </span>
              Show more
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};
