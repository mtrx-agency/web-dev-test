import Image from "next/image";
import Link from "next/link";

interface Props {
  crmURL: string;
}

export default function HeroSectionOurServices({ crmURL }: Props) {
  return (
    <div className="hero-full">
      <div className="section-fixed hero">
        <div className="container-138 hero-section _100vh">
          <div className="hero-head-block mob-hide"></div>
          <div className="h-70 mob-44 mob-hide"></div>
          <div className="hero-cols n-home">
            <div className="content-col n-hero">
              <div className="n-hero-wrap">
                <h1 className="title-60-stolz">
                  <span className="blue-text">Research paper help</span> online
                  for every student
                </h1>
                <div className="hero-nc"></div>
              </div>
              <div className="h-16"></div>
              <div className="max-w-495">
                <div className="text-20-stolz">
                  Get expert help with your research paper.
                  <br />
                  Right here. Right now.
                </div>
              </div>
              <div className="h-32"></div>
              <div className="hero-btn-wr no-mw n-home">
                <Link
                  href={`${crmURL}/create-order`}
                  className="sc-cta-btn-blink w-inline-block"
                  data-amplitude="true"
                  data-a-position="Hero"
                  data-a-cta="true"
                >
                  <div>Get expert help</div>
                  <div className="blink-border-1"></div>
                  <div className="blink-border-2"></div>
                  <div className="blink-border-3"></div>
                </Link>
                <div className="n-hero-plag">
                  <Image
                    src="/images/old/hero-check.svg"
                    loading="lazy"
                    width="24"
                    height="25"
                    alt=""
                    className="n-hero-check"
                  />
                  <div className="text-14-stolz">
                    Free plagiarism and AI report
                  </div>
                </div>
              </div>
            </div>
            <div className="main-img-col n-home">
              <Image
                src="/images/old/hero-spot.svg"
                loading="lazy"
                width="898"
                height="700"
                alt=""
                className="hero-main-bg-img"
              />
              <Image
                src="/images/old/hero-img-m.webp"
                loading="eager"
                width="530"
                height="948"
                alt=""
                data-srcset="/images/old/hero-img-m-p-500.png 500w, images/hero-img-m-p-800.png 800w, images/hero-img-m.webp 1061w"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 64vw, 43vw"
                className="hero-girl-img n-home"
              />
            </div>
          </div>
          <div className="h-110 hide-mobile"></div>
        </div>
      </div>
    </div>
  );
}
