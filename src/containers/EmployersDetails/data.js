import EmployersOverview from "@/components/EmployersOverview";
import EmployerJobs from "@/components/EmployerJobs";

export const tabData = [
  {
    id: "overview",
    label: "Overview",
    component: <EmployersOverview />,
  },
  // {
  //   id: "life",
  //   label: "Life",
  //   component: <EmployersOverview />,
  // },
  // {
  //   id: "qna",
  //   label: "Q&A",
  //   component: <EmployersOverview />,
  // },
  // {
  //   id: "benefits",
  //   label: "Benefits",
  //   component: <EmployersOverview />,
  // },
  // {
  //   id: "culture",
  //   label: "Culture",
  //   component: <EmployersOverview />,
  // },
  // {
  //   id: "salary",
  //   label: "Salary",
  //   component: <EmployersOverview />,
  // },
  {
    id: "jobs",
    label: "Jobs (0)",
    component: <EmployerJobs />,
  },
];

{
  /* <div className="bg-white  mt-5 rounded-2xl px-5 py-6 flex flex-col focus-within:z-10 w-full ">
  <div
    className={cls`flex  items-start justify-between sm:cursor-pointer gap-4 sm:gap-5`}
  >
    <div className="flex justify-center items-center  border rounded-full min-w-16 max-w-16 min-h-16 max-h-16">
      <SuitCaseIcon
        name="suitcase"
        className="  text-grey-100 hover:text-grey-100"
        aria-hidden="true"
      />
    </div>
    <div className="flex flex-col gap-2">
      <h4 className="text-4xl text-grey-400">title</h4>
      <p className={`text-base text-grey-500 font-medium`}>
        <span className={`text-base text-grey-400 font-medium mr-1`}>
          Employer Type:
        </span>
        employerType
      </p>
      <p className={`text-base text-grey-500 font-medium`}>
        <span className={`text-base text-grey-400 font-medium mr-1`}>
          Employer Size:
        </span>
        employerSize
      </p>
      <p className={`text-base text-grey-500 font-medium`}>
        <span className={`text-base text-grey-400 font-medium mr-1`}>
          Location:
        </span>
        location
      </p>
    </div>
    <div className="flex justify-center items-center  border rounded-full min-w-16 max-w-16 min-h-16 max-h-16">
      <SuitCaseIcon
        name="suitcase"
        className="  text-grey-100 hover:text-grey-100"
        aria-hidden="true"
      />
    </div>
  </div>
</div>; */
}
