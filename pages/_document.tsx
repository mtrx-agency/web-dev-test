import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function LandingDocument() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          property="height"
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={""}
        />
        <link
          property="height"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400..600&family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        />

        <meta
          name="robots"
          content={
            process.env.ENV !== "production"
              ? "noindex,nofollow,noarchive"
              : "all"
          }
        />
        <link
          rel="manifest"
          href="/manifest.webmanifest"
          crossOrigin="use-credentials"
        />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="16x16"
        />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="256x256"
        />

        <meta property="og:type" content="website" />
        <meta property="og:image" content="/opengraph-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta
          property="og:image:alt"
          content="Paper24.com | Academic writing help | Only original papers"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        <meta name="twitter:image:type" content="image/jpeg" />
        <meta name="twitter:image:width" content="150" />
        <meta name="twitter:image:height" content="150" />
        <meta
          property="twitter:image:alt"
          content="Paper24.com | Academic writing help | Only original papers"
        />
      </Head>
      <body className="bg-light scrollbar-track-white scrollbar-thumb-violet">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
