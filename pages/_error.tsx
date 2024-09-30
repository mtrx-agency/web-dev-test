"use client";

import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/old/header";
import Footer from "@/components/old/footer";
import "@/styles/old/normalize.css";
import "@/styles/old/components.css";
import "@/styles/old/p-42.css";
import { BasicPageProps } from "@/utils/props";

// TODO fix this page

export default function NotFound({ crmURL, domain }: BasicPageProps) {
  return (
    <>
      <Header crmURL={crmURL} staticBg={true} />

      <div className="site">
        <div className="utility-page-wrap">
          <div className="utility-page-content">
            <Image
              src="/images/old/page-not-found.svg"
              alt=""
              height={40}
              width={40}
            />
            <h2>Page Not Found</h2>
            <div>
              The page you are looking for doesn’t exist or has been moved
            </div>
            <Link href="/" className="link-block w-inline-block">
              <div>Go to Home page</div>
            </Link>
          </div>
        </div>
      </div>

      <Footer domain={domain} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      crmURL: process.env.NEXT_PUBLIC_CRM_URL,
      domain: process.env.NEXT_PUBLIC_DOMAIN,
    },
  };
};
