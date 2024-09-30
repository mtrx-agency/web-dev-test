import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ReviewCount, SitejabberReviews } from "@/data/reviews";
import "@/utils/swiper-bundle.min";
import "@/styles/old/swiper-bundle.min.css";

declare global {
  interface Window {
    Swiper?: any;
  }
}

interface SjReviewsBlockProps {
  apiURL: string;
  title: string;
  description?: string;
}

export default function SjReviewsBlock({
  apiURL,
  title,
  description,
}: SjReviewsBlockProps) {
  const [currentSitejabberReviewsCount, setCurrentSitejabberReviewsCount] =
    useState(0);

  useEffect(() => {
    new window.Swiper(".swiper", {
      slideClass: "sj-slide",
      wrapperClass: "swiper-wrapper",
      grabCursor: false,
      centeredSlides: false,
      loop: true,
      spaceBetween: 16,
      breakpoints: {
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
      },
      navigation: {
        nextEl: ".sj-arrow-next",
        prevEl: ".sj-arrow-prev",
      },
      pagination: {
        el: ".sj-reviews .slider-pagination",
        bulletClass: "slider-pagination__dot",
        bulletActiveClass: "slider-pagination__dot-active",
        clickable: true,
      },
    });
  });

  useEffect(() => {
    fetch(`${apiURL}/order/rpc/review/sitejabberInfo`, { method: "POST" })
      .then((res) => res.json())
      .then((res) => {
        let reviewsCount = ReviewCount.Sitejabber;
        if (res.reviews_count && res.reviews_count >= ReviewCount.Sitejabber) {
          reviewsCount = res.reviews_count;
        }

        setCurrentSitejabberReviewsCount(reviewsCount);
      })
      .catch(() => {
        setCurrentSitejabberReviewsCount(ReviewCount.Sitejabber);
      });
  }, [apiURL]);

  return (
    <div className="sj-reviews">
      <div className="sj-reviews-title-wrap">
        <div className="sj-reviews-title">
          <div
            className="title-24"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          ></div>
          <div
            style={{ display: description ? "block" : "none" }}
            className="text-16-stolzl"
          >
            {description}
          </div>
        </div>
        <div className="sliders-reviews-nav mob-hide">
          <button
            type="button"
            className="sj-arrow-prev sliders-nav__arrow w-inline-block"
          >
            <Image
              src="/images/old/sj-nav-arrow-blue.svg"
              loading="lazy"
              width="28"
              height="28"
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
            className="sj-arrow-next sliders-nav__arrow next w-inline-block"
          >
            <Image
              src="/images/old/sj-nav-arrow-blue.svg"
              loading="lazy"
              width="28"
              height="28"
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

      <div className="h-24"></div>
      <div className="sj-reviews-wrap">
        <div className="sj-reviews-grid">
          <div className="sj-reviews__overall">
            <Link
              href="https://www.sitejabber.com/reviews/paper24.com"
              target="_blank"
              className="sj-reviews__company-link w-inline-block"
            >
              <Image
                src="/images/old/sitejabber-logo.svg"
                loading="lazy"
                width="145"
                height="38"
                alt=""
                className="sj-logo"
              />
            </Link>
            <div className="sj-reviews__overall-title">Excellent</div>
            <div className="sj-reviews__overall-rating">
              <Image
                src="/images/old/sj-star.svg"
                loading="lazy"
                width="27"
                height="27"
                alt=""
                className="sj-reviews__overall-star"
              />
              <Image
                src="/images/old/sj-star.svg"
                loading="lazy"
                width="27"
                height="27"
                alt=""
                className="sj-reviews__overall-star"
              />
              <Image
                src="/images/old/sj-star.svg"
                loading="lazy"
                width="27"
                height="27"
                alt=""
                className="sj-reviews__overall-star"
              />
              <Image
                src="/images/old/sj-star.svg"
                loading="lazy"
                width="27"
                height="27"
                alt=""
                className="sj-reviews__overall-star"
              />
              <Image
                src="/images/old/sj-star.svg"
                loading="lazy"
                width="27"
                height="27"
                alt=""
                className="sj-reviews__overall-star"
              />
            </div>
            <Link
              href="https://www.sitejabber.com/reviews/paper24.com"
              target="_blank"
              className="sj-reviews__overall-link w-inline-block"
            >
              <div className="sj-reviews__overall-count">
                Based on{" "}
                <span className="sj-reviews__overall-count-span">
                  {currentSitejabberReviewsCount} reviews
                </span>
              </div>
            </Link>
          </div>
          <div className="sj-tab-pane-wrap">
            <div className="sj-slider-wrap">
              <div data-max-words="100" className="swiper">
                <div id="sitejabber-slider-new" className="swiper-wrapper">
                  {SitejabberReviews.map((review) => (
                    <div key={review.link} className="sj-slide">
                      <div className="sj-slide__meta">
                        <div className="sj-slide__meta-author">
                          <Link
                            href={review.userLink}
                            target="_blank"
                            className="sj-slide__meta-link w-inline-block"
                          >
                            {review.user}
                          </Link>
                        </div>
                        <div className="sj-slide__meta-date">
                          <div>{review.at}</div>
                        </div>
                      </div>
                      <div className="sj-slide__rating">
                        {Array.from({
                          length: Math.round(review.rating) - 1,
                        }).map((_, i) => (
                          <Image
                            key={i}
                            src="/images/old/sitejabber-star.svg"
                            loading="lazy"
                            width="10"
                            height="10"
                            alt=""
                            className="sj-slide__rating-star"
                          />
                        ))}
                      </div>
                      <div className="sj-slide__title">
                        <div className="sj-slide__title-text">
                          “{review.title}”
                        </div>
                      </div>
                      <div className="sj-slide__content">
                        <div className="sj-slide__content-text">
                          {review.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="slider-pagination">
              <div className="slider-pagination__dot-active"></div>
              <div className="slider-pagination__dot"></div>
            </div>
          </div>
        </div>
        <Link
          href="https://www.sitejabber.com/reviews/paper24.com"
          target="_blank"
          className="sj-powd-link w-inline-block"
        >
          <div className="sj-powd-wrap">
            <div className="sj-powd-text">Reviews Verified by</div>
            <Image
              width="74"
              height="20"
              alt=""
              src="/images/old/sitejabber-bw-logo.svg"
              loading="lazy"
              className="sj-powd-logo"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
