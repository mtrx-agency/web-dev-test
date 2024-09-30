import Link from "next/link";
import Image from "next/image";
import TabsTrevsRelBlock from "@/components/old/blocks/tabs-trevs-rel";

export default function OurServicesReviewsSection() {
  return (
    <div id="reviews" className="section">
      <div className="container-20">
        <div className="container-160 black-bg">
          <div className="h-90"></div>
          <div className="title-div _740">
            <h2 className="title-60 white">
              Preferred by psychology{" "}
              <span className="blue-text">students</span>
            </h2>
            <div className="text-16 white">
              Unlimited revisions, 24/7 communication, budget-friendly, and
              top-quality services. That&apos;s why psychology students prefer
              working with Paper24.
            </div>
          </div>
          <div className="h-60"></div>
          <TabsTrevsRelBlock />
          <div className="h-60"></div>
          <div className="center-div">
            <Link href="/reviews" className="btn w-inline-block">
              Show More
              <Image
                src="/images/old/btn-right.svg"
                loading="lazy"
                width="26"
                height="15"
                alt=""
                className="btn-arrow-icon"
              />
            </Link>
          </div>
          <div className="h-70"></div>
        </div>
      </div>
      <div className="h-90"></div>
    </div>
  );
}
