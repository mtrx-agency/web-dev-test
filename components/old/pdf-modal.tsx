import Image from "next/image";
import { Sample } from "@/data/sample";
import { Dispatch, SetStateAction, useState } from "react";

interface PDFModalProps {
  sample: Sample | null;
  setSample: Dispatch<SetStateAction<Sample | null>>;
}

export default function PDFModal({ sample, setSample }: PDFModalProps) {
  const [tab, setTab] = useState<"info" | "iframe">("info");

  if (!sample) {
    return <></>;
  }

  return (
    <>
      <div className="pdf-modal" style={{ display: "block" }}>
        <div className="pdf-modal-tabs">
          <div
            data-pdf-tab="summary"
            className={`pdf-modal-tab ${tab === "info" ? "active" : ""}`}
          >
            <div
              aria-hidden="true"
              className="pdf-modal-tab-text"
              onClick={() => {
                setTab("info");
              }}
            >
              Order summary
            </div>
          </div>
          <div
            data-pdf-tab="sample"
            className={`pdf-modal-tab ${tab === "iframe" ? "active" : ""}`}
          >
            <div
              aria-hidden="true"
              className="pdf-modal-tab-text"
              onClick={() => {
                setTab("iframe");
              }}
            >
              Sample
            </div>
          </div>
        </div>

        <div className="pdf-modal-inner">
          <div
            className="pdf-modal-iframe"
            style={{
              transform:
                tab === "info" ? "translateX(0%)" : "translateX(-100%)",
            }}
          >
            <div className="pdf-modal-iframe-embed">
              <iframe
                title="pdf-modal-iframe"
                src={sample.url}
                width="100%"
                height="100%"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
          <div
            className="pdf-modal-info"
            style={{
              transform:
                tab === "info" ? "translateX(0%)" : "translateX(-100%)",
            }}
          >
            <div className="pdf-modal-params">
              <div className="pdf-modal-data">
                <div className="pdf-modal-title">{sample.title}</div>
                <div className="h-24"></div>
                <div className="pdf-modal-counts">
                  <div className="pdf-counts-card">
                    <Image
                      src="/images/old/modal-type-of-work.svg"
                      loading="lazy"
                      width="24"
                      height="24"
                      alt=""
                      className="pdf-counts-icon"
                    />
                    <div className="pdf-counts-text">{sample.typeOfWork}</div>
                  </div>
                  <div className="pdf-counts-card">
                    <Image
                      src="/images/old/modal-level.svg"
                      loading="lazy"
                      width="24"
                      height="24"
                      alt=""
                      className="pdf-counts-icon"
                    />
                    <div className="pdf-counts-text">{sample.level}</div>
                  </div>
                  <div className="pdf-counts-card">
                    <Image
                      src="/images/old/modal-page-count.svg"
                      loading="lazy"
                      width="24"
                      height="24"
                      alt=""
                      className="pdf-counts-icon"
                    />
                    <div className="pdf-counts-text">
                      <span data-modal-pdf-pages="">{sample.pages}</span> page
                      {sample.pages > 1 ? "s" : ""}
                    </div>
                  </div>
                </div>
                <div className="h-24"></div>
                <div className="pdf-params">
                  <div className="pdf-params-line">
                    <div className="pdf-params-name">Service</div>
                    <div data-modal-pdf-service="" className="pdf-params-value">
                      {sample.service}
                    </div>
                  </div>
                  <div className="pdf-params-line">
                    <div className="pdf-params-name">Citation style</div>
                    <div
                      data-modal-pdf-citation=""
                      className="pdf-params-value"
                    >
                      {sample.citation}
                    </div>
                  </div>
                  <div className="pdf-params-line">
                    <div className="pdf-params-name">Level</div>
                    <div className="pdf-params-value">{sample.level}</div>
                  </div>
                  <div className="pdf-params-line">
                    <div className="pdf-params-name">Sources</div>
                    <div data-modal-pdf-sources="" className="pdf-params-value">
                      {sample.sources}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pdf-paper-instructions">
              <div className="pdf-paper-title">
                <div className="pdf-paper-title">Paper instructions</div>
                <div className="h-16"></div>
                <div className="pdf-paper-scroll">
                  <div
                    data-modal-pdf-instructions=""
                    className="pdf-paper-scroll-text"
                  >
                    {sample.instructions}
                  </div>
                </div>
              </div>
            </div>
            <div className="pdf-modal-nav">
              <button
                type="button"
                className="pdf-modal-nav-link w-inline-block"
              >
                <Image
                  src="/images/old/pdf-nav-arrow.svg"
                  loading="lazy"
                  width="24"
                  height="24"
                  alt=""
                  className="pdf-modal-nav-arrow"
                />
                <div className="pdf-modal-nav-text">Previous sample</div>
              </button>
              <button
                type="button"
                className="pdf-modal-nav-link w-inline-block"
              >
                <div className="pdf-modal-nav-text">Next sample</div>
                <Image
                  src="/images/old/pdf-nav-arrow.svg"
                  loading="lazy"
                  width="24"
                  height="24"
                  alt=""
                  className="pdf-modal-nav-arrow next"
                />
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="pdf-modal-close w-inline-block"
          onClick={() => setSample(null)}
        >
          <Image
            src="/images/old/pdf-close-modal.svg"
            loading="lazy"
            width="32"
            height="32"
            alt=""
            className="pdf-modal-close-btn"
          />
        </button>
      </div>
    </>
  );
}
