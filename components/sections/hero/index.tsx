import Image from "next/image";
import Link from "next/link";
import SubjectModal, { Subject } from "@/components/subject-modal";
import IconStar from "@/components/icons/star";
import { useEffect, useMemo, useState } from "react";
import { ReviewRating } from "@/data/reviews";

interface RatingButton {
  name: string;
  imageSrc: string;
  rating: string;
}

const ratingButtons: RatingButton[] = [
  {
    name: "Sitejabber",
    imageSrc: "/images/sitejabber.webp",
    rating: `${ReviewRating.Sitejabber}`,
  },
  {
    name: "Google",
    imageSrc: "/images/google.webp",
    rating: `${ReviewRating.Google}`,
  },
  {
    name: "Reviews.io",
    imageSrc: "/images/reviewsio.webp",
    rating: `${ReviewRating.ReviewsIo}`,
  },
];

interface SectionHeroProps {
  crmURL: string;
}

export default function SectionHero({ crmURL }: SectionHeroProps) {
  const emptySubject = {
    id: "",
    name: "",
  };

  const now = useMemo(() => new Date(), []);

  const [selectedSubject, setSelectedSubject] = useState<Subject>(emptySubject);
  const [isSubjectModalOpen, setSubjectModalOpen] = useState(false);
  const [currentPapersWritten, setCurrentPapersWritten] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (now.getHours() > 0 || now.getMinutes() > 0) {
        return setCurrentPapersWritten(
          Math.round(10 + (now.getHours() * 60 + now.getMinutes()) / 7),
        );
      } else {
        return setCurrentPapersWritten(0);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [now]);

  const handleSubjectModalSelect = (data: Subject): void => {
    setSelectedSubject(data);
    handleSubjectModalClose();
  };

  const handleSubjectModalOpen = () => {
    setSubjectModalOpen(true);
  };

  const handleSubjectModalClose = () => {
    setSubjectModalOpen(false);
  };

  function openSubjectModal() {
    handleSubjectModalOpen();
  }

  return (
    <article
      id="home"
      className="container flex flex-row items-end justify-between pt-[12.938rem] ~px-[0.813rem]/0 ~pb-[5.375rem]/[17rem] md:pt-[3.625rem]"
    >
      <div className="flex flex-col items-start justify-start ~gap-10/[3.75rem]">
        <div className="flex flex-row items-center gap-2 font-medium text-black">
          <span className="inline-block size-3 animate-ping select-none rounded-full bg-[#00C75E] ~text-base/xl">
            &nbsp;
          </span>{" "}
          {currentPapersWritten === 0 ? "" : currentPapersWritten} papers
          written today
        </div>

        <div className="flex flex-col ~gap-8/7">
          <h1 className={`font-poppins font-semibold ~text-3xl/7xl`}>
            Academic
            <span className={`font-poppins text-violet`}> paper help</span>
            <br />
            for every student
          </h1>

          <span className="text-black ~text-sm/lg">
            Hire an expert for your paper. Right here. Right now.
          </span>
        </div>

        <div
          role="button"
          tabIndex={-1}
          onKeyUp={() => {}}
          className="flex w-full cursor-pointer flex-row items-center justify-between rounded-full border border-solid border-[#D7D7E1] py-1 pr-1 ~pl-3/5 active:border-black md:w-[33rem] md:hover:border-black"
          onClick={openSubjectModal}
        >
          <div
            id="ts-subject"
            className="flex items-center font-normal ~gap-[0.675rem]/1.5 ~text-sm/base md:font-medium"
          >
            <Image
              src="/images/icons/list-bold.svg"
              alt={selectedSubject.name != "" ? selectedSubject.name : "List"}
              width="24"
              height="24"
            />
            {selectedSubject.name != ""
              ? selectedSubject.name
              : "Choose your subject"}
          </div>

          <Link
            data-amplitude="true"
            data-a-position="Hero"
            data-a-cta="true"
            href={{
              pathname: `${crmURL}/create-order`,
              query: { subject: selectedSubject.name },
            }}
            className="z-10 rounded-full bg-violet text-white ~px-[1.5rem]/[2.188rem] ~py-[1.25rem]/[1.375rem] ~text-sm/base active:bg-black md:hover:bg-black"
          >
            Get help
          </Link>

          <SubjectModal
            selected={selectedSubject}
            isOpen={isSubjectModalOpen}
            onSelect={handleSubjectModalSelect}
            onClose={handleSubjectModalClose}
          />
        </div>

        <div className="me-0 flex flex-row flex-wrap justify-start ~gap-3/4 md:flex-nowrap">
          {ratingButtons.map((ratingButton) => (
            <div
              key={ratingButton.name}
              className="flex items-center justify-center rounded-full border border-solid border-[#D7D7E1] ~px-4/6 ~py-3/[0.875rem]"
            >
              <div className="flex flex-row items-center justify-start gap-[0.563rem]">
                <Image
                  src={ratingButton.imageSrc}
                  alt={ratingButton.name}
                  height="24"
                  width="24"
                  className="h-6 w-6"
                />
                <div className="flex flex-row items-center gap-1 font-normal text-black ~text-sm/base md:font-medium">
                  <span>{ratingButton.name}</span>
                  <span>{ratingButton.rating}</span>
                  <IconStar fill="#FFAE0A" height="16" width="16" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Image
        src="/images/hero.webp"
        width="649"
        height="800"
        alt="Hero"
        loading="lazy"
        className="hidden w-auto ~h-0/[50rem] lg:block"
      />
    </article>
  );
}
