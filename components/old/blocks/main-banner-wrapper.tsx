import Link from "next/link";
import Image from "next/image";

interface MainBannerWrapperBlockProps {
  crmURL: string;
  title: string;
  description?: string;
  button?: boolean;
  buttonText?: string;
}

export default function MainBannerWrapperBlock({
  crmURL,
  title,
  description,
  button,
  buttonText = "Get help with my task",
}: MainBannerWrapperBlockProps) {
  return (
    <div className="main-banner-wr">
      <div className="mb-cont">
        <div className="title-50">{title}</div>
        {description ? (
          <>
            <div className="h-25"></div>
            <div className="text-16-stolzl">
              The online essay help that we deliver is always on point with
              student requests: error-free, accurate and structured.
            </div>
          </>
        ) : (
          <></>
        )}
        {button ? (
          <>
            <div className="h-25"></div>
            <Link
              href={`${crmURL}/create-order`}
              className="btn w-inline-block"
              data-amplitude="true"
              data-a-position="Body"
              data-a-cta="true"
            >
              <div>{buttonText}</div>
            </Link>
          </>
        ) : (
          <></>
        )}

        <div className="h-25"></div>
        <div className="pay-wr">
          <div className="text-14">Payment methods:</div>
          <div className="pay-logos-wr">
            <Image
              src="/images/old/maestro-img.webp"
              loading="lazy"
              width="40"
              height="26"
              alt=""
              className="pay-img"
            />
            <Image
              src="/images/old/visa-img.webp"
              loading="lazy"
              width="40"
              height="26"
              alt=""
              className="pay-img"
            />
            <Image
              src="/images/old/Apple-Pay.webp"
              loading="lazy"
              width="40"
              height="26"
              alt=""
              className="pay-img"
            />
            <Image
              src="/images/old/gpay.webp"
              loading="lazy"
              width="40"
              height="26"
              alt=""
              className="pay-img"
            />
          </div>
        </div>
      </div>
      <Image
        src="/images/old/papers-img.webp"
        loading="lazy"
        width="650"
        height="625"
        alt=""
        className="paper-img"
      />
    </div>
  );
}
