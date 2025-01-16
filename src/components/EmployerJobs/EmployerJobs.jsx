"use client";

import Card from "@/components/Card";
import {
  JobsTableIcon,
} from "@/svgs/icons";

export const EmployerJobs = () => {
  return (
    <Card title={"Jobs by the Employer (0)"} hasIcon={false}>
      <div className="flex flex-col items-center mt-5">
        <JobsTableIcon />
        <p className="text-base text-center font-medium text-grey-400  mt-2.5">
          The employer has not posted any jobs
        </p>
      </div>
    </Card>
  );
};
