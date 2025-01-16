import React from "react";

const USAState = (props) => {
  return (
    <path
      d={props.dimensions}
      fill={props.fill}
      data-name={props.state}
      className={`${props.state} state ${props.className} `}
      onClick={props.onClick}
      {...props}
    >
      <title>{props.state}</title>
    </path>
  );
};
export default USAState;
