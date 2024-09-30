import {
  fluidExtractor,
  fluidCorePlugins,
  defaultThemeScreensInRems,
  defaultThemeFontSizeInRems,
  fluidize,
} from "fluid-tailwind";
import tailwindScrollbar from "tailwind-scrollbar";
import headlessUI from "@headlessui/tailwindcss";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract: fluidExtractor(),
  },
  theme: {
    fontSize: defaultThemeFontSizeInRems,
    // screens: defaultThemeScreensInRems,
    // fontFamily: {
    //   inter: "Inter, sans-serif",
    //   poppins: "Poppins, sans-serif",
    // },
    screens: {
      ...defaultThemeScreensInRems,
      md: "57.785rem"
    },
    // colors: {
    //   defaultThemeCo
    //   transparent: "transparent",
    //   black: "#1F2127",
    //   white: "#fff",
    //   violet: "#8466FF",
    //   light: "#F8F8FF",
    // },
    extend: {
      // fontSize: "0.8rem",
      colors: {
        transparent: "transparent",
        black: "#1F2127",
        white: "#fff",
        violet: "#8466FF",
        light: "#F8F8FF",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        carousel: "marquee 60s linear infinite",
        carouselMobile: "marquee 10s linear infinite",
      },
    },
    container: {
      center: true,
    },
    fluid: {
      defaultContainers: ["0.813rem", "100rem"],
      defaultScreens: ["20rem", "120rem"],
    },
  },
  plugins: [
    fluidize(tailwindScrollbar()),
    fluidize(headlessUI()),
    fluidize(
      plugin(function ({ addVariant }) {
        addVariant("scrolled", ".scrolled &");
      }),
    ),
    fluidCorePlugins,
  ],
};
