export const Dot = (props) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="5" cy="5" r="3" fill="#7070FF" />
      <circle
        cx="5"
        cy="5"
        r="4"
        stroke="#7070FF"
        stroke-opacity="0.3"
        strokeWidth="2"
      />
    </svg>
  );
};
