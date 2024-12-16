import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import { ArrowRightIcon } from "@/svgs/icons";
import Button from "../Button";
import Image from "next/image";

export const TourModal = () => {
  const steps = [
    {
      id: "step-1",
      img: "/images/tour/tour-1.png",
      title: "Welcome James!",
      description:
        "You have joined a community of job seekers looking to find the best jobs across the healthcare industry. You can find and apply to jobs from a variety of healthcare employers. Let’s save you learning time with a few quick steps! ",
    },
    {
      id: "step-2",
      img: "/images/tour/tour-2.png",
      title: "Profile",
      description:
        "Complete your profile to better match you to jobs that align with your qualifications and preferences. Completed profiles are prioritized by employers and can help increase the number of invitations by employers to apply to jobs. ",
    },
    {
      id: "step-3",
      img: "/images/tour/tour-3.png",
      title: "Applications",
      description:
        "You can browse to find jobs and employers. You can apply to jobs you are interested in directly from the platform. No resumes, no multiple account creations, and your personal details are blind to employers until you get matched. One click to apply. ",
    },
    {
      id: "step-4",
      img: "/images/tour/tour-4.png",
      title: "Invites",
      description:
        "Employers can search for candidates fitting their job requirements and send invitations to apply. You may receive invites directly from employers to apply for jobs they have posted. ",
    },
    {
      id: "step-5",
      img: "/images/tour/tour-5.png",
      title: "Matches",
      description:
        "We match your profile including skills, qualifications, and preferences to open jobs. The more information you provide, the better chances there are of getting a good match and employer interest. ",
    },
    {
      id: "step-6",
      img: "/images/tour/tour-6.png",
      title: "Messages",
      description:
        "You can communicate with the employers directly from the platform once they accept your application.  You can communicate with the employers directly from the platform once they accept your application. ",
    },
    {
      id: "step-7",
      img: "/images/tour/tour-7.png",
      title: "Resources",
      description:
        "You can communicate with the employers directly from the platform once they accept your application. ",
    },
    {
      id: "step-8",
      img: "/images/tour/tour-8.png",
      title: "Employers",
      description:
        "You can communicate with the employers directly from the platform once they accept your application. ",
    },
  ];
  const { tour, setTour, tourStep, setTourStep } = useModals();

  const handleNext = () => {
    if (tourStep < steps.length - 1) {
      setTourStep(tourStep + 1);
    } else {
      setTour(false);
    }
  };
  const handlePrev = () => {
    if (tourStep > 0) {
      setTourStep(tourStep - 1);
    }
  };

  return (
    <Modal
      id="tour"
      open={tour}
      onClose={() => setTour(false)}
      title="Tutorial"
      className="!max-w-2xl !w-full shadow-xl"
      footerClass={"hidden"}
    >
      <div className="pr-3 min-h-[30rem]">
        <div className="flex justify-between my-5">
          <Button
            variant="text"
            className="gap-2 !text-grey-500 !text-sm !font-semibold"
            onClick={handlePrev}
          >
            <ArrowRightIcon className="transform rotate-180 " /> Back
          </Button>
          <span>
            {tourStep + 1}/{steps.length}
          </span>
          <Button
            variant="text"
            className="gap-2 !text-primary !text-grey-500 !text-sm !font-semibold"
            onClick={handleNext}
          >
            {tourStep < steps.length - 1 ? "Next" : "Finish"}{" "}
            <ArrowRightIcon className="" />
          </Button>
        </div>
        <div className="text-center text-grey-400">
          <div className="relative h-[18.5rem] w-auto">
            <Image
              alt={`tour-${steps[tourStep].id}`}
              src={steps[tourStep].img}
              fill
              style={{ objectFit: "cover", borderRadius: "20px" }}
            />
          </div>
          <h3 className="text-5xl text-grey-400 mb-1 mt-6">
            {steps[tourStep].title}
          </h3>
          <p className="text-base font-normal text-grey-400">{steps[tourStep].description}</p>
        </div>
      </div>
    </Modal>
  );
};
