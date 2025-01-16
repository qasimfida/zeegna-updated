"use client";

import { BackButtonIcon } from "@/svgs/BackButtonIcon";
import { NextButtonIcon } from "@/svgs/NextButtonIcon";
import { useEffect, useState } from "react";

export const Pagination = ({
  currentPage,
  itemsPerPage,
  totalPages,
  paginate,
}) => {
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const numberOfPages = Math.ceil(totalPages / itemsPerPage);
    setPageNumbers(Array.from({ length: numberOfPages }, (_, i) => i + 1));
  }, [totalPages, itemsPerPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center gap-2.5 mt-7 pb-3 justify-center">
      {
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="relative h-10 max-h-[2.5rem] w-10 max-w-[2.5rem] select-none rounded-full bg-white text-center align-middle font-sans text-base font-normal uppercase text-grey-400 hover:text-primary shadow-md transition-all disabled:pointer-events-none disabled:opacity-50"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <BackButtonIcon />
          </span>
        </button>
      }
      <div className="flex items-center gap-2.5">
        {pageNumbers?.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`relative h-10 max-h-[2.5rem] w-10 max-w-[2.5rem] select-none rounded-full bg-white text-center align-middle font-sans text-base font-normal uppercase text-grey-400 text-grey-500 border ${
              currentPage === number ? "  border-grey-400" : " x"
            } shadow-md transition-all`}
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              {number}
            </span>
          </button>
        ))}
      </div>
      <button
        onClick={handleNextPage}
        disabled={Math.ceil(totalPages / itemsPerPage) === currentPage}
        className="relative h-10 max-h-[2.5rem] w-10 max-w-[2.5rem] select-none rounded-full bg-white text-center align-middle font-sans text-base font-normal uppercase text-grey-400 hover:text-primary shadow-md transition-all disabled:pointer-events-none disabled:opacity-50"
        type="button"
      >
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <NextButtonIcon />
        </span>
      </button>
    </div>
  );
};
