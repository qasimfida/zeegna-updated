import React from "react";
import { Button } from "@/components/Button/Button";
import { renderProfileCardData } from "../../utils/helper";
import { iconTypes } from "../../utils/data";
import { Icon } from "@/svgs";
import cls from "classnames";

export const ProfileCard = ({ data, onEditClick, isLast, className = "" }) => {
  const renderTagsWithIcons = (tags) => {
    return tags.map(({ name, type }, index) => (
      <Button
        key={`${name}-option-${index + 1}`}
        color={type}
        variant="tag"
        size="md"
      >
        {iconTypes[type]}
        {name}
      </Button>
    ));
  };

  return (
    <div
      className={cls`gap-4 pt-4 ${
        isLast ? "pb-0" : "border-b pb-4"
      }  flex flex-col ${className}`}
    >
      {data.country && (
        <div className="flex justify-between items-center w-full">
          <p className="text-4xl text-grey-400">{data.country}</p>
          <Icon
            name="edit"
            onClick={onEditClick}
            className="min-w-8 min-h-8 hover:border-primary"
            aria-hidden="true"
          />
        </div>
      )}
      <div className="flex flex-col gap-2.5">
        {data.heading && (
          <p className="text-4xl text-grey-400 pb-2.5">{data.heading}</p>
        )}
        {data?.data?.map(({ name, value }, index) => {
          const cls = `text-base ${
            name.toLocaleLowerCase().includes("email") ||
            name.toLocaleLowerCase().includes("website")
              ? "text-primary-2600"
              : "text-grey-500"
          } font-medium ${
            Array.isArray(value) ? "flex items-center flex-wrap gap-2" : ""
          }`;

          return (
            <div key={`${name}-option-${index + 1}`} className={cls}>
              <span className="text-grey-400">{name}: </span>
              {renderProfileCardData(value)}
            </div>
          );
        })}
        {data.tags && (
          <div className="flex flex-wrap w-full gap-2">
            {renderTagsWithIcons(data.tags)}
          </div>
        )}
      </div>
    </div>
  );
};
