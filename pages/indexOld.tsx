import { GetStaticProps } from "next";
// import dynamic from "next/dynamic";
import Head from "next/head";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SectionHero from "@/components/sections/hero";
import SectionHeroExperts from "@/components/sections/hero-experts";
import SectionExperts from "@/components/sections/experts";
import SectionFeedback from "@/components/sections/feedback";
import SectionHowItWorks from "@/components/sections/how-it-works";
import SectionAdvantages from "@/components/sections/advantages";
import SectionWhy from "@/components/sections/why";
import SectionFAQ from "@/components/sections/faq";

declare global {
  interface Window {
    pageGroup?: string;
  }
}

// const DynamicSectionHowItWorks = dynamic(
//   () => import("@/components/sections/how-it-works"),
//   {
//     ssr: false,
//   },
// );
// const DynamicSectionAdvantages = dynamic(
//   () => import("@/components/sections/advantages"),
//   {
//     ssr: false,
//   },
// );
// const DynamicSectionWhy = dynamic(() => import("@/components/sections/why"), {
//   ssr: false,
// });
// const DynamicSectionFAQ = dynamic(() => import("@/components/sections/faq"), {
//   ssr: false,
// });

interface Props {
  crmURL: string;
  apiURL: string;
  domain: string;
  googleSiteVerification: string;
}

