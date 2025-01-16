import React from "react";
import moment from "moment";
import cls from "classnames";
import Button from "../Button";
import { Icon } from "@/svgs";

const colors = [
  "bg-primary-1800",
  "bg-success-200",
  "bg-primary-1900",
  "bg-primary-2000",
  "bg-primary-2100",
  "bg-primary-2000",
  "bg-success-900",
  "bg-primary-2200",
  "bg-primary-1900",
];

export const ActivitiesCard = ({
  notification,
  handleAction,
  actionButton = false,
  discoverButton = false,
  childClass,
  hasColor = true,
  iconClass = "",
  handleDelete,
  ...props
}) => {
  const { title, description, date, id, icon, type } = notification;
  const timeNow = moment(date).format("MMM DD, YYYY");
  return (
    <div
      className={`w-full m-auto  p-4 border border-grey-100 rounded-2xl   hover:ring-1 sm:hover:ring-black sm:hover:shadow-xl sm:ease-in sm:cursor-pointer`}
      {...props}
    >
      <div
        className={cls(
          `flex justify-between items-center gap-1 lg:gap-5 flex-wrap lg:flex-nowrap  cursor-pointer ${childClass}`
        )}
      >
        <div
          className={`border border-grey-2300 rounded-3xl h-9 w-9 flex items-center justify-center min-h-[2.5rem] min-w-[2.5rem] text-grey-400 ${
            hasColor && colors[id]
          } order-1 ${iconClass}`}
        >
          {icon}
        </div>
        {
          <div
            className={`order-2 lg:order-3 ${
              !actionButton ? "flex items-center" : ""
            }`}
            onClick={handleAction}
          >
            {actionButton ? (
              <div className="text-success bg-success/20 rounded-2xl min-w-[3.125rem] w-[3.125rem] h-6 text-center">
                New
              </div>
            ) : (
              <div className="flex gap-6 my-2 items-center">
                {discoverButton && (
                  <Button
                    className={`hidden sm:flex !px-0 min-w-max !text-base !font-medium !min-w-40 !h-9`}
                    size="sm"
                    variant="darkOutlined"
                    color="dark"
                  >
                    {type}
                  </Button>
                )}
                <Icon
                  name="close"
                  className="min-w-8 max-w-8 min-h-8 max-h-8 border-grey-100 hover:border-primary "
                  aria-hidden="true"
                  onClick={() => handleDelete(id)}
                />
              </div>
            )}
          </div>
        }
        <div className=" font-medium gap-1 order-3 lg:order-2 w-full">
          <p className="text-base font-medium  text-grey-1500 mb-1">{title}</p>
          {actionButton && (
            <p className="text-base text-grey-500">{description}</p>
          )}
          <p className="text-xs font-normal text-grey-400">{timeNow}</p>
          {discoverButton && (
            <Button
              className={`flex sm:hidden !px-2.5 min-w-max mt-2.5 `}
              size="lg"
              variant="darkOutlined"
              color="dark"
            >
              {type}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
