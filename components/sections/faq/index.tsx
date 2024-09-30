import { Disclosure, Transition } from "@headlessui/react";
import IconPlus from "@/components/icons/plus";
import { useState } from "react";

interface FAQ {
  title: string;
  description: string;
}

const faqs: FAQ[] = [
  {
    title: "Where can I get help for my paper?",
    description:
      "Get paper help on the most reliable online academic platform. Exceptional quality, student-friendly pricing and 24/7 customer support guaranteed!",
  },
  {
    title: "Are there professionals available to help with my paper?",
    description:
      "At Paper24, we have a team of professional paper helpers ready to assist with your academic needs. Our experts have a broad range of academic backgrounds, ensuring we have the right professional for your specific subject and task.",
  },
  {
    title: "Can I get paper help for any subject?",
    description:
      'Paper24 is the ideal destination if you\'re asking, "Can someone help me with my paper?" We cover every academic subject, ensuring that no matter your needs, we provide the necessary assistance.',
  },
  {
    title: "How quickly can I get help with my paper?",
    description:
      "We understand the urgency of academic deadlines. That's why we offer fast paper help to ensure you meet your deadlines. As soon as your order is placed, our dedicated experts begin crafting your paper with the utmost care and precision.",
  },
  {
    title: "How do I submit my paper for help?",
    description:
      "Submitting your paper for online paper help at Paper24 is a straightforward process. Simply register, fill out the order form with your paper requirements, and upload any relevant files. Once your order is placed, we'll assign an expert to start working on your paper promptly.",
  },
];

export default function SectionFAQ() {
  const [activeDisclosurePanel, setActiveDisclosurePanel] = useState<any>(null);

  function togglePanels(newPanel: any) {
    if (activeDisclosurePanel) {
      if (
        activeDisclosurePanel.key !== newPanel.key &&
        activeDisclosurePanel.open
      ) {
        activeDisclosurePanel.close();
      }
    }

    setActiveDisclosurePanel({
      ...newPanel,
      open: !newPanel.open,
    });
  }

  return (
    <article
      id="faq"
      className="container flex flex-col items-center justify-start bg-light p-3 ~gap-10/20 ~py-[7.5rem]/60"
    >
      <span
        className={`self-start font-poppins font-semibold ~text-[2.5rem]/6xl md:self-center`}
      >
        FAQ
      </span>

      <div className="flex w-full flex-col ~gap-3/5">
        {faqs.map((faq, index) => (
          <Disclosure key={index}>
            {(panel) => (
              <div className="rounded-[1.25rem] bg-white">
                <Disclosure.Button
                  className="flex w-full flex-row items-center justify-between text-left ~p-3/6"
                  onClick={() => {
                    if (!panel.open) {
                      panel.close();
                    }
                    togglePanels({ ...panel, key: index });
                  }}
                >
                  <span className="font-semibold ~text-base/xl">
                    {faq.title}
                  </span>
                  <div
                    className={`flex items-center justify-center rounded-full ~size-8/[3.25rem] ~min-w-8/[3.25rem] ${panel.open ? "bg-black" : "bg-violet"}`}
                  >
                    <IconPlus
                      stroke="white"
                      height="1.75rem"
                      width="1.75rem"
                      className={`~size-4/[1.75rem] ${panel.open ? "rotate-45 transform" : ""}`}
                    />
                  </div>
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="cursor-pointer font-normal text-black ~px-3/8 ~pt-3/6 ~pb-3/12 ~text-sm/lg">
                    {({ close }) => (
                      <div
                        role="button"
                        tabIndex={-1}
                        onKeyUp={() => {}}
                        onClick={() => {
                          close();
                        }}
                      >
                        {faq.description}
                      </div>
                    )}
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </article>
  );
}
