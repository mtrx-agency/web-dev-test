import React from "react";
// import { unstable_noStore as noStore } from "next/cache";
import Script from "next/script";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   metadataBase: new URL(`https://${process.env.DOMAIN}`),
//   alternates: {
//     canonical: "/",
//   },
//   openGraph: {
//     images: "/og-image.png",
//   },
// };
//
// export async function generateMetadata(): Promise<Metadata | undefined> {
//   // noStore();
//   return {
//     metadataBase: new URL(`https://${process.env.DOMAIN}`),
//     alternates: {
//       canonical: "/",
//     },
//     // openGraph: {
//     //   images: "/og-image.png",
//     // },
//   };
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={""}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400..600&family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        />

        <Script strategy="beforeInteractive" type="text/javascript" id="env">
          {`window.env = window.location.host === "paper24.com" ? "production" : "staging";`}
        </Script>
        <Script
          defer={true}
          strategy="beforeInteractive"
          type="text/javascript"
          src={process.env.NEXT_PUBLIC_CRM_URL}
        ></Script>
        {/*<Script*/}
        {/*  defer={false}*/}
        {/*  strategy="beforeInteractive"*/}
        {/*  type="text/javascript"*/}
        {/*  src="/ampli.js"*/}
        {/*></Script>*/}
        <Script
          id="_next-gtm-init"
          defer={false}
          strategy="beforeInteractive"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w){
              w['dataLayer']=w['dataLayer']||[];
              w['dataLayer'].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            })(window);`,
          }}
        />
        <Script
          id="_next-gtm"
          defer={false}
          strategy="beforeInteractive"
          type="text/javascript"
          data-ntpc="GTM"
          src={`https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
        />
      </head>
      <body className="bg-light scrollbar-track-white scrollbar-thumb-violet">
        {children}
      </body>
    </html>
  );
}
