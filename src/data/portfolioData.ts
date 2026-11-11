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
    tags: ["Ubuntu Server", "Docker", "CasaOS", "OpenSSH", "Tailscale", "Bash"],
    details: {
      challenge: "I wanted to own my media, photos, and data instead of paying for multiple subscriptions and relying on third-party cloud services, using hardware I already had. That meant turning an old laptop into a reliable, always-on server that others could use securely from anywhere..",
      solution: "I repurposed a laptop into an Ubuntu Linux server and deployed containerized services with Docker and CasaOS: Jellyfin for media, Immich for photo backups, Audiobookshelf for audiobooks, and Navidrome for music. I set up secure remote administration through OpenSSH and a Tailscale VPN, published services to the internet through Cloudflare, and am deploying AdGuard Home for network-wide, DNS-level ad blocking. I also wrote Bash scripts that shut the server down safely at signs of overheating or compromise.",
      impact: [
        "Hosts services used by family and friends, allowing others to save money on media.",
        "Kept services available by troubleshooting network, hardware, and software issues to the root cause, keeping the server running since June 2026.",
        "Built hands-on Linux administration, containerization, networking, and remote-access skills that I now apply to help desk and IT support work."
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
