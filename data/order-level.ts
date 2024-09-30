export interface Level {
  name: string;
  tooltip: string;
}

export const Levels: Level[] = [
  { name: "High school", tooltip: "basic assignments" },
  { name: "Undergraduate", tooltip: "college papers" },
  { name: "Postgraduate", tooltip: "advanced studies" },
  { name: "Doctoral", tooltip: "in-depth research" },
];

export function levelCoeff(level: string) {
  const coefs: Record<string, number> = {
    ["High school"]: 0.95,
    ["Undergraduate"]: 1,
    ["Postgraduate"]: 1.2,
    ["Doctoral"]: 1.3,
  };

  return coefs[level] || 1;
}
