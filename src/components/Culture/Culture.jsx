import React, { useState } from "react";
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";
import { SuggestionDropdown } from "@/components/Select/Select";
import { disciplineTypes, yearsOfExperience } from "./data";

export const Culture = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="flex flex-col items-start mt-4">
      <div className="flex flex-col lg:flex-row gap-2.5 w-full items-center mt-5">
        <SuggestionDropdown
          placeholder="Employee Type"
          label="Employee Type"
          options={disciplineTypes}
        />
        <SuggestionDropdown
          placeholder="Location"
          label="Location"
          options={disciplineTypes}
        />
        <SuggestionDropdown
          placeholder="Years of Experience"
          label="Years of Experience"
          options={yearsOfExperience}
        />
      </div>
      <div className="my-5">
        <p className="text-base font-medium text-grey-400">
          Total Salary Range for Emory Healthcare Registered Nurse
        </p>
        <p className={`text-base text-primary font-medium mt-2.5`}>
          <span className={`text-base text-grey-400 font-medium mr-1`}>
            Total Pay:
          </span>
          $74K - $97K/yr
        </p>
        <p className={`text-base text-primary font-medium  mt-2.5`}>
          <span className={`text-base text-grey-400 font-medium mr-1`}>
            Median Total Pay:
          </span>
          $84K
        </p>
        <p className="text-base text-grey-400 font-medium mt-2.5">
          The estimated total pay range for a Registered Nurse at Emory
          Healthcare is $74K–$97K per year, which includes base salary and
          additional pay. The average Registered Nurse base salary at Emory
          Healthcare is $84K per year. The average additional pay is $0 per
          year, which could include cash bonus, stock, commission, profit
          sharing or tips.
        </p>
      </div>

      <div className="w-full">
        <div className="w-full flex flex-col gap-4">
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={2}
          paginate={paginate}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
};
