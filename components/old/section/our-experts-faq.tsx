import OurExpertsFAQItem from "@/components/old/our-experts-FAQ-item";
import { FaqItems } from "@/data/our-experts-FAQ";

export default function OurExpertsFAQ() {
  return (
    <div className="expts-faq">
      <div className="expts-faq-title">FAQ</div>
      <div className="h-20"></div>
      <div className="expts-faq-row">
        {FaqItems.map((item) => (
          <OurExpertsFAQItem
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
