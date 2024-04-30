import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
        "4sm": {"min": "320px", "max": "379px"},
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
