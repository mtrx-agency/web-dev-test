import Image from "next/image";
import { useState } from "react";

interface Props {
  text: string;
  tooltipText: string;
}

export default function Tooltip({ text, tooltipText }: Props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      data-w-id="fc1f0f68-2502-11dc-2a21-a96290b119fb"
      className="calc-estimates-tooltip-wrap"
      onMouseLeave={() => setIsHover(false)}
      onMouseEnter={() => setIsHover(true)}
    >
      <div className="calc-estimates-text">{text}</div>
      <Image
        src="/images/old/avatar-tooltip.svg"
        loading="lazy"
        width="24"
        height="24"
        alt=""
        className="calc-estimates-tooltip-icon"
      />
      {isHover && (
        <div
          className="calc-estimates-tooltip-block"
          style={{ display: "block" }}
        >
          <div>{tooltipText}</div>
        </div>
      )}
    </div>
  );
}
