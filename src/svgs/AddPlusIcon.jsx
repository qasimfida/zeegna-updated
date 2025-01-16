export const AddPlusIcon = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="16" height="16" fill="white" fillOpacity="0.01" />
      <rect
        x="13.5"
        y="6.5"
        width="2"
        height="11"
        rx="1"
        transform="rotate(90 13.5 6.5)"
        fill="currentColor"
      />
      <rect x="7" y="2" width="2" height="11" rx="1" fill="currentColor" />
    </svg>
  );
};
