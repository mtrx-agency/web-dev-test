import Image from "next/image";

interface HiwWrBlockProps {
  title1: string;
  description1: string;
  title2: string;
  description2: string;
  title3: string;
  description3: string;
  title4: string;
  description4: string;
}

export default function HiwWrBlock({
  title1,
  description1,
  title2,
  description2,
  title3,
  description3,
  title4,
  description4,
}: HiwWrBlockProps) {
  return (
    <div className="hiw-wr">
      <div className="grid1 hiw-item">
        <div className="title-24-500">{title1}</div>
        <div className="h-15"></div>
        <div className="text-14">{description1}</div>
        <Image
          src="/images/old/hiw-1.webp"
          loading="lazy"
          width="200"
          height="150"
          alt=""
          className="hiw-img"
        />
        <div className="hiw-number">
          <div className="text-14">01</div>
        </div>
      </div>
      <div
        id="w-node-_934e4163-8ddb-b829-7a0d-4cba54bc0c5f-60f0948b"
        className="hiw-item"
      >
        <div className="title-24-500">{title2}</div>
        <div className="h-15"></div>
        <div className="text-14">{description2}</div>
        <Image
          src="/images/old/hiw-2.webp"
          loading="lazy"
          width="200"
          height="150"
          alt=""
          className="hiw-img"
        />
        <div className="hiw-number">
          <div className="text-14">02</div>
        </div>
      </div>
      <div
        id="w-node-_934e4163-8ddb-b829-7a0d-4cba54bc0c69-60f0948b"
        className="hiw-item"
      >
        <div className="title-24-500">{title3}</div>
        <div className="h-15"></div>
        <div className="text-14">{description3}</div>
        <Image
          src="/images/old/hiw-3.webp"
          loading="lazy"
          width="200"
          height="150"
          alt=""
          className="hiw-img"
        />
        <div className="hiw-number">
          <div className="text-14">03</div>
        </div>
      </div>
      <div
        id="w-node-_934e4163-8ddb-b829-7a0d-4cba54bc0c73-60f0948b"
        className="hiw-item"
      >
        <div className="title-24-500">{title4}</div>
        <div className="h-15"></div>
        <div className="text-14">{description4}</div>
        <Image
          src="/images/old/hiw-4.webp"
          loading="lazy"
          width="200"
          height="150"
          alt=""
          className="hiw-img"
        />
        <div className="hiw-number">
          <div className="text-14">04</div>
        </div>
      </div>
    </div>
  );
}
