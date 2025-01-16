export const EmptyPointer = (props) => {
  return (
    <svg
      width="102"
      height="58"
      viewBox="0 0 102 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_861_15237)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 6C14.2386 6 12 8.23858 12 11V27C12 29.7614 14.2386 32 17 32H43.0352L50.2929 39.2577C50.6834 39.6483 51.3166 39.6483 51.7071 39.2577L58.9648 32H85C87.7614 32 90 29.7614 90 27V11C90 8.23858 87.7614 6 85 6H17Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_861_15237"
          x="0"
          y="0"
          width="102"
          height="57.5508"
          filterUnits="userSpaceOnUse"
          colorInterpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="6" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.542767 0 0 0 0 0.542767 0 0 0 0 0.542767 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_861_15237"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_861_15237"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
