import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface FooterProps {
  domain?: string;
}

export default function Footer({ domain }: FooterProps) {
  const [showOurServices, setShowOurServices] = useState(false);
  const ourServicesModal = useRef<HTMLDivElement>(null);
  const ourServicesButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!showOurServices) return;

    function handleClick(event: any) {
      if (
        ourServicesButton.current &&
        ourServicesButton.current.contains(event.target)
      ) {
        return;
      }

      if (
        ourServicesModal.current &&
        !ourServicesModal.current.contains(event.target)
      ) {
        setShowOurServices(false);
      }
    }
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [showOurServices]);

  return (
    <>
      <footer className="foot-div">
        <div className="section foot">
          <div className="container-180">
            <div className="h-80"></div>
            <div className="foot-cols">
              <div className="foot-col">
                <div className="logo-div footer">
                  <div className="logo-link">
                    <Image
                      src="/images/old/Logo.svg"
                      loading="lazy"
                      width="396"
                      height="146"
                      alt=""
                      className="logo-img"
                    />
                  </div>
                </div>
                <div className="h-15"></div>
                <button
                  ref={ourServicesButton}
                  type="button"
                  className="catalog-button w-inline-block"
                  onClick={() => {
                    setShowOurServices(!showOurServices);
                  }}
                >
                  <div className="z-index">
                    <Image
                      src="/images/old/catalog-open-icon.svg"
                      loading="lazy"
                      width="24"
                      height="24"
                      alt=""
                      className="catalog-button-icon"
                    />
                  </div>
                  <div className="z-index">
                    <div className="catalog-button-text">Our services</div>
                  </div>
                  <div className="catalog-button-hover"></div>
                </button>
                <div className="h-15"></div>
                <Image
                  src="/images/old/paper24-platform.svg"
                  loading="lazy"
                  height="100"
                  width="190"
                  alt=""
                  className="adress-img"
                />
              </div>
              <div className="foot-col">
                <div className="title-20-500">Privacy Guarantee</div>
                <div className="h-15"></div>
                <div className="maxw-50">
                  <div className="text-14 grey-text">
                    We never disclose our client&apos;s personal data or credit
                    card information to third parties. We need only your email
                    to proceed.
                  </div>
                </div>
              </div>
              <div className="f-menu-item">
                <div className="title-20-500">Legal</div>
                <div className="h-15"></div>
                <div className="f-menu-list">
                  <Link
                    href="/terms-and-conditions"
                    aria-current="page"
                    className="f-link w-inline-block w--current"
                  >
                    <div className="fm-point"></div>
                    <div className="text-16">Terms &amp; Conditions</div>
                  </Link>
                  <Link href="/refund-policy" className="f-link w-inline-block">
                    <div className="fm-point"></div>
                    <div className="text-16">Refund Policy</div>
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="f-link w-inline-block"
                  >
                    <div className="fm-point"></div>
                    <div className="text-16">Privacy Policy</div>
                  </Link>
                  <Link href="/cookie-policy" className="f-link w-inline-block">
                    <div className="fm-point"></div>
                    <div className="text-16">Cookie Policy</div>
                  </Link>
                </div>
              </div>
              <div className="f-menu-item">
                <div className="title-20-500">Other</div>
                <div className="h-15"></div>
                <div className="f-menu-list">
                  <button
                    type="button"
                    className="f-link w-inline-block"
                    data-name="Intercom"
                  >
                    <div className="fm-point"></div>
                    <div className="text-16">Support</div>
                  </button>
                  <Link href="/honor-code" className="f-link w-inline-block">
                    <div className="fm-point"></div>
                    <div className="text-16">Honor Code</div>
                  </Link>
                  <Link
                    href={`https://faq.${domain}/`}
                    target="_blank"
                    className="f-link w-inline-block"
                  >
                    <div className="fm-point"></div>
                    <div className="text-16">FAQ</div>
                  </Link>
                  <Link href="/blog" className="f-link w-inline-block">
                    <div className="fm-point"></div>
                    <div className="text-16">Blog</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="foot-sep-line"></div>
            <div className="foot-cols down">
              <div className="soc-wr">
                <div className="text-14">Social networks:</div>
                <div className="social-buttons-foot">
                  <div className="soc-item">
                    <Link
                      href="https://www.instagram.com/paper24_com/"
                      target="_blank"
                      className="social-link w-inline-block"
                    >
                      <Image
                        src="/images/old/foot-inst.svg"
                        loading="lazy"
                        width="20"
                        height="20"
                        alt=""
                        className="social-inst-icon"
                      />
                    </Link>
                  </div>
                  <div className="soc-item">
                    <Link
                      href="https://www.tiktok.com/@paper24com"
                      target="_blank"
                      className="social-link w-inline-block"
                    >
                      <Image
                        src="/images/old/foot-tt.svg"
                        loading="lazy"
                        width="20"
                        height="20"
                        alt=""
                        className="social-inst-icon"
                      />
                    </Link>
                  </div>
                  <div className="soc-item">
                    <Link
                      href="https://www.reddit.com/r/Paper_24/"
                      target="_blank"
                      className="social-link w-inline-block"
                    >
                      <Image
                        src="/images/old/foot-rd.svg"
                        loading="lazy"
                        width="20"
                        height="20"
                        alt=""
                        className="social-disc-icon"
                      />
                    </Link>
                  </div>
                  <div className="soc-item">
                    <Link
                      href="https://www.youtube.com/@paper24official"
                      target="_blank"
                      className="social-link w-inline-block"
                    >
                      <Image
                        src="/images/old/foot-ytb.svg"
                        loading="lazy"
                        width="20"
                        height="20"
                        alt=""
                        className="social-inst-icon"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-434c67">
                <div className="text-12-500">
                  Copyright © {new Date().getFullYear()}, Paper24. All rights
                  reserved.
                </div>
              </div>
            </div>
            <div className="h-30"></div>
          </div>
        </div>

        <div
          className="catalog-modal"
          style={{ display: showOurServices ? "flex" : "none" }}
        >
          <div className="catalog-inner-wrap" ref={ourServicesModal}>
            <div className="catalog-modal-title">Our services</div>
            <div className="catalog-links">
              <Link
                href="/research-paper-help"
                className="catalog-link w-inline-block"
              >
                <div className="text-14">Research paper help</div>
                <Image
                  src="/images/old/catalog-link-icon.svg"
                  loading="lazy"
                  width="20"
                  height="20"
                  alt=""
                  className="catalog-link-icon"
                />
              </Link>
              <Link
                href="/dissertation-help"
                className="catalog-link w-inline-block"
              >
                <div className="text-14">Dissertation help</div>
                <Image
                  src="/images/old/catalog-link-icon.svg"
                  loading="lazy"
                  width="20"
                  height="20"
                  alt=""
                  className="catalog-link-icon"
                />
              </Link>
              <Link
                href="/homework-help"
                className="catalog-link w-inline-block"
              >
                <div className="text-14">Homework help</div>
                <Image
                  src="/images/old/catalog-link-icon.svg"
                  loading="lazy"
                  width="20"
                  height="20"
                  alt=""
                  className="catalog-link-icon"
                />
              </Link>
              <Link
                href="/assignment-help"
                className="catalog-link w-inline-block"
              >
                <div className="text-14">Assignment help</div>
                <Image
                  src="/images/old/catalog-link-icon.svg"
                  loading="lazy"
                  width="20"
                  height="20"
                  alt=""
                  className="catalog-link-icon"
                />
              </Link>
              <Link href="/essay-help" className="catalog-link w-inline-block">
                <div className="text-14">Essay help</div>
                <Image
                  src="/images/old/catalog-link-icon.svg"
                  loading="lazy"
                  width="20"
                  height="20"
                  alt=""
                  className="catalog-link-icon"
                />
              </Link>
              <Link href="/math-help" className="catalog-link w-inline-block">
                <div className="text-14">Math help</div>
                <Image
                  src="/images/old/catalog-link-icon.svg"
                  loading="lazy"
                  width="20"
                  height="20"
                  alt=""
                  className="catalog-link-icon"
                />
              </Link>
              <Link
                href="/college-essay-help"
                className="catalog-link w-inline-block"
              >
                <div className="text-14">College essay help</div>
                <Image
                  src="/images/old/catalog-link-icon.svg"
                  loading="lazy"
                  width="20"
                  height="20"
                  alt=""
                  className="catalog-link-icon"
                />
              </Link>
              <Link
                href="/nursing-assignment-help"
                className="catalog-link w-inline-block"
              >
                <div className="text-14">Nursing assignment help</div>
                <Image
                  src="/images/old/catalog-link-icon.svg"
                  loading="lazy"
                  width="20"
                  height="20"
                  alt=""
                  className="catalog-link-icon"
                />
              </Link>
              <Link
                href="/law-assignment-help"
                className="catalog-link w-inline-block"
              >
                <div className="text-14">Law assignment help</div>
                <Image
                  src="/images/old/catalog-link-icon.svg"
                  loading="lazy"
                  width="20"
                  height="20"
                  alt=""
                  className="catalog-link-icon"
                />
              </Link>
              <Link
                href="/marketing-assignment-help"
                className="catalog-link w-inline-block"
              >
                <div className="text-14">Marketing assignment help</div>
                <Image
                  src="/images/old/catalog-link-icon.svg"
                  loading="lazy"
                  width="20"
                  height="20"
                  alt=""
                  className="catalog-link-icon"
                />
              </Link>
              <Link
                href="/economics-assignment-help"
                className="catalog-link w-inline-block"
              >
                <div className="text-14">Economics assignment help</div>
                <Image
                  src="/images/old/catalog-link-icon.svg"
                  loading="lazy"
                  width="20"
                  height="20"
                  alt=""
                  className="catalog-link-icon"
                />
              </Link>
              <Link
                href="/psychology-assignment-help"
                className="catalog-link w-inline-block"
              >
                <div className="text-14">Psychology assignment help</div>
                <Image
                  src="/images/old/catalog-link-icon.svg"
                  loading="lazy"
                  width="20"
                  height="20"
                  alt=""
                  className="catalog-link-icon"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-embed w-script"></div>
      </footer>
    </>
  );
}
