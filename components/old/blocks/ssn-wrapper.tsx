import Image from "next/image";

interface SsnWrapperBlockProps {
  item1Title?: string;
  item1Description?: string;
  item1Icon?: string;
  item2Title?: string;
  item2Description?: string;
  item2Icon?: string;
  item3Title?: string;
  item3Description?: string;
  item3Icon?: string;
  item4Title?: string;
  item4Description?: string;
  item4Icon?: string;
}

export default function SsnWrapperBlock({
  item1Title = "2 days",
  item1Description = "Average delivery time",
  item1Icon = "/images/old/16-express.svg",
  item2Title = "1.5%",
  item2Description = "Refund rate",
  item2Icon = "/images/old/rate-icon-3.svg",
  item3Title = "50+",
  item3Description = "Leading experts",
  item3Icon = "/images/old/guru.svg",
  item4Title = "96%",
  item4Description = "Satisfaction rate",
  item4Icon = "/images/old/star.svg",
}: SsnWrapperBlockProps) {
  return (
    <div className="ssn-wr">
      <div className="ssn-1">
        <div
          className="title-60-400"
          dangerouslySetInnerHTML={{
            __html: item1Title,
          }}
        ></div>
        <div className="h-10"></div>
        <div
          className="text-16"
          dangerouslySetInnerHTML={{
            __html: item1Description,
          }}
        ></div>
        <div className="h-25"></div>
        <div className="cyn-icon-div">
          <Image
            src={item1Icon}
            loading="lazy"
            width="20"
            height="20"
            alt=""
            className="cyn-icon"
          />
        </div>
      </div>
      <div className="ssn-2">
        <div className="cyn-item">
          <div
            className="title-60-400"
            dangerouslySetInnerHTML={{
              __html: item2Title,
            }}
          ></div>
          <div className="h-10"></div>
          <div
            className="text-16"
            dangerouslySetInnerHTML={{
              __html: item2Description,
            }}
          ></div>
          <div className="h-25"></div>
          <div className="cyn-icon-div">
            <Image
              src={item2Icon}
              loading="lazy"
              width="20"
              height="20"
              alt=""
              className="cyn-icon"
            />
          </div>
        </div>
        <div className="cyn-item">
          <div
            className="title-60-400"
            dangerouslySetInnerHTML={{
              __html: item3Title,
            }}
          ></div>
          <div className="h-10"></div>
          <div
            className="text-16"
            dangerouslySetInnerHTML={{
              __html: item3Description,
            }}
          ></div>
          <div className="h-25"></div>
          <div className="cyn-icon-div">
            <Image
              src={item3Icon}
              loading="lazy"
              width="20"
              height="20"
              alt=""
              className="cyn-icon"
            />
          </div>
        </div>
        <div className="cyn-item">
          <div
            className="title-60-400"
            dangerouslySetInnerHTML={{
              __html: item4Title,
            }}
          ></div>
          <div className="h-10"></div>
          <div
            className="text-16"
            dangerouslySetInnerHTML={{
              __html: item4Description,
            }}
          ></div>
          <div className="h-25"></div>
          <div className="cyn-icon-div">
            <Image
              src={item4Icon}
              loading="lazy"
              width="20"
              height="20"
              alt=""
              className="cyn-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
