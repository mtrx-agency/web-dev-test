import Image from "next/image";
import Link from "next/link";
import IconStar from "@/components/icons/star";
import IconCheckShield from "@/components/icons/check-shield";
import { Experts } from "@/data/experts";

export default function SectionExperts() {
  return (
    <div className="bg-white">
      <article
        id="experts"
        className="container flex flex-col items-center justify-start ~gap-10/20 ~px-3/0 ~py-[7.5rem]/[13.75rem]"
      >
        <div className="flex flex-col items-center justify-start ~gap-5/7">
          <span className={`font-poppins font-semibold ~text-4xl/6xl`}>
            Our top <span className="text-violet">experts</span>
          </span>

          <span className="font-medium text-[#1F2127] ~leading-[1.25rem]/[1.5rem] ~text-[1rem]/[1.125rem]">
            Browse profiles of our experts to find the perfect match for your
            project needs.
          </span>

          <div className="divide-x-solid flex w-[100%] flex-row divide-x divide-black md:justify-center">
            <div className="flex flex-row gap-1 ~pr-1/4">
              <span className="font-bold ~text-xs/xl">4.9/5</span>
              <span className="font-normal ~text-xs/xl md:font-medium">
                Average expert rating
              </span>
            </div>
            <div className="flex flex-row gap-1 ~pl-1/4">
              <span className="font-bold ~text-xs/xl">150k+</span>
              <span className="font-normal ~text-xs/xl md:font-medium">
                Topics covered
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center rounded-xl bg-violet ~gap-[0.417rem]/2 ~px-[0.542rem]/[0.917rem] ~py-[0.375rem]/[0.917rem]">
            <Image
              src="/images/icons/info.svg"
              height="32"
              width="32"
              alt="Info"
              className="~h-7/[1.667rem] ~w-7/[1.667rem]"
            />
            <span className="font-normal leading-[1.13rem] text-light ~text-sm/base">
              We ensure the anonymity of our experts to protect their
              identities, just as we safeguard your privacy.
            </span>
          </div>
        </div>

        <div className="flex flex-col content-start items-start justify-center gap-5 md:flex-row md:flex-wrap">
          {Experts.filter((e) =>
            [
              "chris-t",
              "christopher-m",
              "diana-s",
              "ivy-b",
              "ramy-t",
              "tommy-o",
            ].includes(e.slug),
          ).map((expert, index) => (
            <div
              key={expert.slug}
              className={`max-w-[100vw] flex-col items-start rounded-[1.25rem] bg-light ~w-[25.5rem]/[31.165rem] ~gap-[2.81rem]/[4.5rem] ~p-5/8 md:h-[35rem] md:max-w-none ${index > 2 ? "hidden md:flex" : "flex"}`}
            >
              <div className="flex w-full flex-col items-start ~gap-7/10">
                <div className="flex flex-row items-center justify-start ~gap-4/7">
                  <div className="h-[5.625rem] w-[5.625rem] select-none rounded-full bg-[#FFD6D6]">
                    <Image
                      src={expert.avatar}
                      alt={expert.name}
                      width="90"
                      height="90"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col items-start justify-start gap-4">
                    <span className="font-semibold ~text-sm/lg md:font-medium">
                      {expert.name}
                    </span>
                    <div className="flex flex-row items-center ~gap-[0.38rem]/1">
                      <IconStar
                        fill="#FFC041"
                        height="0.875rem"
                        width="0.875rem"
                      />
                      <span className="font-semibold ~text-xs/sm md:font-medium">
                        {expert.rating}/5
                      </span>
                      <span className="font-semibold text-[#A7A5C9] ~text-xs/sm md:font-medium">
                        average rating
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex w-5/6 flex-row flex-wrap items-center justify-start gap-x-2 gap-y-2.5 md:min-h-[82px]">
                  {expert.subjects!.map((subject) => (
                    <span
                      key={subject.name}
                      className="rounded-full border border-solid border-[#D7D7E1] bg-transparent px-3 font-medium ~py-[0.469rem]/[0.563rem] ~text-xs/base md:leading-4"
                    >
                      {subject.name}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col justify-center gap-3">
                  <div className="flex flex-row items-center gap-4">
                    <div className="flex flex-row items-center gap-1">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
                          fill="#58C58B"
                        />
                      </svg>
                      <span className="font-normal ~text-sm/lg">
                        Completed orders
                      </span>
                      <span className="font-semibold ~text-sm/lg md:font-medium">
                        {expert.completedOrders}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center gap-1">
                    <IconCheckShield
                      fill="#8466FF"
                      height="24"
                      width="24"
                      className="select-none"
                    />
                    <span className="font-normal ~text-sm/lg">
                      Success Rate
                    </span>
                    <span className="font-semibold ~text-sm/lg md:font-medium">
                      {expert.successRate}%
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href={`/experts/${expert.slug}`}
                className="flex w-full items-center justify-center rounded-full border border-solid border-black bg-transparent font-medium text-black ~h-12/[3.75rem] ~text-sm/base active:bg-black active:text-light md:px-8 md:py-6 md:hover:bg-black md:hover:text-light"
              >
                View expert
              </Link>
            </div>
          ))}
        </div>

        <div>
          <Link
            href="/experts"
            className="font-bold text-violet underline active:bg-transparent active:text-black md:rounded-full md:bg-violet md:px-[2.813rem] md:py-[1.563rem] md:font-medium md:text-white md:no-underline md:hover:bg-black md:hover:text-white"
          >
            <span className="hidden md:inline">View all experts</span>
            <span className="inline md:hidden">More experts</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
