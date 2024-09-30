import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Sample, Samples } from "@/data/sample";
import PDFModal from "@/components/old/pdf-modal";

interface Props {
  crmURL: string;
  title: string;
  subtitle: string;
}

export default function HeaderHelpSample({ crmURL, title, subtitle }: Props) {
  const [currentSample, setCurrentSample] = useState<Sample | null>(null);
  return (
    <>
      <div className="hero-full rel-ov-h">
        <header className="section-fixed hero">
          <div className="container-138">
            <div className="hero-head-block"></div>
            <div className="h-50"></div>
            <div className="hero-cols">
              <div className="content-col _530">
                <h1 className="title-60-stolz">
                  <span className="blue-text">{title} help</span> for every
                  student
                </h1>
                <div className="h-20"></div>
                <div>
                  <div className="text-20-stolz">{subtitle}</div>
                </div>
                <div className="h-40"></div>
                <div className="hero-btn-wr sample">
                  <Link
                    href={`${crmURL}/create-order`}
                    className="btn-hero-blink w-inline-block"
                    data-amplitude="true"
                    data-a-position="Hero"
                    data-a-cta="true"
                  >
                    <div className="blink-border-1"></div>
                    <div className="blink-border-2"></div>
                    <div className="blink-border-3"></div>
                    <Image
                      src="/images/old/write-icon.png"
                      loading="lazy"
                      width="96"
                      height="96"
                      alt=""
                      className="button-icon"
                    />
                    <div>Get started</div>
                  </Link>
                  {Samples.filter(
                    ({ slug }) =>
                      slug ===
                      "bullying-in-educational-institutions-forms-effects-and-prevention-measures",
                  )
                    .slice(0, 1)
                    .map((s) => (
                      <button
                        key={s.slug}
                        type="button"
                        className="som-div hero"
                        onClick={() => setCurrentSample(s)}
                      >
                        <span className="hero-sample-link">
                          <span className="text-14">View Sample →</span>
                        </span>
                      </button>
                    ))}
                </div>
              </div>
              <div className="img-col">
                <Image
                  src="/images/old/new-bg-thing.svg"
                  loading="lazy"
                  width="898"
                  height="700"
                  alt=""
                  className="sample-bg-img"
                />
                <div className="hero-sample-img-link">
                  {Samples.filter(
                    ({ slug }) =>
                      slug ===
                      "bullying-in-educational-institutions-forms-effects-and-prevention-measures",
                  )
                    .slice(0, 1)
                    .map((s) => (
                      <button
                        key={s.slug}
                        type="button"
                        className="som-div hero"
                        onClick={() => setCurrentSample(s)}
                      >
                        <div
                          data-w-id="4ab87368-1093-0639-d650-eebae5268664"
                          className="hero-sample-wr"
                        >
                          <div className="ppc-samle-img-div-2">
                            <div className="ppc-img-wr">
                              <Image
                                src="/images/old/Bullying-in-Educational-Institutions-02-mmm.png"
                                loading="lazy"
                                width="636"
                                height="916"
                                alt=""
                                className="ppc-sample-img"
                              />
                            </div>
                            <div
                              style={{ opacity: 0 }}
                              className="ppc-layer-img"
                            ></div>
                          </div>
                          <div className="ppc-samle-img-div-1">
                            <div className="ppc-img-wr">
                              <Image
                                src="/images/old/Bullying-in-Educational-Institutions-01.png"
                                loading="lazy"
                                width="636"
                                height="916"
                                alt=""
                                data-srcset="/images/old/Bullying-in-Educational-Institutions-01-p-500.png 500w, images/Bullying-in-Educational-Institutions-01-p-800.png 800w, images/Bullying-in-Educational-Institutions-01-p-1080.png 1080w, images/Bullying-in-Educational-Institutions-01.png 1700w"
                                sizes="(max-width: 991px) 100vw, 22vw"
                                className="ppc-sample-img"
                              />
                            </div>
                            <div
                              style={{ opacity: 0 }}
                              className="ppc-layer-img"
                            ></div>
                          </div>
                          <div
                            style={{ display: "none" }}
                            className="overlay-sample-div"
                          >
                            <div
                              style={{
                                transform:
                                  "translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                opacity: 0,
                              }}
                              className="btn-white-hover w-inline-block"
                            >
                              <div>View Sample</div>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            </div>
            <div className="h-110 hide-mobile"></div>
          </div>
        </header>
      </div>

      <PDFModal sample={currentSample} setSample={setCurrentSample} />
    </>
  );
}
