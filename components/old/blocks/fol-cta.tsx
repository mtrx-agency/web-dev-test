import Link from "next/link";
import Image from "next/image";

// TODO: Implement dynamic config for social links
export default function FolCtaBlock() {
  return (
    <div className="fol-cta">
      <div className="fol-img-wrap">
        <Image
          src="/images/old/device.png"
          loading="lazy"
          width="310"
          height="321"
          alt=""
          className="fol-img"
        />
      </div>
      <div className="fol-info">
        <div className="fol-texts">
          <div className="fol-title">Follow us</div>
          <div className="h-20"></div>
          <div className="fol-subtitle">
            Stay informed and save with our latest news and discounts by
            following us on social media!
          </div>
        </div>
        <div className="fol-btns">
          <Link
            href="https://www.tiktok.com/@paper24com"
            target="_blank"
            className="fol-btn w-inline-block"
          >
            <Image
              src="/images/old/tiktok.svg"
              loading="lazy"
              width="108"
              height="33"
              alt=""
              className="fol-btn-icon tiktok"
            />
          </Link>
          <Link
            href="https://www.instagram.com/paper24_com/"
            target="_blank"
            className="fol-btn w-inline-block"
          >
            <Image
              src="/images/old/instagram.svg"
              loading="lazy"
              width="149"
              height="41"
              alt=""
              className="fol-btn-icon instagram"
            />
          </Link>
          <Link
            href="https://www.reddit.com/r/Paper_24/"
            target="_blank"
            className="fol-btn w-inline-block"
          >
            <Image
              src="/images/old/reddit.svg"
              loading="lazy"
              width="117"
              height="39"
              alt=""
              className="fol-btn-icon reddit"
            />
          </Link>
          <Link
            href="https://www.youtube.com/@paper24official"
            target="_blank"
            className="fol-btn w-inline-block"
          >
            <Image
              src="/images/old/youtube.svg"
              loading="lazy"
              width="121"
              height="28"
              alt=""
              className="fol-btn-icon youtube"
            />
          </Link>
        </div>
      </div>
      <Image
        src="/images/old/bg.svg"
        loading="lazy"
        width="709"
        height="381"
        alt=""
        className="fol-bg"
      />
    </div>
  );
}
