export interface Project {
  id: number;
  title: string;
  summary: string;
  images: string[];
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    impact: string[];
  };
  externalLink?: {
    title: string;
    url: string;
  };
}
export const projects: Project[] = [
  {
    id: 1,
    title: "Self-Hosted Home Server",
    summary: "Repurposing an old laptop into a homeserver that hold movies, music, audiobooks, photos, and block ads on my home network.",
    images: [
      "/roglab_media_2.png",
      "/roglab_media_1.png",
      "/roglab_media_3.png",
      "/roglab_media_4.png",
    ],
    tags: ["buntu Server", "Docker", "CasaOS", "OpenSSH", "Tailscale", "Bash"],
    details: {
      challenge: "In a world where everything requires a subscription, we have lost the passion for physical media.",
      solution: "Designed and implemented a Power BI dashboard integrating data from Google Analytics, CRM systems, and sales records, providing real-time insights.",
      impact: [
        "Increased marketing ROI by 25% through data-driven campaign adjustments.",
        "Enhanced customer segmentation, leading to a 15% improvement in personalized recommendations and repeat purchases."
      ]
    }
  },
  {
    id: 2,
    title: "Automated Financial Reporting System",
    summary: "Created an automated ETL pipeline to streamline financial reporting, reducing manual data processing time for a financial services firm.",
    images: [
      "https://example.com/finance1.jpg",
      "https://example.com/finance2.jpg"
    ],
    tags: ["Python", "ETL", "Data Engineering", "Finance", "Power BI", "Automation"],
    details: {
      challenge: "The finance team spent excessive time manually aggregating and reconciling data from multiple sources for monthly reports.",
      solution: "Developed a Python-based ETL pipeline that extracted, cleaned, and loaded financial data into Power BI, automating report generation.",
      impact: [
        "Reduced reporting time from 5 days to a few hours, improving efficiency.",
        "Minimized errors in financial reports, ensuring data accuracy for decision-making."
      ]
    }
  }
];
