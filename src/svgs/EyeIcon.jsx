import cls from "classnames";
import React from "react";

export const EyeIcon = ({ className, ...props }) => {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cls`text-grey-400 ${className}`}
      {...props}
    >
      <path
        d="M1.18763 7.00941C1.09079 6.85539 1.04237 6.77837 1.01527 6.65958C0.99491 6.57036 0.99491 6.42964 1.01527 6.34042C1.04237 6.22163 1.09079 6.14462 1.18763 5.99059C1.98789 4.71774 4.36992 1.5 8 1.5C11.6301 1.5 14.0121 4.71774 14.8124 5.99059C14.9092 6.14462 14.9576 6.22163 14.9847 6.34042C15.0051 6.42964 15.0051 6.57036 14.9847 6.65958C14.9576 6.77837 14.9092 6.85538 14.8124 7.00941C14.0121 8.28226 11.6301 11.5 8 11.5C4.36992 11.5 1.98789 8.28226 1.18763 7.00941Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8.64286C9.17816 8.64286 10.1332 7.68347 10.1332 6.5C10.1332 5.31653 9.17816 4.35714 8 4.35714C6.82184 4.35714 5.86675 5.31653 5.86675 6.5C5.86675 7.68347 6.82184 8.64286 8 8.64286Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
