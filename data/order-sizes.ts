export interface Size {
  name: string;
  value: number;
}

export const Sizes: Size[] = [
  { name: "1 page (275 words)", value: 1 },
  { name: "2 page (550 words)", value: 2 },
  { name: "3 page (825 words)", value: 3 },
  { name: "4 page (1100 words)", value: 4 },
  { name: "5 page (1375 words)", value: 5 },
  { name: "6 page (1650 words)", value: 6 },
  { name: "7 page (1925 words)", value: 7 },
  { name: "8 page (2200 words)", value: 8 },
  { name: "9 page (2475 words)", value: 9 },
  { name: "10 page (2750 words)", value: 10 },
  { name: "11 page (3025 words)", value: 11 },
  { name: "12 page (3300 words)", value: 12 },
  { name: "13 page (3575 words)", value: 13 },
  { name: "14 page (3850 words)", value: 14 },
  { name: "15 page (4125 words)", value: 15 },
  { name: "16 page (4400 words)", value: 16 },
  { name: "17 page (4675 words)", value: 17 },
  { name: "18 page (4950 words)", value: 18 },
  { name: "19 page (5225 words)", value: 19 },
  { name: "20 page (5500 words)", value: 20 },
  { name: "21 page (5775 words)", value: 21 },
  { name: "22 page (6050 words)", value: 22 },
  { name: "23 page (6325 words)", value: 23 },
  { name: "24 page (6600 words)", value: 24 },
  { name: "25 page (6875 words)", value: 25 },
  { name: "26 page (7150 words)", value: 26 },
  { name: "27 page (7425 words)", value: 27 },
  { name: "28 page (7700 words)", value: 28 },
  { name: "29 page (7975 words)", value: 29 },
  { name: "30 page (8250 words)", value: 30 },
  { name: "31 page (8525 words)", value: 31 },
  { name: "32 page (8800 words)", value: 32 },
  { name: "33 page (9075 words)", value: 33 },
  { name: "34 page (9350 words)", value: 34 },
  { name: "35 page (9625 words)", value: 35 },
  { name: "36 page (9900 words)", value: 36 },
  { name: "37 page (10175 words)", value: 37 },
  { name: "38 page (10450 words)", value: 38 },
  { name: "39 page (10725 words)", value: 39 },
  { name: "40 page (11000 words)", value: 40 },
  { name: "41 page (11275 words)", value: 41 },
  { name: "42 page (11550 words)", value: 42 },
  { name: "43 page (11825 words)", value: 43 },
  { name: "44 page (12100 words)", value: 44 },
  { name: "45 page (12375 words)", value: 45 },
  { name: "46 page (12650 words)", value: 46 },
  { name: "47 page (12925 words)", value: 47 },
  { name: "48 page (13200 words)", value: 48 },
  { name: "49 page (13475 words)", value: 49 },
  { name: "50 page (13750 words)", value: 50 },
];

export function discountCoef(size: number): number {
  if (!size) return 0;
  if (size < 2) return 0;
  if (size < 3) return 0.05;
  if (size < 4) return 0.1;
  if (size < 5) return 0.15;
  if (size < 6) return 0.2;
  if (size < 7) return 0.25;
  if (size < 8) return 0.25;
  if (size < 9) return 0.25;
  if (size < 10) return 0.3;
  if (size < 11) return 0.35;
  if (size < 12) return 0.35;
  if (size < 13) return 0.35;
  if (size < 14) return 0.35;
  if (size >= 14) return 0.35;

  return 0;
}
