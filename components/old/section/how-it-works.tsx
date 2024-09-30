import HiwStepsBlock from "@/components/old/blocks/hiw-steps";
import React from "react";

export default function SectionHowItWorks() {
  return (
    <section className="section-fixed">
      <div className="container-138">
        <HiwStepsBlock
          title={`How it works`}
          description="Payment is only required once you’ve hired an expert"
          step1Title="Upload assignment details"
          step1Description="Provide detailed instructions on your assignment and submit your risk-free order."
          step2Title="Hire expert"
          step2Description="As our Experts begin bidding on your order, browse Experts to find the one that is a fit for your requirements."
          step3Title="Approve"
          step3Description="You’ll have access to free revisions for 14-days and a free plagiarism and AI report."
        />
      </div>
    </section>
  );
}
