import type { Config } from "tailwindcss";
// text-xs = {
//   font-size: 0.75rem;            12px
//   line-height: 1rem;             16px
// }
// text-sm = {
//   font-size: 0.875rem;           14px;
//   line-height: 1.25rem;          20px;
// }
// text-base = {
//   font-size: 1rem                16px;
//   line-height: 1.5rem            24px;
// }
// text-lg = {
// font-size: 1.125rem;             18px;
// line-height: 1.75rem;            28px
// }
// font-normal  font-weight:         400;
// text-medium =                    500;
// font-semibold  font-weight:       600;
// font-bold  font-weight:           700;
// font-extrabold font-weight:     800;
// font-black font-weight:         900;
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      maxWidth: {
        container: "1440px",
      },
      fontSize: {
        "4xl": [
          "1.063rem",
          {
            lineHeight: "1.62rem", //17px
            fontWeight: "600",
          },
        ],
        "5xl": [
          "1.188rem", //19px
          {
            lineHeight: "1.813rem",
            fontWeight: "600",
          },
        ],
        "6xl": [
          "2.25rem", //36px
          {
            fontWeight: "600",
          },
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        md: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
        "3xl": "0 2px 11px 0px rgba(160, 152, 211, 0.2)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      },
      colors: {
        success: {
          light: "#9CD2B2",
          DEFAULT: "#1ECA63",
          100: "#6FDB66",
          200: "#ECFDEB",
          300: "#00DF59",
          400: "#EBFFED",
          500: "#9CD2B2",
          600: "#01A88C",
          700: "#72C6AD",
          800: "#E2F1ED",
          900: "#FCF6DF",
          1000: "#F8EAFF",
        },
        primary: {
          light: "#19A49C",
          DEFAULT: "#109088",
          100: "#9898EB",
          200: "#77B6FF",
          300: "#E8E6FF",
          400: "#299DCF",
          500: "#8181E7",
          600: "#B0B0FF",
          700: "#9E9EF6",
          800: "#E0E0FB",
          900: "#DFF1FF",
          1000: "#E0E0FF",
          1100: "#BFBFFF",
          1200: "#F2F5FE",
          1300: "#EFF6FF",
          1400: "#3A69E0",
          1500: "#E0B4E4",
          1600: "#A39EDF",
          1700: "#E7F3F2",
          1800: "#E9E9FF",
          1900: "#EBF7FD",
          2000: "#FDF4FE",
          2100: "#FCD6D8",
          2200: "#ECEBFD",
          2300: "#7070FF",
          2400: "#E8F4F4",
          2500: "#CAE8E8",
          2600: "#2D7CD9",
          2700: "#6BDDD6",
          2800: "#39C2B9",
          2900: "#22ABA3",
        },
        warning: {
          light: "#FF9776",
          DEFAULT: "#FF6B2C",
          100: "#FFC75A",
          300: "#FE9B26",
          400: "#F8A09A",
          500: "#FFFDCE",
          600: "#FFB076",
          700: "#FFC0BC",
          800: "#FFF6EB",
          900: "#2C81BE",
        },
        danger: {
          light: "#FF5858",
          DEFAULT: "#EB3838",
          100: "#FFDDD5",
          200: "#FFF5FC",
        },
        grey: {
          light: "#F3F5F8",
          100: "#EAEAF1",
          200: "#B6B9CE",
          300: "#B0B0B0",
          400: "#5E5E6F",
          500: "#7F7F7F",
          600: "#CCCCCC",
          700: "#F9F9F9",
          800: "#84848D",
          900: "#CCCCD1",
          1000: "#424242",
          1100: "#5B5B5B",
          1200: "#F1F1F1",
          1300: "#A7A7A7",
          1400: "#c4c4c4",
          1500: "#1C2024",
          1600: "#1C1C1C",
          1700: "#575757",
          1800: "#393939",
          1900: "#E7F3F2",
          2000: "#C2C2C7",
          2100: "#ABABAB",
          2200: "#DADAE1",
          2300: "#C4C4C4",
          2400: "#F8F8F8",
          2500: "#646464",
          2600: "#F7F7F7",
        },
        white: {
          DEFAULT: "#FFFFFF",
          100: "#CDE1E1",
          300: "#F3F3F3",
          400: "#F4F4F4",
          500: "#E0E0E4",
        },
        link_border: "#CCCCCC",
      },
      transitionProperty: {
        top: "top",
      },
      animation: {
        "pulse-fast": "pulse 1s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
