import Image from "next/image";
import Link from "next/link";

interface SectionWhyProps {
  crmURL: string;
}

export default function SectionWhy({ crmURL }: SectionWhyProps) {
  return (
    <div className="bg-white">
      <article
        id="why"
        className="content flex flex-col items-center justify-start ~gap-10/20 ~px-3/0 ~py-[8.75rem]/[13.75rem]"
      >
        <div className="flex flex-col items-start justify-start self-start text-left md:items-center md:self-center md:text-center">
          <span
            className={`font-poppins font-semibold leading-[4.125rem] ~text-4xl/6xl`}
          >
            Why students turn
          </span>
          <span
            className={`font-poppins font-semibold leading-[4.125rem] text-violet ~text-4xl/6xl`}
          >
            to Paper24
          </span>
        </div>

        <div className="flex w-full flex-col items-center gap-5 md:flex-col md:justify-center xl:flex-row">
          <div className="flex h-[20rem] w-full max-w-[100vw] flex-col items-center justify-center rounded-[2.5rem] bg-light ~gap-3/10 ~px-0/[3.75rem] md:h-auto md:w-auto md:max-w-none md:px-[3rem] md:py-[9.063rem]">
            <Image
              src="/images/icons/check-shield.svg"
              alt="Affordable Expertise"
              height="72"
              width="72"
            />
            <div className="flex flex-col items-center justify-start gap-5 text-center md:w-[23rem]">
              <span className="font-semibold ~text-base/xl">
                <span className="text-violet">Affordable</span> Expertise
              </span>
              <span className="font-normal ~text-sm/base">
                Paper24 makes it possible to raise <br />
                your GPA with low rates
              </span>
            </div>
          </div>

          <div className="flex h-[20rem] w-full max-w-[100vw] flex-col items-center justify-center rounded-[2.5rem] bg-light ~gap-3/10 ~px-0/[3.75rem] md:h-auto md:w-auto md:max-w-none  md:px-[3rem] md:py-[9.063rem]">
            <Image
              src="/images/icons/smile.svg"
              alt="Custom Crafted"
              height="72"
              width="72"
            />
            <div className="flex flex-col items-center justify-start gap-5 text-center md:w-[23rem]">
              <span className="text-xl font-semibold">
                <span className="text-violet">Custom</span> Crafted
              </span>
              <span className="font-normal ~text-sm/base">
                We include unique and original thoughts to make <br />
                your essay more personal
              </span>
            </div>
          </div>

          <div className="flex h-[20rem] w-full max-w-[100vw] flex-col items-center justify-center rounded-[2.5rem] bg-light ~gap-3/10 ~px-0/[3.75rem] md:h-auto md:w-auto md:max-w-none  md:px-[3rem] md:py-[9.063rem]">
            <Image
              src="/images/icons/wallet.svg"
              alt="No cost until you hire"
              height="72"
              width="72"
            />
            <div className="flex flex-col items-center justify-start gap-5 text-center md:w-[23rem]">
              <span className="text-xl font-semibold">
                <span className="text-violet">No cost</span> until you hire
              </span>
              <span className="font-normal ~text-sm/base">
                Interview potential fits for <br />
                your project and negotiate rates
              </span>
            </div>
          </div>
        </div>

        <Link
          data-amplitude="true"
          data-a-position="Body"
          data-a-cta="true"
          href={`${crmURL}/create-order`}
          className="flex h-12 w-full items-center justify-center rounded-full bg-violet px-[2.813rem] py-[1.563rem] font-medium text-white ~text-sm/base active:bg-black md:h-auto md:w-auto md:hover:bg-black"
        >
          Get help
        </Link>
      </article>
    </div>
  );
}
