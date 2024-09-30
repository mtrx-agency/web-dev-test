import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Experts } from "@/data/experts";
import "@/utils/swiper-bundle.min";
import "@/styles/old/swiper-bundle.min.css";
import { Sample } from "@/data/sample";
import PDFModal from "@/components/old/pdf-modal";

declare global {
  interface Window {
    Swiper?: any;
  }
}

interface OurExpertsSliderBlockProps {
  title: string;
  description?: string;
}

export default function OurExpertsSliderBlock({
  title,
  description,
}: OurExpertsSliderBlockProps) {
  useEffect(() => {
    new window.Swiper(".our-experts-slider-container", {
      wrapperClass: "our-experts-slider",
      slideClass: "our-experts-card",
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
        el: ".experts-slider .slider-pagination",
        bulletClass: "slider-pagination__dot",
        bulletActiveClass: "slider-pagination__dot-active",
        clickable: true,
      },
      navigation: {
        nextEl: ".experts-arrow-next",
        prevEl: ".experts-arrow-prev",
      },
      scrollbar: {
        draggable: true,
        slidesPerView: 7,
      },
    });
  });

  const [currentSample, setCurrentSample] = useState<Sample | null>(null);

  return (
    <>
      <div className="our-experts-wrap">
        <div className="our-experts-title-wrap">
          <h2
            className="title-36-stlz"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          ></h2>
          <div className="h-18"></div>
          <div className="text-16-stolzl">{description}</div>
        </div>
        <div className="sliders-reviews-nav mob-hide">
          <button
            data-w-id="7afa6242-caa4-4bd6-270a-1f4cced58e77"
            className="experts-arrow-prev sliders-nav__arrow w-inline-block"
          >
            <Image
              src="/images/old/sj-nav-arrow-blue.svg"
              loading="lazy"
              alt=""
              width="28"
              height="28"
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
            data-w-id="7afa6242-caa4-4bd6-270a-1f4cced58e7a"
            className="experts-arrow-next sliders-nav__arrow next w-inline-block"
          >
            <Image
              src="/images/old/sj-nav-arrow-blue.svg"
              loading="lazy"
              alt=""
              width="28"
              height="28"
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
      <div className="h-32"></div>
      <div className="experts-slider overflow-slider-container">
        <div className="our-experts-slider-container w-dyn-list">
          <div role="list" className="our-experts-slider w-dyn-items">
            {Experts.map((expert, i) => (
              <div
                key={i}
                role="listitem"
                className="our-experts-card w-dyn-item"
              >
                <div className="our-experts-card-avatar-bg">
                  <Image
                    loading="lazy"
                    width="80"
                    height="80"
                    src={expert.avatar}
                    alt=""
                    className="our-experts-card-avatar"
                  />
                </div>
                <div className="our-experts-card-info">
                  <div className="our-experts-card-verify">
                    <Image
                      src="/images/old/verified-dark.svg"
                      loading="lazy"
                      width="18"
                      height="18"
                      alt=""
                      className="our-experts-verify-icon"
                    />
                    <div className="our-experts-verify-nick">
                      @{expert.nickname}
                    </div>
                  </div>
                  <div className="our-experts-card-name">{expert.name}</div>
                  <div className="our-experts-card-rating">
                    <div className="our-experts-rating-stars">
                      {Array.from({
                        length: Math.round(expert.rating) - 1,
                      }).map((_, i) => (
                        <Image
                          key={i}
                          src="/images/old/review-star.svg"
                          loading="lazy"
                          width="12"
                          height="11"
                          alt=""
                          className="our-experts-rating-star"
                        />
                      ))}
                    </div>
                    <div className="our-experts-rating-rate">
                      {expert.rating}
                    </div>
                    <div className="our-experts-rating-count-wrap">
                      <div className="our-experts-rating-count">(</div>
                      <div className="our-experts-rating-count">
                        {expert.reviewsCount}
                      </div>
                      <div className="our-experts-rating-count">)</div>
                    </div>
                  </div>
                  <div className="our-experts-meta">
                    <div className="our-experts-meta-line">
                      <Image
                        src="/images/old/completed-orders.svg"
                        loading="lazy"
                        width="18"
                        height="17"
                        alt=""
                        className="our-experts-meta-icon"
                      />
                      <div className="our-experts-meta-param">
                        Completed orders
                      </div>
                      <div className="our-experts-meta-value">
                        {expert.completedOrders}
                      </div>
                    </div>
                    <div className="our-experts-meta-line">
                      <Image
                        src="/images/old/success-rate.svg"
                        loading="lazy"
                        width="18"
                        height="17"
                        alt=""
                        className="our-experts-meta-icon"
                      />
                      <div className="our-experts-meta-param">Success Rate</div>
                      <div className="our-experts-meta-value">
                        {expert.successRate}
                      </div>
                    </div>
                    <div className="our-experts-meta-line">
                      <Image
                        src="/images/old/samples.svg"
                        loading="lazy"
                        width="18"
                        height="17"
                        alt=""
                        className="our-experts-meta-icon"
                      />
                      <div className="our-experts-meta-param">Samples</div>
                      <div className="our-experts-meta-value">
                        {expert.samplesCount}
                      </div>
                    </div>
                  </div>
                  <div className="our-experts-btns">
                    <Link
                      href={`/experts/${expert.slug}`}
                      className="our-experts-btn purple w-inline-block"
                    >
                      <div className="our-experts-btn-text">View profile</div>
                      <Image
                        src="/images/old/our-experts-btn-arrow.svg"
                        loading="lazy"
                        width="25"
                        height="24"
                        alt=""
                        className="our-experts-btn-arrow"
                      />
                    </Link>
                    {expert.samples.slice(0, 1).map((sample, i) => (
                      <div key={i} className="w-dyn-list">
                        <div role="list" className="w-dyn-items">
                          <div role="listitem" className="w-dyn-item">
                            <button
                              className="our-experts-btn w-inline-block"
                              onClick={() => setCurrentSample(sample)}
                            >
                              <div>View Sample</div>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="slider-pagination">
          <div className="slider-pagination__dot-active"></div>
          <div className="slider-pagination__dot"></div>
        </div>
      </div>

      <PDFModal sample={currentSample} setSample={setCurrentSample} />
    </>
  );
}
