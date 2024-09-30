import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { Experts } from "@/data/experts";

declare global {
  interface Window {
    Swiper?: any;
  }
}

interface SectionExpertsProps {
  domain?: string;
  crmURL?: string;
}

export default function SectionOurExperts({ crmURL }: SectionExpertsProps) {
  useEffect(() => {
    new window.Swiper(".experts-slider-wrap", {
      wrapperClass: "experts-slider-container",
      slideClass: "experts-slide-div",
      grabCursor: true,
      centeredSlides: false,
      loop: true,
      threshold: 20,
      slidesPerView: 1,
      spaceBetween: 200,
      initialSlide: 0,
      pagination: {
        el: ".experts-slider-nav-dots",
        bulletClass: "experts-slider-nav-dot",
        bulletActiveClass: "experts-slider-nav-dot-active",
        clickable: true,
      },
      navigation: {
        nextEl: ".experts-arrow-next",
        prevEl: ".experts-arrow-prev",
      },
    });
  });

  return (
    <>
      <section className="section-fixed">
        <div className="container-138 no-right-pad">
          <div className="h-120 mob-64"></div>
          <div className="experts-grid">
            <div className="experts-grid-cta">
              <div className="title-36-stlz mob-28">Our experts</div>
              <div className="h-24"></div>
              <div className="text-16-stolzl">
                Browse profiles of our experts to find the perfect match for
                your project needs.
              </div>
              <div className="h-32"></div>
              <Link
                data-amplitude="true"
                data-a-position="Body"
                data-a-cta="true"
                href={`${crmURL}/create-order`}
                className="puple-btn full-mob w-inline-block"
              >
                <div className="purple-btn-text">Get expert help</div>
              </Link>
              <div className="mob-40 h-56"></div>
              <div className="experts-tip">
                <Image
                  src="/images/old/shield.svg"
                  loading="lazy"
                  width="40"
                  height="40"
                  alt=""
                  className="experts-tip-icon"
                />
                <div className="text-14">
                  We do not disclose the identities of our experts. We respect
                  their anonymity as well as yours.
                </div>
              </div>
            </div>
            <div className="experts-slider-overflow">
              <div className="experts-slider-wrap">
                <div
                  className="experts-slider-container"
                  style={{
                    cursor: "grab",
                    transform: "translate3d(-659px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                >
                  {Experts.filter((s) =>
                    ["alex-c", "ramy-t", "chris-t"].includes(s.slug),
                  ).map((expert) => (
                    <div
                      key={expert.slug}
                      className="experts-slide-div"
                      style={{ width: "459px", marginRight: "200px" }}
                    >
                      <div className="experts-slide">
                        <div className="experts-slide-avatar-wrap">
                          <Image
                            src={expert.avatar}
                            loading="lazy"
                            alt=""
                            height="192"
                            width="192"
                            sizes="(max-width: 479px) 23vw, (max-width: 767px) 17vw, (max-width: 991px) 12vw, 8vw"
                            className="experts-slide-avatar"
                          />
                        </div>
                        <div className="experts-slide-title-wrap">
                          <div className="title-24">{expert.name}</div>
                          <Image
                            src="/images/old/experts-slide-verified.svg"
                            loading="lazy"
                            width="20"
                            height="21"
                            alt=""
                            className="experts-slider-verified-icon"
                          />
                        </div>
                        <div className="h-12"></div>
                        <div className="experts-slider-ratings">
                          <div className="experts-slider-stars-wrap">
                            {Array.from({
                              length: Math.round(expert.rating) - 1,
                            }).map((_, i) => (
                              <Image
                                key={i}
                                src="/images/old/full-star-icon.svg"
                                loading="lazy"
                                width="20"
                                height="20"
                                alt=""
                                className="experts-slider-stars-icon"
                              />
                            ))}
                          </div>
                          <div className="text-14 black">{expert.rating}</div>
                          <div className="experts-slider-reviews-count">
                            <div>(</div>
                            <div>{expert.reviewsCount}</div>
                            <div>)</div>
                          </div>
                        </div>
                        <div className="mob-16 h-24"></div>
                        <div className="experts-slider-counts-wrap">
                          <div className="experts-slider-counts">
                            <Image
                              src="/images/old/experts-slide-education.svg"
                              loading="lazy"
                              width="32"
                              height="33"
                              alt=""
                              className="experts-slide-counts-icon"
                            />
                            <div className="experts-slider-counts-texts">
                              <div className="text-14 black">
                                {expert.degree}
                              </div>
                              <div className="experts-slider-degree">
                                <div className="text-12">Degree</div>
                              </div>
                            </div>
                          </div>
                          <div className="experts-slider-counts">
                            <Image
                              src="/images/old/experts-slide-check.svg"
                              loading="lazy"
                              width="32"
                              height="33"
                              alt=""
                              className="experts-slide-counts-icon"
                            />
                            <div className="experts-slider-counts-texts">
                              <div className="text-14 black">
                                {expert.completedOrders}
                              </div>
                              <div className="experts-slider-degree">
                                <div className="text-12">Total orders</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mob-16 h-24"></div>
                        <div className="experts-slider-tags">
                          {expert.subjects?.map((subject) => (
                            <div
                              key={subject.name}
                              className="experts-slider-tag"
                            >
                              <Image
                                src={subject.icon || ""}
                                loading="lazy"
                                width="40"
                                height="40"
                                alt=""
                                className="experts-slider-tag-icon"
                              />
                              <div className="text-12 black">
                                {subject.name}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mob-24 h-40"></div>
                        <div className="experts-slide-btn-wrap">
                          <Link
                            href={`/experts/${expert.slug}`}
                            className="experts-slide-btn w-inline-block"
                          >
                            <div className="text-14">View profile</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div
                    className="experts-slide-div"
                    style={{ width: "459px", marginRight: "200px" }}
                  >
                    <div className="experts-slide last">
                      <Image
                        src="/images/old/faq-img.webp"
                        loading="lazy"
                        width="138"
                        height="128"
                        alt=""
                        className="experts-slide-last-img"
                      />
                      <div className="h-24"></div>
                      <div className="title-24 black">
                        Do you want to see more experts?
                      </div>
                      <div className="h-32"></div>
                      <div className="experts-slide-btn-wrap no-fix-to-bottom">
                        <Link
                          href="/experts"
                          className="experts-slide-btn w-inline-block"
                        >
                          <div className="text-14">View all experts</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="experts-slider-nav">
            <div className="experts-slider-nav-wrap">
              <button
                type="button"
                className="experts-arrow-prev sliders-nav__arrow w-inline-block"
                tabIndex={0}
                aria-label="Previous slide"
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
              <div className="experts-slider-nav-dots swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                <span
                  className="experts-slider-nav-dot experts-slider-nav-dot-active"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 1"
                  aria-current="true"
                ></span>
                <span
                  className="experts-slider-nav-dot"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 2"
                ></span>
                <span
                  className="experts-slider-nav-dot"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 3"
                ></span>
                <span
                  className="experts-slider-nav-dot"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 4"
                ></span>
              </div>
              <button
                type="button"
                className="experts-arrow-next sliders-nav__arrow next w-inline-block"
                tabIndex={0}
                aria-label="Next slide"
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
            <Image
              src="/images/old/experts-slide-tooltip.svg"
              loading="lazy"
              width="162"
              height="113"
              alt=""
              className="experts-slider-tooltip"
            />
          </div>
          <div className="h-32"></div>
        </div>
      </section>
    </>
  );
}
