import { Fragment, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import "@/styles/youtube-modal.css";
import Image from "next/image";

interface YoutubeModalProps {
  crmURL: string;
  isOpen: boolean;
  onClose?: () => void;
  src: string;
}

export default function YoutubeModal({
  crmURL,
  isOpen,
  onClose,
  src,
}: YoutubeModalProps) {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const [videoSrc, setVideoSrc] = useState(src);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setVideoSrc(src);
  }, [src]);

  function closeModal() {
    if (onClose) {
      onClose();
    }

    stopYTPlay();
    setModalOpen(false);
  }

  function stopYTPlay() {
    setVideoSrc("");
  }

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <div className="popup-video-wr">
        <div
          role="button"
          tabIndex={-1}
          onKeyUp={() => {}}
          className="t-0 r-0 b-0 l-0 absolute h-full w-full"
          onClick={closeModal}
        ></div>
        <div className="video-pop-wr py-10vh relative flex h-[80vh] w-full flex-col-reverse rounded-[1.67rem] bg-light ~gap-5/10 ~px-[1.5rem]/4 md:flex-row xl:w-auto">
          <div className="w-embed mx-auto my-auto h-full max-w-full overflow-hidden rounded-[1.11rem] ~w-[20rem]/[30.76rem] ~py-2/5">
            <iframe
              width="100%"
              height="100%"
              title="YouTube video player"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen={true}
              src={videoSrc}
              className="border-0"
            ></iframe>
            {/* Faster player */}
            {/*<YouTubeEmbed*/}
            {/*  style="width: 100%, height: 100%"*/}
            {/*  videoid={videoSrc}*/}
            {/*  params="rel=0&controls=1&autoplay=0&mute=0&start=0"*/}
            {/*/>*/}
          </div>
          <div className="flex flex-col items-start justify-center text-[#0a1330] ~gap-5/[2.08rem] ~pt-8/5 md:w-[25.69rem]">
            <div className="~text-xl/3xl">
              Place an order and receive{" "}
              <span className="rounded-[.97rem] py-[.1rem] text-[#4e43df]">
                an original paper
              </span>{" "}
              for your assignment!
            </div>
            <div className="hidden md:flex">
              <div className="vp-list-wr">
                <div className="vp-list">
                  <div className="vp-list-item">
                    <Image
                      src="/images/icons/baks.svg"
                      loading="lazy"
                      width="24"
                      height="24"
                      alt=""
                      className="size-[1.67rem]"
                    />
                    <div className="~text-[1.1rem]/[0.9rem]">
                      Money-back guarantee
                    </div>
                  </div>
                  <div className="vp-list-item">
                    <Image
                      src="/images/icons/vp-list-icon.svg"
                      loading="lazy"
                      width="24"
                      height="24"
                      alt=""
                      className="size-[1.67rem]"
                    />
                    <div className="~text-[1.1rem]/[0.9rem]">
                      Free revisions
                    </div>
                  </div>
                  <div className="vp-list-item">
                    <Image
                      src="/images/icons/vp-list-icon-1.svg"
                      loading="lazy"
                      width="24"
                      height="24"
                      alt=""
                      className="size-[1.67rem]"
                    />
                    <div className="~text-[1.1rem]/[0.9rem]">Quality check</div>
                  </div>
                  <div className="vp-list-item">
                    <Image
                      src="/images/icons/vp-list-icon-2.svg"
                      loading="lazy"
                      width="24"
                      height="24"
                      alt=""
                      className="size-[1.67rem]"
                    />
                    <div className="text-[1.1rem] md:text-[.9rem]">
                      Free title page &amp; References
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[4.51rem] w-full"></div>
            </div>
            <Link
              data-amplitude="true"
              data-a-position="Body"
              data-a-cta="true"
              href={`${crmURL}/create-order`}
              className="flex h-12 w-full items-center justify-center rounded-full bg-violet px-[2.813rem] py-[1.563rem] font-medium text-white ~text-sm/base active:bg-black md:h-auto md:w-auto md:hover:bg-black"
            >
              Get help
            </Link>
          </div>

          <button
            type="button"
            className="absolute right-2 top-2 flex size-8 items-center justify-center border-transparent text-violet focus:outline-none"
            onClick={closeModal}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 1.5L1.5 14.5M1.5 1.5L14.5 14.5"
                stroke="#8466FF"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  );
}
