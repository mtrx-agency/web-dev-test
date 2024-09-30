import HiwStepsBlock from "@/components/old/blocks/hiw-steps";

export default function SimpleProcessOurServices() {
  return (
    <section className="section-fixed">
      <div className="container-138">
        <HiwStepsBlock
          title={`A simple process`}
          description="Payment is only required once you’ve hired an expert for your research paper help"
          step1Title="Give us the deets"
          step1Description="Tell us the instructions for your assignment, and then submit your order so we can start working!"
          step2Title="Your expert — hired"
          step2Description="Our experts will start bidding on your order, so be sure to check out the experts in your field to find your perfect match!"
          step3Title="Just like that — finished!"
          step3Description="You’ll get your finished product with free revisions for 14 days, alongside a complimentary plagiarism and AI report!"
        />
      </div>
    </section>
  );
}
