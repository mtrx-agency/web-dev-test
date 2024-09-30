import Image from "next/image";

interface HiwStepsBlockProps {
  title: string;
  description: string;
  step1Title: string;
  step1Description: string;
  step2Title: string;
  step2Description: string;
  step3Title: string;
  step3Description: string;
}

export default function HiwStepsBlock({
  title,
  description,
  step1Title,
  step1Description,
  step2Title,
  step2Description,
  step3Title,
  step3Description,
}: HiwStepsBlockProps) {
  return (
    <>
      <div className="h-32"></div>
      <h2
        className="title-36-stlz"
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      ></h2>
      <div className="h-16"></div>
      <div className="hiw-tooltip">
        <Image
          src="/images/old/hiw-tooltip-icon.svg"
          loading="lazy"
          width="24"
          height="24"
          alt=""
          className="hiw-tooltip-icon"
        />
        <div>{description}</div>
      </div>
      <div className="h-32"></div>
      <div className="hiw-steps-wrap">
        <div className="hiw-steps">
          <div className="hiw-step-wrap">
            <div className="hiw-step-mob">
              <Image
                src="/images/old/hiw-timeline-icon.svg"
                loading="lazy"
                width="28"
                height="28"
                alt=""
                className="hiw-step-mob-icon"
              />
              <div className="hiw-step-mob-line"></div>
            </div>
            <div className="hiw-bubble">
              <Image
                src="/images/old/hiw-bubble.png"
                loading="lazy"
                width="42"
                height="42"
                alt=""
                className="hiw-bubble-icon"
              />
            </div>
            <div className="mob-10 h-24"></div>
            <div className="hiw-timeline-dot">
              <Image
                src="/images/old/hiw-timeline-icon.svg"
                loading="lazy"
                width="28"
                height="28"
                alt=""
                className="hiw-timeline-icon"
              />
              <div className="hiw-timeline-line"></div>
            </div>
            <div className="mob-hide h-20"></div>
            <div className="hiw-step-texts">
              <div className="hiw-step-text">STEP 1</div>
              <div className="hiw-step-title">{step1Title}</div>
              <div className="hiw-step-desc">{step1Description}</div>
            </div>
          </div>
          <div className="hiw-step-wrap">
            <div className="hiw-step-mob">
              <Image
                src="/images/old/hiw-timeline-icon.svg"
                loading="lazy"
                width="28"
                height="28"
                alt=""
                className="hiw-step-mob-icon"
              />
              <div className="hiw-step-mob-line"></div>
            </div>
            <div className="hiw-bubble">
              <Image
                src="/images/old/hiw-write.png"
                loading="lazy"
                width="42"
                height="42"
                alt=""
                className="hiw-bubble-icon"
              />
            </div>
            <div className="mob-10 h-24"></div>
            <div className="hiw-timeline-dot">
              <Image
                src="/images/old/hiw-timeline-icon.svg"
                loading="lazy"
                width="28"
                height="28"
                alt=""
                className="hiw-timeline-icon"
              />
              <div className="hiw-timeline-line right"></div>
              <div className="hiw-timeline-line"></div>
            </div>
            <div className="hide-mob h-20"></div>
            <div className="hiw-step-texts">
              <div className="hiw-step-text">STEP 2</div>
              <div className="hiw-step-title">{step2Title}</div>
              <div className="hiw-step-desc">{step2Description}</div>
            </div>
          </div>
          <div className="hiw-step-wrap">
            <div className="hiw-step-mob">
              <Image
                src="/images/old/hiw-timeline-icon.svg"
                loading="lazy"
                width="28"
                height="28"
                alt=""
                className="hiw-step-mob-icon"
              />
            </div>
            <div className="hiw-bubble">
              <Image
                src="/images/old/hiw-stars.png"
                loading="lazy"
                width="42"
                height="42"
                alt=""
                className="hiw-bubble-icon"
              />
            </div>
            <div className="mob-10 h-24"></div>
            <div className="hiw-timeline-dot">
              <Image
                src="/images/old/hiw-timeline-icon.svg"
                loading="lazy"
                width="28"
                height="28"
                alt=""
                className="hiw-timeline-icon"
              />
              <div className="hiw-timeline-line right"></div>
            </div>
            <div className="hide-mob h-20"></div>
            <div className="hiw-step-texts">
              <div className="hiw-step-text">STEP 3</div>
              <div className="hiw-step-title">{step3Title}</div>
              <div className="hiw-step-desc">{step3Description}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-32"></div>
    </>
  );
}
