import Link from "next/link";
import Image from "next/image";
import React from "react";
import ProfSlider from "@/components/old/prof-slider";

interface SectionProfessorsProps {
  crmURL: string;
}

export default function SectionProfessors({ crmURL }: SectionProfessorsProps) {
  return (
    <>
      <section id="professors" className="section-fixed">
        <div className="container-138">
          <div className="h-64"></div>
          <div className="prof-wrap">
            <div className="prof-texts">
              <h2 className="prof-title">
                <span className="blue-text">Undetectable</span> by professors
              </h2>
              <ProfSlider crmURL={crmURL} />
              <div className="prof-subtitle">
                We did an experiment and asked several professors if they could
                recognize an essay from Paper24 - results in video
              </div>
              <div className="prof-list">
                <div className="prof-list-item">
                  <Image
                    src="/images/old/prof-check-icon.svg"
                    loading="lazy"
                    width="24"
                    height="25"
                    alt=""
                    className="prof-list-icon"
                  />
                  <div className="prof-list-text">
                    20,000+ hours saved by students
                  </div>
                </div>
                <div className="prof-list-item">
                  <Image
                    src="/images/old/prof-check-icon.svg"
                    loading="lazy"
                    width="24"
                    height="25"
                    alt=""
                    className="prof-list-icon"
                  />
                  <div className="prof-list-text">
                    0 projects detected by professors
                  </div>
                </div>
                <div className="prof-list-item">
                  <Image
                    src="/images/old/prof-check-icon.svg"
                    loading="lazy"
                    width="24"
                    height="25"
                    alt=""
                    className="prof-list-icon"
                  />
                  <div className="prof-list-text">
                    9.76/10 average satisfaction score
                  </div>
                </div>
              </div>
              <Link
                href={`${crmURL}/create-order`}
                className="puple-btn full-mob w-inline-block"
                data-amplitude="true"
                data-a-position="Body"
                data-a-cta="true"
              >
                <div className="purple-btn-text">Get expert help</div>
              </Link>
            </div>
          </div>
          <div className="h-64"></div>
        </div>
      </section>
    </>
  );
}
