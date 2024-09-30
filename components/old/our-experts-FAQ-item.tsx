import Image from "next/image";
import { useState } from "react";

interface Props {
  title: string;
  description: string;
}

export default function OurExpersFAQItem({ title, description }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div data-hover="false" data-delay="500" className="faq-drop w-dropdown">
      <div
        aria-hidden="true"
        className={`faq-dt new w-dropdown-toggle ${isOpen ? "w--open" : ""}`}
        id="w-dropdown-toggle-7"
        aria-controls="w-dropdown-list-7"
        aria-haspopup="menu"
        aria-expanded="false"
        role="button"
        tabIndex={0}
        onClick={handleClick}
      >
        <div className="faq-label-text">{title}</div>
        <Image
          src="/images/old/drop-arrow.svg"
          loading="lazy"
          width="36"
          height="36"
          alt=""
          style={{
            transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${isOpen ? 180 : "0"}deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
            transition: "all 0.3s",
          }}
          className="drop-arrow"
        />
      </div>
      <nav
        style={{ height: "100%" }}
        className={`faq-dl w-dropdown-list ${isOpen ? "w--open" : ""}`}
        id="w-dropdown-list-7"
        aria-labelledby="w-dropdown-toggle-7"
      >
        <div className="faq-cont-div">
          <div className="faq-text">{description}</div>
        </div>
      </nav>
    </div>
  );
}
