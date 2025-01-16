"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Input from "@/components/Input";
import { IssuingInstitution } from "@/components/Modals/data";
import { SuggestionDropdown } from "@/components/Select/Select";
import FileUpload from "@/components/FileUpload";
import Button from "@/components/Button";
import dynamic from "next/dynamic";
import Image from "next/image";

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

export const SupportDetails = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [status, setStatus] = useState("");

  useEffect(() => {
    const parts = pathname?.split("/");
    const lastPart = parts[parts.length - 1];
    if (lastPart === "support") {
      setActiveTab("general");
    }
  }, [router, pathname]);

  const handleRedirect  = () => {
    router.push('/tickets/1')
  }

  return (
    <div
      className={`flex flex-col justify-between sm:auto relative bg-white rounded-2xl p-4 sm:py-12  ${
        status === "success" ? "!justify-center" : ""
      }`}
    >
      {status === "success" ? (
        <>
          <div className="flex flex-col items-center ">
            <div className="relative h-52 md:h-72 w-full max-w-sm  ">
              <Image
                src="/images/support/success.png"
                fill
                style={{ objectFit: "contain" }}
                alt="slider-promo"
              />
            </div>
            <div className="relative w-full max-w-96 mx-auto text-center">
              <h3 className="mt-8 mb-2.5 block text-grey-400 text-5xl max-w-lg tracking mx-auto">
                Request submitted!
              </h3>
              <p className="block text-sm font-medium text-grey-400 max-w-80 mb-5 lg:mb-8 mx-auto">
                Your ticket has been submitted. One of our associates will get
                back to you shortly.
              </p>
              <Button
                className="max-w-52 mx-auto !font-medium !h-11"
                variant="darkContained"
                size="lg"
                onClick={handleRedirect}
              >
                View Ticket
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center w-full m-auto items-center max-w-lg">
            <h4 className="text-5xl text-grey-400 pb-2.5">
              Complete the Form Below
            </h4>
            <p className="text-sm font-medium text-grey-400 text-center px-4">
              Please provide as many details as possible to ensure our support
              team can resolve your issue on a timely basis.
            </p>
          </div>
          <div className="w-full max-w-3xl mx-auto">
            <div className="flex flex-wrap sm:flex-nowrap gap-4 w-full mt-8 items-end">
              <SuggestionDropdown
                placeholder="Select the category"
                label="Select the category"
                options={IssuingInstitution}
              />
              <Input placeholder="Enter an idea topic" />
            </div>
            {/* <TextEditor /> */}
            <div className="w-full  mt-4 min-h-32">
              <Editor placeholder="Comment" />
            </div>
            <FileUpload
              title="Upload Document"
              className="mt-4 min-h-32"
              multiple
            />
            <div className="flex w-full pt-4 sm:pt-8 justify-center">
              <Button
                variant="darkContained"
                size="xl"
                className="w-full sm:w-52 !h-11 justify-center"
                onClick={() => setStatus("success")}
              >
                Submit
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
