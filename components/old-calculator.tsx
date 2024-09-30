import { useEffect, useState } from "react";
import Image from "next/image";
import { TypesOfWork, typeOfWorkCoeff } from "@/data/order-types";
import { Levels, levelCoeff } from "@/data/order-level";
import { Deadlines, deadlineCoeff } from "@/data/order-deadlines";
import Tooltip from "@/components/old/tooltip";
import { Sizes, discountCoef } from "@/data/order-sizes";

interface Props {
  crmURL: string;
}

export default function OldCalculator({ crmURL }: Props) {
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

  const handleChange = ({ target }: { target: { name: any; value: any } }) => {
    setOrder((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

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

  function centsToString(cents = 0) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(cents / 100);
  }

  return (
    <form className="calc" action={`${crmURL}/create-order`} method="get">
      <div className="calc-controls">
        <div className="title-36-stlz">
          <span className="blue-text">Calculate</span> your price
        </div>
        <div className="h-24"></div>
        <div className="calc-form-block-wrap w-form">
          <div id="quote-calc" className="calc-form-wrap">
            <div className="calc-label-wrap">
              <label htmlFor="work_type" className="calc-label-text">
                Type of work
              </label>
              <select
                id="work_type"
                name="type"
                data-name="Field"
                className="calc-select-field w-select"
                value={order.type}
                onChange={handleChange}
              >
                {TypesOfWork.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="calc-columns">
              <div className="calc-label-wrap">
                <label htmlFor="work_level" className="calc-label-text">
                  Classification
                </label>
                <select
                  id="work_level"
                  name="level"
                  data-name="Field 2"
                  className="calc-select-field w-select"
                  value={order.level}
                  onChange={handleChange}
                >
                  {Levels.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="calc-label-wrap">
                <label htmlFor="work_deadline" className="calc-label-text">
                  Deadline
                </label>
                <select
                  id="work_deadline"
                  name="deadline"
                  data-name="Field 3"
                  className="calc-select-field w-select"
                  value={order.deadline}
                  onChange={handleChange}
                >
                  {Deadlines.map((item) => (
                    <option key={item.name} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="calc-columns">
              <div className="calc-label-wrap">
                <label htmlFor="field" className="calc-label-text">
                  Number of Pages
                </label>
                <div className="calc-integer-controls">
                  <button
                    type="button"
                    id="pages-minus"
                    className="calc-integer-button w-inline-block"
                    disabled={order.size === 1}
                    onClick={() => {
                      updateSize(order.size - 1);
                    }}
                  >
                    <Image
                      src="/images/old/calc-controls-minus.svg"
                      loading="lazy"
                      width="36"
                      height="36"
                      alt=""
                      className="calc-integer-icon"
                    />
                  </button>
                  <div className="calc-integer-count">
                    <select
                      id="pages_size"
                      name="field"
                      data-name="Field"
                      className="calc-integer-count-num w-select"
                      value={order.size}
                      onChange={handleChange}
                    >
                      {Array.from({ length: 50 }).map((item, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <div className="calc-integer-count-num hide">2</div>
                  </div>
                  <button
                    type="button"
                    id="pages-plus"
                    className="calc-integer-button w-inline-block"
                  >
                    <Image
                      src="/images/old/calc-controls-plus.svg"
                      loading="lazy"
                      width="36"
                      height="36"
                      alt=""
                      className="calc-integer-icon"
                      onClick={() => {
                        updateSize(order.size + 1);
                      }}
                    />
                  </button>
                </div>
              </div>
              <div className="calc-label-wrap">
                <label htmlFor="field" className="calc-label-text">
                  Number of Words
                </label>
                <div className="calc-integer-controls">
                  <button
                    type="button"
                    id="words-minus"
                    className="calc-integer-button w-inline-block"
                    disabled={order.size === 1}
                    onClick={() => {
                      updateSize(order.size - 1);
                    }}
                  >
                    <Image
                      src="/images/old/calc-controls-minus.svg"
                      loading="lazy"
                      width="36"
                      height="36"
                      alt=""
                      className="calc-integer-icon"
                    />
                  </button>
                  <div className="calc-integer-count">
                    <div id="words_size" className="calc-integer-count-num">
                      {order.size * 275}
                    </div>
                  </div>
                  <button
                    type="button"
                    id="words-plus"
                    className="calc-integer-button w-inline-block"
                    onClick={() => {
                      updateSize(order.size + 1);
                    }}
                  >
                    <Image
                      src="/images/old/calc-controls-plus.svg"
                      loading="lazy"
                      width="36"
                      height="36"
                      alt=""
                      className="calc-integer-icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="calc-sep-mob"></div>
      </div>
      <div className="calc-results">
        <div className="calc-results-top">
          <div className="calc-results-title">
            <Image
              src="/images/old/calc-thumbs-up.png"
              loading="lazy"
              width="42"
              height="42"
              alt=""
              className="calc-results-title-icon"
            />
            <div className="calc-results-title-text">The price includes</div>
          </div>
          <div className="h-12"></div>
          <div className="calc-results-sep"></div>
          <div className="h-12"></div>
          <div className="calc-includes-grid">
            <div className="calc-includes">
              <Image
                src="/images/old/calc-results-check.svg"
                loading="lazy"
                width="24"
                height="24"
                alt=""
                className="calc-includes-icon"
              />
              <div className="calc-includes-text">Plagiarism Report</div>
            </div>
            <div className="calc-includes">
              <Image
                src="/images/old/calc-results-check.svg"
                loading="lazy"
                width="24"
                height="24"
                alt=""
                className="calc-includes-icon"
              />
              <div className="calc-includes-text">Unlimited Revisions</div>
            </div>
            <div className="calc-includes">
              <Image
                src="/images/old/calc-results-check.svg"
                loading="lazy"
                width="24"
                height="24"
                alt=""
                className="calc-includes-icon"
              />
              <div className="calc-includes-text">AI Report</div>
            </div>
            <div className="calc-includes">
              <Image
                src="/images/old/calc-results-check.svg"
                loading="lazy"
                width="24"
                height="24"
                alt=""
                className="calc-includes-icon"
              />
              <div className="calc-includes-text">Outline</div>
            </div>
            <div className="calc-includes">
              <Image
                src="/images/old/calc-results-check.svg"
                loading="lazy"
                width="24"
                height="24"
                alt=""
                className="calc-includes-icon"
              />
              <div className="calc-includes-text">Formatting</div>
            </div>
            <div className="calc-includes">
              <Image
                src="/images/old/calc-results-check.svg"
                loading="lazy"
                width="24"
                height="24"
                alt=""
                className="calc-includes-icon"
              />
              <div className="calc-includes-text">24/7 Customer support</div>
            </div>
          </div>
          <div className="h-21 hide-mob"></div>
          <div className="calc-results-sep hide-mob"></div>
          <div className="h-21 hide-mob"></div>
        </div>
        <div className="calc-results-bottom">
          <div id="calc-prices-wrap" className="calc-estimates">
            <Tooltip
              text={"Estimated price"}
              tooltipText={
                "This is an estimated order price. Top experts may offer higherand skill."
              }
            />
            <div className="calc-estimates-overall">
              <div id="calc-total" className="calc-estimates-overall-num">
                {centsToString(prices.priceWithDiscount)}
              </div>
            </div>
            <div
              id="calc-discounts-numbers"
              className="calc-estimates-discount"
              style={{
                display: prices.discountPercent ? "flex" : "none",
              }}
            >
              <div className="calc-discount-numbers">
                <div className="calc-discount-numbers-saved">
                  🔥{" "}
                  <span className="text-span-3" style={{ display: "inline" }}>
                    {centsToString(prices.fullPrice - prices.priceWithDiscount)}{" "}
                    saved
                  </span>
                </div>
                <div className="calc-discount-numbers-percent">
                  -
                  <span id="calc-discount-value">{prices.discountPercent}</span>
                  % OFF
                </div>
              </div>
              <div
                id="calc-price-without-discount"
                className="calc-discount-without"
              >
                {centsToString(prices.fullPrice)}
              </div>
            </div>
          </div>
          <div className="h-21"></div>
          <button
            type="submit"
            className="calc-results-btn w-inline-block"
            data-amplitude="true"
            data-a-position="Body"
            data-a-cta="true"
          >
            <div className="calc-results-btn-text">Advance</div>
          </button>
        </div>
      </div>
    </form>
  );
}
