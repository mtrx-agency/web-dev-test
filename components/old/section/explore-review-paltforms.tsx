import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Paper24Review,
  Paper24Reviews,
  ReviewCount,
  ReviewRating,
  ReviewsIoReview,
  ReviewsIoReviews,
} from "@/data/reviews";

const PER_PAGE = 5;

type Platform = string;
const PlatformSitejabber: Platform = "sitejabber";
const PlatformReviewsIo: Platform = "reviewsio";
const PlatformPaper24: Platform = "paper24";

const PlatformReviews: Record<
  Platform,
  [] | Paper24Review[] | ReviewsIoReview[]
> = {
  [PlatformSitejabber]: [],
  [PlatformReviewsIo]: ReviewsIoReviews,
  [PlatformPaper24]: Paper24Reviews,
};

interface ExploreReviewPlatformsProps {
  apiURL: string;
}

export default function ExploreReviewPlatforms({
  apiURL,
}: ExploreReviewPlatformsProps) {
  const [currentSitejabberReviewsCount, setCurrentSitejabberReviewsCount] =
    useState(0);
  const [currentSitejabberReviewsRating, setCurrentSitejabberReviewsRating] =
    useState(0);

  useEffect(() => {
    fetch(`${apiURL}/order/rpc/review/sitejabberInfo`, { method: "POST" })
      .then((res) => res.json())
      .then((res) => {
        let reviewsCount = ReviewCount.Sitejabber;
        if (res.reviews_count && res.reviews_count >= ReviewCount.Sitejabber) {
          reviewsCount = res.reviews_count;
        }

        let overallRating = ReviewRating.Sitejabber;
        if (
          res.overall_rating &&
          res.overall_rating >= ReviewRating.Sitejabber
        ) {
          overallRating = res.overall_rating;
        }

        setCurrentSitejabberReviewsCount(reviewsCount);
        setCurrentSitejabberReviewsRating(overallRating);
      })
      .catch(() => {
        setCurrentSitejabberReviewsCount(675);
        setCurrentSitejabberReviewsRating(4.8);
      });
  }, [apiURL]);

  const [showedReviews, setShowedReviews] = useState<
    Record<Platform, [] | Paper24Review[] | ReviewsIoReview[]>
  >({
    [PlatformSitejabber]: [],
    [PlatformReviewsIo]: PlatformReviews[PlatformReviewsIo].slice(0, PER_PAGE),
    [PlatformPaper24]: PlatformReviews[PlatformPaper24].slice(0, PER_PAGE),
  });
  const [active, setActive] = useState<Platform>(PlatformSitejabber);

  const showMore = () => {
    setShowedReviews({
      [PlatformSitejabber]: [],
      [PlatformReviewsIo]:
        active === PlatformReviewsIo
          ? PlatformReviews[PlatformReviewsIo].slice(
              0,
              showedReviews[PlatformReviewsIo].length + PER_PAGE,
            )
          : PlatformReviews[PlatformReviewsIo],
      [PlatformPaper24]:
        active === PlatformPaper24
          ? PlatformReviews[PlatformPaper24].slice(
              0,
              showedReviews[PlatformPaper24].length + PER_PAGE,
            )
          : PlatformReviews[PlatformPaper24],
    });
  };

  return (
    <div className="section-fixed">
      <div className="h-100"></div>
      <div className="container-138">
        <div className="title-div-n _750">
          <h2 className="title-32-500">Explore Paper24 review platforms</h2>
          <div className="text-grey-434b60">
            <div className="text-18-400-st">
              Find out what students say about us on trusted Paper24 review
              platforms.
            </div>
          </div>
          <div></div>
        </div>
        <div className="mob-30 h-60"></div>
        <div className="tabs-trevs-rel tabs">
          <div
            data-easing="ease"
            data-duration-in="300"
            data-duration-out="100"
            className="trevs-tabs-nn w-tabs"
          >
            <div className="trevs-tabs-menu-nn w-tab-menu" role="tablist">
              <button
                className={`trevs-tabs-link-nn w-inline-block w-tab-link ${active === PlatformSitejabber ? "w--current" : ""}`}
                tabIndex={-1}
                type="button"
                role="tab"
                onClick={() => {
                  setActive(PlatformSitejabber);
                }}
              >
                <div className="rt-logo-div">
                  <Image
                    width="88"
                    height="28"
                    alt=""
                    src="/images/old/Sitejabbaer-icon-b.svg"
                    loading="lazy"
                    className="tt-tab-logo-nn-b sj"
                    style={{ opacity: active === PlatformSitejabber ? 0 : 1 }}
                  />
                  <Image
                    width="88"
                    height="28"
                    alt=""
                    src="/images/old/Sitejabbaer-icon-w.svg"
                    loading="lazy"
                    className="tt-tab-logo-nn-w sj"
                    style={{ opacity: active === PlatformSitejabber ? 1 : 0 }}
                  />
                </div>
                <div className="rw-wr">
                  <Image
                    loading="lazy"
                    src="/images/old/star-1-tab.svg"
                    height="20"
                    width="20"
                    alt="Star"
                    className="star-1-nn"
                  />
                  <div className="text-20-stolz">
                    {currentSitejabberReviewsRating}
                  </div>
                  <div
                    className="r-count-div"
                    style={{
                      color:
                        active === PlatformSitejabber
                          ? "rgb(202, 200, 232)"
                          : "rgb(123, 120, 167)",
                    }}
                  >
                    <div className="text-14-stolz">(</div>
                    <div className="text-14-stolz">
                      {currentSitejabberReviewsCount}
                    </div>
                    <div className="text-14-stolz">)</div>
                  </div>
                </div>
              </button>

              <button
                className={`trevs-tabs-link-nn w-inline-block w-tab-link ${active === PlatformReviewsIo ? "w--current" : ""}`}
                tabIndex={-1}
                type="button"
                role="tab"
                onClick={() => {
                  setActive(PlatformReviewsIo);
                }}
              >
                <div className="rt-logo-div">
                  <Image
                    width="88"
                    height="28"
                    alt=""
                    src="/images/old/Reviews-io-icon-b.svg"
                    loading="lazy"
                    className="tt-tab-logo-nn-b rio"
                    style={{ opacity: active === PlatformReviewsIo ? 0 : 1 }}
                  />
                  <Image
                    width="88"
                    height="28"
                    alt=""
                    src="/images/old/Reviews-io-icon-w.svg"
                    loading="lazy"
                    className="tt-tab-logo-nn-w rio"
                    style={{ opacity: active === PlatformReviewsIo ? 1 : 0 }}
                  />
                </div>
                <div className="tab-tap-plus"></div>
                <div className="rw-wr">
                  <Image
                    loading="lazy"
                    src="/images/old/star-1-tab.svg"
                    height="20"
                    width="20"
                    alt="Star"
                    className="star-1-nn"
                  />
                  <div className="text-20-stolz">{ReviewRating.ReviewsIo}</div>
                  <div
                    className="r-count-div"
                    style={{
                      color:
                        active === PlatformReviewsIo
                          ? "rgb(202, 200, 232)"
                          : "rgb(123, 120, 167)",
                    }}
                  >
                    <div className="text-14-stolz">(</div>
                    <div className="text-14-stolz">{ReviewCount.ReviewsIo}</div>
                    <div className="text-14-stolz">)</div>
                  </div>
                </div>
              </button>
              <button
                className={`trevs-tabs-link-nn w-inline-block w-tab-link ${active === PlatformPaper24 ? "w--current" : ""}`}
                tabIndex={-1}
                type="button"
                role="tab"
                onClick={() => {
                  setActive(PlatformPaper24);
                }}
              >
                <div className="rt-logo-div">
                  <Image
                    width="88"
                    height="28"
                    alt=""
                    src="/images/old/tabpaper-logo-b.svg"
                    loading="lazy"
                    className="tt-tab-logo-nn-b"
                    style={{ opacity: active === PlatformPaper24 ? 0 : 1 }}
                  />
                  <Image
                    width="88"
                    height="28"
                    alt=""
                    src="/images/old/tabpaper-logo-w.svg"
                    loading="lazy"
                    className="tt-tab-logo-nn-w"
                    style={{ opacity: active === PlatformPaper24 ? 1 : 0 }}
                  />
                </div>
                <div className="tab-tap-plus"></div>
                <div className="rw-wr">
                  <Image
                    loading="lazy"
                    src="/images/old/star-1-tab.svg"
                    width="20"
                    height="20"
                    alt=""
                    className="star-1-nn"
                  />
                  <div className="text-20-stolz">{ReviewRating.Paper24}</div>
                  <div
                    className="r-count-div"
                    style={{
                      color:
                        active === PlatformPaper24
                          ? "rgb(202, 200, 232)"
                          : "rgb(123, 120, 167)",
                    }}
                  >
                    <div className="text-14-stolz">(</div>
                    <div className="text-14-stolz">{ReviewCount.Paper24}</div>
                    <div className="text-14-stolz">)</div>
                  </div>
                </div>
              </button>
            </div>
            <div className="trevs-tabs-cont-nn w-tab-content">
              <div
                className={`trevs-tab-pane-nn w-tab-pane ${active === PlatformSitejabber ? "w--tab-active" : ""}`}
              >
                <div className="stjr-review-page"></div>
                <Link
                  href="https://www.sitejabber.com/reviews/paper24.com"
                  target="_blank"
                  className="sj-powd-link reviews-page w-inline-block"
                >
                  <div className="sj-powd-wrap reviews-page">
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
                className={`trevs-tab-pane-nn w-tab-pane ${active === PlatformReviewsIo ? "w--tab-active" : ""}`}
                role="tabpanel"
              >
                <div className="tt-revs-cols-nn">
                  <div className="grid1 ttr-grid-col" style={{ width: "100%" }}>
                    <div className="w-dyn-list">
                      <div role="list" className="ri-rio-list-nn w-dyn-items">
                        {/*<div id="compound-widget"></div>*/}
                        {showedReviews[PlatformReviewsIo].map((r, i) => (
                          <div key={i} role="listitem" className="w-dyn-item">
                            <div className="tr-rio-item">
                              <div className="rio-hd-wr">
                                <div className="black-000-text">
                                  <div className="title-14-500">
                                    {r.customer}
                                  </div>
                                </div>
                                <Image
                                  width="92"
                                  height="17"
                                  alt=""
                                  src="/images/old/rio-5.svg"
                                  loading="lazy"
                                  className="rio-rate-icon"
                                />
                                {r.verified ? (
                                  <Image
                                    width="124"
                                    height="23"
                                    alt="Verified"
                                    src="/images/old/verif.svg"
                                    loading="lazy"
                                    className="verify-user-icon"
                                  />
                                ) : (
                                  <></>
                                )}
                              </div>
                              <div className="h-20"></div>
                              <div className="black-text-pad-44">
                                <div className="text-15-400-notosans">
                                  {r.description}
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
                                  {r.at}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div
                        role="navigation"
                        aria-label="List"
                        className="w-pagination-wrapper show-pagg"
                      >
                        <button
                          type="button"
                          className="w-pagination-next btn-bord-viol"
                          style={{
                            display:
                              showedReviews[PlatformReviewsIo].length <
                              PlatformReviews[PlatformReviewsIo].length
                                ? "flex"
                                : "none",
                          }}
                          onClick={() => {
                            showMore();
                          }}
                        >
                          <div className="w-inline-block">Show more</div>
                          <Image
                            width="24"
                            height="24"
                            alt=""
                            src="/images/old/arrow-down.svg"
                            loading="lazy"
                            className="button-arr-d-icon"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`trevs-tab-pane-nn w-tab-pane ${active === PlatformPaper24 ? "w--tab-active" : ""}`}
                role="tabpanel"
              >
                <div className="tt-revs-cols-nn">
                  <div className="grid1 ttr-grid-col">
                    <div className="w-dyn-list">
                      <div role="list" className="tr-p24-list-nn w-dyn-items">
                        {showedReviews[PlatformPaper24].map((r, i) => (
                          <div key={i} role="listitem" className="w-dyn-item">
                            <div className="tr-paper-item-nn">
                              <div className="reviews-top">
                                <div className="type-rev-nn">
                                  <div className="text-12">{r.typeOfWork}</div>
                                </div>
                                <div className="text-16 hide">{r.at}</div>
                              </div>
                              <div className="h-16"></div>
                              <div className="title-24-500">{r.title}</div>
                              <div className="h-10"></div>
                              <div className="slide-desc">
                                <div className="text-16">{r.description}</div>
                              </div>
                              <div className="h-24"></div>
                              <div className="sl-rate-rev">
                                <div className="grey-text-id">
                                  <div className="text-14">User ID:</div>
                                  <div className="text-14">{r.customer}</div>
                                </div>
                                <div className="tr-rate-number">
                                  <Image
                                    width="96"
                                    height="16"
                                    alt=""
                                    src={`/images/old/f-stars-${r.rating}.svg`}
                                    loading="lazy"
                                    className="p-rate-stars"
                                  />
                                  <div className="filter-number">
                                    {r.rating}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div
                        role="navigation"
                        aria-label="List"
                        className="w-pagination-wrapper show-pagg"
                      >
                        <button
                          type="button"
                          className="w-pagination-next btn-bord-viol"
                          style={{
                            display:
                              showedReviews[PlatformPaper24].length <
                              PlatformReviews[PlatformPaper24].length
                                ? "flex"
                                : "none",
                          }}
                          onClick={() => {
                            showMore();
                          }}
                        >
                          <div className="w-inline-block">Show more</div>
                          <Image
                            width="24"
                            height="24"
                            alt=""
                            src="/images/old/arrow-down.svg"
                            loading="lazy"
                            className="button-arr-d-icon"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-70 mob-50"></div>
    </div>
  );
}
