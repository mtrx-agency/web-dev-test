import Link from "next/link";
import ReviewsCarousel from "@/components/reviews-carousel";
import { useEffect, useState } from "react";
import { ReviewCount } from "@/data/reviews";

interface SectionFeedbackProps {
  apiURL: string;
}

export default function SectionFeedback({ apiURL }: SectionFeedbackProps) {
  const [currentReviewsCount, setCurrentReviewsCount] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${apiURL}/order/rpc/review/sitejabberInfo`, { method: "POST" })
      .then((res) => res.json())
      .then((res) => {
        let val = ReviewCount.Sitejabber;
        if (res.reviews_count && res.reviews_count >= ReviewCount.Sitejabber) {
          val = res.reviews_count;
        }

        setCurrentReviewsCount(val);
      })
      .catch(() => {
        setCurrentReviewsCount(ReviewCount.Sitejabber);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiURL]);

  return (
    <article
      id="feedback"
      className="flex flex-col items-center justify-start bg-light ~gap-10/20 ~px-3/0 ~pt-[7.5rem]/[15.25rem] ~pb-[7.5rem]/[14.5rem]"
    >
      <div className="flex w-full flex-col items-start justify-start ~gap-5/7 md:items-center">
        <span
          className={`font-poppins font-semibold text-violet ~text-4xl/6xl`}
        >
          Feedback <span className="text-black">on Paper24</span>
        </span>
        <span className="font-normal text-black ~text-sm/xl md:font-medium">
          Based on{" "}
          <Link
            target="_blank"
            href="https://www.sitejabber.com/reviews/paper24.com"
            className="font-bold text-violet underline active:text-black md:hover:text-black"
          >
            {isLoading ? "___" : currentReviewsCount} reviews
          </Link>
        </span>
      </div>

      <ReviewsCarousel />

      <button
        data-name="Intercom"
        type="button"
        className="flex h-12 w-full items-center justify-center rounded-full bg-violet px-[2.813rem] py-[1.563rem] font-medium text-white ~text-sm/base active:bg-black md:h-auto md:w-auto md:hover:bg-black"
      >
        Get help
      </button>
    </article>
  );
}
