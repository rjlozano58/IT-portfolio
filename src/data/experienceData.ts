export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Swift Programming Instructor",
    company: "Sandbox - Apple Community Education Initiative",
    dates: "Jun 2025 - Present",
    description: [
      "Provide on-site technical support as the go-to for 70+ students’ device issues, resolving hardware, software, and connectivity problems.",
      "Manage inventory and check-out of 100+ MacBooks and iPads, keeping accurate device loan records and contracts.",
      "Taught multiple 8-week Swift and SwiftUI courses, achieving a 100% pass rate on the Swift Associate certification exam.",
      
    ]
  },
  {
    title: "Data Analyst Intern",
    company: "Google",
    dates: "Jul 2024 - Aug 2024",
    description: [
      "Analyzed 50+ datasets using SQL in Google BigQuery and built Looker Studio dashboards that surfaced trends in YouTube’s user experience and growth.",
      "Developed and pitched YouShop, a YouTube e-commerce integration, to an audience of 100+, presenting market research and technical analysis.",
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "A Better Chicago",
    dates: "Jun 2024 - Jul 2024",
    description: [
      "Built a Python and Streamlit web tool integrating the Google Gemini API to estimate applicant success rates, speeding up grant review.",
      "Improved evaluation accuracy by fine-tuning AI models on records of 200+ past candidates.",
      
    ]
  },
  {
    title: "iOS Developer Intern",
    company: "Everyone Can Code - Apple Community Education Initiative",
    dates: "Sep 2023 - Dec 2023",
    description: [
      "Developed Chivi, an iOS app that helps tourists explore Chicago affordably using public transportation.",
      "Built the app in Swift as part of a team, working in Agile sprints and tracking tasks and progress in Jira, from concept through investor pitch.",
      "Gained hands-on experience in product development and presenting to stakeholders."
    ]
  }
];

