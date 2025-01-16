import React from "react";
import cls from "classnames";

const colors = [
  "bg-success-200",
  "bg-primary-900/50",
  "bg-danger-100/50",
  "bg-primary-1900/50",
  "bg-success-900/50",
  "bg-primary-2200/50",
  "bg-success-1000/50",
];

export const NotificationCard = ({
  notification,
  handleAction,
  actionButton,
  childClass,
  hasColor = true,
  iconClass = "",
  className = "",
  ...props
}) => {
  const { title, description, date, id, icon } = notification;
  return (
    <div
      className={
        `w-full m-auto bg-grey-700 px-5 py-4 border rounded-2xl mt-2.5 mb-2.5  hover:ring-1 sm:hover:ring-black sm:hover:shadow-xl sm:ease-in sm:cursor-pointer ` +
        className
      }
      {...props}
    >
      <div
        className={cls(
          `flex justify-between gap-1 lg:gap-5 flex-wrap lg:flex-nowrap  cursor-pointer ${childClass}`
        )}
      >
        <div
          className={`border rounded-3xl h-10 w-10 flex items-center justify-center min-h-10 min-w-10 text-grey-400 border-grey-1400 ${
            hasColor && colors[id]
          } order-1 ${iconClass}`}
        >
          {icon}
        </div>
        {
          <div className="order-2 lg:order-3" onClick={handleAction}>
            {actionButton || (
              <div className="text-success bg-success/20 rounded-2xl min-w-[3.125rem] w-[3.125rem] h-6 text-center">
                New
              </div>
            )}
          </div>
        }
        <div className=" font-medium gap-1 order-3 lg:order-2 w-full">
          <p className="text-base font-semibold  text-grey-1500 line-clamp-1">
            {title}
          </p>
          <p className="text-sm font-normal text-grey-400 line-clamp-2">
            {description}
          </p>
          {/* <p className="text-sm text-grey-500">
            {moment(date).format("MMM DD / YYYY hh:mm A")}
          </p> */}
        </div>
      </div>
    </div>
  );
};
