import Image from "next/image";
import Link from "next/link";

interface Feature {
  src: string;
  name: string;
  title: string;
}
interface Logo {
  src: string;
  name: string;
}

const features: Feature[] = [
  {
    src: "/images/icons/icon-1.png",
    name: "feature-1",
    title: "Place an order, pick an expert, and you&apos;re set.",
  },
  {
    src: "/images/icons/icon-2.png",
    name: "feature-2",
    title: "Chat with the experts before hiring, then pay securely.",
  },
  {
    src: "/images/icons/icon-3.png",
    name: "feature-3",
    title: "Free AI and plagiarism report with every order.",
  },
  {
    src: "/images/icons/icon-4.png",
    name: "feature-4",
    title: "Your expert is always available to chat and make adjustments.",
  },
];

const logos: Logo[] = [
  { src: "/images/ai-logos/turnitin.png", name: "Turnitin" },
  { src: "/images/ai-logos/copyleaks.png", name: "Copyleaks" },
  { src: "/images/ai-logos/gptzero.png", name: "GPTZero" },
  { src: "/images/ai-logos/originalityai.png", name: "Originality AI" },
  { src: "/images/ai-logos/grammarly.png", name: "Grammarly" },
  { src: "/images/ai-logos/scribbr.png", name: "Scribbr" },
  { src: "/images/ai-logos/quillbot.png", name: "Quillbot" },
  { src: "/images/ai-logos/zerogpt.png", name: "ZeroGPT" },
];

export default function Index() {
  return (
    <div className="bg-gradient-to-r from-[#E8F1FF] to-[#E5E6FD] font-inter">
      <div className="mx-auto max-w-7xl p-4">
        {/* Header */}
        <header className="mb-20">
          <div className="flex items-center justify-between">
            {/* Logo & Navigation */}
            <div className="flex items-center gap-10">
              <Link href="/" aria-label="Paper24">
                <Image
                  src="/images/logo-w.svg"
                  alt="Paper24"
                  width={130}
                  height={70}
                />
              </Link>
              <nav>
                <ul className="flex gap-10">
                  <li className="transition duration-300 hover:text-indigo-500">
                    <Link href="/services">Services</Link>
                  </li>
                  <li className="transition duration-300 hover:text-indigo-500">
                    <Link href="/experts">Our experts</Link>
                  </li>
                  <li className="transition duration-300 hover:text-indigo-500">
                    <Link href="/reviews">Reviews</Link>
                  </li>
                  <li>
                    <Link
                      href="/become-expert"
                      className="rounded-full bg-white px-6 py-3 transition duration-300 hover:bg-indigo-100"
                    >
                      Become an expert
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Login Button */}
            <div>
              <button className="mr-5">Log in</button>
              <button className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 text-white shadow-md transition duration-300 hover:opacity-80">
                Get started
              </button>
            </div>
          </div>
        </header>

        {/* Main */}
        <div className="flex items-center justify-between md:flex-row">
          {/* Left Section: Text & Search */}
          <div className="mb-10 max-w-xl grow text-center md:mb-0 md:w-1/2 md:text-left">
            <h1 className="mb-4 text-5xl font-extrabold leading-snug text-gray-900">
              100% HUMAN WRITING BY ACADEMIC EXPERTS
            </h1>
            <p className="mb-10 text-lg text-gray-600">
              Save time, reduce stress, and get the best grades with original
              essays verified by Turnitin.
            </p>
            {/* Search Box */}
            <div className="relative mb-16">
              <input
                type="text"
                placeholder="Choose your subject"
                className="w-96 rounded-full border border-gray-400 py-5 pl-12 pr-4 text-sm text-gray-700 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
              <div className="absolute left-[18px] top-[20px]">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <button className="absolute bottom-[7px] left-[265px] mr-3 mt-2.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-7 py-3.5 text-sm text-white shadow transition duration-300 hover:opacity-80">
                Get help
              </button>
            </div>
            {/* Ratings */}
            <div className="mt-6 flex justify-center space-x-4 md:justify-start">
              <div className="flex items-center space-x-1 rounded-lg border border-gray-300 px-5 py-2">
                <Image
                  src="/images/google.png"
                  alt="Google"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                <p className="text-gray-500">Google 4.7</p>
              </div>
              <div className="flex items-center space-x-1 rounded-lg border border-gray-300 px-5 py-2">
                <Image
                  src="/images/sitejabber.png"
                  alt="Sitejabber"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                <p className="text-gray-500">Sitejabber 4.8</p>
              </div>
              <div className="flex items-center space-x-1 rounded-lg border border-gray-300 px-5 py-2">
                <Image
                  src="/images/reviewsio.png"
                  alt="Reviews.io"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                <p className="text-gray-500">Reviews.io 4.8</p>
              </div>
            </div>
          </div>
          {/* Right Section: Phone Chat */}
          <div className="flex justify-center">
            <Image
              src="/images/phone-chat.png"
              alt="Phone chat image"
              width={370}
              height={400}
              className="max-w-xs md:max-w-md"
            />
          </div>
        </div>
        {/* Features */}
        <div className="mt-20 flex items-center justify-around gap-10 border-t-[1px] border-gray-300 py-10">
          {features.map((feature: Feature) => (
            <div key={feature.name} className="max-w-64 text-center">
              <Image
                src={feature.src}
                alt={feature.name}
                width={50}
                height={50}
                className="mx-auto"
              />
              <p className="text-gray-700">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <div className="bg-white">
        <footer className="mx-auto max-w-7xl p-4">
          <div className="my-56">
            <div className="items-top flex justify-between">
              <div className="mb-10 flex flex-col justify-center text-center md:mb-0 md:w-1/2 md:text-left">
                <h1 className="mb-4 text-4xl font-extrabold leading-snug text-gray-900">
                  YOUR PAPER PASSES ANY AI DETECTION SOFTWARE, GUARANTEED
                </h1>
                <p className="mb-8 text-lg text-gray-600">
                  68% of educators are using Al detection software. We make sure
                  your paper passes every test.
                </p>
                <div className="">
                  <button className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 text-white shadow-md transition duration-300 hover:opacity-80">
                    Get started
                  </button>
                </div>
              </div>
              {/* AI Logos */}
              <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-4">
                {logos.map((logo: Logo, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={88}
                      height={88}
                    />
                    <p className="mt-2 text-center">{logo.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
