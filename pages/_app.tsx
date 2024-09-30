import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { inter, poppins } from "@/app/fonts";

export default function LandingApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} ${inter.variable} font-inter`}>
      <Component {...pageProps} />
    </main>
  );
}
