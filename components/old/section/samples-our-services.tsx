import Link from "next/link";
import Image from "next/image";
import PttWrBlock from "@/components/old/blocks/ptt-wr";

interface Props {
  crmURL: string;
}

export default function SamplesOurServices({ crmURL }: Props) {
  return (
    <div id="samples" className="section-fixed">
      <div className="h-32"></div>
      <div className="container-138">
        <div className="left-title-wr">
          <h2 className="title-36-stlz">
            <span className="blue-text">Research paper help</span> finished
            without the hassle
          </h2>
          <div className="h-18"></div>
          <div className="text-16-stolzl">
            We take all your instructions for research paper help into
            consideration.
          </div>
        </div>
        <div className="h-32"></div>
        <PttWrBlock
          tap1LTitle={`Citations done professionally`}
          tap1LDescription="Our experts will research and insert citations that are accurate and fit your research paper help needs."
          tap2LTitle={`Make sure it’s correct`}
          tap2LDescription="We double check each research paper we complete for our customers, and make sure there are no grammatical or punctuation mistakes!"
          tap1RTitle={`Spring cleaning for your paper`}
          tap1RDescription="We’ll get the right message across by clarifying meanings and making sure the overall essay and sentence structure looks and sounds right."
          tap2RTitle={`The best price around`}
          tap2RDescription="Find out your price today. Let us know what type of assignment you need and when your deadline is!"
        />

        <div className="h-56"></div>
        <div className="center-div">
          <Link
            href={`${crmURL}/create-order`}
            className="btn w-inline-block"
            data-amplitude="true"
            data-a-position="Body"
            data-a-cta="true"
          >
            <div>Get started</div>
            <Image
              src="/images/old/btn-right.svg"
              loading="lazy"
              width="26"
              height="15"
              alt=""
              className="btn-arrow-icon"
            />
          </Link>
        </div>
      </div>
      <div className="h-32"></div>
    </div>
  );
}
