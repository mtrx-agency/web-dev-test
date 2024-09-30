import FAQBannerBlock from "@/components/old/blocks/faq-banner";
import FAQRowBlock from "@/components/old/blocks/faq-row";
import React from "react";

export default function FAQWrapperBlock() {
  return (
    <div className="faq-wr">
      <FAQBannerBlock />
      <FAQRowBlock />
    </div>
  );
}
