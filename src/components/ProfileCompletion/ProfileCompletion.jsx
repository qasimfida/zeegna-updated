"use client";

import ProfileInfoTile from "@/components/ProfileInfoTile";
import {
  AwardIcon,
  BreifcaseIcon,
  DocumentIcon,
  DocumentsMinusIcon,
  EducationIcon,
} from "@/svgs/icons";
import { useRouter } from "next/navigation";
import ProgressBar from "../ProgressBar";

export const ProfileCompletion = ({ isInRightBar = true, className = "" }) => {
  const router = useRouter();
  return (
    <div
      className={`flex flex-col ${
        isInRightBar ? "p-5" : "mt-5 p-3"
      } w-full text-center bg-white  rounded-2xl ${className}`}
    >
      <div className="flex justify-start mb-2.5">
        <h2 className="text-5xl font-semibold text-grey-400">
          Profile Completion Strength
        </h2>
      </div>

      <div className=" mb-2.5	flex items-center justify-between">
        <ProgressBar variant="primary" progress={80} />
      </div>

      <div className="mb-4">
        <p className=" text-sm font-medium text-grey-400	text-start w-[60%]">
          Completed profiles are prioritized by employers and help us drive
          better matching. Increase your chances by adding information to help
          finding your best fit.
        </p>
      </div>
      {isInRightBar ? (
        <div
          className={`grid grid-rows-6 lg:grid-rows-3 grid-flow-col gap-3 2xl:grid-rows-2 `}
        >
          <ProfileInfoTile
            onClick={() => router.push("/profile/overview")}
            className={" container:w-full "}
          />

          <ProfileInfoTile
            className={" container:w-full "}
            icon={<BreifcaseIcon />}
            label="Experience"
            isAdded={false}
            onClick={() => router.push("/profile/experience")}
          />

          <ProfileInfoTile
            className={" container:w-full "}
            icon={<DocumentsMinusIcon />}
            label="Credentials"
            isAdded={false}
            onClick={() => router.push("/profile/credentials")}
          />

          <ProfileInfoTile
            className={" container:w-full "}
            icon={<DocumentIcon />}
            label="Resume"
            isAdded={false}
            onClick={() => router.push("/profile/documents")}
          />

          <ProfileInfoTile
            className={" container:w-full "}
            icon={<EducationIcon />}
            label="Education"
            isAdded={false}
            onClick={() => router.push("/profile/education")}
          />

          <ProfileInfoTile
            className={" container:w-full "}
            icon={<AwardIcon />}
            label="Skills"
            isAdded={false}
            onClick={() => router.push("/profile/skills")}
          />
        </div>
      ) : (
        <div className="flex flex-wrap gap-1.5 sm:flex-nowrap sm:gap-3.5 md:gap-3.5 md:flex-wrap lg:flex-wrap 2xl:flex-nowrap xl:gap-3.5 justify-center bg-white rounded-2xl">
          <div className="w-full flex flex-col gap-1.5 sm:gap-3.5">
            <ProfileInfoTile onClick={() => router.push("/profile/overview")} />

            <ProfileInfoTile
              icon={<DocumentsMinusIcon />}
              label="Credentials"
              isAdded={false}
              onClick={() => router.push("/profile/credentials")}
            />

            <ProfileInfoTile
              icon={<EducationIcon />}
              label="Education"
              isAdded={false}
              onClick={() => router.push("/profile/education")}
            />
          </div>

          <div className="w-full flex flex-col gap-1.5 sm:gap-3.5">
            <ProfileInfoTile
              icon={<BreifcaseIcon />}
              label="Experience"
              isAdded={false}
              onClick={() => router.push("/profile/experience")}
            />

            <ProfileInfoTile
              icon={<DocumentIcon />}
              label="Resume"
              isAdded={false}
              onClick={() => router.push("/profile/documents")}
            />

            <ProfileInfoTile
              icon={<AwardIcon />}
              label="Skills"
              isAdded={false}
              onClick={() => router.push("/profile/skills")}
            />
          </div>
        </div>
      )}
    </div>
  );
};
