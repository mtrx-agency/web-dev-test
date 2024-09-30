import SjReviewsBlock from "@/components/old/blocks/sj-reviews";

interface ReviewsOurServicesProps {
  apiURL: string;
}

export default function ReviewsOurServices({
  apiURL,
}: ReviewsOurServicesProps) {
  return (
    <section id="reviews" className="section-fixed">
      <div className="h-32"></div>
      <div className="container-138">
        <SjReviewsBlock
          apiURL={apiURL}
          title={`<span class="blue-text">Quality reviews</span> for quality service`}
          description={`Our expert team at Paper24 always leaves students happy with their research paper help.`}
        />
      </div>
      <div className="h-32"></div>
    </section>
  );
}
