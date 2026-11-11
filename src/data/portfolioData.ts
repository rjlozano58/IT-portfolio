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
    title: "Custom NAS & Virtualization Server",
    summary: "Building a network-attached storage and virtualization server from scratch to centralize my home lab's storage and run services as isolated virtual machines and containers.",
    images: [
      "/NAS.jpg"
    ],
    tags: ["Proxmox VE", "ZFS", "RAID 1", "Windows Server", "Virtual Machines", "Active Directory"],
    details: {
      challenge: "My home server runs on a repurposed laptop with a single drive, so one hardware failure could take down every service and lose data. I also needed a safe place to practice enterprise tools like Windows Server and Active Directory without risking the services my family uses every day.",
      solution: "I am building a dedicated NAS from scratch, installing the motherboard and core components myself, and running the Proxmox VE hypervisor to host services as isolated virtual machines and LXC containers. Storage uses a ZFS mirror (RAID 1) so data survives a drive failure, with checksums that detect and repair silent corruption, plus snapshots and backups for quick recovery. On the same platform, I am setting up a Windows Server lab with Active Directory, DNS, and Group Policy to practice user and domain management.",
      impact: [
        "Gained hands-on experience assembling server hardware and installing core components.",
        "Designed storage that tolerates a drive failure, protecting family photos, media, and backups.",
        "Created an isolated lab for practicing the Windows Server and Active Directory skills used in IT support roles."
      ]
    }
  },
  {
    id: 3,
    title: "Hardware Repairs and Upgrades",
    summary: "Diagnosing and repairing hardware, software, and performance issues on laptops and other devices for family, friends, and myself, replacing failed components and upgrading hardware to extend device life.",
    images: [
      "/hp_battery_removal.png"
    ],
    tags: ["Hardware Repair", "Hardware Upgrades", "Troubleshooting", "Machine Maintenance"],
    details: {
      challenge: "Repairs at commercial locations like Apple Stores or Best Buy can be expensive, and many people replace a device entirely when only one component has failed.",
      solution: "I take on repairs for family, friends, and myself. I diagnose the root cause of each problem, whether it is a failing battery, a broken part, or a software issue, then replace the faulty component or apply the fix. When a device is slow but still working, I upgrade parts or reinstall software to restore its performance instead of replacing it.",
      impact: [
        "Repaired both Apple and HP laptops, diagnosing failures and restoring them to working condition.",
        "Replaced failed laptop batteries and screens on both Apple and non-Apple laptops.",
        "Saved family and friends the cost of commercial repairs and new devices.",
        "Built practical, hands-on hardware troubleshooting skills I now use supporting 70+ students' devices."
      ]
    }
  },
  // {
  //   id: 4,
  //   title: "LLM Emotion Detection Research",
  //   summary: "Created an automated ETL pipeline to streamline financial reporting, reducing manual data processing time for a financial services firm.",
  //   images: [
  //     "https://example.com/finance1.jpg",
  //     "https://example.com/finance2.jpg"
  //   ],
  //   tags: ["Python", "ETL", "Data Engineering", "Finance", "Power BI", "Automation"],
  //   details: {
  //     challenge: "The finance team spent excessive time manually aggregating and reconciling data from multiple sources for monthly reports.",
  //     solution: "Developed a Python-based ETL pipeline that extracted, cleaned, and loaded financial data into Power BI, automating report generation.",
  //     impact: [
  //       "Reduced reporting time from 5 days to a few hours, improving efficiency.",
  //       "Minimized errors in financial reports, ensuring data accuracy for decision-making."
  //     ]
  //   }
  // }
];
