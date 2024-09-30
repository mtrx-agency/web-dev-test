import Link from "next/link";
import IconStar from "@/components/icons/star";

interface Review {
  id: number;
  user: string;
  date: string;
  rating: number;
  title: string;
  description: string;
}

export default function ReviewsCarousel() {
  const reviews: Review[] = [
    {
      id: 4632,
      user: "Luca T.",
      date: "April 8th, 2024",
      rating: 5,
      title: "Nice",
      description:
        "I ended up with awesome grades each time. The service was nice and real easy to work with.",
    },
    {
      id: 2016,
      user: "Brittany H.",
      date: "September 17th, 2023",
      rating: 5,
      title: "Awesome",
      description:
        "Experience was phenomenal! Received prior to due date. Fantastic work",
    },
    {
      id: 3897,
      user: "Cheryl R.",
      date: "April 16th, 2024",
      rating: 5,
      title: "Game Theory in Action",
      description:
        "It was smooth. Paper was done before deadline. Clear and easy communication with my writer and additional information needed was given or ask. Very satisfied.",
    },
    {
      id: 4797,
      user: "Timothy F.",
      date: "April 15th, 2024",
      rating: 5,
      title: "Ramy T. Was amazing!",
      description:
        "Ramy T. Was amazing! They had my paper ready even before the deadline was due and I got a 97 on my paper, thank you!",
    },
    {
      id: 4974,
      user: "Zachary S.",
      date: "April 20th, 2024",
      rating: 5,
      title: "It is the best college tool",
      description:
        "It is the best college tool when you have too much homework or projects. It really helps with my stress.",
    },
    {
      id: 2775,
      user: "Mark C.",
      date: "November 1st, 2023",
      rating: 5,
      title: "They get the job done",
      description: "Almost perfect. Put your paper up. They bid. They do.",
    },
    {
      id: 5052,
      user: "Diane W.",
      date: "April 21st, 2024",
      rating: 5,
      title: "Perfect and professional work",
      description:
        "Perfect and professional work. Excellent service. 100% recommended!.",
    },
  ];

  return (
    <>
      <div className="flex w-full flex-row content-start items-start justify-start overflow-x-auto scrollbar-none ~gap-2/5">
        {reviews.map((review) => (
          <Link
            key={review.id}
            target="_blank"
            href={`https://www.sitejabber.com/reviews/paper24.com#${review.id}`}
            className="will-change-auto"
          >
            <div className="group flex snap-start snap-always flex-col rounded-[1.25rem] bg-white ~h-[15.313rem]/[24.063rem] ~min-h-[15.313rem]/[24.063rem] ~w-[21.25rem]/[27.5rem] ~min-w-[21.25rem]/[27.5rem] ~gap-2/8 ~px-6/8 ~pt-6/11 ~pb-[1rem]/[2rem] active:bg-violet md:hover:bg-violet">
              <div className="group-hower:text-light flex flex-row justify-between font-semibold ~gap-0/4 ~text-sm/base md:font-medium">
                <span className="text-black group-active:text-light md:group-hover:text-light">
                  {review.user}
                </span>
                <span className="text-[#7A78A8] group-active:text-light md:group-hover:text-light">
                  {review.date}
                </span>
              </div>

              <div className="flex flex-row gap-1">
                {[1, 2, 3, 4, 5].map((mark) => (
                  <IconStar
                    key={mark}
                    fill={mark <= review.rating ? "#FFAF07" : "#A7A5C9"}
                    width="28px"
                    height="28px"
                    className="~h-5/6 ~w-5/6"
                  />
                ))}
              </div>

              <div className="flex flex-col overflow-y-hidden text-black ~gap-0/4 group-active:text-light md:group-hover:text-light">
                <span className="font-semibold ~text-sm/lg md:font-semibold">
                  {review.title}
                </span>
                <span className="md:font-base h-max font-medium ~text-sm/base">
                  {review.description}
                </span>
              </div>

              <div className="mt-auto flex items-center justify-start text-black ~gap-1/2 ~text-xs/base group-active:text-light md:group-hover:text-light">
                Read more
                <svg
                  width="6"
                  height="14"
                  viewBox="0 0 6 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black group-active:text-light md:group-hover:text-light"
                >
                  <path
                    d="M5.41631 6.60007L0.856585 0.731123C0.780504 0.633147 0.679425 0.578491 0.574313 0.578491C0.4692 0.578491 0.368122 0.633147 0.29204 0.731123L0.287131 0.737754C0.25012 0.785251 0.22065 0.842422 0.200511 0.90579C0.180373 0.969158 0.169988 1.0374 0.169988 1.10636C0.169988 1.17532 0.180373 1.24356 0.200511 1.30693C0.22065 1.3703 0.25012 1.42747 0.287131 1.47496L4.58095 7.00128L0.28713 12.5254C0.25012 12.5729 0.220649 12.6301 0.200511 12.6934C0.180372 12.7568 0.169987 12.825 0.169987 12.894C0.169987 12.963 0.180372 13.0312 0.200511 13.0946C0.220649 13.1579 0.25012 13.2151 0.28713 13.2626L0.29204 13.2692C0.368121 13.3672 0.4692 13.4219 0.574312 13.4219C0.679424 13.4219 0.780504 13.3672 0.856585 13.2692L5.41631 7.40028C5.45641 7.34867 5.48834 7.28659 5.51015 7.21782C5.53196 7.14904 5.54321 7.075 5.54321 7.00018C5.54321 6.92535 5.53196 6.85131 5.51015 6.78253C5.48834 6.71376 5.45641 6.65168 5.41631 6.60007Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
