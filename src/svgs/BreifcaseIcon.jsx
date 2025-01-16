import cls from "classnames";

export const BreifcaseIcon = (props) => {
  return (
    <svg
      className={cls`w-4 h-4 text-grey-400 ${props.className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {" "}
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />{" "}
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
};
