import { useEffect, useState } from "react";
import Image from "next/image";
import IconLogo from "@/components/icons/logo";
import YoutubeModal from "@/components/youtube-modal";

interface Video {
  id: string;
  thumbnail: string;
  src: string;
}

const videos: Video[] = [
  {
    id: "VC8-dnp7nLw",
    thumbnail: "/images/thumbs/VC8-dnp7nLw.webp",
    src: "https://www.youtube.com/embed/VC8-dnp7nLw?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0",
  },
  {
    id: "4dQqyipf6JY",
    thumbnail: "/images/thumbs/4dQqyipf6JY.webp",
    src: "https://www.youtube.com/embed/4dQqyipf6JY?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0",
  },
  {
    id: "ehHqKxTtQQk",
    thumbnail: "/images/thumbs/ehHqKxTtQQk.webp",
    src: "https://www.youtube.com/embed/ehHqKxTtQQk?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0",
  },
];

interface SectionAdvantagesProps {
  crmURL: string;
}

export default function SectionAdvantages({ crmURL }: SectionAdvantagesProps) {
  const [isYoutubeModalOpen, setYoutubeModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const handleYoutubeModalOpen = () => {
    setYoutubeModalOpen(true);
  };

  const handleYoutubeModalClose = () => {
    setVideoSrc("");
    setYoutubeModalOpen(false);
  };

  function openYoutubeModal(src: string) {
    setVideoSrc(src);
    handleYoutubeModalOpen();
  }

  // Scroll to start rotated scroll
  useEffect(() => {
    const scrollable = document.getElementById("scrollable");
    if (scrollable) {
      scrollable.scrollLeft = scrollable.scrollWidth;
    }
  }, []);

  return (
    <article
      id="advantages"
      className="container flex w-full flex-col items-center justify-start bg-light ~px-3/0 ~py-[7.5rem]/[13.75rem] md:gap-8"
    >
      <div className="flex w-full flex-col items-stretch justify-start ~gap-10/20">
        <div className="flex flex-col items-start justify-start gap-7 md:items-center">
          <span
            className={`font-poppins font-semibold text-violet ~text-4xl/6xl`}
          >
            Undetectable
            <br className="md:hidden" />
            <span className="text-black"> by professors</span>
          </span>
          <span className="text-left font-bold text-black ~text-sm/xl md:text-center">
            We did an experiment and asked several professors if they
            <br className="hidden md:inline" />
            could recognize an essay from Paper24 - results in video.
          </span>
        </div>

        <table className="table-fixed md:w-full">
          <thead>
            <tr className="w-full ~h-11/20">
              <th className="w-[57%] rounded-l-[1.25rem] bg-white pl-3 text-left">
                <span className="font-semibold ~text-base/xl">Features</span>
              </th>
              <th className="bg-white text-center ~w-16/[30rem]">
                <IconLogo
                  fill="#1F2127"
                  height="2rem"
                  width="100%"
                  className="inline w-auto ~h-5/[2rem]"
                />
              </th>
              <th className="rounded-r-[1.25rem] bg-white text-center ~w-16/[34rem]">
                <span className="font-semibold ~text-base/xl">
                  AI <span className="hidden md:inline">writing</span> tools
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="w-full ~h-16/20">
              <td className="rounded-l-[1.25rem] pl-3 text-left ~text-base/lg">
                <span className="w-full">
                  Decode your professor&apos;s vague instructions
                </span>
              </td>
              <td className="text-center ~w-16/28">
                <Image
                  src="/images/icons/check-fill.svg"
                  height="24"
                  width="24"
                  alt="Checked"
                  className="md:6 inline size-[18px]"
                />
              </td>
              <td className="text-center">
                <Image
                  src="/images/icons/cross-fill.svg"
                  height="24"
                  width="24"
                  alt="Unchecked"
                  className="md:6 inline size-[18px]"
                />
              </td>
            </tr>
            <tr className="w-full ~h-16/20">
              <td className="rounded-l-[1.25rem] bg-white pl-3 text-left ~text-base/lg">
                Written by humans, for humans
              </td>
              <td className="w-28 bg-white text-center">
                <Image
                  src="/images/icons/check-fill.svg"
                  height="24"
                  width="24"
                  alt="Checked"
                  className="md:6 inline size-[18px]"
                />
              </td>
              <td className="rounded-r-[1.25rem] bg-white text-center">
                <Image
                  src="/images/icons/cross-fill.svg"
                  height="24"
                  width="24"
                  alt="Unchecked"
                  className="md:6 inline size-[18px]"
                />
              </td>
            </tr>
            <tr className="w-full ~h-16/20">
              <td className="rounded-l-[1.25rem] pl-3 text-left ~text-base/lg">
                Plagiarism-free content
              </td>
              <td className="w-28 text-center">
                <Image
                  src="/images/icons/check-fill.svg"
                  height="24"
                  width="24"
                  alt="Checked"
                  className="md:6 inline size-[18px]"
                />
              </td>
              <td className="text-center">
                <Image
                  src="/images/icons/cross-fill.svg"
                  height="24"
                  width="24"
                  alt="Unchecked"
                  className="md:6 inline size-[18px]"
                />
              </td>
            </tr>
            <tr className="w-full ~h-16/20">
              <td className="rounded-l-[1.25rem] bg-white pl-3 text-left ~text-base/lg">
                Free originality report
              </td>
              <td className="w-28 bg-white text-center">
                <Image
                  src="/images/icons/check-fill.svg"
                  height="24"
                  width="24"
                  alt="Checked"
                  className="md:6 inline size-[18px]"
                />
              </td>
              <td className="rounded-r-[1.25rem] bg-white text-center">
                <Image
                  src="/images/icons/cross-fill.svg"
                  height="24"
                  width="24"
                  alt="Unchecked"
                  className="md:6 inline size-[18px]"
                />
              </td>
            </tr>
            <tr className="w-full ~h-16/20">
              <td className="rounded-l-[1.25rem] pl-3 text-left ~text-base/lg">
                Post-Submission Support
              </td>
              <td className="w-28 text-center">
                <Image
                  src="/images/icons/check-fill.svg"
                  height="24"
                  width="24"
                  alt="Checked"
                  className="md:6 inline size-[18px]"
                />
              </td>
              <td className="text-center">
                <Image
                  src="/images/icons/cross-fill.svg"
                  height="24"
                  width="24"
                  alt="Unchecked"
                  className="md:6 inline size-[18px]"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex w-full flex-col items-center justify-start rounded-[1.25rem] bg-white ~gap-3/10 ~p-0/10 md:flex-row md:items-start">
        {videos.map((video, index) => (
          <div
            key={index}
            role="button"
            tabIndex={-1}
            onKeyUp={() => {}}
            className={`group flex max-w-full cursor-pointer flex-col items-center justify-center rounded-[1.25rem] bg-cover ~h-[30rem]/[35rem] ~w-[22.5rem]/[30rem] active:bg-white active:text-violet md:max-w-none md:hover:bg-white md:hover:text-violet`}
            style={{
              backgroundImage: `url('${video.thumbnail}')`,
            }}
            onClick={() => openYoutubeModal(video.src)}
          >
            <div className="relative left-4 z-[2] w-max self-start rounded-full bg-white p-2.5 text-base font-medium text-black ~top-[-10rem]/[-12.5rem] md:w-auto">
              Undetectable
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
            >
              <circle
                cx="36"
                cy="36"
                r="36"
                fill="#ffffff33"
                className="group-active:fill-white md:group-hover:fill-white"
              />
              <path
                d="M48 36L30 46.3923L30 25.6077L48 36Z"
                fill="currentColor"
              />
            </svg>
          </div>
        ))}
      </div>

      <YoutubeModal
        crmURL={crmURL}
        isOpen={isYoutubeModalOpen}
        onClose={handleYoutubeModalClose}
        src={videoSrc}
      ></YoutubeModal>
    </article>
  );
}
