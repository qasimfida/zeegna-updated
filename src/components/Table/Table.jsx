import React from "react";

export const Table = () => {
  return (
    <div className="no-scrollbar relative bg-white overflow-x-auto border rounded-2xl w-full">
      <table className="w-full text-sm text-left rtl:text-right text-grey-400 font-medium">
        <thead className="text-sm text-grey-500 font-medium">
          <tr>
            <th scope="col" className="pl-4 pt-2.5 min-w-40">
              Job Title:
            </th>
            <th scope="col" className="pl-4 pt-2.5 min-w-40">
              Location:
            </th>
            <th scope="col" className="pl-4 pt-2.5 min-w-40">
              Total Pay:
            </th>
            <th scope="col" className="pl-4 pt-2.5 min-w-40">
              Years of Experience:
            </th>
            <th scope="col" className="pl-4 pt-2.5 min-w-40">
              Date Submitted: 
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className=" ">
            <td className="pl-4 pb-2.5">Registered Nurse </td>
            <td className="pl-4 pb-2.5">Atlanta, GA </td>
            <td className="pl-4 pb-2.5">$90,000</td>
            <td className="pl-4 pb-2.5">3-5 years</td>
            <td className="pl-4 pb-2.5">Feb 6, 2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
