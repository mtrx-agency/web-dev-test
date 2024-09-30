import OurExpertsSliderBlock from "@/components/old/blocks/our-experts-slider";

export default function ExpertsOurServices() {
  return (
    <section id="experts" className="section-fixed experts">
      <div className="h-32"></div>
      <div className="h-32"></div>
      <div className="container-138">
        <OurExpertsSliderBlock
          title={`Research <span class="blue-text">paper help experts</span> are changing the game`}
          description="Need a research paper advisor to help you out? Check out the
            profiles of our best experts."
        />
      </div>
      <div className="h-32"></div>
    </section>
  );
}
