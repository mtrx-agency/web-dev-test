export default function SectionHowItWorks() {
  return (
    <div className="bg-white">
      <article
        id="how-it-works"
        className="container flex flex-col items-center justify-start gap-20 ~px-3/0 ~py-[7.5rem]/[13.75rem]"
      >
        <div
          className={`self-start font-poppins font-semibold text-black ~px-3/0 ~text-[2.5rem]/6xl md:self-center`}
        >
          How <span className="text-violet">it works</span>
        </div>

        <div className="flex w-full flex-col ~gap-10/[6.25rem] xl:w-auto xl:flex-row">
          <div className="flex flex-col items-start justify-center ~gap-5/10 md:items-center">
            <span className="flex items-center justify-center rounded-full bg-light text-violet ~size-[3.75rem]/20">
              01
            </span>

            <div className="flex flex-col items-start gap-5 md:items-center">
              <span className="text-xl font-semibold text-black">
                Create a free project
              </span>
              <span className="text-left text-lg text-black md:text-center">
                Provide detailed instructions on your
                <br className="hidden md:inline" />
                assignment and submit your risk-free
                <br className="hidden md:inline" />
                order.
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center ~gap-5/10 md:items-center">
            <span className="flex items-center justify-center rounded-full bg-light text-violet ~size-[3.75rem]/20">
              02
            </span>

            <div className="flex flex-col items-start gap-5 md:items-center">
              <span className="text-xl font-semibold text-black">
                Hire expert
              </span>
              <span className="text-left text-lg text-black md:text-center">
                As our Experts begin bidding on your
                <br className="hidden md:inline" />
                order, browse Experts to find the one that
                <br className="hidden md:inline" />
                is a fit for your requirements.
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center ~gap-5/10 md:items-center">
            <span className="flex items-center justify-center rounded-full bg-light text-violet ~size-[3.75rem]/20">
              03
            </span>

            <div className="flex flex-col items-start gap-5 md:items-center">
              <span className="text-xl font-semibold text-black">Approve</span>
              <span className="text-left text-lg text-black md:text-center">
                You`ll have access to free revisions for 14-
                <br className="hidden md:inline" />
                days and a free plagiarism and AI report.
                <br className="hidden md:inline" />
                <span className="text-transparent">.</span>
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
