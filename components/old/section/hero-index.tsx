import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Subjects } from "@/data/order-subjects";

interface SectionHeroIndexProps {
  crmURL: string;
}

export default function SectionHeroIndex({ crmURL }: SectionHeroIndexProps) {
  const [tsSubject, setTsSubject] = useState("");
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
  const dropdown = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!showSubjectDropdown) return;

    function handleClick(event: any) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowSubjectDropdown(false);
      }
    }
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [showSubjectDropdown]);

  return (
    <>
      <div className="hero-full-ede8fd _100vh">
        <Image
          src="/images/old/valentine-s-bg.png"
          loading="eager"
          width="1337"
          height="635"
          alt=""
          data-srcset="/images/old/valentine-s-bg-p-500.png 500w, /images/old/valentine-s-bg-p-800.png 800w, /images/old/valentine-s-bg-p-1080.png 1080w, /images/old/valentine-s-bg-p-1600.png 1600w, /images/old/valentine-s-bg-p-2000.png 2000w, /images/old/valentine-s-bg-p-2600.png 2600w, /images/old/valentine-s-bg.png 2674w"
          sizes="100vw"
          className="ny-hero-snow-img"
        />
        <div className="hero-mob-bg-wrap">
          <Image
            src="/images/old/heart-1.png"
            loading="lazy"
            width="29"
            height="25"
            alt=""
            className="heart _1"
          />
          <Image
            src="/images/old/heart-2.png"
            loading="lazy"
            width="49"
            height="44"
            alt=""
            className="heart _2"
          />
          <Image
            src="/images/old/heart-3.png"
            loading="lazy"
            width="45"
            height="38"
            alt=""
            className="heart _3"
          />
          <Image
            src="/images/old/heart-5.png"
            loading="lazy"
            width="26"
            height="20"
            alt=""
            className="heart _4"
          />
          <Image
            src="/images/old/heart-4.png"
            loading="lazy"
            width="37"
            height="33"
            alt=""
            className="heart _5"
          />
        </div>
        <Image
          src="/images/old/valentine-s-bg-mob.png"
          loading="eager"
          width="320"
          height="709"
          alt=""
          data-srcset="/images/old/valentine-s-bg-mob-p-500.png 500w, /images/old/valentine-s-bg-mob.png 640w"
          sizes="100vw"
          className="nymob-hero-snow-img"
        />
        <div className="section-fixed hero">
          <div className="container-138">
            <div className="h-180 mob-20"></div>
            <div className="hero-cols v3-home">
              <div className="content-col v3-home">
                <div className="n-hero-wrap">
                  <div className="maxw-500">
                    <h1 style={{ opacity: 1 }} className="title-56-stolz">
                      <span className="n-hero-title-splash">Academic</span>{" "}
                      <span className="blue-text">paper help</span> for every
                      student
                    </h1>
                  </div>
                  <Image
                    src="/images/old/hero-splash.svg"
                    loading="eager"
                    width="63"
                    height="55"
                    alt=""
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="n-hero-splash-v3"
                  />
                  <div className="hero-nc"></div>
                </div>
                <div className="h-24"></div>
                <div className="gr-max-w-490">
                  <div style={{ opacity: 1 }} className="text-18-400-st">
                    Hire an expert for your paper.
                    <br />
                    Right here. Right now.
                  </div>
                </div>
                <div className="h-40"></div>

                <form
                  action={`${crmURL}/create-order`}
                  method="get"
                  className="hero-ts-wrap"
                  data-amplitude="true"
                  data-a-position="Hero"
                  data-a-cta="true"
                >
                  <div className="hero-ts-inputs">
                    <div className="hero-ts-inputs-wrap">
                      <div className="hero-ts-subject-wrap">
                        <input
                          className="hero-ts-input"
                          placeholder="Choose your subject"
                          id="ts-subject"
                          type="text"
                          autoComplete="off"
                          name="subject"
                          ref={dropdown}
                          defaultValue={tsSubject}
                          readOnly={true}
                          onClick={() => setShowSubjectDropdown(true)}
                        />

                        <div
                          id="ts-subjects-dropdown"
                          className="hero-ts-subject-drop w-dyn-list"
                          style={{
                            display: showSubjectDropdown ? "block" : "none",
                          }}
                        >
                          <div
                            role="list"
                            className="hero-ts-subject-list w-dyn-items"
                          >
                            {Object.values(Subjects).map(({ name, icon }) => (
                              <div
                                aria-hidden="true"
                                key={name}
                                role="listitem"
                                className="hero-ts-subject-item w-dyn-item"
                                onClick={() => {
                                  setTsSubject(name);
                                  setShowSubjectDropdown(false);
                                }}
                              >
                                <Image
                                  alt=""
                                  loading="lazy"
                                  width="24"
                                  height="24"
                                  src={icon}
                                  className="hero-ts-subject-icon"
                                />
                                <div className="hero-ts-subject-name">
                                  {name}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hero-ts-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle
                          cx="9.21552"
                          cy="9.2155"
                          r="5.88495"
                          stroke="#7B78A7"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></circle>
                        <path
                          d="M16.669 16.6694L13.376 13.3764"
                          stroke="#7B78A7"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <button
                    type="submit"
                    data-amplitude="true"
                    data-a-position="Hero"
                    data-a-cta="true"
                    className="hero-ts-btn w-inline-block"
                  >
                    <div className="hero-ts-btn-text">Get help</div>
                  </button>
                </form>
              </div>

              <div className="v3-main-img-col hide">
                <Image
                  src="/images/old/home-v3-m.webp"
                  loading="eager"
                  width="530"
                  height="948"
                  alt=""
                  data-srcset="/images/old/home-v3-m-p-500.webp 500w, /images/old/home-v3-m.webp 830w"
                  sizes="(max-width: 991px) 100vw, 38vw"
                  className="hero-girl-2-img"
                />
                <div
                  style={{
                    opacity: 1,
                  }}
                  className="v3-hero-plate pl-1"
                >
                  <Image
                    src="/images/old/v3-hero-icon-1.png"
                    loading="lazy"
                    width="24"
                    height="24"
                    alt=""
                    className="v3h-icon"
                  />
                  <div className="text-14">
                    Private and <br />
                    confidential
                  </div>
                </div>
                <div
                  style={{
                    opacity: 1,
                  }}
                  className="v3-hero-plate hide pl-2"
                >
                  <Image
                    src="/images/old/v3-hero-icon-2.webp"
                    loading="lazy"
                    width="24"
                    height="24"
                    alt=""
                    className="v3h-icon"
                  />
                  <div className="text-14">
                    Deadline <br />
                    from 3 hours
                  </div>
                </div>
                <div
                  style={{
                    opacity: 1,
                  }}
                  className="v3-hero-plate ppl-ny"
                >
                  <Image
                    src="/images/old/v3-hero-icon-3.png"
                    loading="lazy"
                    width="36"
                    height="35"
                    alt=""
                    className="v3h-icon"
                  />
                  <div className="text-14">
                    Get up to 35% off on orders of 2 or more pages
                  </div>
                </div>
              </div>
            </div>
            <div className="h-160 hide-mob"></div>
          </div>
        </div>
      </div>
    </>
  );
}
