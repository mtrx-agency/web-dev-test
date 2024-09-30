import { Fragment, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import IconLogo from "@/components/icons/logo";
import IconPlus from "@/components/icons/plus";
import IconUser from "@/components/icons/user";

interface MobileMenuModalProps {
  crmURL: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenuModal({
  crmURL,
  isOpen,
  onClose,
}: MobileMenuModalProps) {
  const [isMenuOpen, setMenuOpen] = useState(isOpen);

  useEffect(() => {
    setMenuOpen(isOpen);
  }, [isOpen]);

  function closeModal() {
    if (onClose) {
      onClose();
    }

    setMenuOpen(false);
  }

  return (
    <Transition appear show={isMenuOpen} as={Fragment}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-250"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="relative z-[51] overscroll-none xl:hidden">
          <nav className="fixed bottom-0 left-0 top-0 flex w-full flex-col overflow-y-auto bg-violet">
            <div className="container flex flex-row items-center justify-between ~px-4/0 ~pt-4/0">
              <Link href="/">
                <IconLogo
                  fill="#F8F8FF"
                  height="2.1875rem"
                  width="7.125rem"
                  className="h-auto w-[7.125rem]"
                />
              </Link>

              <div className="flex flex-row items-center justify-end gap-5">
                <button
                  className="flex h-[3.25rem] flex-col items-center justify-center rounded-full"
                  onClick={closeModal}
                >
                  <IconPlus
                    stroke="#FFF"
                    height="1.5rem"
                    width="1.5rem"
                    className="rotate-45 transform"
                  />
                </button>
              </div>
            </div>

            <div className="my-auto">
              <ul className="flex flex-col gap-5 p-3 text-[1.75rem] font-medium text-light">
                <li>
                  <Link href={`/#experts`} className="" onClick={closeModal}>
                    Experts
                  </Link>
                </li>
                <li>
                  <Link href={`/#feedback`} className="" onClick={closeModal}>
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link href={`/#advantages`} className="" onClick={closeModal}>
                    Advantages
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/#how-it-works`}
                    className=""
                    onClick={closeModal}
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href={`/#faq`} className="" onClick={closeModal}>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-[2.19rem] mt-auto flex flex-col justify-between gap-2 p-3 text-base">
              <Link
                href={`${crmURL}/login`}
                className="flex h-14 flex-row items-center justify-center gap-2 rounded-full border border-solid border-white bg-transparent font-medium text-light active:border-[#2C2C2C] active:bg-black md:hover:border-[#2C2C2C] md:hover:bg-black"
              >
                <IconUser />
                Login
              </Link>

              <Link
                data-amplitude="true"
                data-a-position="Header"
                data-a-cta="true"
                href={`${crmURL}/create-order`}
                className="flex h-14 flex-row items-center justify-center rounded-full bg-white font-medium text-black"
              >
                Get started
              </Link>
            </div>
          </nav>
        </div>
      </Transition.Child>
    </Transition>
  );
}
