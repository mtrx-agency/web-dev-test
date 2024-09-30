import Image from "next/image";
import { useState } from "react";

export default function CalcItemWithTooltip({
  name,
  tooltip,
}: {
  name: string;
  tooltip: string;
}) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="calcv2-list-item"
    >
      <div className="calcv2-list-item-content">
        <div
          className={`calcv2-tooltip ${isHover && "calcv2-tooltip-visible"}`}
        >
          <Image
            src="/images/old/tooltip-angle.svg"
            loading="eager"
            width="32"
            height="32"
            alt=""
            className="calcv2-tooltip-angle"
          />
          <div>{tooltip}</div>
        </div>
        <Image
          src="/images/old/calc-check-icon.svg"
          width="24"
          height="24"
          loading="lazy"
          alt=""
          className="calcv2-list-icon"
        />
        <div className="text-14-400-sb underlined">{name}</div>
      </div>
    </div>
  );
}
