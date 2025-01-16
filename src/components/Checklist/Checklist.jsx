import Button from "@/components/Button";
import { Icon } from "@/svgs";
import { iconTypes } from "@/utils/data";
import cls from "classnames";

export const Checklist = ({ heading, data, percentage }) => {
  const btnCls = cls(`border hover:border-2 gap-1 px-4`);
  return (
    <div className="p-4 border flex flex-wrap justify-between px-base items-center rounded-3xl mt-6 hover:ring-1 ring-success hover:shadow-xl  ">
      <div>
        <h4 className="text-4xl text-grey-400 mb-2">{heading}</h4>
        <p className="text-base text-grey-500 font-medium mb-2">
          <span className="text-grey-400">{data.name}: </span>
          {data.value}
        </p>
      </div>
      <Button
        color={percentage.type}
        variant="tag"
        size="md"
        className={btnCls}
      >
        {percentage.name}
        {/* {iconTypes[percentage.type]} */}
      </Button>
      <Icon
        name="edit"
        className="min-w-8 min-h-8 hover:border-primary"
        aria-hidden="true"
      />
    </div>
  );
};
