import Image from "next/image";
import { useState } from "react";

interface PttWrBlockProps {
  tap1LTitle: string;
  tap1LDescription: string;
  tap2LTitle: string;
  tap2LDescription: string;
  tap1RTitle: string;
  tap1RDescription: string;
  tap2RTitle: string;
  tap2RDescription: string;
}

export default function PttWrBlock({
  tap1LTitle,
  tap1LDescription,
  tap2LTitle,
  tap2LDescription,
  tap1RTitle,
  tap1RDescription,
  tap2RTitle,
  tap2RDescription,
}: PttWrBlockProps) {
  //TODO add to pttblock props img links for w-tab

  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="ptt-wr">
      <div
        data-easing="ease"
        data-duration-in="300"
        data-duration-out="100"
        className="ptt-tabs w-tabs"
      >
        <div className="pttt-menu w-tab-menu">
          <button
            onClick={() => setActiveTab(1)}
            className={`pttt-link new w-inline-block w-tab-link ${activeTab === 1 && "w--current"}`}
          >
            <div className="ptt-icon-div">
              <Image
                width="26"
                height="26"
                alt=""
                src="/images/old/зее-1.svg"
                loading="lazy"
                className="pttt-icon"
              />
            </div>
            <div className="h-20"></div>
            <div
              className="title-24-500"
              dangerouslySetInnerHTML={{
                __html: tap1LTitle,
              }}
            ></div>
            <div className="h-15"></div>
            <div
              className="text-14"
              dangerouslySetInnerHTML={{
                __html: tap1LDescription,
              }}
            ></div>
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`pttt-link new w-inline-block w-tab-link ${activeTab === 2 && "w--current"}`}
          >
            <div className="ptt-icon-div">
              <Image
                width="26"
                height="26"
                alt=""
                src="/images/old/galka.webp"
                loading="lazy"
                className="pttt-icon"
              />
            </div>
            <div className="h-20"></div>
            <div
              className="title-24-500"
              dangerouslySetInnerHTML={{
                __html: tap1RTitle,
              }}
            ></div>
            <div className="h-15"></div>
            <div
              className="text-14"
              dangerouslySetInnerHTML={{
                __html: tap1RDescription,
              }}
            ></div>
          </button>
          <button
            onClick={() => setActiveTab(3)}
            className={`pttt-link new w-inline-block w-tab-link ${activeTab === 3 && "w--current"}`}
          >
            <div className="ptt-icon-div">
              <Image
                width="26"
                height="26"
                alt=""
                src="/images/old/зее-2.svg"
                loading="lazy"
                className="pttt-icon"
              />
            </div>
            <div className="h-20"></div>
            <div
              className="title-24-500"
              dangerouslySetInnerHTML={{
                __html: tap2LTitle,
              }}
            ></div>
            <div className="h-15"></div>
            <div
              className="text-14"
              dangerouslySetInnerHTML={{
                __html: tap2LDescription,
              }}
            ></div>
          </button>
          <button
            onClick={() => setActiveTab(4)}
            className={`pttt-link new w-inline-block w-tab-link ${activeTab === 4 && "w--current"}`}
          >
            <div className="ptt-icon-div">
              <Image
                width="26"
                height="26"
                alt=""
                src="/images/old/зее-3.svg"
                loading="lazy"
                className="pttt-icon"
              />
            </div>
            <div className="h-20"></div>
            <div
              className="title-24-500"
              dangerouslySetInnerHTML={{
                __html: tap2RTitle,
              }}
            ></div>
            <div className="h-15"></div>
            <div
              className="text-14"
              dangerouslySetInnerHTML={{
                __html: tap2RDescription,
              }}
            ></div>
          </button>
        </div>
        <div className="pttt-content w-tab-content">
          <div
            className={`pttt-pane w-tab-pane ${activeTab === 1 && "w--tab-active"}`}
          >
            <div className="pttt-img-div">
              <Image
                width="500"
                height="500"
                alt=""
                src="/images/old/tab-1-m.webp"
                loading="lazy"
                data-srcset="/images/old/tab-1-m-p-500.png 500w, images/tab-1-m-p-800.png 800w, images/tab-1-m-p-1080.png 1080w, images/tab-1-m.webp 1616w"
                sizes="(max-width: 991px) 100vw, 30vw"
                className="pttt-img"
              />
            </div>
          </div>
          <div
            className={`pttt-pane w-tab-pane ${activeTab === 2 && "w--tab-active"}`}
          >
            <div className="pttt-img-div">
              <Image
                width="500"
                height="500"
                alt=""
                src="/images/old/tab-4-m.webp"
                loading="lazy"
                data-srcset="/images/old/tab-4-m-p-500.png 500w, images/tab-4-m-p-800.png 800w, images/tab-4-m-p-1080.png 1080w, images/tab-4-m.webp 1616w"
                sizes="(max-width: 991px) 100vw, 30vw"
                className="pttt-img"
              />
            </div>
          </div>
          <div
            className={`pttt-pane w-tab-pane ${activeTab === 3 && "w--tab-active"}`}
          >
            <div className="pttt-img-div">
              <Image
                width="500"
                height="500"
                alt=""
                src="/images/old/tab-2-m.webp"
                loading="lazy"
                data-srcset="/images/old/tab-2-m-p-500.png 500w, images/tab-2-m-p-800.png 800w, images/tab-2-m-p-1080.png 1080w, images/tab-2-m.webp 1616w"
                sizes="(max-width: 991px) 100vw, 30vw"
                className="pttt-img"
              />
            </div>
          </div>
          <div
            className={`pttt-pane w-tab-pane ${activeTab === 4 && "w--tab-active"}`}
          >
            <div className="pttt-img-div">
              <Image
                width="500"
                height="500"
                alt=""
                src="/images/old/sample-11.png"
                loading="lazy"
                data-srcset="/images/old/sample-11-p-500.png 500w, images/sample-11.png 849w"
                sizes="(max-width: 991px) 100vw, 30vw"
                className="pttt-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
