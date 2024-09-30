import { useState } from "react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
}

export default function FaqRowItem({ title, description }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      aria-hidden="true"
      onClick={() => setIsOpen(!isOpen)}
      data-hover="false"
      data-delay="500"
      data-w-id="7e851b28-ea4b-ec98-c624-bda2f3235e94"
      className="faq-drop w-dropdown "
    >
      <div className={`faq-dt w-dropdown-toggle ${isOpen && "w--open"}`}>
        <div className="title-20-500">{title}</div>
        <Image
          style={{
            transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${isOpen ? 180 : "0"}deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
            transition: "all 0.3s",
          }}
          src="/images/old/drop-arrow.svg"
          loading="lazy"
          width="36"
          height="36"
          alt=""
          className="drop-arrow"
        />
      </div>
      <nav
        className={`faq-dl w-dropdown-list ${isOpen && "w--open"}`}
        style={{ transition: "all 1s" }}
      >
        <div className="faq-cont-div">
          <div
            className="text-16"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
      </nav>
    </div>
  );
}
