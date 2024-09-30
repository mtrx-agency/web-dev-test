import "@/styles/old/header.css";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    isMobile?: boolean;
  }
}

interface HeaderProps {
  crmURL: string;
  showPriceCalculator?: boolean;
  staticBg?: boolean;
}

export default function Header({
  crmURL,
  showPriceCalculator,
  staticBg,
}: HeaderProps) {
  const navbar = useRef<HTMLDivElement>(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const onScroll = useCallback(() => {
    if (!navbar.current) {
      return;
    }

    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      const headScrollColor =
        document.body.dataset.headScrollColor || "#0a1330";
      navbar.current.style.transition =
        "transform 0.5s ease-in-out, background-color 0.5s ease-in-out";
      navbar.current.style.backgroundColor = headScrollColor;
    } else {
      if (!window.isMobile) {
        navbar.current.style.transform = "translateY(0)";
      }
    }

    if (!staticBg && currentScrollPos < navbar.current.clientHeight) {
      navbar.current.style.backgroundColor = "transparent";
    }
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos, staticBg]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  useEffect(() => {
    window.scrollBy(0, 1);
    setIsMobile(window.innerWidth < 992);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 992);
    });
  }, []);

  return (
    <div ref={navbar} className="head-div">
      <div className="w-embed"></div>
      <div className="html-1vw-all w-embed w-script"></div>
      <div className="scroll-alarm"></div>
      <div className="container-138 head">
        <div className="hero-min-banner-wr">
          <div className="head-min-banner-row">
            <div className="hmb-wrap">
              <div className="text-14">We accept:</div>
              <div className="hmb-logos-wr">
                <Image
                  src="/images/old/apay.svg"
                  loading="lazy"
                  width="39"
                  height="18"
                  alt=""
                  className="hmb-icon"
                />
                <div className="hmb-sep"></div>
                <Image
                  src="/images/old/gpay.svg"
                  loading="lazy"
                  width="39"
                  height="18"
                  alt=""
                  className="hmb-icon"
                />
              </div>
            </div>
            <div className="hmb-cross">
              <Image
                src="/images/old/cross-w.svg"
                loading="lazy"
                width="8"
                height="8"
                alt=""
                className="hmb-cr-icon"
              />
            </div>
          </div>
        </div>
        <div className="head-padding"></div>
        <div className="heading-wrapper n-home">
          <div className="logo-div n-home">
            <Link href="/" className="logo-link w-inline-block">
              <Image
                style={{ opacity: `${menuIsOpen ? 0 : 1}` }}
                src="/images/old/Logo.svg"
                loading="lazy"
                width="109"
                height="36"
                alt=""
                className="logo-img head valentine"
              />
              <Image
                style={{ opacity: `${menuIsOpen ? 1 : 1}` }}
                src="/images/old/logo-w.svg"
                loading="lazy"
                width="396"
                height="146"
                alt=""
                className="logo-img-black head"
              />
            </Link>
          </div>
          <div className="menu-burger">
            <div
              className="burger-icon"
              style={{ opacity: `${menuIsOpen ? 0 : 1}` }}
            >
              <div className="icon-line"></div>
              <div className="icon-line"></div>
              <div className="icon-line"></div>
            </div>
            <Image
              style={{ opacity: `${menuIsOpen ? 1 : 0}` }}
              src="/images/old/menu-burger-cross.svg"
              loading="eager"
              width="32"
              height="32"
              alt=""
              className="burger-cross"
              onClick={() => {
                setMenuIsOpen(!menuIsOpen);
              }}
            />
          </div>
          <div
            className="nav-menu-div n-home"
            style={{
              height: `${menuIsOpen ? "100vh" : "auto"}`,
              display: `${menuIsOpen ? "flex" : isMobile ? "none" : "flex"}`,
            }}
          >
            <div className="nav-menu">
              <div className="menu-items">
                <Link
                  href="/writing-help#calculator"
                  className="nav-link n-home w-inline-block"
                  style={{
                    display: showPriceCalculator ? "block" : "none",
                  }}
                >
                  Price calculator
                </Link>
                <Link
                  href="/experts"
                  className="nav-link n-home w-inline-block"
                >
                  Our experts
                </Link>
                <Link
                  href="/reviews"
                  className="nav-link n-home w-inline-block"
                >
                  Reviews
                </Link>
                <Link
                  href="/become-an-expert"
                  className="nav-link n-home w-inline-block"
                >
                  Become an expert
                </Link>

                <div className="head-btns mobile">
                  <Link
                    href={`${crmURL}/create-order`}
                    className="btn-head-bg w-inline-block"
                    data-amplitude="true"
                    data-a-position="Header"
                    data-a-cta="true"
                  >
                    Place an order
                  </Link>
                  <Link
                    href={`${crmURL}/login`}
                    className="login-link w-inline-block"
                  >
                    Login
                  </Link>
                </div>
              </div>
              <div className="nav-menu-copy">
                Copyright © 2022, Paper24. All rights reserved.
              </div>
            </div>
          </div>
          <div className="head-buttons">
            <Link
              href={`${crmURL}/login`}
              className="login-link n-home w-inline-block"
            >
              <div className="login-icon-wr">
                <Image
                  src="/images/old/head-login-icon.svg"
                  loading="lazy"
                  width="18"
                  height="18"
                  alt=""
                  className="head-login-icon"
                />
              </div>
              <div>Login</div>
            </Link>
            <Link
              href={`${crmURL}/create-order`}
              className="head-btn w-inline-block"
              data-amplitude="true"
              data-a-position="Header"
              data-a-cta="true"
            >
              <div className="head-btn-text">Get started</div>
            </Link>
          </div>
          <Link
            href={`${crmURL}/login`}
            className="head-login-link w-inline-block"
          >
            <Image
              src="/images/old/user-login.webp"
              loading="eager"
              width="28"
              height="28"
              alt=""
              className="head-login-icon"
            />
            <Image
              src="/images/old/user-login-black.webp"
              loading="eager"
              width="28"
              height="28"
              alt=""
              className="head-login-icon-black"
            />
          </Link>
        </div>
        <div className="head-padding"></div>
      </div>
    </div>
  );
}
