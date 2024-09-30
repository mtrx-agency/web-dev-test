import Image from "next/image";
import Slider from "@/components/old/paper-help-slider";

export default function SectionPaperHelp() {
  return (
    <>
      <section id="paper-help" className="section-fixed">
        <div className="container-138">
          <div className="h-64"></div>
          <div className="hp-wrap">
            <div className="left-title-wr">
              <h2 className="title-36-stlz">
                Comprehensive <span className="blue-text">paper help</span>{" "}
                tailored to you
              </h2>
              <div className="h-18"></div>
              <div className="text-16-stolzl">
                From essays to dissertations, we’ve got you covered
              </div>
            </div>
            <div className="sliders-reviews-nav mob-hide">
              <button
                type="button"
                id="ph-arrow-prev"
                className="sliders-nav__arrow w-inline-block"
                tabIndex={0}
                aria-label="Previous slide"
                aria-controls="swiper-wrapper-cf39b88019445025"
              >
                <Image
                  src="/images/old/sj-nav-arrow-blue.svg"
                  width="28"
                  height="28"
                  loading="lazy"
                  alt=""
                  className="sliders-nav__arrow-icon"
                />
                <Image
                  src="/images/old/sj-nav-arrow-white.svg"
                  loading="lazy"
                  width="28"
                  height="28"
                  alt=""
                  className="sliders-nav__arrow-hover"
                />
              </button>
              <button
                type="button"
                id="ph-arrow-next"
                className="sliders-nav__arrow next w-inline-block"
                tabIndex={0}
                aria-label="Next slide"
                aria-controls="swiper-wrapper-cf39b88019445025"
              >
                <Image
                  src="/images/old/sj-nav-arrow-blue.svg"
                  width="28"
                  height="28"
                  loading="lazy"
                  alt=""
                  className="sliders-nav__arrow-icon"
                />
                <Image
                  src="/images/old/sj-nav-arrow-white-next.svg"
                  loading="lazy"
                  width="28"
                  height="28"
                  alt=""
                  className="sliders-nav__arrow-hover"
                />
              </button>
            </div>
          </div>
          <Slider />
        </div>
        <div className="overflow-slider-container"></div>
      </section>
    </>
  );
}
