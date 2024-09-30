import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";

interface DiscountModalProps {
  crmURL: string;
}

export default function DiscountModal({ crmURL }: DiscountModalProps) {
  useEffect(() => {
    let pages: number;

    document.addEventListener("DOMContentLoaded", function () {
      const el = document.querySelector("[name=pages]") as HTMLInputElement;

      pages = 2;
      swiperFuncPages();
      doOnRangeChangePages();

      el.addEventListener("input", function () {
        pages = parseInt(el.value);
        swiperFuncPages();
        doOnRangeChangePages();
      });
    });

    function doOnRangeChangePages() {
      const pagesNumberEl = document.querySelector(
        ".pages-number",
      ) as HTMLElement;

      if (pages < 10) {
        pagesNumberEl.textContent = `${pages}`;
      } else {
        pagesNumberEl.textContent = pages + "+";
      }

      let discountValueContent = "35%";

      if (pages <= 7) {
        discountValueContent = pages * 5 - 5 + "%";
      } else if (pages <= 9) {
        discountValueContent = "30%";
      }

      const discountValueEl = document.querySelector(
        ".modal__discount-value",
      ) as HTMLElement;
      discountValueEl.textContent = discountValueContent;
    }

    function swiperFuncPages() {
      const el = document.querySelector("[name=pages]") as HTMLInputElement;
      if (!el) {
        return;
      }

      const rangeVal = parseFloat(el.value || "");
      let rangeWidth = el.offsetWidth + 60;

      if (window.matchMedia("(max-width: 991px)").matches) {
        rangeWidth = el.offsetWidth + 37;
      }

      const rangeMax = parseInt(el.getAttribute("max") || "1");
      rangeWidth = (rangeWidth / rangeMax) * (rangeVal - 2);

      const sliderNumberEl = document.querySelector(
        ".slider-number",
      ) as HTMLElement;
      sliderNumberEl.style.transform = "translateX(" + rangeWidth + "px)";
    }
  });

  return (
    <>
      <div className="modal">
        <div className="modal__backdrop"></div>
        <div className="modal__inner">
          <div className="modal__img-wrap">
            <Image
              src="/images/old/exit-popup.webp"
              loading="lazy"
              width="400"
              height="568"
              sizes="100vw"
              alt=""
              data-srcset="/images/old/exit-popup-p-500.webp 500w, /images/old/exit-popup.webp 800w"
              className="modal__img"
            />
          </div>
          <div className="modal__info">
            <div className="modal__heading">
              <div className="modal__title">Mamma Mia!</div>
              <div className="modal__heading-decor w-embed">
                <svg
                  width="35"
                  height="30"
                  viewBox="0 0 35 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.8136 13.5856L27.8574 1.29004"
                    stroke="#58C58B"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M18.0018 18.5744L4.7002 6.20264"
                    stroke="#58C58B"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M13.8419 28.0222L1.04811 26.7425"
                    stroke="#58C58B"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="modal__text">
              Look at all those extra savings you can get ordering two or more
              pages.
            </p>
            <div className="range-wrapper">
              <div className="range-box w-embed">
                <input
                  type="range"
                  className="range-slider"
                  name="pages"
                  min="2"
                  max="10"
                  defaultValue="2"
                />
              </div>
              <div
                data-bloc="range_number_box"
                className="slider-number"
                style={{ transform: "translateX(0px)" }}
              >
                <div data-bloc="pages_number" className="pages-number">
                  2
                </div>
                <div>pages</div>
                <div className="number-icon w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="6"
                    viewBox="0 0 12 6"
                    fill="none"
                  >
                    <path
                      d="M6.70711 5.29289C6.31658 5.68342 5.68342 5.68342 5.29289 5.29289L5.24537e-07 -1.04907e-06L12 0L6.70711 5.29289Z"
                      fill="#4E43DF"
                    ></path>
                  </svg>
                </div>
              </div>
              <Image
                src="/images/old/range.svg"
                loading="lazy"
                width="448"
                height="34"
                alt=""
              />
            </div>
            <div className="modal__discount">
              You’ll get <span className="modal__discount-value">5%</span>{" "}
              discount
            </div>
            <Link
              href={crmURL}
              target="_blank"
              className="modal__cta w-inline-block"
            >
              Get a free quote
            </Link>
          </div>
          <div className="modal__close">
            <div className="w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M8 8L24 24"
                  stroke="#434B60"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M24 8L8 24"
                  stroke="#434B60"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="modal__decor"></div>
        </div>
        <div className="modal__inner-embed w-embed w-script"></div>
      </div>
    </>
  );
}
