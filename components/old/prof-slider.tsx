import { useEffect, useState } from "react";
import Image from "next/image";

import YoutubeModalModal from "@/components/old/youtube-modal";

interface Props {
  crmURL: string;
}

export default function ProfSlider({ crmURL }: Props) {
  const [data, setData] = useState<null | string>(null);

  // TODO : add config, add map, remove any from show modal

  useEffect(() => {
    const sliderContainer =
      (document.querySelector("#prof-slider") as HTMLElement) ||
      (document.querySelector("[data-prof-slider-container]") as HTMLElement);

    const ytModal = document.querySelector("#yt-popup") as HTMLElement;

    function showModal(modalEl: any, ytIframe: any) {
      modalEl.style.opacity = 1;
      modalEl.style.display = "flex";
      const iframe = modalEl.querySelector(
        "#yt-iframe iframe",
      ) as HTMLIFrameElement;
      iframe.src = ytIframe;
    }

    sliderContainer.addEventListener("click", (e: any) => {
      if (
        e.target.classList.contains("prof-slide-play-icon") ||
        e.target.classList.contains("nh-slide-play-icon")
      ) {
        e.preventDefault();
        const ytIframe = e.target.parentElement.dataset.ytIframe;
        setData(ytIframe);
        showModal(ytModal, ytIframe);
      }
    });
  });

  useEffect(() => {
    new window.Swiper(".prof-slider-container", {
      wrapperClass: "prof-slider-wrapper",
      slideClass: "prof-slide",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      threshold: 20,
      slidesPerView: "auto",
      initialSlide: 1,
      pagination: {
        el: "#professors .slider-pagination",
        bulletClass: "slider-pagination__dot",
        bulletActiveClass: "slider-pagination__dot-active",
        clickable: true,
      },
      navigation: {
        nextEl: "#prof-slider-nav-next",
        prevEl: "#prof-slider-nav-prev",
      },
      scrollbar: {
        el: ".sw-scrollbar-2",
        draggable: true,
        slidesPerView: 7,
      },
    });
  });
  return (
    <>
      <div
        id="prof-slider"
        className="prof-slider-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
      >
        <div
          className="prof-slider-wrapper"
          style={{
            cursor: "grab",
            transitionDuration: "0ms",
            transform: "translate3d(-1138.12px, 0px, 0px)",
          }}
          id="swiper-wrapper-0579103f95324ac0"
          aria-live="polite"
        >
          <div
            className="prof-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
            data-swiper-slide-index="0"
            role="group"
            aria-label="1 / 3"
          >
            <Image
              src="/images/old/vid2.webp"
              loading="lazy"
              width="303"
              height="526"
              alt=""
              data-srcset="/images/old/vid2-p-500.webp 500w, /images/old/vid2.webp 606w"
              sizes="(max-width: 479px) 51vw, (max-width: 991px) 29vw, 20vw"
              className="prof-slide-img"
            />
            <button
              type="button"
              data-a-videoname="4dQqyipf6JY"
              data-yt-iframe="https://www.youtube.com/embed/4dQqyipf6JY?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
              className="prof-slide-play-link w-inline-block"
            >
              <Image
                src="/images/old/play-video.svg"
                loading="lazy"
                width="88"
                height="88"
                alt=""
                className="prof-slide-play-icon"
              />
              <div className="prof-slide-play-link-bg"></div>
            </button>
            <div className="prof-slide-dark-filter"></div>
          </div>
          <div
            className="prof-slide swiper-slide-duplicate swiper-slide-duplicate-active"
            data-swiper-slide-index="1"
            role="group"
            aria-label="2 / 3"
          >
            <Image
              src="/images/old/vid1.webp"
              loading="lazy"
              width="302"
              height="526"
              alt=""
              data-srcset="/images/old/vid1-p-500.webp 500w, /images/old/vid1.webp 605w"
              sizes="(max-width: 479px) 51vw, (max-width: 991px) 29vw, 20vw"
              className="prof-slide-img"
            />
            <button
              type="button"
              data-a-videoname="ehHqKxTtQQk"
              data-yt-iframe="https://www.youtube.com/embed/ehHqKxTtQQk?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
              className="prof-slide-play-link w-inline-block"
            >
              <Image
                src="/images/old/play-video.svg"
                loading="lazy"
                width="88"
                height="88"
                alt=""
                className="prof-slide-play-icon"
              />
              <div className="prof-slide-play-link-bg"></div>
            </button>
            <div className="prof-slide-dark-filter"></div>
          </div>
          <div
            className="prof-slide swiper-slide-duplicate swiper-slide-duplicate-next"
            data-swiper-slide-index="2"
            role="group"
            aria-label="3 / 3"
          >
            <Image
              src="/images/old/vid3.webp"
              loading="lazy"
              width="303"
              height="526"
              alt=""
              data-srcset="/images/old/vid3-p-500.webp 500w, /images/old/vid3.webp 610w"
              sizes="(max-width: 479px) 51vw, (max-width: 991px) 29vw, 20vw"
              className="prof-slide-img"
            />
            <button
              type="button"
              data-a-videoname="VC8-dnp7nLw"
              data-yt-iframe="https://www.youtube.com/embed/VC8-dnp7nLw?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
              className="prof-slide-play-link w-inline-block"
            >
              <Image
                src="/images/old/play-video.svg"
                loading="lazy"
                width="88"
                height="88"
                alt=""
                className="prof-slide-play-icon"
              />
              <div className="prof-slide-play-link-bg"></div>
            </button>
            <div className="prof-slide-dark-filter"></div>
          </div>
          <div
            className="prof-slide swiper-slide-prev"
            data-swiper-slide-index="0"
            role="group"
            aria-label="1 / 3"
          >
            <Image
              src="/images/old/vid2.webp"
              loading="lazy"
              width="303"
              height="526"
              alt=""
              data-srcset="/images/old/vid2-p-500.webp 500w, /images/old/vid2.webp 606w"
              sizes="(max-width: 479px) 51vw, (max-width: 991px) 29vw, 20vw"
              className="prof-slide-img"
            />
            <button
              type="button"
              data-a-videoname="4dQqyipf6JY"
              data-yt-iframe="https://www.youtube.com/embed/4dQqyipf6JY?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
              className="prof-slide-play-link w-inline-block"
            >
              <Image
                src="/images/old/play-video.svg"
                loading="lazy"
                width="88"
                height="88"
                alt=""
                className="prof-slide-play-icon"
              />
              <div className="prof-slide-play-link-bg"></div>
            </button>
            <div className="prof-slide-dark-filter"></div>
          </div>
          <div
            className="prof-slide swiper-slide-active"
            data-swiper-slide-index="1"
            role="group"
            aria-label="2 / 3"
          >
            <Image
              src="/images/old/vid1.webp"
              loading="lazy"
              width="302"
              height="526"
              alt=""
              data-srcset="/images/old/vid1-p-500.webp 500w, /images/old/vid1.webp 605w"
              sizes="(max-width: 479px) 51vw, (max-width: 991px) 29vw, 20vw"
              className="prof-slide-img"
            />
            <button
              type="button"
              data-a-videoname="ehHqKxTtQQk"
              data-yt-iframe="https://www.youtube.com/embed/ehHqKxTtQQk?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
              className="prof-slide-play-link w-inline-block"
            >
              <Image
                src="/images/old/play-video.svg"
                loading="lazy"
                width="88"
                height="88"
                alt=""
                className="prof-slide-play-icon"
              />
              <div className="prof-slide-play-link-bg"></div>
            </button>
            <div className="prof-slide-dark-filter"></div>
          </div>
          <div
            className="prof-slide swiper-slide-next"
            data-swiper-slide-index="2"
            role="group"
            aria-label="3 / 3"
          >
            <Image
              src="/images/old/vid3.webp"
              loading="lazy"
              width="303"
              height="526"
              alt=""
              data-srcset="/images/old/vid3-p-500.webp 500w, /images/old/vid3.webp 610w"
              sizes="(max-width: 479px) 51vw, (max-width: 991px) 29vw, 20vw"
              className="prof-slide-img"
            />
            <button
              type="button"
              data-a-videoname="VC8-dnp7nLw"
              data-yt-iframe="https://www.youtube.com/embed/VC8-dnp7nLw?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
              className="prof-slide-play-link w-inline-block"
            >
              <Image
                src="/images/old/play-video.svg"
                loading="lazy"
                width="88"
                height="88"
                alt=""
                className="prof-slide-play-icon"
              />
              <div className="prof-slide-play-link-bg"></div>
            </button>
            <div className="prof-slide-dark-filter"></div>
          </div>
          <div
            className="prof-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
            data-swiper-slide-index="0"
            role="group"
            aria-label="1 / 3"
          >
            <Image
              src="/images/old/vid2.webp"
              loading="lazy"
              width="303"
              height="526"
              alt=""
              data-srcset="/images/old/vid2-p-500.webp 500w, /images/old/vid2.webp 606w"
              sizes="(max-width: 479px) 51vw, (max-width: 991px) 29vw, 20vw"
              className="prof-slide-img"
            />
            <button
              type="button"
              data-a-videoname="4dQqyipf6JY"
              data-yt-iframe="https://www.youtube.com/embed/4dQqyipf6JY?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
              className="prof-slide-play-link w-inline-block"
            >
              <Image
                src="/images/old/play-video.svg"
                loading="lazy"
                width="88"
                height="88"
                alt=""
                className="prof-slide-play-icon"
              />
              <div className="prof-slide-play-link-bg"></div>
            </button>
            <div className="prof-slide-dark-filter"></div>
          </div>
          <div
            className="prof-slide swiper-slide-duplicate swiper-slide-duplicate-active"
            data-swiper-slide-index="1"
            role="group"
            aria-label="2 / 3"
          >
            <Image
              src="/images/old/vid1.webp"
              loading="lazy"
              width="302"
              height="526"
              alt=""
              data-srcset="/images/old/vid1-p-500.webp 500w, /images/old/vid1.webp 605w"
              sizes="(max-width: 479px) 51vw, (max-width: 991px) 29vw, 20vw"
              className="prof-slide-img"
            />
            <button
              type="button"
              data-a-videoname="ehHqKxTtQQk"
              data-yt-iframe="https://www.youtube.com/embed/ehHqKxTtQQk?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
              className="prof-slide-play-link w-inline-block"
            >
              <Image
                src="/images/old/play-video.svg"
                loading="lazy"
                width="88"
                height="88"
                alt=""
                className="prof-slide-play-icon"
              />
              <div className="prof-slide-play-link-bg"></div>
            </button>
            <div className="prof-slide-dark-filter"></div>
          </div>
          <div
            className="prof-slide swiper-slide-duplicate swiper-slide-duplicate-next"
            data-swiper-slide-index="2"
            role="group"
            aria-label="3 / 3"
          >
            <Image
              src="/images/old/vid3.webp"
              loading="lazy"
              width="303"
              height="526"
              alt=""
              data-srcset="/images/old/vid3-p-500.webp 500w, /images/old/vid3.webp 610w"
              sizes="(max-width: 479px) 51vw, (max-width: 991px) 29vw, 20vw"
              className="prof-slide-img"
            />
            <button
              type="button"
              data-a-videoname="VC8-dnp7nLw"
              data-yt-iframe="https://www.youtube.com/embed/VC8-dnp7nLw?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
              className="prof-slide-play-link w-inline-block"
            >
              <Image
                src="/images/old/play-video.svg"
                loading="lazy"
                width="88"
                height="88"
                alt=""
                className="prof-slide-play-icon"
              />
              <div className="prof-slide-play-link-bg"></div>
            </button>
            <div className="prof-slide-dark-filter"></div>
          </div>
        </div>
        <div className="prof-nav-prev-wrap">
          <div
            id="prof-slider-nav-prev"
            className="prof-slider-arrow w-inline-block"
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-0579103f95324ac0"
          >
            <Image
              src="/images/old/sj-nav-arrow-blue.svg"
              loading="lazy"
              width="28"
              height="28"
              alt=""
              className="prof-slider-arrow-icon"
            />
          </div>
        </div>
        <div className="prof-nav-next-wrap">
          <div
            id="prof-slider-nav-next"
            className="prof-slider-arrow next w-inline-block"
            tabIndex={0}
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-0579103f95324ac0"
          >
            <Image
              src="/images/old/sj-nav-arrow-blue.svg"
              loading="lazy"
              width="28"
              height="28"
              alt=""
              className="prof-slider-arrow-icon"
            />
          </div>
        </div>
        <span
          className="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        ></span>
      </div>
      <div className="slider-pagination no-top-margin swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
        <span
          className="slider-pagination__dot"
          tabIndex={0}
          role="button"
          aria-label="Go to slide 1"
        ></span>
        <span
          className="slider-pagination__dot slider-pagination__dot-active"
          tabIndex={0}
          role="button"
          aria-label="Go to slide 2"
          aria-current="true"
        ></span>
        <span
          className="slider-pagination__dot"
          tabIndex={0}
          role="button"
          aria-label="Go to slide 3"
        ></span>
      </div>

      <YoutubeModalModal crmURL={crmURL} setData={setData} data={data} />
    </>
  );
}
