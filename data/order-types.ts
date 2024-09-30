export interface TypeOfWork {
  name: string;
}

export const TypesOfWork: TypeOfWork[] = [
  { name: "Essay" },
  { name: "Research paper" },
  { name: "Annotated bibliography" },
  { name: "Article" },
  { name: "Article review" },
  { name: "Book/Movie review" },
  { name: "Business plan" },
  { name: "Case study" },
  { name: "Creative writing" },
  { name: "Discussion post" },
  { name: "Homework" },
  { name: "Journal" },
  { name: "Letter/Memo" },
  { name: "Literature review" },
  { name: "Outline" },
  { name: "Reflective writing" },
  { name: "Report" },
  { name: "Research proposal" },
  { name: "Rhetorical essay" },
  { name: "Other" },
  { name: "Admission essay" },
  { name: "Capstone assignment" },
  { name: "Coursework" },
  { name: "Group project" },
  { name: "Lab report" },
  { name: "Speech" },
  { name: "Dissertation/Thesis" },
  { name: "Term paper" },
  { name: "Presentation slides" },
];

export function typeOfWorkCoeff(typeOfWork: string) {
  const coefs: Record<string, number> = {
    ["Book/Movie review"]: 1,
    ["Creative writing"]: 1,
    ["Discussion post"]: 1,
    ["Essay"]: 1,
    ["Homework"]: 1,
    ["Journal"]: 1,
    ["Other"]: 1,
    ["Outline"]: 1,
    ["Reflective writing"]: 1,

    ["Annotated bibliography"]: 1.1,
    ["Article review"]: 1.1,
    ["Case study"]: 1.1,
    ["Letter/Memo"]: 1.1,
    ["Rhetorical essay"]: 1.1,

    ["Admission essay"]: 1.2,
    ["Capstone assignment"]: 1.2,
    ["Coursework"]: 1.2,
    ["Group project"]: 1.2,
    ["Lab report"]: 1.2,
    ["Speech"]: 1.2,
    ["Business plan"]: 1.2,
    ["Article"]: 1.2,
    ["Report"]: 1.2,

    ["Dissertation/Thesis"]: 1.3,
    ["Research paper"]: 1.3,
    ["Term paper"]: 1.3,
    ["Research proposal"]: 1.3,
    ["Literature review"]: 1.3,

    ["Presentation slides"]: 0.83,
  };

  return coefs[typeOfWork] || 1;
}
