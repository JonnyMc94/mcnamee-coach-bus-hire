import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },

      screens: {
        "xsm": {"min": "500px", "max": "660px"},
        "xxsm": {"min": "440px", "max": "505px"},
        "xxxsm": {"min": "380px", "max": "446px"},
      },

      fontSize: {
        "vsm": "0.6rem",
        "vvsm" : "0.5rem",
        "vvvsm" : "0.4rem"
      }
    },
  },
  plugins: [

  ],
};
export default config;
