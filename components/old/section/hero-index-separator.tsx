import { useEffect } from "react";
import PureCounter from "@/utils/purecounter";

export default function SectionHeroIndexSeparator() {
  useEffect(() => {
    const counter = new PureCounter({ selector: ".js-purecounter-number" });
    counter.registerEventListeners();
  });

  return (
    <>
      <div className="counters-full">
        <section className="section-fixed counters">
          <div className="container-138">
            <div className="counters-grid">
              <div className="counters-item">
                <div className="counters-item-title">
                  <div className="title-24 black">
                    <span
                      className="js-purecounter-number"
                      data-purecounter-end="40"
                      data-purecounter-start="0"
                      data-purecounter-duration="0"
                    >
                      0
                    </span>
                    +
                  </div>
                </div>
                <div className="counters-item-subtitle">
                  <div>Subjects</div>
                </div>
              </div>
              <div className="counters-item-sep"></div>
              <div className="counters-item">
                <div className="counters-item-title">
                  <div className="title-24 black">
                    <span
                      className="js-purecounter-number"
                      data-purecounter-end="50"
                      data-purecounter-start="0"
                      data-purecounter-duration="0"
                    >
                      0
                    </span>
                    +
                  </div>
                </div>
                <div className="counters-item-subtitle">
                  <div>Experts</div>
                </div>
              </div>
              <div className="counters-item-sep"></div>
              <div className="counters-item">
                <div className="counters-item-title">
                  <div className="title-24 black">
                    <span
                      className="js-purecounter-number"
                      data-purecounter-end="20"
                      data-purecounter-start="0"
                      data-purecounter-duration="0"
                    >
                      0
                    </span>
                    K+
                  </div>
                </div>
                <div className="counters-item-subtitle">
                  <div>Papers written</div>
                </div>
              </div>
              <div className="counters-item-sep"></div>
              <div className="counters-item">
                <div className="counters-item-title">
                  <div className="title-24 black">
                    <span
                      className="js-purecounter-number"
                      data-purecounter-end="98"
                      data-purecounter-start="0"
                      data-purecounter-duration="0"
                    >
                      0
                    </span>
                    %
                  </div>
                </div>
                <div className="counters-item-subtitle">
                  <div>Satisfaction rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
