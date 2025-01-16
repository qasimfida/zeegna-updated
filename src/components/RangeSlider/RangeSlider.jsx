import React, { useCallback, useEffect, useRef } from "react";
import cls from "classnames";

export const RangeSlider = ({
  min,
  max,
  values = { min: 20, max: 60 },
  variant = "success",
  onChange,
  readOnly = false,
}) => {
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(values.min);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [values, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(values.max);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [values, getPercent]);

  return (
    <div className="container relative">
      {readOnly && <div className="absolute z-10 w-full h-full"></div>}
      <input
        type="range"
        min={min}
        max={max}
        value={values.min}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, values.max - 1);
          onChange({ ...values, min: value });
          event.target.value = value.toString();
        }}
        className={cls(
          `${
            variant === "success" ? "thumb" : "primary-thumb"
          } pointer-events-none absolute h-0 w-full outline-none z-[3]`,
          {
            "z-[5]": values.min > max - 100,
          }
        )}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={values.max}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, values.min + 1);
          onChange({ ...values, max: value });
          event.target.value = value.toString();
        }}
        className={cls(
          `${
            variant === "success" ? "thumb" : "primary-thumb"
          } pointer-events-none absolute h-0 w-full outline-none z-[4]`
        )}
      />

      <div className="slider relative pb-8">
        <div className="rounded h-1.5 bg-grey-100 absolute z-[1] w-full" />
        <div
          ref={range}
          className={`rounded h-1.5 ${
            variant === "success" ? "bg-success" : "bg-primary"
          } absolute z-[2]`}
        />
        <div className="font-semibold text-sm absolute left-1.5 top-2.5">
          ${values.min}
        </div>
        <div className="font-semibold text-sm absolute -right-1 top-2.5">
          ${values.max}
        </div>
      </div>
    </div>
  );
};
