import Image from "next/image";

export default function FAQBannerBlock() {
  return (
    <div className="faq-banner">
      <div className="title-50">Still have questions?</div>
      <div className="h-15"></div>
      <div className="faq-b-desc-div">
        <div className="text-16">
          Our customer support team is available to help you 24/7.
        </div>
      </div>
      <div className="h-20"></div>
      <button type="button" className="w-inline-block" data-name="Intercom">
        <div className="btn-white">
          <div>Ask a question</div>
        </div>
      </button>
      <div className="h-35"></div>
      <Image
        src="/images/old/what-img.webp"
        loading="lazy"
        width="365"
        height="356"
        alt=""
        className="what-img"
      />
    </div>
  );
}
