import React from 'react'

const COLOR_VARIANTS = {
    primary: "primary",
    success: "success",
    warning: "warning",
    info: "info",
}

export const Switch = ({ isOn, handleToggle, color="primary" }) => {
    const clr = COLOR_VARIANTS[color] || COLOR_VARIANTS["primary"]
  return (
    <div
      onClick={handleToggle}
      className={`${
        isOn ? `border-${clr}` : "border-line"
      } border-2 relative inline-flex items-center h-6 rounded-full w-9 transition-colors focus:outline-none`}
    >
      <span
        className={`${
          isOn ? `translate-x-3.5 bg-${clr}` : "translate-x-[2px] bg-grey-900"
        } inline-block w-4 h-4 transform  rounded-full transition-transform`}
      />
    </div>
  );
};
