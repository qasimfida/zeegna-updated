import React from "react";
import JobApplyCard from "../JobApplyCard";
import { useRouter } from "next/navigation";
import RightbarWrapper from "../RightbarWrapper";
import EmployerDetails from "@/components/EmployerDetails";

export const JobRightbar = ({ type }) => {
  const router = useRouter();

  const viewAll = () => {
    router.push(`/work/discover/?tab=recommended`);
  };
  return (
    <RightbarWrapper>
      <JobApplyCard type={type} />
      <div className="hidden">
        <EmployerDetails />
      </div>
    </RightbarWrapper>
  );
};
