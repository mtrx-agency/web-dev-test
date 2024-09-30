import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sample, Samples } from "@/data/sample";
import PDFModal from "@/components/old/pdf-modal";

export default function Slider() {
  const [sample, setSample] = useState<Sample | null>(null);
  useEffect(() => {
    new window.Swiper(".ph-slider-container", {
      wrapperClass: "ph-slider-wrapper",
      slideClass: "ph-slide",
      grabCursor: true,
      centeredSlides: false,
      loop: true,
      threshold: 20,
      slidesPerView: 1,
      spaceBetween: 16,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      },
      pagination: {
        el: "#paper-help .slider-pagination",
        bulletClass: "slider-pagination__dot",
        bulletActiveClass: "slider-pagination__dot-active",
        clickable: true,
      },
      navigation: {
        nextEl: "#ph-arrow-next",
        prevEl: "#ph-arrow-prev",
      },
      scrollbar: {
        // el: '.sw-scrollbar-2',
        draggable: true,
        slidesPerView: 7,
      },
      on: {
        init: function () {},
      },
    });
  });
  return (
    <>
      <PDFModal sample={sample} setSample={setSample} />
      <div className="h-24"></div>
      <div className="ph-slider-wrap">
        <div className="ph-slider-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
          <div
            className="ph-slider-wrapper"
            id="swiper-wrapper-cf39b88019445025"
            aria-live="polite"
            style={{
              cursor: "grab",
              transitionDuration: "0ms",
              transform: "translate3d(-1295px, 0px, 0px)",
            }}
          >
            <div className="ph-slide">
              <Image
                src="images/old/ph-search.png"
                loading="lazy"
                width="43"
                height="43"
                alt=""
                className="ph-slide-icon"
              />
              <div className="title-20-stolzl">Research paper help</div>
              <div className="text-14-sb">
                When it comes to research papers, our team of professionals is
                at your service. We offer research paper help for all academic
                levels and subjects.
              </div>
              <div className="h-24"></div>
              <div className="ph-slide-btns">
                {Samples.filter(
                  ({ slug }) =>
                    slug ===
                    "the-evaluation-of-direct-voter-engagement-infleunce-of-voters-behavior-and-willingness",
                )
                  .slice(0, 1)
                  .map((s) => (
                    <button
                      key={s.slug}
                      className="ph-slide-btn w-inline-block"
                      data-pdf-instructions={s.instructions}
                      data-pdf-citation={s.citation}
                      data-pdf-level={s.level}
                      data-pdf-pages={s.pages}
                      data-pdf-subject={s.subject}
                      data-pdf-url={s.url}
                      data-open-pdf="true"
                      data-pdf-service={s.service}
                      data-pdf-type={s.typeOfWork}
                      data-pdf-sources={s.sources}
                      data-pdf-title={s.title}
                      onClick={() => setSample(s)}
                    >
                      View sample
                    </button>
                  ))}

                <Link
                  href="/research-paper-help"
                  className="ph-slide-btn purple w-inline-block"
                >
                  <div>Details</div>
                  <Image
                    src="/images/old/our-experts-btn-arrow.svg"
                    loading="lazy"
                    width="25"
                    height="24"
                    alt=""
                    className="ph-btn-arrow"
                  />
                </Link>
              </div>
            </div>
            <div className="ph-slide">
              <Image
                src="images/old/ph-hat.png"
                loading="lazy"
                width="43"
                height="43"
                alt=""
                className="ph-slide-icon"
              />
              <div className="title-20-stolzl">Dissertation help</div>
              <div className="text-14-sb">
                Navigate your dissertation with confidence. Our specialists
                provide expert research, writing, and analysis to help you
                excel.
              </div>
              <div className="h-24"></div>
              <div className="ph-slide-btns">
                {Samples.filter(
                  ({ slug }) => slug === "compare-and-contrast-discussion-post",
                )
                  .slice(0, 1)
                  .map((s) => (
                    <button
                      key={s.slug}
                      className="ph-slide-btn w-inline-block"
                      data-pdf-instructions={s.instructions}
                      data-pdf-citation={s.citation}
                      data-pdf-level={s.level}
                      data-pdf-pages={s.pages}
                      data-pdf-subject={s.subject}
                      data-pdf-url={s.url}
                      data-open-pdf="true"
                      data-pdf-service={s.service}
                      data-pdf-type={s.typeOfWork}
                      data-pdf-sources={s.sources}
                      data-pdf-title={s.title}
                      onClick={() => setSample(s)}
                    >
                      View sample
                    </button>
                  ))}
                <Link
                  href="/dissertation-help"
                  className="ph-slide-btn purple w-inline-block"
                >
                  <div>Details</div>
                  <Image
                    src="/images/old/our-experts-btn-arrow.svg"
                    loading="lazy"
                    width="25"
                    height="24"
                    alt=""
                    className="ph-btn-arrow"
                  />
                </Link>
              </div>
            </div>
            <div className="ph-slide">
              <Image
                src="images/old/ph-books.png"
                loading="lazy"
                width="43"
                height="43"
                alt=""
                className="ph-slide-icon"
              />
              <div className="title-20-stolzl">Homework help</div>
              <div className="text-14-sb">
                Need assistance with your homework assignments? Our service is
                here to provide you with the support you need.
              </div>
              <div className="h-24"></div>
              <div className="ph-slide-btns">
                {Samples.filter(
                  ({ slug }) => slug === "marketing-homework-starbucks",
                )
                  .slice(0, 1)
                  .map((s) => (
                    <button
                      key={s.slug}
                      className="ph-slide-btn w-inline-block"
                      data-pdf-instructions={s.instructions}
                      data-pdf-citation={s.citation}
                      data-pdf-level={s.level}
                      data-pdf-pages={s.pages}
                      data-pdf-subject={s.subject}
                      data-pdf-url={s.url}
                      data-open-pdf="true"
                      data-pdf-service={s.service}
                      data-pdf-type={s.typeOfWork}
                      data-pdf-sources={s.sources}
                      data-pdf-title={s.title}
                      onClick={() => setSample(s)}
                    >
                      View sample
                    </button>
                  ))}
                <Link
                  href="/homework-help"
                  className="ph-slide-btn purple w-inline-block"
                >
                  <div>Details</div>
                  <Image
                    src="/images/old/our-experts-btn-arrow.svg"
                    loading="lazy"
                    width="25"
                    height="24"
                    alt=""
                    className="ph-btn-arrow"
                  />
                </Link>
              </div>
            </div>
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
        <div className="slider-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
          <span
            className="slider-pagination__dot slider-pagination__dot-active"
            tabIndex={0}
            role="button"
            aria-label="Go to slide 1"
            aria-current="true"
          ></span>
          <span
            className="slider-pagination__dot"
            tabIndex={0}
            role="button"
            aria-label="Go to slide 2"
          ></span>
          <span
            className="slider-pagination__dot"
            tabIndex={0}
            role="button"
            aria-label="Go to slide 3"
          ></span>
          <span
            className="slider-pagination__dot"
            tabIndex={0}
            role="button"
            aria-label="Go to slide 4"
          ></span>
        </div>
      </div>
    </>
  );
}
