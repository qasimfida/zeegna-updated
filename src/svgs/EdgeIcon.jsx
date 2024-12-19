import cls from "classnames";

export const EdgeIcon = (props) => {
  return (
    <div className={cls(`absolute z-20 w-5 -top-[2px] right-6 ${props.class}`)}>
      <svg
        width="20"
        height="10"
        viewBox="0 0 20 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M0 10 L10 0 L20 10"
          fill="white"
          stroke="#EAEAF1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};
