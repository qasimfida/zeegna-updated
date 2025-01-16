import React, { useState } from "react";
import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

function Question2Card({ title, onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    onChange(checked); 
  };

  return (
    <label
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => handleToggle({ target: { checked: !isChecked } })} 
    >
      <Checkbox
        checked={isChecked}
        onChange={handleToggle} 
        className="group relative size-6 rounded-md border-[3px] border-[#109088] p-1 cursor-pointer ring-1 ring-white/15 ring-inset data-[checked]:bg-white"
      >
        <CheckIcon className="hidden absolute top-[-1px] left-[-1px] !w-[20px] !h-[20px] fill-[#109088] group-data-[checked]:block" />
      </Checkbox>
      <span className="text-[#5E5E6F] font-medium text-[17px]">{title}</span>
    </label>
  );
}

export default Question2Card;
