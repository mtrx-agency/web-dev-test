import Image from "next/image";
import React, { useEffect, useState } from "react";
import { typeOfWorkCoeff, TypesOfWork } from "@/data/order-types";
import { levelCoeff, Levels } from "@/data/order-level";
import { discountCoef, Sizes } from "@/data/order-sizes";
import { deadlineCoeff, Deadlines } from "@/data/order-deadlines";
import CalcItemWithTooltip from "@/components/old/calcv2-item-with-tooltip";

interface SectionCalcProps {
  domain?: string;
  crmURL?: string;
}

interface PriceInclude {
  name: string;
  tooltip: string;
}

const PriceIncludes: PriceInclude[] = [
  {
    name: "Plagiarism Report",
    tooltip:
      "Request a free plagiarism report from a\n support agent to ensure that your paper is\n original.",
  },
  {
    name: "AI Report",
    tooltip:
      "To ensure your paper has passed Turnitin &\n Copyleaks, request a free ai report from\n a support",
  },
  {
    name: "Formatting",
    tooltip:
      "The expert will format your paper according to your\n formatting style completely for free.",
  },
  {
    name: "Unlimited Revisions",
    tooltip:
      "Request as many changes as needed from your expert\n until you’re fully satisfied.",
  },
  {
    name: "Draft",
    tooltip:
      "Ask your expert for a draft of your paper anytime to\n ensure it’s on the right track.",
  },
];

