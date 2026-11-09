export interface Education {
  degree: string;
  school: string;
  location?: string;
  dates: string;
  honors?: string[];
  gpa?: string;
  details?: string[];
}
 
export const education: Education[] = [
  {
    degree: "M.S. in Computer Science",
    school: "University of Illinois Chicago",
    location: "Chicago, IL",
    dates: "Expected Dec 2027",
    details: [
      "Joint BS/MS (4+1) program",
      // Add relevant coursework, e.g. "Coursework: Query Processing on Database Systems",
    ],
  },
  {
    degree: "B.S. in Computer Science",
    school: "University of Illinois Chicago",
    location: "Chicago, IL",
    dates: "Aug 2022 - May 2026",
    honors: ["Magna Cum Laude"],
    gpa: "3.89 / 4.0",
    details: [
      "Relevant Coursework: Systems Programming, Database System, Secure Web Development, Advanced Data Structures"
    ],
  },
];
 