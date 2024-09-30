import Image from "next/image";

interface FqBannerBlockProps {
  customClass?: string;
}

export default function FqBannerBlock({ customClass }: FqBannerBlockProps) {
  return (
    <div className={customClass ? customClass : "fq-banner"}>
      <Image
        src="/images/old/faq-img.webp"
        loading="lazy"
        width="138"
        height="128"
        alt=""
        className="fq-banner-img"
      />
      <div className="fq-banner-title">Need help choosing an Expert?</div>
      <div className="fq-banner-subtitle">
        Let us help you find the perfect match based on your requirements.
      </div>
      <div className="fq-banner-btn">
        <button
          type="button"
          className="puple-btn full w-inline-block"
          data-name="Intercom"
        >
          <div className="purple-btn-text">Get help</div>
        </button>
      </div>
    </div>
  );
}
