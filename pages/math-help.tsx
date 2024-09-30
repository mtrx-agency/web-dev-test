import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/old/footer";
import Header from "@/components/old/header";
import FAQWrapperBlock from "@/components/old/blocks/faq-wrapper";
import TabsTrevsRelBlock from "@/components/old/blocks/tabs-trevs-rel";
import "@/styles/old/normalize.css";
import "@/styles/old/components.css";
import "@/styles/old/p-42.css";
import { BasicPageProps } from "@/utils/props";

export default function MathHelp({ domain, crmURL }: BasicPageProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Ace your math homework with our help | Paper24</title>
        <meta
          content="Get the math help you need, no matter the level. Our skilled experts provide reliable solutions for any math assignment."
          name="description"
        />
        <meta
          content="Ace your math homework with our help | Paper24"
          property="og:title"
        />
        <meta
          content="Get the math help you need, no matter the level. Our skilled experts provide reliable solutions for any math assignment."
          property="og:description"
        />
        <meta
          content="Ace your math homework with our help | Paper24"
          property="twitter:title"
        />
        <meta
          content="Get the math help you need, no matter the level. Our skilled experts provide reliable solutions for any math assignment."
          property="twitter:description"
        />
        <link href={`https://${domain}/math-help`} rel="canonical" />
        <script
          type="text/javascript"
          id="pageGroup"
          dangerouslySetInnerHTML={{
            __html: `window.pageGroup="Service"`,
          }}
        />
      </Head>

      <Header crmURL={crmURL} />

      <div>
        <div className="hero-full rel-ov-h">
          <div className="math-hero-grad">
            <Image
              src="/images/old/math-hero-m.webp"
              loading="lazy"
              width="2800"
              height="1400"
              alt=""
              data-srcset="/images/old/math-hero-m-p-500.png 500w, images/math-hero-m-p-800.png 800w, images/math-hero-m-p-1080.png 1080w, images/math-hero-m-p-1600.png 1600w, images/math-hero-m-p-2000.png 2000w, images/math-hero-m.webp 2800w"
              sizes="100vw"
              className="math-hero-img"
            />
          </div>
          <div className="section-fixed">
            <div className="container-138">
              <div className="math-hero-img-wr"></div>
              <div className="hero-head-block"></div>
              <div className="h-120 mob-30"></div>
              <div className="math-hero-cont">
                <h1 className="title-72 math-mod">
                  Ace your <span className="white-decor-span">math</span>{" "}
                  <span className="white-decor-span">homework</span> 24/7
                </h1>
                <div className="h-15 mob-20"></div>
                <div className="math-subt-wr">
                  <div className="text-20">
                    Submit math homework with ease and on time
                  </div>
                </div>
                <div className="mob-30 h-40"></div>
                <Link
                  href={`${crmURL}/create-order`}
                  className="btn-hero-blink w-inline-block"
                  data-amplitude="true"
                  data-a-position="Hero"
                  data-a-cta="true"
                >
                  <div className="blink-border-1"></div>
                  <div className="blink-border-2"></div>
                  <div className="blink-border-3"></div>
                  <Image
                    src="/images/old/write-icon.png"
                    loading="lazy"
                    width="96"
                    height="96"
                    alt=""
                    className="button-icon"
                  />
                  <div>Get started</div>
                </Link>
              </div>
              <div className="h-150 mob-80"></div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="h-120 mob-60"></div>
          <div className="container-180">
            <div className="title-div">
              <h2 className="title-60">
                <span className="blue-text">Subjects</span> covered
              </h2>
            </div>
            <div className="mob-30 h-60"></div>
            <div className="sub-wr">
              <div className="sub-item">
                <div className="text-16-600">Basic math</div>
              </div>
              <div className="sub-item">
                <div className="text-16-600">Pre-algebra</div>
              </div>
              <div className="sub-item">
                <div className="text-16-600">Algebra</div>
              </div>
              <div className="sub-icon-item">
                <Image
                  src="/images/old/sub-icon-1.svg"
                  loading="lazy"
                  width="30"
                  height="30"
                  alt=""
                  className="sub-icon"
                />
              </div>
              <div className="sub-item">
                <div className="text-16-600">Geometry</div>
              </div>
              <div className="sub-item">
                <div className="text-16-600">Trigonometry</div>
              </div>
              <div className="sub-item">
                <div className="text-16-600">Numerical analysis</div>
              </div>
              <div className="sub-icon-item">
                <Image
                  src="/images/old/sub-icon-2.svg"
                  loading="lazy"
                  width="30"
                  height="30"
                  alt=""
                  className="sub-icon"
                />
              </div>
              <div className="sub-item">
                <div className="text-16-600">Statistics</div>
              </div>
              <div className="sub-item">
                <div className="text-16-600">Discrete mathematics</div>
              </div>
              <div className="sub-item">
                <div className="text-16-600">Differential equations</div>
              </div>
              <div className="sub-item">
                <div className="text-16-600">Integration</div>
              </div>
              <div className="sub-item">
                <div className="text-16-600">Calculus</div>
              </div>
              <div className="sub-icon-item">
                <Image
                  src="/images/old/sub-icon-3.svg"
                  loading="lazy"
                  width="30"
                  height="30"
                  alt=""
                  className="sub-icon"
                />
              </div>
              <div className="sub-item">
                <div className="text-16-600">Linear algebra</div>
              </div>
              <div className="sub-icon-item">
                <Image
                  src="/images/old/sub-icon-4.svg"
                  loading="lazy"
                  width="30"
                  height="30"
                  alt=""
                  className="sub-icon"
                />
              </div>
            </div>
            <div className="mob-30 h-60"></div>
            <div className="center-div">
              <Link
                href={`${crmURL}/create-order`}
                className="btn w-inline-block"
                data-amplitude="true"
                data-a-position="Body"
                data-a-cta="true"
              >
                <div>Get help</div>
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
          </div>
          <div className="mob-50 h-80"></div>
        </div>
        <div className="section">
          <div className="mob-50 h-80"></div>
          <div className="container-180">
            <div className="title-div">
              <h2 className="title-60">
                How it <span className="blue-text">Works</span>
              </h2>
            </div>
            <div className="h-75 mob-30"></div>
            <div className="hiw-math-wr">
              <div
                id="w-node-_1990fc72-115a-55b4-b573-1d11def3a07d-60f094f9"
                className="hiw-math-item"
              >
                <div className="hiw-math-title">
                  <div className="number-40-div">
                    <div className="text-14">01</div>
                  </div>
                  <div className="title-24-500">Step 1</div>
                </div>
                <div className="h-15"></div>
                <div className="text-16-600">
                  Submit your math problems and set the deadline when you need
                  them done.
                </div>
                <div className="h-20"></div>
                <div className="hiw-math-img-wr">
                  <Image
                    src="/images/old/hiw-math-img-1.svg"
                    loading="lazy"
                    width="200"
                    height="150"
                    alt=""
                    className="hiw-math-img"
                  />
                </div>
              </div>
              <div
                id="w-node-_61cef971-a8c2-1aef-2567-710ca8413d61-60f094f9"
                className="hiw-math-item"
              >
                <div className="hiw-math-title">
                  <div className="number-40-div bl-rel">
                    <div className="text-14">02</div>
                    <div className="mhiw-arrow-div">
                      <Image
                        src="/images/old/arrow-mhiw.svg"
                        loading="lazy"
                        width="183"
                        height="91"
                        alt=""
                        className="mhiw-arrow-icon"
                      />
                      <Image
                        src="/images/old/arrow-down.webp"
                        loading="lazy"
                        width="101"
                        height="565"
                        alt=""
                        className="mhiw-arrow-mob"
                      />
                    </div>
                  </div>
                  <div className="title-24-500">Step 2</div>
                </div>
                <div className="h-15"></div>
                <div className="text-16-600">
                  We&#x27;ll get back to you with a quote for your order and
                  find the best available expert.
                </div>
                <div className="h-20"></div>
                <div className="hiw-math-img-wr">
                  <Image
                    src="/images/old/hiw-math-img-2.svg"
                    loading="lazy"
                    width="200"
                    height="150"
                    alt=""
                    className="hiw-math-img"
                  />
                </div>
              </div>
              <div
                id="w-node-d3544b4f-a569-4392-3eca-db4456335ba7-60f094f9"
                className="hiw-math-item"
              >
                <div className="hiw-math-title">
                  <div className="number-40-div bl-rel">
                    <div className="text-14">03</div>
                    <div className="mhiw-arrow-div">
                      <Image
                        src="/images/old/arrow-mhiw.svg"
                        loading="lazy"
                        width="183"
                        height="91"
                        alt=""
                        className="mhiw-arrow-icon"
                      />
                      <Image
                        src="/images/old/arrow-down.webp"
                        loading="lazy"
                        width="101"
                        height="565"
                        alt=""
                        className="mhiw-arrow-mob"
                      />
                    </div>
                  </div>
                  <div className="title-24-500">Step 3</div>
                </div>
                <div className="h-15"></div>
                <div className="text-16-600">
                  Make a prepayment, which will be held securely on your balance
                  and released to the expert once you&#x27;re fully satisfied.
                </div>
                <div className="h-20"></div>
                <div className="hiw-math-img-wr">
                  <Image
                    src="/images/old/hiw-math-img-3.svg"
                    loading="lazy"
                    width="200"
                    height="150"
                    alt=""
                    className="hiw-math-img"
                  />
                </div>
              </div>
              <div
                id="w-node-b2f77d5c-9914-ea99-035c-9bccfc533516-60f094f9"
                className="hiw-math-item black"
              >
                <div className="hiw-math-title">
                  <div className="number-40-div bl-rel">
                    <div className="text-14">04</div>
                    <div className="mhiw-arrow-div">
                      <Image
                        src="/images/old/arrow-mhiw.svg"
                        loading="lazy"
                        width="183"
                        height="91"
                        alt=""
                        className="mhiw-arrow-icon"
                      />
                      <Image
                        src="/images/old/arrow-down.webp"
                        loading="lazy"
                        width="101"
                        height="565"
                        alt=""
                        className="mhiw-arrow-mob"
                      />
                    </div>
                  </div>
                  <div className="title-24-500">Step 4</div>
                </div>
                <div className="h-15"></div>
                <div className="text-16-600">
                  We&#x27;ll deliver your order via email once it&#x27;s ready.
                  Please review it and confirm that it meets your requirements.
                </div>
                <div className="h-20"></div>
                <div className="hiw-math-img-wr">
                  <Image
                    src="/images/old/hiw-math-img-4.svg"
                    loading="lazy"
                    width="200"
                    height="150"
                    alt=""
                    className="hiw-math-img"
                  />
                </div>
              </div>
            </div>
            <div className="h-60"></div>
            <div className="center-div">
              <Link
                href={`${crmURL}/create-order`}
                className="btn w-inline-block"
                data-amplitude="true"
                data-a-position="Body"
                data-a-cta="true"
              >
                <div>Get started</div>
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
          </div>
          <div className="mob-50 h-80"></div>
        </div>
        <div id="reviews" className="section ov-h">
          <div className="mob-50 h-80"></div>
          <div className="container-180">
            <div className="title-div">
              <h2 className="title-60">
                Loved by <span className="blue-text">students</span>
              </h2>
            </div>
            <div className="h-60"></div>
            <TabsTrevsRelBlock />
            <div className="h-70 mob-30"></div>
            <div className="center-div">
              <Link href="/reviews" className="btn w-inline-block">
                <div>View more</div>
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
          </div>
          <div className="mob-50 h-80"></div>
        </div>
        <div className="section">
          <div className="mob-50 h-80"></div>
          <div className="container-180">
            <div className="pay-accept-wr">
              <div className="pa-logos-wr">
                <div className="pay-title-wr">
                  <div className="title-24-500">We accept:</div>
                </div>
                <div className="pa-icon-div">
                  <Image
                    src="/images/old/gpay_1.svg"
                    loading="lazy"
                    width="67"
                    height="32"
                    alt=""
                    className="pa-icon"
                  />
                </div>
                <div className="pal-sep"></div>
                <div className="pa-icon-div">
                  <Image
                    src="/images/old/apple-pay.svg"
                    loading="lazy"
                    width="67"
                    height="32"
                    alt=""
                    className="pa-icon"
                  />
                </div>
                <div className="pal-sep"></div>
                <div className="pa-icon-div">
                  <Image
                    src="/images/old/mc-icon.svg"
                    loading="lazy"
                    width="67"
                    height="32"
                    alt=""
                    className="pa-icon"
                  />
                </div>
                <div className="pal-sep mob-mod"></div>
                <div className="pa-icon-div">
                  <Image
                    src="/images/old/Discover_Card_logo.svg"
                    loading="lazy"
                    width="67"
                    height="32"
                    alt=""
                    className="pa-icon"
                  />
                </div>
                <div className="pal-sep"></div>
                <div className="pa-icon-div">
                  <Image
                    src="/images/old/ae-icon.svg"
                    loading="lazy"
                    width="67"
                    height="32"
                    alt=""
                    className="pa-icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mob-50 h-80"></div>
        </div>
        <div className="section">
          <div className="mob-50 h-80"></div>
          <div className="container-180">
            <div className="title-div _740">
              <h2 className="title-60">
                Transparent <span className="blue-text">Pricing</span>
              </h2>
              <div className="text-16">
                The quote depends on the following factors:
              </div>
            </div>
            <div className="mob-30 h-60"></div>
            <div className="t-pricing-wr">
              <div className="t-pricing-item">
                <div className="div-block">
                  <Image
                    src="/images/old/price-icon-1.svg"
                    loading="lazy"
                    width="24"
                    height="24"
                    alt=""
                    className="icon-price"
                  />
                </div>
                <div className="text-16-600">
                  The complexity of the concepts being covered
                </div>
              </div>
              <div className="t-pricing-item">
                <div className="div-block">
                  <Image
                    src="/images/old/price-icon-2.svg"
                    loading="lazy"
                    width="24"
                    height="24"
                    alt=""
                    className="icon-price"
                  />
                </div>
                <div className="text-16-600">
                  The time required for the expert to complete the assignment
                </div>
              </div>
              <div className="t-pricing-item">
                <div className="div-block">
                  <Image
                    src="/images/old/price-icon-3.svg"
                    loading="lazy"
                    width="24"
                    height="24"
                    alt=""
                    className="icon-price"
                  />
                </div>
                <div className="text-16-600">
                  The experience and qualifications of the expert
                </div>
              </div>
              <div className="t-pricing-item">
                <div className="div-block">
                  <Image
                    src="/images/old/price-icon-4.svg"
                    loading="lazy"
                    width="24"
                    height="24"
                    alt=""
                    className="icon-price"
                  />
                </div>
                <div className="text-16-600">The urgency of the assignment</div>
              </div>
            </div>
          </div>
          <div className="mob-50 h-80"></div>
        </div>
        <div className="section">
          <div className="mob-50 h-80"></div>
          <div className="container-180">
            <div className="cols-text">
              <div className="col-text _465">
                <div className="title-50">
                  <span className="blue-text">Money-back</span> guarantee
                </div>
                <div className="grey-text-434c67">
                  <div className="text-16">
                    At Paper24, we strive to provide the best experience for all
                    our clients. If you feel we did not meet your initial
                    requirements, we offer a 100% money-back guarantee. For more
                    information, please see our Terms of Use.
                  </div>
                </div>
              </div>
              <div className="col-math-img-div">
                <div className="cm-img-wr">
                  <Image
                    src="/images/old/col-img-1-m.webp"
                    loading="lazy"
                    width="550"
                    height="438"
                    alt=""
                    data-srcset="/images/old/col-img-1-m-p-500.png 500w, images/col-img-1-m.webp 700w"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 49vw, (max-width: 991px) 36vw, 24vw"
                    className="col-math-img"
                  />
                </div>
                <Image
                  src="/images/old/money-back-icon-m.png"
                  loading="lazy"
                  width="340"
                  height="342"
                  alt=""
                  className="mb-icon"
                />
              </div>
            </div>
            <div className="h-160 mob-100"></div>
            <div className="cols-text mob-rev">
              <div className="col-math-img-div">
                <div className="cm-img-wr">
                  <Image
                    src="/images/old/col-img-2-m.webp"
                    loading="lazy"
                    width="550"
                    height="438"
                    alt=""
                    className="col-math-img"
                  />
                </div>
              </div>
              <div className="col-text">
                <div className="title-50">
                  Who are <br />
                  our <span className="blue-text">experts</span>?
                </div>
                <div className="grey-text-434c67">
                  <div className="text-16">
                    Our team of experts consists of freelancers and alumni from
                    top universities in the US and worldwide. They are qualified
                    to assist you with various tasks and have passed a rigorous
                    examination process to prove their competence. They also
                    agree to follow our Honor Code as part of their commitment
                    to providing high-quality service.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mob-50 h-80"></div>
        </div>
        <div id="blog" className="section hide">
          <div className="mob-50 h-80"></div>
          <div className="container-180">
            <div className="title-div _740">
              <h2 className="title-60">
                Welcome to our <span className="blue-text">blog</span>
              </h2>
            </div>
            <div className="mob-30 h-60"></div>
            <div className="blog-wr w-dyn-list">
              <div role="list" className="blog-list w-dyn-items">
                <div
                  id="w-node-_80a6279b-654c-ee6d-05eb-9393a7536b41-60f094f9"
                  role="listitem"
                  className="blog-item w-dyn-item"
                >
                  <button
                    type="button"
                    className="blog-post-link w-inline-block"
                  >
                    <Image
                      loading="lazy"
                      width="307"
                      height="192"
                      alt=""
                      src=""
                      className="blog-post-img w-dyn-bind-empty"
                    />
                    <div className="h-20"></div>
                    <div className="title-20-500 w-dyn-bind-empty"></div>
                    <div className="h-20"></div>
                    <div className="bpost-small-info">
                      <div className="p-date-wr">
                        <Image
                          src="/images/old/date.webp"
                          loading="lazy"
                          width="18"
                          height="18"
                          alt=""
                          className="date-img"
                        />
                        <div className="text-14 w-dyn-bind-empty"></div>
                      </div>
                      <div className="p-time-wr">
                        <Image
                          src="/images/old/time.webp"
                          loading="lazy"
                          width="18"
                          height="18"
                          alt=""
                          className="date-img"
                        />
                        <div className="text-14 w-dyn-bind-empty"></div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="w-dyn-empty">
                <div>No items found.</div>
              </div>
              <div
                role="navigation"
                aria-label="List"
                className="w-pagination-wrapper"
              >
                <button
                  type="button"
                  aria-label="Previous Page"
                  className="w-pagination-previous"
                >
                  <svg
                    className="w-pagination-previous-icon"
                    height="12px"
                    width="12px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 12"
                    transform="translate(0, 1)"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      fillRule="evenodd"
                      d="M8 10L4 6l4-4"
                    ></path>
                  </svg>
                  <div className="w-inline-block">Previous</div>
                </button>
                <button
                  type="button"
                  aria-label="Next Page"
                  className="w-pagination-next"
                >
                  <div className="w-inline-block">Next</div>
                  <svg
                    className="w-pagination-next-icon"
                    height="12px"
                    width="12px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 12"
                    transform="translate(0, 1)"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      fillRule="evenodd"
                      d="M4 2l4 4-4 4"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mob-30 h-60"></div>
            <div className="center-div">
              <Link href="/blog" className="btn w-inline-block">
                <div>Go to blog</div>
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
          </div>
          <div className="mob-50 h-80"></div>
        </div>
        <div className="section">
          <div className="mob-50 h-80"></div>
          <div className="container-180">
            <div className="title-div">
              <h2 className="title-60">
                Frequently asked <span className="blue-text">questions</span>
              </h2>
            </div>
            <div className="h-60"></div>
            <FAQWrapperBlock />
          </div>
          <div className="mob-50 h-80"></div>
        </div>
        <div className="section">
          <div className="mob-50 h-80"></div>
          <div className="container-180">
            <div className="title-div">
              <h2 className="title-60">
                COLLEGE IS HARD WE MAKE IT{" "}
                <span className="blue-text">EASIER</span>
              </h2>
            </div>
            <div className="h-30"></div>
            <div className="center-div">
              <Link
                href={`${crmURL}/create-order`}
                className="btn w-inline-block"
                data-amplitude="true"
                data-a-position="Body"
                data-a-cta="true"
              >
                <div>Get help with my project</div>
                <Image
                  src="/images/old/btn-right.svg"
                  loading="lazy"
                  width="26"
                  height="15"
                  alt=""
                  className="btn-arrow-icon hide-mob hide"
                />
              </Link>
            </div>
          </div>
          <div className="h-80"></div>
          <div className="h-80"></div>
        </div>
      </div>

      <Footer domain={domain} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      domain: process.env.NEXT_PUBLIC_DOMAIN,
      crmURL: process.env.NEXT_PUBLIC_CRM_URL,
    },
  };
};
