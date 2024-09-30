import SjReviewsBlock from "@/components/old/blocks/sj-reviews";

interface SectionReviewsProps {
  apiURL: string;
}

export default function SectionReviews({ apiURL }: SectionReviewsProps) {
  return (
    <>
      <section id="reviews" className="section-fixed">
        <div className="h-32"></div>
        <div className="container-138">
          <SjReviewsBlock
            apiURL={apiURL}
            title={`Reviewed by <span class="blue-text">students</span>`}
          />
          <div className="h-32"></div>
        </div>
      </section>
    </>
  );
}
