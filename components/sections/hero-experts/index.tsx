export default function SectionHeroExperts() {
  return (
    <div className="justify-content container hidden h-full snap-start flex-row overflow-x-scroll scrollbar-none ~mb-20/0 ~px-3/0 md:mx-auto md:flex md:h-0 md:justify-center md:overflow-x-visible">
      <div className="flex flex-row md:relative md:top-[-6.5rem] md:w-full">
        <div className="flex flex-col items-center justify-center gap-2 rounded-l-[2.5rem] border-4 border-solid border-light bg-white text-center ~h-[8.75rem]/[12.5rem] ~w-[17.5rem]/[32.5rem] md:gap-4">
          <span className="font-semibold ~text-xl/2xl">350+</span>
          <span className="font-normal ~text-sm/lg">Experts</span>
        </div>
        <div className="border-y-solid flex flex-col items-center justify-center gap-2 border-y-4 border-y-light bg-white text-center ~h-[8.75rem]/[12.5rem] ~w-[17.5rem]/[32.5rem] md:gap-4">
          <span className="font-semibold ~text-xl/2xl">130+</span>
          <span className="font-normal ~text-sm/lg">Subjects covered</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-r-[2.5rem] border-4 border-solid border-light bg-white text-center ~h-[8.75rem]/[12.5rem] ~w-[17.5rem]/[32.5rem] md:gap-4">
          <span className="font-semibold ~text-xl/2xl">280K+</span>
          <span className="font-normal ~text-sm/lg">Hours saved</span>
        </div>
      </div>
    </div>
  );
}
