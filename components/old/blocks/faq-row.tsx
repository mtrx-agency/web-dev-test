import React from "react";
import FaqRowItem from "@/components/old/faq-row-item";
import { FaqRows } from "@/data/faq-rows";

export default function FAQRowBlock() {
  return (
    <div className="faq-row">
      {FaqRows.map((item) => (
        <FaqRowItem
          key={item.title}
          title={item.title}
          description={item.desciption}
        />
      ))}
    </div>
  );
}
