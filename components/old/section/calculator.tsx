import OldCalculator from "@/components/old-calculator";

interface Props {
  crmURL: string;
}

export default function CalcualtorSection({ crmURL }: Props) {
  return (
    <section id="calculator" className="section-fixed">
      <div className="container-138">
        <div className="h-32"></div>
        <OldCalculator crmURL={crmURL} />
        <div className="h-32"></div>
      </div>
    </section>
  );
}
