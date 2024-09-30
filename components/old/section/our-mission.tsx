import Link from "next/link";
import Image from "next/image";

interface SectionOurMissionProps {
  domain?: string;
  crmURL?: string;
}

export default function SectionOurMission({ crmURL }: SectionOurMissionProps) {
  return (
    <>
      <section className="section-fixed">
        <div className="container-138">
          <div className="h-75 mob-hide"></div>
          <div className="sc-cta">
            <Image
              src="/images/old/img.webp"
              loading="lazy"
              alt=""
              height="374"
              width="375"
              className="sc-cta-img"
            />
            <div className="sc-cta-texts">
              <h2 className="sc-cta-title">
                We believe that every student deserves{" "}
                <span className="blue-text">success</span>
              </h2>
              <div className="sc-cta-subtitle">
                Our mission is to empower you to overcome obstacles, excel in
                your studies, and achieve the grades you deserve. With expert
                paper help tailored to your needs, you can unlock your true
                academic potential and embrace a future filled with
                opportunities.
              </div>
              <Link
                href={`${crmURL}/create-order`}
                className="sc-cta-btn-blink w-inline-block"
                data-amplitude="true"
                data-a-position="Body"
                data-a-cta="true"
              >
                <div>Get expert help</div>
                <div className="blink-border-1"></div>
                <div className="blink-border-2"></div>
                <div className="blink-border-3"></div>
              </Link>
            </div>
            <Image
              src="/images/old/bg.svg"
              loading="lazy"
              width="452"
              height="401"
              alt=""
              className="image-6"
            />
          </div>
        </div>
      </section>
    </>
  );
}