export default function Index({
  crmURL,
  apiURL,
  domain,
  googleSiteVerification,
}: Props) {
  return (
    <>
      <Head>
        <title>Paper24: Academic papers written from scratch</title>
        <meta
          name="description"
          content="Rely on Paper24's experts to craft your assignments from scratch with free AI and plan reports, while you focus on life."
        />
        <meta
          name="google-site-verification"
          content={googleSiteVerification}
        />
        <link href={`https://${domain}/`} rel="canonical" />
        <script
          type="text/javascript"
          id="pageGroup"
          dangerouslySetInnerHTML={{
            __html: `window.pageGroup="Home"`,
          }}
        />
      </Head>

      <Header crmURL={crmURL} />

      {/* 1. Hero */}
      <SectionHero crmURL={crmURL} />

      {/* Middle section */}
      <SectionHeroExperts />

      {/* 2. Experts */}
      <SectionExperts />

      {/* 3. Feedback */}
      <SectionFeedback apiURL={apiURL} />

      {/* 4. How it works */}
      <SectionHowItWorks />

      {/* 5. Advantages */}
      <SectionAdvantages crmURL={crmURL} />

      {/* 6. Why */}
      <SectionWhy crmURL={crmURL} />

      {/* 7. FAQ */}
      <SectionFAQ />

      <div className="container flex flex-col px-3 ~py-[7.5rem]/[13.75rem]">
        <span className="text-center font-poppins font-semibold ~pb-10/20 ~text-4xl/6xl">
          Comprehensive <span className="text-violet">paper help </span>{" "}
          tailored to you
        </span>
        <div className="flex flex-col gap-8 md:flex-row md:gap-10">
          <div className="left-block w-[100%] ">
            <div className="help-table flex flex-col">
              <h4 className="mb-4 text-[1.25rem] font-bold leading-6">
                1. Find the Best Paper Help at Paper24
              </h4>

              <div className="mb-2 flex w-[100%] flex-row justify-between border-b border-[#CAC8E8] py-[0.5rem] text-left">
                <div className="w-[100%] text-left text-[0.875rem] leading-[0.75rem] text-[#434B60]">
                  ✔️ Plagiarism-Free Academic Papers
                </div>
                <div className="w-[70%] text-left text-[0.875rem] leading-[0.75rem] text-[#434B60]">
                  Originality Assured
                </div>
              </div>
              <div className="mb-2 flex w-[100%] flex-row justify-between border-b border-[#CAC8E8] py-[0.5rem] text-left">
                <div className="w-[100%] text-left text-[0.875rem] leading-[0.75rem] text-[#434B60]">
                  ⏰ Fast Paper Help
                </div>
                <div className="w-[70%] text-left text-[0.875rem] leading-[0.75rem] text-[#434B60]">
                  Quick Assistance
                </div>
              </div>
              <div className="mb-2 flex w-[100%] flex-row justify-between border-b border-[#CAC8E8] py-[0.5rem] text-left">
                <div className="w-[100%] text-left text-[0.875rem] leading-[0.75rem] text-[#434B60]">
                  💰Affordable Paper Help
                </div>
                <div className="w-[70%] text-left text-[0.875rem] leading-[0.75rem] text-[#434B60]">
                  Budget-Friendly
                </div>
              </div>
              <div className="mb-2 flex w-[100%] flex-row justify-between border-b border-[#CAC8E8] py-[0.5rem] text-left">
                <div className="w-[100%] text-left text-[0.875rem] leading-[0.75rem] text-[#434B60]">
                  🏆 Top Paper Helpers
                </div>
                <div className="w-[70%] text-left text-[0.875rem] leading-[0.75rem] text-[#434B60]">
                  Expert Professionals
                </div>
              </div>
              <div className="mb-2 flex w-[100%] flex-row justify-between border-b border-[#CAC8E8] py-[0.5rem] text-left">
                <div className="w-[100%] text-left text-[0.875rem] leading-[0.75rem] text-[#434B60]">
                  🖋️ Variety of Papers
                </div>
                <div className="w-[70%] text-left text-[0.875rem] leading-[0.75rem] text-[#434B60]">
                  Diverse Selection
                </div>
              </div>
              <div className="mb-2 flex w-[100%] flex-row justify-between border-b border-[#CAC8E8] py-[0.5rem] text-left">
                <div className="w-[100%] text-left text-[0.875rem] leading-[0.75rem] text-[#434B60]">
                  👉Personalized Approach
                </div>
                <div className="w-[70%] text-left text-[0.875rem] leading-[0.75rem] text-[#434B60]">
                  Tailored Guidance
                </div>
              </div>
              <span className="mt-[1.5rem] text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                No matter the academic hurdle or ever decreasing timeframe,
                remember that Paper24 is here to provide the help with paper
                assignments you need. With our promise of quality,
                affordability, and customer satisfaction, academic success is
                just a click away.
              </span>
              <span className="mt-[1.5rem] text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                When you choose Paper24 to be your trusted paper helper, you are
                guaranteeing yourself work that is simply not distinguishable by
                professors from that of other students. This means you can order
                with confidence, knowing that it&apos;s been crafted by human
                experts with a strong understanding of the subject matter.
              </span>
              <span className="mt-[1.5rem] text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                Whether you need help with a paper for a high school class, a
                college course, or even a postgraduate degree, you are in safe
                hands. Our academic scholars are adept at handling papers of all
                levels and across a wide range of subjects.
              </span>
              <span className="mt-[1.5rem] text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                Moreover, our satisfaction guarantee promises that if
                you&apos;re not pleased with our work, we will give you your
                money back. So, when you think, &quot;Who can help with paper
                assignments?&quot;, remember Paper24 as the place to go. We are
                committed to helping you succeed academically without breaking
                the bank.
              </span>
            </div>
            <div className="md:mt-[12rem]">
              <div className="section flex flex-col gap-6">
                <h4 className="text-[1.25rem] font-bold leading-6">
                  3. Premium paper help online at Paper24
                </h4>
                <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                  When looking for where to get paper help, make Paper24 your
                  first choice. As a premier academic service, we understand the
                  demands of student life and are fully committed to providing
                  students with exceptional support during their educational
                  journey.
                </span>
                <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                  When you need help with a paper, Paper24 is just a click away.
                  Our dedicated team of experts can tackle any topic with skill
                  and precision. Every single one of our experts is well-versed
                  in their field, ensuring that your work will be praised at a
                  higher level than ordinary student work. Your professors will
                  never be able to tell that you had a bit of help on the side!
                </span>
                <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                  Our promise is not just about delivering excellent academic
                  papers, but also ensuring complete satisfaction. For this
                  reason, we offer a money-back guarantee if Paper24
                  doesn&apos;t meet your expectations.
                </span>
                <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                  No matter the academic hurdle or ever decreasing timeframe,
                  remember that Paper24 is here to provide the help with paper
                  assignments you need. With our promise of quality,
                  affordability, and customer satisfaction, academic success is
                  just a click away.
                </span>
                <div />
              </div>
              <div className="section flex flex-col gap-6">
                <h4 className="text-[1.25rem] font-bold leading-6">
                  5. Get the Best Help with My Paper at Paper24
                </h4>
                <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                  Paper24 is your go-to source for all academic needs. Our
                  service isn&apos;t just about delivering high-quality papers;
                  it&apos;s about providing a holistic experience to alleviate
                  your academic stress.
                </span>
                <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                  Getting paper help online means saving precious time. With
                  Paper24, you can focus on studying, part-time jobs,
                  internships, or simply enjoy all aspects of your personal life
                  while our experts craft your assignments. Furthermore, Paper24
                  ensures that receive an assignment that meets all academic
                  standards - 0 grammatical errors, correct formatting, and
                  detailed research.
                </span>
                <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                  When you choose to get paper help from us, you&apos;re also
                  choosing to learn from the best. Our work serves as an
                  excellent study reference, helping you understand and digest
                  complex topics, improve your skills, and excel in your
                  academics.
                </span>
                <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                  We go above and beyond in our fulfillment, ensuring
                  high-quality work, affordability, punctuality, and total
                  satisfaction - backed by our money-back guarantee. So, when
                  you&apos;re seeking help with your paper, remember Paper24.
                  Accessible, reliable, and student-friendly - we&apos;re the
                  paper help online you&apos;ve been looking for.
                </span>
                <div />
              </div>
            </div>
          </div>
          <div className="right-block flex w-[100%] flex-col gap-10">
            <div className="section flex flex-col gap-6">
              <h4 className="text-[1.25rem] font-bold leading-6">
                2. Discover the benefits of online paper help with Paper24
              </h4>
              <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                Are you seeking online paper help for your academic writing
                needs? We understand the challenges that students face when it
                comes to producing high-quality academic papers. We&apos;re here
                to provide expert assistance every step of the way.
              </span>
              <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                Our team of experienced paper helpers is dedicated to ensuring
                you receive top-notch academic papers tailored to your specific
                requirements. We take pride in our commitment to delivering:
              </span>
              <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                1. High-Quality Paper Helpers:
                <br /> &ensp; At Paper24, we boast a team of skilled
                professionals who excel in various academic fields. Whether you
                require assistance with coursework assignments, theses, or
                creative essays, our experts are ready to assist. We
                meticulously match paper with a writer possessing the expertise
                needed to create an exceptional piece of work.
              </span>
              <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                2. Plagiarism-Free Academic Papers: <br /> &ensp; We understand
                the significance of originality in academic writing. Our paper
                helpers are dedicated to providing 100% plagiarism-free papers.
                Rest assured that your paper will be extensively researched and
                devoid of any plagiarism issues. Academic integrity is our
                priority.
              </span>
              <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                3. Papers Crafted with Clarity and Cohesion: <br /> &ensp;
                Crafting a well-structured and coherent paper can be daunting.
                Our team pays meticulous attention to detail, ensuring your
                paper is logically organized and presents your ideas with
                clarity and cohesion. We work diligently to help you effectively
                convey your thoughts.
              </span>
              <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                By choosing Paper24 for your online paper help needs,
                you&apos;re selecting a partner committed to your academic
                success. We take pride in equipping you with the tools and
                expertise to excel in your studies. Bid farewell to the stress
                of academic writing and let us assist you on your path to
                academic excellence.
              </span>
              <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                Feel free to reach out to us for online paper help whenever you
                require it. Your academic success is within reach with Paper24!
              </span>
            </div>
            <div className="section flex flex-col gap-6">
              <h4 className="text-[1.25rem] font-bold leading-6">
                4. Your Ultimate Paper Helper
              </h4>
              <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                When looking for where to get paper help, make Paper24 your
                first choice. As a premier academic service, we understand the
                demands of student life and are fully committed to providing
                students with exceptional support during their educational
                journey.
              </span>
              <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                Our team consists of academic scholars who are ready to serve as
                your dedicated paper helper. Each expert is knowledgeable and
                well-versed in their respective disciplines, ensuring the work
                we deliver is of exceptional quality. Moreover, the work we
                provide is indistinguishable from an ordinary student&apos;s
                work, so you can have confidence in the authenticity and
                legitimacy of your assignment.
              </span>
              <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                We firmly believe in customer satisfaction, and for this reason
                we are offering a money-back guarantee if Paper24 does not meet
                your expectations. We strive to provide the best academic
                support possible to help every student achieve their academic
                goals.
              </span>
              <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                So, the next time you&apos;re thinking, &quot;Where can I get
                paper help?&quot;, remember Paper24 - your ultimate paper
                helper. Alongside quality and affordability, customer
                satisfaction is guaranteed!
              </span>
              <div />
            </div>
            <div className="section flex flex-col gap-6">
              <h4 className="text-[1.25rem] font-bold leading-6">
                6. Get paper help from the best at Paper24
              </h4>
              <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                When you are in urgent need of paper help, there&apos;s no
                better option than Paper24. We&apos;re not just about delivering
                high-quality academic help; we offer an extensive package of
                services that hone your academic experience.
              </span>
              <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                Choosing paper help from Paper24 means choosing stress-free
                academics. As previous students ourselves, we like no one else
                understand the academic pressure students face thanks to
                demanding curriculums, complicated coursework, and high
                expectations. Our professional paper helper team steps in to
                shoulder that burden, freeing you to focus on other important
                aspects of your student life, be it internships, part-time jobs,
                or well-deserved relaxation.
              </span>
              <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                Alongside this, Paper24 provides you with an excellent learning
                opportunity. The work we deliver is not only designed to perform
                well academically, but also to serve as a learning tool, helping
                you grasp complex concepts, improve your academic understanding,
                and flourish in your studies.
              </span>
              <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                Moreover, our services are provided by vetted academic scholars,
                ensuring that your work is above average as compared to that of
                an ordinary student&apos;s work. Coupled with our
                student-friendly pricing and money-back satisfaction guarantee,
                all our students are in safe hands.
              </span>
              <span className="text-[1rem] font-normal leading-[1.25rem] text-[#434B60]">
                So, whenever you need help with your academics, remember
                Paper24. With us, you&apos;re not just getting one-time help;
                you&apos;re making a long term investment in your academic
                success.
              </span>
              <div />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      apiURL: process.env.NEXT_PUBLIC_API_URL,
      crmURL: process.env.NEXT_PUBLIC_CRM_URL,
      domain: process.env.NEXT_PUBLIC_DOMAIN,
      googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };
};
