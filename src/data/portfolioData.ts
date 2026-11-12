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
  {
    id: 4,
    title: "Summers with Everyone Can Code - From Teaching Assistant to Instructor",
    summary: "I first joined Everyone Can Code as a student in its AI + Entrepreneurship program in 2023. That led to an iOS Developer Internship, where my team built Chivi, an app for exploring Chicago by public transit, and deployed it to the App Store. The program gave me my start in tech, so I came back to give that same start to others: first as a Teaching Assistant in summer 2025, then as a Swift Instructor leading my own cohort in summer 2026.",
    images: [
       "storybloom_at_apple.jpeg", "storybloom_and_me.jpeg", "/ecc_2026\ showcase.jpeg"
    ],
    tags: ["Leading", "Public Speaking", "Presentation Skills", "Captivating an Audience"],
    details: {
      challenge: "Many students in the program were building their first iOS app, often with little or no coding experience, in a single summer. Beyond learning Swift, they had to work as a team, turn an idea into a working product, and pitch it confidently in front of large audiences, including at Apple events.",
      solution: "As a Teaching Assistant, I supported students one-on-one, troubleshooting their code and devices and explaining concepts in plain language. After being promoted to Instructor, I led a summer cohort through building iOS apps in Swift and SwiftUI, guiding teams from app concept through design, development, and final presentation. I also coached students on public speaking so they could present their apps with confidence.",
      impact: [
        "Promoted from Teaching Assistant to Instructor after one summer.",
        "Coached the StoryBloom team, which won competitions and presented their app at Apple events.",
        "Led a cohort of 20 students from their first lines of Swift to finished, presentable iOS apps.",
        "Strengthened my leadership, communication, and presentation skills by teaching technical concepts to non-technical learners."
      ]
    }
  },
];
