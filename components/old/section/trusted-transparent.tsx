import Link from "next/link";
import Image from "next/image";
import React from "react";

interface SectionTrustedTransparentProps {
  domain?: string;
  crmURL?: string;
}

export default function SectionTrustedTransparent({
  crmURL,
}: SectionTrustedTransparentProps) {
  return (
    <>
      <section className="section-fixed">
        <div className="container-138">
          <div className="advantages">
            <div className="h-120 mob-64"></div>
            <div className="adv-grid">
              <div className="adv-cta">
                <div className="max-w-410 mob-full">
                  <div className="title-36-stlz mob-28">
                    Trusted &amp; Transparent
                  </div>
                </div>
                <div className="h-24"></div>
                <div className="text-16-stolzl book">
                  We’re committed to making it easy for you to find the expert
                  that fits your needs perfectly.
                </div>
                <div className="h-32"></div>
                <Link
                  href={`${crmURL}/create-order`}
                  className="puple-btn full-mob w-inline-block"
                  data-amplitude="true"
                  data-a-position="Body"
                  data-a-cta="true"
                >
                  <div className="purple-btn-text">Get expert help</div>
                </Link>
                <div className="mob-40 h-96"></div>
                <div className="adv-customers">
                  <div className="title-28 black">20k+</div>
                  <Image
                    src="/images/old/customers-min.png"
                    loading="lazy"
                    width="112"
                    height="48"
                    alt=""
                    className="adv-customers-img"
                  />
                  <div className="text-14-400-sb">Satisfied customers</div>
                </div>
              </div>
              <div className="adv-bubbles-wrap">
                <div className="adv-bubbles-right">
                  <div className="adv-bubble pb-62 mob-pb-32">
                    <Image
                      src="/images/old/stay-anonymous.svg"
                      loading="lazy"
                      width="48"
                      height="48"
                      alt=""
                      className="adv-bubble-icon"
                    />
                    <div className="h-32"></div>
                    <div className="text-16 black lh-120">Stay Anonymous</div>
                    <div className="h-24"></div>
                    <div className="text-14 stoltl-book">
                      We value your privacy and take it seriously.
                    </div>
                  </div>
                  <div className="adv-bubble">
                    <Image
                      src="/images/old/beneficiaries.svg"
                      loading="lazy"
                      width="48"
                      height="48"
                      alt=""
                      className="adv-bubble-icon"
                    />
                    <div className="h-24"></div>
                    <div className="text-16 black lh-120">Stay safe</div>
                    <div className="h-24"></div>
                    <div className="text-14 stoltl-book">
                      We verify your paper using the same tools as your
                      professors, ensuring genuine quality.
                    </div>
                  </div>
                </div>
                <div className="adv-bubbles-left">
                  <div className="adv-bubble px-24">
                    <Image
                      src="/images/old/emoji-happy.svg"
                      loading="lazy"
                      width="48"
                      height="48"
                      alt=""
                      className="adv-bubble-icon"
                    />
                    <div className="h-24"></div>
                    <div className="text-16 black lh-120">Trust Matters</div>
                    <div className="h-24"></div>
                    <div className="text-14 stoltl-book">
                      Hear from other students just like you who’ve trusted
                      Paper24 for their assignments.
                    </div>
                    <div className="h-24"></div>
                    <div className="adv-bubble-reviews">
                      <div className="adv-bubble-review-wrap">
                        <Image
                          src="/images/old/reviews-io-icon.png"
                          loading="lazy"
                          alt=""
                          height="25"
                          width="124"
                          className="adv-bubble-review-img reviewsio"
                        />
                        <div className="text-20 _400">4.8</div>
                      </div>
                      <div className="adv-bubble-review-wrap">
                        <Image
                          src="/images/old/sitejabber-icon.png"
                          loading="lazy"
                          alt=""
                          height="26"
                          width="113"
                          className="adv-bubble-review-img sitejabber"
                        />
                        <div className="text-20 _400">4.9</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-120 mob-64"></div>
          </div>
        </div>
      </section>
    </>
  );
}
