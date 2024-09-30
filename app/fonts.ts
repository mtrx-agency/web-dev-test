import { Inter, Poppins } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});
