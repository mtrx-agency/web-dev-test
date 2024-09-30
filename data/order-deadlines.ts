export interface Deadline {
  name: string;
  value: number;
}

export const Deadlines: Deadline[] = [
  { name: "3 hours", value: 3 * 60 * 60 * 1000 },
  { name: "6 hours", value: 6 * 60 * 60 * 1000 },
  { name: "12 hours", value: 12 * 60 * 60 * 1000 },
  { name: "1 day", value: 24 * 60 * 60 * 1000 },
  { name: "2 days", value: 48 * 60 * 60 * 1000 },
  { name: "3 days", value: 72 * 60 * 60 * 1000 },
  { name: "5 days", value: 120 * 60 * 60 * 1000 },
  { name: "7 days", value: 168 * 60 * 60 * 1000 },
  { name: "10 days", value: 240 * 60 * 60 * 1000 },
  { name: "2 weeks", value: 336 * 60 * 60 * 1000 },
  { name: "1 month", value: 720 * 60 * 60 * 1000 },
  { name: "2 months", value: 1440 * 60 * 60 * 1000 },
];

export function deadlineCoeff(inMs: number) {
  const inHours = inMs / 60 / 60 / 1000;

  if (inHours <= 6) return 1.8;
  if (inHours > 6 && inHours <= 12) return 1.65;
  if (inHours > 12 && inHours <= 24) return 1.5;
  if (inHours > 24 && inHours <= 48) return 1.4;
  if (inHours > 48 && inHours <= 72) return 1.3;
  if (inHours > 72 && inHours <= 120) return 1.2;
  if (inHours > 120 && inHours <= 144) return 1.1;
  if (inHours > 144) return 1;

  return 1;
}
