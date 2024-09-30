import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Item {
  title?: string;
  description?: string;
  subject?: string;
}

const DefaultItems: Item[] = [
  {
    title: "Nursing",
    description: "366 Completed projects",
    subject: "Nursing",
  },
  {
    title: "Psychology",
    description: "374 Completed projects",
    subject: "Psychology",
  },
  {
    title: "Sociology",
    description: "284 Completed projects",
    subject: "Sociology",
  },
  {
    title: "English",
    description: "329 Completed projects",
    subject: "English",
  },
  {
    title: "Business",
    description: "292 Completed projects",
    subject: "Business",
  },
  {
    title: "25+ Others",
    description: "626 Completed projects",
    subject: "Other",
  },
];

export interface CupGridBlockProps {
  crmURL: string;
  items?: Item[];
}

export default function CupGridBlock({
  crmURL,
  items = DefaultItems,
}: CupGridBlockProps) {
  return (
    <div className="cup-grid">
      {items?.map(({ title, description, subject }) => (
        <div key={title} className="grid1 cyp-item">
          <div className="cup-title">
            <Image
              src="/images/old/hand-icon.webp"
              loading="lazy"
              width="20"
              height="20"
              alt=""
              className="cyp-icon"
            />
            <div className="title-24-500">{title}</div>
            <div className="text-14 grey-text">{description}</div>
          </div>
          <Link
            href={`${crmURL}/create-order?subject=${subject}`}
            className="cup-link w-inline-block"
            data-amplitude="true"
            data-a-position="Body"
            data-a-cta="true"
          >
            <div className="text-16">Get started →</div>
          </Link>
          <Link
            href={`${crmURL}/create-order?subject=${subject}`}
            className="plate-item-link w-inline-block"
            data-amplitude="true"
            data-a-position="Body"
            data-a-cta="true"
          ></Link>
        </div>
      ))}
    </div>
  );
}
