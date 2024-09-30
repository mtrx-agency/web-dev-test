import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Paper24Reviews,
  ReviewsIoReviews,
  SitejabberReviews,
} from "@/data/reviews";
import "@/utils/swiper-bundle.min";
import "@/styles/old/swiper-bundle.min.css";

export default function TabsTrevsRelBlock() {
  const [activeTab, setActiveTab] = useState<
    "sitejabber" | "paper24" | "reviews.io"
  >("sitejabber");

  useEffect(() => {
    new window.Swiper(".swiper", {
      slideClass: "swiper-slide",
      wrapperClass: "swiper-wrapper-old",
      grabCursor: true,
      centeredSlides: false,
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: ".sj-swiper-next",
        prevEl: ".sj-swiper-prev",
      },
    });

    new window.Swiper(".reviews-slider", {
      slideClass: "rev-slide",
      wrapperClass: "reviews-slider-mask",
      grabCursor: true,
      centeredSlides: false,
      loop: true,
      spaceBetween: 700,
      slidesPerView: 1,
      navigation: {
        nextEl: ".w-slider-arrow-right",
        prevEl: ".w-slider-arrow-left",
      },
    });
  }, [activeTab]);

  return (
    <div className="tabs-trevs-rel">
      <div
        data-current="Tab 4"
        data-easing="ease"
        data-duration-in="300"
        data-duration-out="100"
        className="trevs-tabs w-tabs"
      >
        <div className="trevs-tabs-menu w-tab-menu">
          <button
            type="button"
            className={`trevs-tabs-link w-inline-block w-tab-link  ${activeTab === "sitejabber" && "w--current"}`}
            onClick={() => {
              setActiveTab("sitejabber");
            }}
          >
            <div className="sj-tab-wrap">
              <Image
                src="/images/old/sj-logo.svg"
                loading="lazy"
                width="140"
                height="140"
                alt=""
                className="sj-tab-icon"
              />
              <div className="tab-tap-plus"></div>
              <div>Sitejabber</div>
            </div>
          </button>
          <button
            type="button"
            className="trevs-tabs-link hide w-inline-block w-tab-link"
          >
            <Image
              width="30"
              height="30"
              alt=""
              src="/images/old/tab-reddit.svg"
              loading="lazy"
              className="tt-tab-logo"
            />
            <div>Reddit</div>
            <div className="tab-tap-plus"></div>
          </button>
          <button
            type="button"
            className={`trevs-tabs-link black-bg w-inline-block w-tab-link  ${activeTab === "reviews.io" && "w--current"}`}
            onClick={() => {
              setActiveTab("reviews.io");
            }}
          >
            <Image
              width="30"
              height="30"
              alt=""
              src="/images/old/rio-icon.webp"
              loading="lazy"
              className="tt-tab-logo"
            />
            <div>Reviews.io</div>
            <div className="tab-tap-plus"></div>
          </button>
          <button
            type="button"
            className={`trevs-tabs-link black-bg w-inline-block w-tab-link ${activeTab === "paper24" && "w--current"}`}
            onClick={() => {
              setActiveTab("paper24");
            }}
          >
            <div className="logos-tr">
              <Image
                width="30"
                height="30"
                alt=""
                src="/images/old/tab-p-24.svg"
                loading="lazy"
                className="tt-tab-logo"
              />
              <Image
                width="30"
                height="30"
                alt=""
                src="/images/old/tab-p-24-w.svg"
                loading="lazy"
                className="tt-tab-logo-w"
              />
            </div>
            <div>Paper24</div>
            <div className="tab-tap-plus"></div>
          </button>
        </div>
        <div className="trevs-tabs-cont w-tab-content">
          <div
            className={`trevs-tab-pane w-tab-pane ${activeTab === "sitejabber" && "w--tab-active"}`}
          >
            <div className="sj-tab-pane-wrap old">
              <button type="button" className="sj-swiper-prev w-inline-block">
                <Image
                  width="11"
                  height="19"
                  alt=""
                  src="/images/old/sj-arrow--prev.svg"
                  loading="lazy"
                  className="sj-swiper__prev-icon"
                />
              </button>
              <button type="button" className="sj-swiper-next w-inline-block">
                <Image
                  width="11"
                  height="19"
                  alt=""
                  src="/images/old/sj-arrow--next.svg"
                  loading="lazy"
                  className="sj-swiper__next-icon"
                />
              </button>
              <div className="sj-slider-wrap">
                <div className="swiper">
                  <div id="sitejabber-slider" className="swiper-wrapper-old">
                    {SitejabberReviews.map((review, i) => (
                      <div key={i} className="swiper-slide">
                        <div className="tr-paper-item ">
                          <div className="reviews-top">
                            <div className="reviews-rate">
                              <div
                                style={{
                                  display: "flex",
                                  gap: "5px",
                                  justifyContent: "flex-start",
                                }}
                              >
                                {Array.from({
                                  length: Math.round(review.rating) - 1,
                                }).map((_, i) => (
                                  <Image
                                    key={i}
                                    src="/images/old/sitejabber-star.svg"
                                    width="20"
                                    height="20"
                                    alt="Sitejabber star"
                                    style={{
                                      maxWidth: "20px",
                                      maxHeight: "20px",
                                    }}
                                  />
                                ))}
                              </div>
                            </div>
                            <div className="type-rev">
                              <Link href={review.link} target="_blank">
                                See on Sitejabber
                              </Link>
                            </div>
                          </div>
                          <div className="block-30h"></div>
                          <div className="title-24-500">{review.title}</div>
                          <div className="block-10h"></div>
                          <div className="slide-desc">
                            <div className="text-16">{review.description}</div>
                          </div>
                          <div className="block-30h"></div>
                          <div className="sl-rate-rev">
                            <div className="grey-text">
                              <div className="text-16">User: {review.user}</div>
                            </div>
                            <div className="grey-text">
                              {/* TODO: Use format Aug 29, 2023 */}
                              <div className="text-16">{review.at}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
                  width="168"
                  height="38"
                  alt=""
                  src="/images/old/sitejabber.svg"
                  loading="lazy"
                  className="sj-powd-logo"
                />
              </div>
            </Link>
          </div>

          <div
            className={`trevs-tab-pane w-tab-pane ${activeTab === "reviews.io" && "w--tab-active"}`}
          >
            <div className="revs-sl-wr">
              <div
                data-delay="4000"
                data-animation="slide"
                className="reviews-slider w-slider"
                data-autoplay="false"
                data-easing="ease"
                data-hide-arrows="false"
                data-disable-swipe="false"
                data-autoplay-limit="0"
                data-nav-spacing="3"
                data-duration="500"
                data-infinite="true"
              >
                <div className="reviews-slider-mask _710 w-slider-mask">
                  {ReviewsIoReviews.map((review, i) => (
                    <div key={i} className="rev-slide marg-110 w-slide">
                      <div className="opas-sl-cont">
                        <div className="tr-rio-item">
                          <div className="rio-hd-wr">
                            <div className="black-000-text">
                              <div className="title-14-500">
                                {review.customer}
                              </div>
                            </div>
                            <Image
                              width="92"
                              height="17"
                              alt=""
                              src={`/images/old/rio-${review.rating}.svg`}
                              loading="lazy"
                              className="rio-rate-icon"
                            />
                            <Image
                              width="124"
                              height="23"
                              alt=""
                              src="/images/old/verif.svg"
                              loading="lazy"
                              className="verify-user-icon"
                            />
                          </div>
                          <div className="h-20"></div>
                          <div className="black-text-pad-44">
                            <div className="text-15-400-notosans">
                              {review.description}
                            </div>
                          </div>
                          <div className="h-17"></div>
                          <div className="rio-share-wr">
                            <Image
                              width="80"
                              height="16"
                              alt=""
                              src="/images/old/share-rio.svg"
                              loading="lazy"
                              className="share-btns"
                            />
                            <div className="text-11-400-noto-gr">
                              Posted {review.at} ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="slider__arrow left tabs w-slider-arrow-left">
                  <Image
                    width="40"
                    height="40"
                    alt=""
                    src="/images/old/arrow-left.svg"
                    loading="lazy"
                    className="slider__arrow-img"
                  />
                </div>
                <div className="slider__arrow right tabs w-slider-arrow-right">
                  <Image
                    width="40"
                    height="40"
                    alt=""
                    src="/images/old/arrow-right.svg"
                    loading="lazy"
                    className="slider__arrow-img"
                  />
                </div>
                <div className="slide-nav-2 w-slider-nav w-round"></div>
              </div>
            </div>
          </div>

          <div
            className={`trevs-tab-pane w-tab-pane ${activeTab === "paper24" && "w--tab-active"}`}
          >
            <div className="revs-sl-wr">
              <div
                data-delay="4000"
                data-animation="slide"
                className="reviews-slider w-slider"
                data-autoplay="false"
                data-easing="ease"
                data-hide-arrows="false"
                data-disable-swipe="false"
                data-autoplay-limit="0"
                data-nav-spacing="3"
                data-duration="500"
                data-infinite="true"
              >
                <div className="reviews-slider-mask _710 w-slider-mask">
                  {Paper24Reviews.map((review, i) => (
                    <div key={i} className="rev-slide marg-110 w-slide">
                      <div className="opas-sl-cont">
                        <div className="tr-paper-item">
                          <div className="reviews-top">
                            <div className="type-rev">
                              <div>Essay</div>
                            </div>
                            {/* TODO: Use format Feb 19, 2023 */}
                            <div className="text-16 hide">{review.at}</div>
                          </div>
                          <div className="h-30"></div>
                          <div className="title-24-500">{review.title}</div>
                          <div className="h-10"></div>
                          <div className="slide-desc">
                            <div className="text-16">{review.description}</div>
                          </div>
                          <div className="h-30"></div>
                          <div className="sl-rate-rev">
                            <div className="grey-text">
                              <div className="text-16">
                                User ID: {review.customer}
                              </div>
                            </div>
                            <div className="tr-rate-number">
                              <Image
                                width="96"
                                height="16"
                                alt=""
                                src={`/images/old/${review.rating === 5 ? "p-rate" : `f-stars-${review.rating}`}.svg`}
                                loading="lazy"
                                className="p-rate-stars"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="slider__arrow left tabs w-slider-arrow-left">
                  <Image
                    width="40"
                    height="40"
                    alt=""
                    src="/images/old/arrow-left.svg"
                    loading="lazy"
                    className="slider__arrow-img"
                  />
                </div>
                <div className="slider__arrow right tabs w-slider-arrow-right">
                  <Image
                    width="40"
                    height="40"
                    alt=""
                    src="/images/old/arrow-right.svg"
                    loading="lazy"
                    className="slider__arrow-img"
                  />
                </div>
                <div className="slide-nav-2 w-slider-nav w-round"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="stjr-review-carousel"></div>
    </div>
  );
}
