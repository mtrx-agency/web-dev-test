import Link from "next/link";
import IconLogo from "@/components/icons/logo";
import MobileMenuModal from "@/components/mobile-menu-modal";
import { useState } from "react";
import IconUser from "@/components/icons/user";

interface HeaderProps {
  crmURL: string;
}

export default function Header({ crmURL }: HeaderProps) {
  const [isMobileMenuModalOpen, setMobileMenuModalOpen] = useState(false);

  const handleOpenMobileMenuModal = () => {
    setMobileMenuModalOpen(true);
  };

  const handleCloseMobileMenuModal = () => {
    setMobileMenuModalOpen(false);
  };

  return (
    <>
      <MobileMenuModal
        crmURL={crmURL}
        isOpen={isMobileMenuModalOpen}
        onClose={handleCloseMobileMenuModal}
      />

      <div className="container fixed z-20 flex flex-row items-center justify-between bg-light pb-4 ~px-4/0 ~pt-4/10 scrolled:bg-white md:sticky md:pb-0 scrolled:md:bg-transparent">
        <Link href="/" aria-label="Paper24">
          <IconLogo
            fill="#2C2C2C"
            height="2.1875rem"
            width="7.125rem"
            className="h-auto ~w-[7.125rem]/[9rem]"
          />
        </Link>

        <div className="hidden shrink-0 flex-row items-center justify-between gap-0 xl:flex xl:w-[66.25rem]">
          <nav className="flex flex-row gap-8 text-lg font-medium">
            <Link
              href={`/experts`}
              className="active:text-violet md:hover:text-violet"
            >
              Our experts
            </Link>
            <Link
              href={`/reviews`}
              className="active:text-violet md:hover:text-violet"
            >
              Reviews
            </Link>
            <Link
              href={`/become-an-expert`}
              className="active:text-violet md:hover:text-violet"
            >
              Become an expert
            </Link>
          </nav>

          <div className="flex flex-row justify-between ~gap-2/5 ~text-sm/base">
            <Link
              href={`${crmURL}/login`}
              className="flex select-none flex-row items-center gap-2 rounded-full border border-solid border-[#2C2C2C] bg-violet text-white ~px-[2rem]/[3.25rem] ~py-2/5 active:bg-black active:text-white md:bg-transparent md:text-[#2C2C2C] md:hover:bg-black md:hover:text-white"
            >
              <IconUser />
              Login
            </Link>
            <Link
              data-amplitude="true"
              data-a-position="Header"
              data-a-cta="true"
              href={`${crmURL}/create-order`}
              className="flex items-center justify-start rounded-full bg-violet text-white ~px-[2rem]/[3.25rem] ~py-2/5 active:bg-black md:hover:bg-black"
            >
              Get started
            </Link>
          </div>
        </div>

        <div className="flex flex-row items-center justify-end gap-4 xl:hidden">
          <Link
            data-amplitude="true"
            data-a-position="Header"
            data-a-cta="true"
            href={`${crmURL}/create-order`}
            className="rounded-full bg-violet text-sm font-medium text-light ~px-5/[2.875rem] ~py-[0.94rem]/[1.625rem] active:bg-black md:hover:bg-black"
          >
            Get started
          </Link>

          <button
            className="flex h-[3.25rem] flex-col items-center justify-center"
            onClick={handleOpenMobileMenuModal}
            aria-label="Open menu"
          >
            <div className="flex h-6 w-6 flex-col items-end justify-center gap-1">
              <span className="h-0.5 w-6 bg-violet"></span>
              <span className="h-0.5 w-6 bg-violet"></span>
              <span className="h-0.5 w-6 bg-violet"></span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
