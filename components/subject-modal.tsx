import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import { Subjects } from "@/data/order-subjects";

export interface Subject {
  id: string;
  name: string;
}

interface SubjectModalProps {
  isOpen: boolean;
  onSelect: (data: Subject) => void;
  onClose: () => void;
  selected: Subject;
}

export default function SubjectModal({
  isOpen,
  onSelect,
  onClose,
  selected,
}: SubjectModalProps) {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const [selectedSubject, setSelectedSubject] = useState<Subject>(selected);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setSelectedSubject(selected);
  }, [selected]);

  function closeModal() {
    if (onClose) {
      onClose();
    }

    setModalOpen(false);
  }

  function handleSubjectSelect(subject: Subject) {
    if (onSelect) {
      onSelect(subject);
    }

    setSelectedSubject(subject);
  }

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        open={isModalOpen}
        className="relative z-20 h-screen w-screen "
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#000]/40" />
        </Transition.Child>

        <div className="fixed inset-0 h-screen overflow-y-auto">
          <div className="py-10vh flex min-h-full items-center justify-center text-center ~px-[1.5rem]/4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex h-[80vh] w-full max-w-md transform flex-col items-start justify-start gap-[1.75rem] overflow-hidden rounded-2xl bg-white text-center align-middle shadow-xl transition-all ~px-[0.625rem]/9 ~pt-[1.75rem]/[3.75rem] ~pb-[1.75rem]/[5.5rem]">
                <button
                  type="button"
                  className="absolute right-2 top-2 flex size-8 items-center justify-center border-transparent text-violet focus:outline-none"
                  onClick={closeModal}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5 1.5L1.5 14.5M1.5 1.5L14.5 14.5"
                      stroke="#8466FF"
                      strokeWidth="2"
                    />
                  </svg>
                </button>

                <Dialog.Title
                  as="h3"
                  className={`self-center font-poppins font-semibold text-black ~text-xl/2xl`}
                >
                  Choose your <span className="text-violet">subject</span>
                </Dialog.Title>

                <div className="scrollbar-w-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full w-full overflow-y-scroll scrollbar scrollbar-track-light scrollbar-thumb-violet ~mt-[0.5rem]/[3.938rem]">
                  <Listbox
                    value={selectedSubject}
                    onChange={handleSubjectSelect}
                  >
                    <Listbox.Options static={true} className="pb-2">
                      {Object.values(Subjects).map((subject) => (
                        <Listbox.Option
                          key={subject.name}
                          value={subject}
                          className="border-b-solid flex cursor-pointer flex-row items-center justify-start gap-3 border-b-2 border-b-light px-6 ~py-4/6 ~text-sm/base active:rounded-xl active:bg-light ui-selected:rounded-xl ui-selected:bg-light md:hover:rounded-xl md:hover:bg-light"
                        >
                          <Image
                            className="inline h-[1.5rem] w-[1.5rem]"
                            src={subject.icon}
                            alt={subject.name}
                            width="24"
                            height="24"
                          />
                          {subject.name}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
