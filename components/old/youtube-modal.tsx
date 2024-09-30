import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useEffect } from "react";

interface YoutubeModalModalProps {
  crmURL: string;
  data: null | string;
  setData: React.Dispatch<SetStateAction<string | null>>;
}

export default function YoutubeModalModal({
  crmURL,
  setData,
  data,
}: YoutubeModalModalProps) {
  useEffect(() => {
    document.addEventListener("click", (e: MouseEvent) => {
      const btn = e.target as HTMLElement;

      if (!btn) {
        return;
      }

      if (
        btn.classList.contains("vp-close-div") ||
        btn.classList.contains("close-pop-bg") ||
        btn.classList.contains("vp-close-icon")
      ) {
        const video = document.getElementById(
          "video-iframe",
        ) as HTMLVideoElement;
        video.src = "";
        setData(null);
      }
    });
  });

  return (
    <>
      <div
        id="yt-popup"
        className="popup-video-wr"
        style={
          data
            ? { display: "flex", opacity: 1 }
            : { display: "none", opacity: 0 }
        }
      >
        <div className="close-pop-bg"></div>
        <div className="video-pop-wr">
          <div id="yt-iframe" className="vp-yu-frame w-embed w-iframe">
            <iframe
              id="video-iframe"
              width="100%"
              height="100%"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
          </div>
          <div className="vp-cont-col">
            <div className="title-36-500 mob-24">
              Place an order and receive{" "}
              <span className="span-white-stripe">an original</span>
              <span className="span-white-stripe">paper</span> for your
              assignment!
            </div>
            <div className="pop-cont">
              <div className="h-30"></div>
              <div className="vp-list-wr">
                <div className="vp-list">
                  <div className="vp-list-item">
                    <Image
                      src="/images/old/baks.svg"
                      loading="lazy"
                      width="24"
                      height="24"
                      alt=""
                      className="vp-list-icon"
                    />
                    <div className="text-13">Money-back guarantee</div>
                  </div>
                  <div className="vp-list-item">
                    <Image
                      src="/images/old/vp-list-icon.svg"
                      loading="lazy"
                      width="24"
                      height="24"
                      alt=""
                      className="vp-list-icon"
                    />
                    <div className="text-13">Free revisions</div>
                  </div>
                  <div className="vp-list-item">
                    <Image
                      src="/images/old/vp-list-icon-1.svg"
                      loading="lazy"
                      width="24"
                      height="24"
                      alt=""
                      className="vp-list-icon"
                    />
                    <div className="text-13">Quality check</div>
                  </div>
                  <div className="vp-list-item">
                    <Image
                      src="/images/old/vp-list-icon-2.svg"
                      loading="lazy"
                      width="24"
                      height="24"
                      alt=""
                      className="vp-list-icon"
                    />
                    <div className="text-13">
                      Free title page &amp; References
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-65"></div>
            </div>
            <Link
              data-amplitude="true"
              data-a-position="Body"
              data-a-cta="true"
              href={`${crmURL}/create-order`}
              className="btn-hero-blink w-inline-block"
            >
              <div
                className="blink-border-1"
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              ></div>
              <div
                className="blink-border-2"
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1.06729, 1.19226, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              ></div>
              <div
                className="blink-border-3"
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1.03229, 1.09226, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              ></div>
              <Image
                src="/images/old/write-icon.png"
                loading="lazy"
                width="96"
                height="96"
                alt=""
                className="button-icon"
              />
              <div>Place an Order</div>
            </Link>
          </div>
          <div className="vp-close-div">
            <Image
              src="/images/old/vp-close-cross.svg"
              loading="lazy"
              width="32"
              height="32"
              alt=""
              className="vp-close-icon"
            />
            <Image
              src="/images/old/close-mob.svg"
              loading="lazy"
              width="32"
              height="32"
              alt=""
              className="vp-close-icon mob"
            />
          </div>
        </div>
      </div>
    </>
  );
}