export default function SectionCalc({ crmURL }: SectionCalcProps) {
  const [tooltipIsVisible, setTooltipIsVisible] = useState(false);
  const standartPrice = 1199;
  const [order, setOrder] = useState({
    type: TypesOfWork[0].name,
    level: Levels[0].name,
    size: Sizes[0].value,
    deadline: 336 * 60 * 60 * 1000,
  });
  const [prices, setPrices] = useState({
    fullPrice: 1140,
    priceWithDiscount: 1140,
    discountPercent: 0,
  });

  function updateSize(newValue: number) {
    if (newValue > Sizes.length) return;
    if (newValue < 1) return;

    handleChange({ target: { name: "size", value: newValue } });
  }

  const handleChange = ({ target }: { target: { name: any; value: any } }) =>
    setOrder((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));

  useEffect(() => {
    const typeCoef = order.type ? typeOfWorkCoeff(order.type) : 1;
    const lvlCoef = order.level ? levelCoeff(order.level) : 1;
    const deadlineCoef = order.deadline ? deadlineCoeff(order.deadline) : 1;
    const totalDiscountCoef = discountCoef(order.size);

    const basePrice =
      typeCoef * lvlCoef * deadlineCoef * order.size * standartPrice;

    setPrices((prevState) => ({
      ...prevState,
      fullPrice: Math.ceil(basePrice),
      priceWithDiscount: Math.ceil(basePrice - basePrice * totalDiscountCoef),
      discountPercent: Math.round(totalDiscountCoef * 100),
    }));
  }, [order]);

  return (
    <>
      <section className="calcv2-full calcv2">
        <section className="section-fixed calcv2">
          <div className="container-138">
            <div id="calculator" className="calcv2">
              <div className="h-100 mob-64"></div>
              <div className="calcv2-grid">
                <div className="calcv2-cta">
                  <div className="title-36-500 mob-28">Calculate the price</div>
                  <div className="h-24"></div>
                  <div className="text-16-stolzl book">
                    Use our calculator to estimate the cost of your paper. And
                    remember, you can always discuss the price directly with our
                    experts.
                    <br />
                    <br />
                    <strong>Price includes:</strong>
                  </div>
                  <div className="h-24"></div>
                  <div className="calcv2-list">
                    {PriceIncludes.map(({ name, tooltip }) => (
                      <CalcItemWithTooltip
                        key={name}
                        name={name}
                        tooltip={tooltip}
                      />
                    ))}
                  </div>
                </div>

                <div className="calcv2-calc-wrap">
                  <div className="calcv2-calc">
                    <div className="w-form">
                      <form
                        id="calc"
                        action={`${crmURL}/create-order`}
                        method="get"
                        data-name="Calculator Form"
                        aria-label="Calculator Form"
                        data-amplitude="true"
                        data-a-position="Body"
                        data-a-cta="true"
                      >
                        <div className="calcv2-controls-wrap">
                          <div className="calcv2-field-wrap">
                            <div className="calcv2-label-wrap">
                              <label htmlFor="type" className="calcv2-label">
                                Type of work
                              </label>
                            </div>
                            <select
                              id="type"
                              name="type"
                              className="calcv2-select w-select"
                              onChange={(e) => {
                                handleChange(e);
                                // estimatePrice();
                              }}
                            >
                              {TypesOfWork.map(({ name }) => (
                                <option key={name} value={name}>
                                  {name}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="calcv2-field-wrap">
                            <div className="calcv2-label-wrap">
                              <span className="calcv2-label">
                                Academic level
                              </span>
                              <Image
                                onMouseEnter={() => {
                                  setTooltipIsVisible(true);
                                }}
                                onMouseLeave={() => {
                                  setTooltipIsVisible(false);
                                }}
                                src="/images/old/tooltip.svg"
                                loading="lazy"
                                width="20"
                                height="20"
                                alt=""
                                className="calcv2-label-tooltip"
                              />

                              {tooltipIsVisible && (
                                <div
                                  className="calcv2-tooltip-levels"
                                  style={{ display: "block" }}
                                >
                                  {Levels.map(({ name, tooltip }) => (
                                    <div key={name}>
                                      <strong>{name}</strong>: {tooltip}
                                    </div>
                                  ))}

                                  <Image
                                    src="/images/old/tooltip-angle.svg"
                                    loading="lazy"
                                    width="32"
                                    height="32"
                                    alt=""
                                    className="level-tooltip-angle"
                                  />
                                </div>
                              )}
                            </div>
                            <div className="calcv2-level">
                              {Levels.map(({ name }, index) => (
                                <button
                                  type="button"
                                  aria-disabled="true"
                                  key={name}
                                  onClick={() => {
                                    handleChange({
                                      target: { name: "level", value: name },
                                    });
                                    // estimatePrice();
                                  }}
                                  className={`calcv2-level-radio-wrap w-radio ${order.level === name ? "active" : ""} ${index === Levels.length - 1 ? "no-right-sep" : ""}`}
                                >
                                  <div className="w-form-formradioinput w-form-formradioinput--inputType-custom calcv2-level-radio w-radio-input"></div>
                                  <span className="calcv2-level-radio-label w-form-label">
                                    {name}
                                  </span>
                                </button>
                              ))}
                              <select
                                name="level"
                                value={order.level}
                                onChange={() => {}}
                                style={{
                                  opacity: 0,
                                  position: "absolute",
                                  zIndex: -1,
                                }}
                              >
                                {Levels.map(({ name }) => (
                                  <option key={name} value={name}></option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="calcv2-field-wrap">
                            <div className="calcv2-label-wrap">
                              <label
                                htmlFor="pages_size"
                                className="calcv2-label"
                              >
                                Size
                              </label>
                            </div>
                            <div className="calcv2-pages-wrap">
                              <button
                                type="button"
                                className="calcv2-size-btn"
                                onClick={() => {
                                  updateSize(order.size - 1);
                                  // estimatePrice();
                                }}
                              >
                                <Image
                                  src="/images/old/calcv2-minus.svg"
                                  loading="lazy"
                                  width="24"
                                  height="24"
                                  alt=""
                                  className="calcv2-size-btn-icon"
                                />
                              </button>
                              <select
                                id="pages_size"
                                name="size"
                                className="calcv2-select pages w-select"
                                value={order.size}
                                onChange={() => {}}
                              >
                                {Sizes.map(({ name, value }) => (
                                  <option key={value} value={value}>
                                    {name}
                                  </option>
                                ))}
                              </select>
                              <button
                                type="button"
                                className="calcv2-size-btn"
                                onClick={() => {
                                  updateSize(order.size + 1);
                                  // estimatePrice();
                                }}
                              >
                                <Image
                                  src="/images/old/calcv2-plus.svg"
                                  loading="lazy"
                                  width="24"
                                  height="24"
                                  alt=""
                                  className="calcv2-size-btn-icon"
                                />
                              </button>
                            </div>
                            <div className="h-25 mob-16"></div>
                            <div className="calcv2-size-message">
                              <div>
                                The more pages you order, the greater the
                                discount. Get up to 35% off your order.
                              </div>
                            </div>
                          </div>

                          <div className="calcv2-field-wrap">
                            <div className="calcv2-label-wrap">
                              <label
                                htmlFor="work_deadline"
                                className="calcv2-label"
                              >
                                Deadline
                              </label>
                            </div>
                            <select
                              id="work_deadline"
                              name="deadline"
                              className="calcv2-select w-select"
                              value={order.deadline}
                              onChange={handleChange}
                            >
                              {Deadlines.map(({ name, value }) => (
                                <option key={value} value={value}>
                                  {name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="mob-24 h-48"></div>

                        <div className="calcv2-prices-wrap">
                          <div id="calc-prices-wrap" className="calcv2-prices">
                            <div className="calcv2-estimates-wrap">
                              <div className="text-block-4">
                                Estimated price:
                              </div>
                              <div className="text-block-5">
                                ${(prices.priceWithDiscount / 100).toFixed(2)}
                              </div>
                            </div>
                            <div
                              className="calcv2-discounts-wrap"
                              style={{
                                display: prices.discountPercent
                                  ? "flex"
                                  : "none",
                              }}
                            >
                              <div className="text-block-7">
                                ${(prices.fullPrice / 100).toFixed(2)}
                              </div>
                              <div className="text-block-6">
                                <span>{prices.discountPercent.toFixed(2)}</span>
                                % OFF
                              </div>
                              <Image
                                src="/images/old/calcv2-fire-emoji.png"
                                loading="eager"
                                width="24"
                                height="25"
                                alt=""
                                className="image-7"
                              />
                            </div>
                          </div>
                          <div className="calcv2-cta-btn">
                            <button
                              type="submit"
                              className="puple-btn full-mob w-inline-block"
                              data-amplitude="true"
                              data-a-position="Body"
                              data-a-cta="true"
                            >
                              <div className="purple-btn-text">
                                Get expert help
                              </div>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-100 mob-64"></div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
