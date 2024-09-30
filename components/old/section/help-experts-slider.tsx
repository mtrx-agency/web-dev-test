import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import PDFModal from "@/components/old/pdf-modal";
import { Sample, Samples } from "@/data/sample";

interface Props {
  crmURL: string;
  title: string;
  subtitle: string;
}

export default function HelpExpertsSliderSection({
  crmURL,
  title,
  subtitle,
}: Props) {
  const [sample, setSample] = useState<Sample | null>(null);

  useEffect(() => {
    new window.Swiper(".exm-slider", {
      wrapperClass: "exm-mask",
      slideClass: "exm-slide",
      grabCursor: true,
      centeredSlides: false,
      loop: true,
      spaceBetween: 20,
      slidesPerView: 3,
      slidesPerGroup: 3,
      navigation: {
        nextEl: ".w-slider-arrow-right",
        prevEl: ".w-slider-arrow-left",
      },
    });
  });

  return (
    <section className="section ov-hideen">
      <PDFModal sample={sample} setSample={setSample} />
      <div className="h-90"></div>
      <div className="h-70"></div>
      <div className="container-180">
        <div className="title-div _900">
          <h2
            className="title-60"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          ></h2>
          <p className="text-16">{subtitle}</p>
        </div>
        <div className="h-60"></div>

        <div className="exm-slider-wr">
          <div className="exm-slider w-slider">
            {/* TODO: Implement dynamic */}
            <div className="exm-mask w-slider-mask">
              <div className="exm-slide w-slide">
                <div className="exm-sl-wr">
                  <div className="exm-sl-info">
                    <div className="hsl-head">
                      <div className="exm-av-div">
                        <Image
                          src="/images/old/kyle.svg"
                          loading="lazy"
                          width="250"
                          height="250"
                          alt=""
                          className="exm-av-img"
                        />
                      </div>
                      <div className="hsl-writer-info">
                        <div className="title-19-500">Kyle</div>
                        <div className="hsl-rate-wr">
                          <div className="text-16-600">4.7</div>
                          <div className="hsl-stars-wr">
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="exm-rate-star-icon"
                            />
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                            <Image
                              src="/images/old/half-star.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                          </div>
                        </div>
                        <div className="text-14 hide">Joined: January 2021</div>
                      </div>
                    </div>
                    <div className="hsl-rate-numbers-wr">
                      <div className="exm-rate-item">
                        <div className="text-14">Success rate:</div>
                        <div className="title-19-500">96%</div>
                      </div>
                      <div className="exm-rate-item">
                        <div className="text-14">Completed orders:</div>
                        <div className="title-19-500">893</div>
                      </div>
                    </div>
                    <div className="exm-char-wr">
                      <div className="text-14">Competences:</div>
                      <div className="char-items-wr">
                        <div className="hsl-char-item">
                          <div className="text-12-500">Business</div>
                        </div>
                        <div className="hsl-char-item">
                          <div className="text-12-500">Management</div>
                        </div>
                      </div>
                    </div>
                    <div className="h-20"></div>
                    <div className="hsl-char-wr">
                      <div className="text-14">Best for:</div>
                      <div className="char-items-wr">
                        <div className="hsl-char-item">
                          <div className="text-12-500">Term papers</div>
                        </div>
                        <div className="hsl-char-item">
                          <div className="text-12-500">Creative writing</div>
                        </div>
                        <div className="hsl-char-item">
                          <div className="text-12-500">Research proposals</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="exm-buttons-row">
                    {Samples.filter(
                      ({ slug }) => slug === "marketing-homework-starbucks",
                    )
                      .slice(0, 1)
                      .map((s) => (
                        <button
                          key={s.slug}
                          type="button"
                          className="sample-btn w-inline-block"
                          data-pdf-instructions={s.instructions}
                          data-pdf-citation={s.citation}
                          data-pdf-level={s.level}
                          data-pdf-pages={s.pages}
                          data-pdf-subject={s.subject}
                          data-pdf-url={s.url}
                          data-open-pdf="true"
                          data-pdf-service={s.service}
                          data-pdf-type={s.typeOfWork}
                          data-pdf-sources={s.sources}
                          data-pdf-title={s.title}
                          onClick={() => setSample(s)}
                        >
                          <div className="title-16-400">
                            View Expert&#x27;s Sample
                          </div>
                          <Image
                            src="/images/old/pdf-icon-purp.svg"
                            loading="lazy"
                            width="30"
                            height="30"
                            alt=""
                            className="hsl-pdf-icon"
                          />
                        </button>
                      ))}
                    <Link
                      data-writer-name="Kyle"
                      data-amplitude="true"
                      data-a-position="Body"
                      data-a-cta="true"
                      href={`${crmURL}/create-order`}
                      className="btn w-inline-block"
                    >
                      <div>Hire expert</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="exm-slide w-slide">
                <div className="exm-sl-wr">
                  <div className="exm-sl-info">
                    <div className="hsl-head">
                      <div className="exm-av-div">
                        <Image
                          src="/images/old/george.svg"
                          loading="lazy"
                          width="250"
                          height="250"
                          alt=""
                          className="exm-av-img"
                        />
                      </div>
                      <div className="hsl-writer-info">
                        <div className="title-19-500">George</div>
                        <div className="hsl-rate-wr">
                          <div className="text-16-600">4.8</div>
                          <div className="hsl-stars-wr">
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="exm-rate-star-icon"
                            />
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                            <Image
                              src="/images/old/half-star.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                          </div>
                        </div>
                        <div className="text-14 hide">
                          Joined: December 2019
                        </div>
                      </div>
                    </div>
                    <div className="hsl-rate-numbers-wr">
                      <div className="exm-rate-item">
                        <div className="text-14">Success rate:</div>
                        <div className="title-19-500">98%</div>
                      </div>
                      <div className="exm-rate-item">
                        <div className="text-14">Completed orders:</div>
                        <div className="title-19-500">1750</div>
                      </div>
                    </div>
                    <div className="exm-char-wr">
                      <div className="text-14">Competences:</div>
                      <div className="char-items-wr">
                        <div className="hsl-char-item">
                          <div className="text-12-500">Politics</div>
                        </div>
                        <div className="hsl-char-item">
                          <div className="text-12-500">History</div>
                        </div>
                        <div className="hsl-char-item">
                          <div className="text-12-500">Social sciences</div>
                        </div>
                      </div>
                    </div>
                    <div className="h-20"></div>
                    <div className="hsl-char-wr">
                      <div className="text-14">Best for:</div>
                      <div className="char-items-wr">
                        <div className="hsl-char-item">
                          <div className="text-12-500">
                            Research and argumentative papers
                          </div>
                        </div>
                        <div className="hsl-char-item opas">
                          <div className="text-12-500">Case studies</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="exm-buttons-row">
                    {Samples.filter(
                      ({ slug }) =>
                        slug ===
                        "the-evaluation-of-direct-voter-engagement-infleunce-of-voters-behavior-and-willingness",
                    )
                      .slice(0, 1)
                      .map((s) => (
                        <button
                          key={s.slug}
                          type="button"
                          className="sample-btn w-inline-block"
                          data-pdf-instructions={s.instructions}
                          data-pdf-citation={s.citation}
                          data-pdf-level={s.level}
                          data-pdf-pages={s.pages}
                          data-pdf-subject={s.subject}
                          data-pdf-url={s.url}
                          data-open-pdf="true"
                          data-pdf-service={s.service}
                          data-pdf-type={s.typeOfWork}
                          data-pdf-sources={s.sources}
                          data-pdf-title={s.title}
                          onClick={() => setSample(s)}
                        >
                          <div className="title-16-400">
                            View Expert&#x27;s Sample
                          </div>
                          <Image
                            src="/images/old/pdf-icon-purp.svg"
                            loading="lazy"
                            width="30"
                            height="30"
                            alt=""
                            className="hsl-pdf-icon"
                          />
                        </button>
                      ))}
                    <Link
                      data-writer-name="George"
                      data-amplitude="true"
                      data-a-position="Body"
                      data-a-cta="true"
                      href={`${crmURL}/create-order`}
                      className="btn w-inline-block"
                    >
                      <div>Hire expert</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="exm-slide w-slide">
                <div className="exm-sl-wr">
                  <div className="exm-sl-info">
                    <div className="hsl-head">
                      <div className="exm-av-div">
                        <Image
                          src="/images/old/jenny.svg"
                          loading="lazy"
                          width="250"
                          height="250"
                          alt=""
                          className="exm-av-img"
                        />
                      </div>
                      <div className="hsl-writer-info">
                        <div className="title-19-500">Jenny</div>
                        <div className="hsl-rate-wr">
                          <div className="text-16-600">4.9</div>
                          <div className="hsl-stars-wr">
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="exm-rate-star-icon"
                            />
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                            <Image
                              src="/images/old/half-star.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                          </div>
                        </div>
                        <div className="text-14 hide">Joined: March 2020</div>
                      </div>
                    </div>
                    <div className="hsl-rate-numbers-wr">
                      <div className="exm-rate-item">
                        <div className="text-14">Success rate:</div>
                        <div className="title-19-500">98%</div>
                      </div>
                      <div className="exm-rate-item">
                        <div className="text-14">Completed orders:</div>
                        <div className="title-19-500">1640</div>
                      </div>
                    </div>
                    <div className="exm-char-wr">
                      <div className="text-14">Competences:</div>
                      <div className="char-items-wr">
                        <div className="hsl-char-item">
                          <div className="text-12-500">English</div>
                        </div>
                        <div className="hsl-char-item">
                          <div className="text-12-500">Literature</div>
                        </div>
                      </div>
                    </div>
                    <div className="h-20"></div>
                    <div className="hsl-char-wr">
                      <div className="text-14">Best for:</div>
                      <div className="char-items-wr">
                        <div className="hsl-char-item">
                          <div className="text-12-500">Literary analysis</div>
                        </div>
                        <div className="hsl-char-item">
                          <div className="text-12-500">Creative papers</div>
                        </div>
                        <div className="hsl-char-item opas">
                          <div className="text-12-500">Case studies</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="exm-buttons-row">
                    {Samples.filter(
                      ({ slug }) =>
                        slug === "compare-and-contrast-discussion-post",
                    )
                      .slice(0, 1)
                      .map((s) => (
                        <button
                          key={s.slug}
                          type="button"
                          className="sample-btn w-inline-block"
                          data-pdf-instructions={s.instructions}
                          data-pdf-citation={s.citation}
                          data-pdf-level={s.level}
                          data-pdf-pages={s.pages}
                          data-pdf-subject={s.subject}
                          data-pdf-url={s.url}
                          data-open-pdf="true"
                          data-pdf-service={s.service}
                          data-pdf-type={s.typeOfWork}
                          data-pdf-sources={s.sources}
                          data-pdf-title={s.title}
                          onClick={() => setSample(s)}
                        >
                          <div className="title-16-400">
                            View Expert&#x27;s Sample
                          </div>
                          <Image
                            src="/images/old/pdf-icon-purp.svg"
                            loading="lazy"
                            width="30"
                            height="30"
                            alt=""
                            className="hsl-pdf-icon"
                          />
                        </button>
                      ))}
                    <Link
                      data-writer-name="Jenny"
                      data-amplitude="true"
                      data-a-position="Body"
                      data-a-cta="true"
                      href={`${crmURL}/create-order`}
                      className="btn w-inline-block"
                    >
                      <div>Hire expert</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="exm-slide w-slide">
                <div className="exm-sl-wr">
                  <div className="exm-sl-info">
                    <div className="hsl-head">
                      <div className="exm-av-div">
                        <Image
                          src="/images/old/kenny.svg"
                          loading="lazy"
                          width="250"
                          height="250"
                          alt=""
                          className="exm-av-img"
                        />
                      </div>
                      <div className="hsl-writer-info">
                        <div className="title-19-500">Kenny</div>
                        <div className="hsl-rate-wr">
                          <div className="text-16-600">4.7</div>
                          <div className="hsl-stars-wr">
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="exm-rate-star-icon"
                            />
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                            <Image
                              src="/images/old/half-star.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                          </div>
                        </div>
                        <div className="text-14 hide">Joined: October 2020</div>
                      </div>
                    </div>
                    <div className="hsl-rate-numbers-wr">
                      <div className="exm-rate-item">
                        <div className="text-14">Success rate:</div>
                        <div className="title-19-500">98%</div>
                      </div>
                      <div className="exm-rate-item">
                        <div className="text-14">Completed orders:</div>
                        <div className="title-19-500">1246</div>
                      </div>
                    </div>
                    <div className="exm-char-wr">
                      <div className="text-14">Competences:</div>
                      <div className="char-items-wr">
                        <div className="hsl-char-item">
                          <div className="text-12-500">Business</div>
                        </div>
                        <div className="hsl-char-item">
                          <div className="text-12-500">Management</div>
                        </div>
                      </div>
                    </div>
                    <div className="h-20"></div>
                    <div className="hsl-char-wr">
                      <div className="text-14">Best for:</div>
                      <div className="char-items-wr">
                        <div className="hsl-char-item">
                          <div className="text-12-500">
                            Business plan/proposal
                          </div>
                        </div>
                        <div className="hsl-char-item">
                          <div className="text-12-500">Reports</div>
                        </div>
                        <div className="hsl-char-item opas">
                          <div className="text-12-500">Case studies</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="exm-buttons-row">
                    {Samples.filter(
                      ({ slug }) =>
                        slug ===
                        "the-relationship-between-stakeholder-oriented-corporate-governance-and-sustainability-and-profitability-in-public-companies",
                    )
                      .slice(0, 1)
                      .map((s) => (
                        <button
                          key={s.slug}
                          type="button"
                          className="sample-btn w-inline-block"
                          data-pdf-instructions={s.instructions}
                          data-pdf-citation={s.citation}
                          data-pdf-level={s.level}
                          data-pdf-pages={s.pages}
                          data-pdf-subject={s.subject}
                          data-pdf-url={s.url}
                          data-open-pdf="true"
                          data-pdf-service={s.service}
                          data-pdf-type={s.typeOfWork}
                          data-pdf-sources={s.sources}
                          data-pdf-title={s.title}
                          onClick={() => setSample(s)}
                        >
                          <div className="title-16-400">
                            View Expert&#x27;s Sample
                          </div>
                          <Image
                            src="/images/old/pdf-icon-purp.svg"
                            loading="lazy"
                            width="30"
                            height="30"
                            alt=""
                            className="hsl-pdf-icon"
                          />
                        </button>
                      ))}
                    <Link
                      data-writer-name="Kenny"
                      data-amplitude="true"
                      data-a-position="Body"
                      data-a-cta="true"
                      href={`${crmURL}/create-order`}
                      className="btn w-inline-block"
                    >
                      <div>Hire expert</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="exm-slide w-slide">
                <div className="exm-sl-wr">
                  <div className="exm-sl-info">
                    <div className="hsl-head">
                      <div className="exm-av-div">
                        <Image
                          src="/images/old/elsie.svg"
                          loading="lazy"
                          width="250"
                          height="250"
                          alt=""
                          className="exm-av-img"
                        />
                      </div>
                      <div className="hsl-writer-info">
                        <div className="title-19-500">Elsie</div>
                        <div className="hsl-rate-wr">
                          <div className="text-16-600">4.7</div>
                          <div className="hsl-stars-wr">
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="exm-rate-star-icon"
                            />
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                            <Image
                              src="/images/old/half-star.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                          </div>
                        </div>
                        <div className="text-14 hide">Joined: July 2019</div>
                      </div>
                    </div>
                    <div className="hsl-rate-numbers-wr">
                      <div className="exm-rate-item">
                        <div className="text-14">Success rate:</div>
                        <div className="title-19-500">97%</div>
                      </div>
                      <div className="exm-rate-item">
                        <div className="text-14">Completed orders:</div>
                        <div className="title-19-500">2078</div>
                      </div>
                    </div>
                    <div className="exm-char-wr">
                      <div className="text-14">Competences:</div>
                      <div className="char-items-wr">
                        <div className="hsl-char-item">
                          <div className="text-12-500">Marketing</div>
                        </div>
                        <div className="hsl-char-item">
                          <div className="text-12-500">Economics</div>
                        </div>
                      </div>
                    </div>
                    <div className="h-20"></div>
                    <div className="hsl-char-wr">
                      <div className="text-14">Best for:</div>
                      <div className="char-items-wr">
                        <div className="hsl-char-item">
                          <div className="text-12-500">Business plans</div>
                        </div>
                        <div className="hsl-char-item">
                          <div className="text-12-500">Research papers</div>
                        </div>
                        <div className="hsl-char-item opas">
                          <div className="text-12-500">Case studies</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="exm-buttons-row">
                    {Samples.filter(
                      ({ slug }) =>
                        slug ===
                        "the-case-against-inevitability-of-decolonization",
                    )
                      .slice(0, 1)
                      .map((s) => (
                        <button
                          key={s.slug}
                          type="button"
                          className="sample-btn w-inline-block"
                          data-pdf-instructions={s.instructions}
                          data-pdf-citation={s.citation}
                          data-pdf-level={s.level}
                          data-pdf-pages={s.pages}
                          data-pdf-subject={s.subject}
                          data-pdf-url={s.url}
                          data-open-pdf="true"
                          data-pdf-service={s.service}
                          data-pdf-type={s.typeOfWork}
                          data-pdf-sources={s.sources}
                          data-pdf-title={s.title}
                          onClick={() => setSample(s)}
                        >
                          <div className="title-16-400">
                            View Expert&#x27;s Sample
                          </div>
                          <Image
                            src="/images/old/pdf-icon-purp.svg"
                            loading="lazy"
                            width="30"
                            height="30"
                            alt=""
                            className="hsl-pdf-icon"
                          />
                        </button>
                      ))}
                    <Link
                      data-writer-name="Elsie"
                      data-amplitude="true"
                      data-a-position="Body"
                      data-a-cta="true"
                      href={`${crmURL}/create-order`}
                      className="btn w-inline-block"
                    >
                      <div>Hire expert</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="exm-slide w-slide">
                <div className="exm-sl-wr">
                  <div className="exm-sl-info">
                    <div className="hsl-head">
                      <div className="exm-av-div">
                        <Image
                          src="/images/old/kelly.svg"
                          loading="lazy"
                          width="250"
                          height="250"
                          alt=""
                          className="exm-av-img"
                        />
                      </div>
                      <div className="hsl-writer-info">
                        <div className="title-19-500">Kelly</div>
                        <div className="hsl-rate-wr">
                          <div className="text-16-600">4.9</div>
                          <div className="hsl-stars-wr">
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="exm-rate-star-icon"
                            />
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                            <Image
                              src="/images/old/full-star-icon.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                            <Image
                              src="/images/old/half-star.svg"
                              loading="lazy"
                              width="18"
                              height="18"
                              alt=""
                              className="hsl-rate-star-icon"
                            />
                          </div>
                        </div>
                        <div className="text-14 hide">Joined: October 2020</div>
                      </div>
                    </div>
                    <div className="hsl-rate-numbers-wr">
                      <div className="exm-rate-item">
                        <div className="text-14">Success rate:</div>
                        <div className="title-19-500">98%</div>
                      </div>
                      <div className="exm-rate-item">
                        <div className="text-14">Completed orders:</div>
                        <div className="title-19-500">1698</div>
                      </div>
                    </div>
                    <div className="exm-char-wr">
                      <div className="text-14">Competences:</div>
                      <div className="char-items-wr">
                        <div className="hsl-char-item">
                          <div className="text-12-500">Politics</div>
                        </div>
                        <div className="hsl-char-item">
                          <div className="text-12-500">Business</div>
                        </div>
                      </div>
                    </div>
                    <div className="h-20"></div>
                    <div className="hsl-char-wr">
                      <div className="text-14">Best for:</div>
                      <div className="char-items-wr">
                        <div className="hsl-char-item">
                          <div className="text-12-500">Book/Movie Reviews</div>
                        </div>
                        <div className="hsl-char-item">
                          <div className="text-12-500">Case studies</div>
                        </div>
                        <div className="hsl-char-item opas">
                          <div className="text-12-500">Case studies</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="exm-buttons-row">
                    {Samples.filter(
                      ({ slug }) => slug === "marketing-homework-starbucks",
                    )
                      .slice(0, 1)
                      .map((s) => (
                        <button
                          key={s.slug}
                          type="button"
                          className="sample-btn w-inline-block"
                          data-pdf-instructions={s.instructions}
                          data-pdf-citation={s.citation}
                          data-pdf-level={s.level}
                          data-pdf-pages={s.pages}
                          data-pdf-subject={s.subject}
                          data-pdf-url={s.url}
                          data-open-pdf="true"
                          data-pdf-service={s.service}
                          data-pdf-type={s.typeOfWork}
                          data-pdf-sources={s.sources}
                          data-pdf-title={s.title}
                          onClick={() => setSample(s)}
                        >
                          <div className="title-16-400">
                            View Expert&#x27;s Sample
                          </div>
                          <Image
                            src="/images/old/pdf-icon-purp.svg"
                            loading="lazy"
                            width="30"
                            height="30"
                            alt=""
                            className="hsl-pdf-icon"
                          />
                        </button>
                      ))}
                    <Link
                      data-writer-name="Kelly"
                      data-amplitude="true"
                      data-a-position="Body"
                      data-a-cta="true"
                      href={`${crmURL}/create-order`}
                      className="btn w-inline-block"
                    >
                      <div>Hire expert</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="exm-arrow-left w-slider-arrow-left">
              <Image
                width="40"
                height="40"
                alt=""
                src="/images/old/arrow-left.svg"
                loading="lazy"
                className="slider__arrow-img mob-hide"
              />
              <Image
                width="40"
                height="40"
                alt=""
                src="/images/old/arrow-left-icon.svg"
                loading="lazy"
                className="slider__arrow-img mob-show"
              />
            </div>
            <div className="exm-arrow-right w-slider-arrow-right">
              <Image
                width="40"
                height="40"
                alt=""
                src="/images/old/arrow-right.svg"
                loading="lazy"
                className="slider__arrow-img mob-hide"
              />
              <Image
                width="40"
                height="40"
                alt=""
                src="/images/old/arrow-right-icon.svg"
                loading="lazy"
                className="slider__arrow-img mob-show"
              />
            </div>
            <div className="slide-nav-4 w-slider-nav w-round"></div>
          </div>
          <div
            className="exm-out-blocks-l"
            style={{ backgroundColor: "#f8f8ff" }}
          ></div>
          <div
            className="exm-out-blocks-r"
            style={{ backgroundColor: "#f8f8ff" }}
          ></div>
        </div>
      </div>
      <div className="h-90"></div>
    </section>
  );
}
