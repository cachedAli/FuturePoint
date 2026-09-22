export type SolutionCapability = {
  label: string;
  summary?: string;
  image?: string;
  points: string[];
};
export type SupportTier = { num: number; title: string; text: string };

export type Solution = {
  slug: string;
  title: string;
  heroImage: string;
  summary: string;
  tags: string[];
  hero: {
    headline: string;
    body: string;
    cta: { label: string; href: string };
  };
  challenge: string;
  capabilities: SolutionCapability[];
  ecosystem?: {
    heading: string;
    partners: string[];
    note: string;
  };
  support?: SupportTier[];
  businessOutcomes: {
    heading: string;
    outcomes: { label: string; text: string }[];
    needsConfirmation?: boolean;
  };
  relatedSolutions: string[];
  customerProof: string[];
  finalCta: { headline: string; subhead: string };
};

export const solutions: Solution[] = [
  {
    slug: "networks-infrastructure",
    title: "Networks & Infrastructure",
    heroImage: "/networkInfra.jpg",
    summary:
      "Modern, secure network foundations for hybrid and mobile-first organizations.",
    tags: ["Networking", "SD-WAN", "Connectivity"],
    hero: {
      headline: "Network Modernization, Built Secure From the Ground Up",
      body: "Whatever it’s proactively preventing network disruptions, modernizing for a mobile and cloud-driven world, or managing Wi-Fi day to day — Future Point is the trusted partner organizations turn to first.",
      cta: { label: "Talk to a Network Specialist", href: "/contact" },
    },
    challenge:
      "Growing organizations need networks that scale with AI-driven workloads, stay secure by design, and keep distributed teams connected — without constant firefighting.",
    capabilities: [
      {
        label: "Network Modernization Services",
        image: "/solutions/Lan.jpg",
        points: ["AI Networking", "Secure Campus", "Secure Routers / SD-WAN", "Smart Switches", "Enterprise Wireless", "Industrial Networking"],
      },
      {
        label: "Computing",
        image: "/solutions/compute.jpg",
        points: ["Converged Infrastructure", "Hybrid Cloud", "Hyperconverged", "Virtual Desktop Infrastructure", "Data Storage & Backup Solutions", "Edge, AI & Rack Servers", "Virtualization"],
      },
      {
        label: "Collaboration",
        image: "/solutions/Wan.jpg",
        points: ["IP Telephony", "AI-enabled IP Contact Center Solution", "Intelligent Workspaces"],
      },
      {
        label: "Observability",
        image: "/solutions/automation.jpg",
        points: ["Application Observability", "Business Observability", "Digital Experience", "Infrastructure Observability", "Log Analytics"],
      },
    ],
    ecosystem: {
      heading: "Built on Proven Platforms.",
      partners: ["Cisco", "H3C", "Dell Technologies", "Nutanix", "F5"],
      note: "Certified engineering across the vendors that power modern network infrastructure.",
    },
    businessOutcomes: {
      heading: "What This Means for Your Business.",
      // [CLIENT CONFIRMATION REQUIRED] replace with real metrics if available
      needsConfirmation: true,
      outcomes: [
        {
          label: "Fewer Disruptions",
          text: "Fewer unplanned disruptions across campus and branch.",
        },
        {
          label: "Faster Troubleshooting",
          text: "Faster troubleshooting with proactive monitoring and automation.",
        },
        {
          label: "Built to Scale",
          text: "Infrastructure that scales as your organization grows.",
        },
      ],
    },
    relatedSolutions: ["data-center-storage", "managed-services"],
    customerProof: [
      "Cisco SD-WAN | Allied Bank",
      "Cisco SD-WAN | SNGPL",
      "Fortinet SD-WAN | DGKC",
      "Cisco Intersight | J-ISP",
      "Video Call Center | Afiniti",
    ],
    finalCta: {
      headline: "Talk to a Network Specialist",
      subhead:
        "Talk to our team about modernizing your network, wireless, or infrastructure environment.",
    },
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    heroImage: "/cybersecurity.jpg",
    summary:
      "Defense-in-depth that protects data, users, and infrastructure across every layer of the stack.",
    tags: ["Security", "Zero Trust", "SOC"],
    hero: {
      headline: "Your Digital Fortress, Our Expertise",
      body: "Protecting digital assets is not just a necessity, it’s a fundamental responsibility. Our cybersecurity strategy is rooted in proactive defense, continuous innovation, and best-in-class practices.",
      cta: { label: "Talk to a Security Specialist", href: "/contact" },
    },
    challenge:
      "In an increasingly interconnected world, digital environments face an ever-evolving landscape of cyber threats — from targeted attacks to internal data exposure.",
    capabilities: [
      {
        label: "Detect & Respond",
        image: "/solutions/detectAndRespond.jpg",
        points: ["MDR", "XDR", "EDR", "NDR", "SIEM", "SOAR"],
      },
      {
        label: "Access & Identity",
        image: "/solutions/access.jpg",
        points: ["MFA", "PAM", "NAC", "SASE"],
      },
      {
        label: "Network & Perimeter",
        image: "/solutions/networkAndPerimteter.jpg",
        points: ["NGFW", "WAF", "DNS Security", "Sandbox"],
      },
      {
        label: "Data & Endpoint",
        image: "/solutions/DataEndpoint.jpg",
        points: [
          "DLP",
          "Server Security",
          "Web Security",
          "Email Security",
          "MDM",
        ],
      },
    ],
    ecosystem: {
      heading: "Built on Proven Platforms.",
      partners: [
        "Trend Micro",
        "Palo Alto Networks",
        "Fortinet",
        "CrowdStrike",
        "Forcepoint",
        "BeyondTrust",
      ],
      note: "Certified engineering across the vendors that power modern security operations.",
    },
    businessOutcomes: {
      heading: "What This Means for Your Business.",
      needsConfirmation: true,
      outcomes: [
        {
          label: "Faster Detection",
          text: "Faster detection and response to threats across your estate.",
        },
        {
          label: "Audit-Ready Evidence",
          text: "Audit-ready evidence instead of last-minute scrambles.",
        },
        {
          label: "Risk, Prioritized",
          text: "Risk reduced where it matters most, not where it scores well.",
        },
      ],
    },
    relatedSolutions: ["managed-services", "networks-infrastructure"],
    customerProof: [
      "Cisco NDR | BOP",
      "Cisco MFA | SBP",
      "BeyondTrust PAM | Mindbridge",
      "TrendMicro XDR | DGKC",
      "TrendMicro Server Security | DHA Lahore",
      "Forti Email | SNGPL",
      "Citrix WAF | PLRA",
    ],
    finalCta: {
      headline: "Talk to a Security Specialist",
      subhead:
        "Talk to our team about building a security program attackers and auditors both take seriously.",
    },
  },
  {
    slug: "managed-services",
    title: "Managed Services",
    heroImage: "/managedServices.jpg",
    summary:
      "A right-sized operations partner that keeps your environment healthy, patched, and accountable.",
    tags: ["Managed", "Support", "Operations"],
    hero: {
      headline: "IT That Runs Itself: Monitored, Managed, Secured, 24x7",
      body: "Delivering a successful project is only the beginning. Our support structure is built to keep your operations secure, stable and optimized around the clock, 24/7/365.",
      cta: { label: "Talk to a Managed Services Specialist", href: "/contact" },
    },
    challenge:
      "Internal teams can’t realistically staff round-the-clock monitoring, compliance tracking and vendor coordination alone — and unplanned downtime is expensive.",
    capabilities: [
      {
        label: "Monitoring & Operations",
        image: "/solutions/monitoringOperations.jpg",
        points: [
          "Managed IT Services (Workstation & Servers)",
          "Managed NOC",
          "Managed SOC",
          "HelpDesk Support",
        ],
      },
      {
        label: "Governance & Advisory",
        image: "/solutions/governace.jpg",
        points: [
          "Virtual CIO",
          "Virtual CISO",
          "Managed Compliance",
          "ITSM",
        ],
      },
    ],
    support: [
      {
        num: 1,
        title: "Helpdesk",
        text: "First line of support for users and common incidents, triaged and resolved fast.",
      },
      {
        num: 2,
        title: "Technical Expertise Desk",
        text: "Senior engineers for deeper technical issues across network, security, and infrastructure.",
      },
      {
        num: 3,
        title: "Engineering & Vendor Liaison",
        text: "Escalation into engineering and direct coordination with technology vendors on your behalf.",
      },
      {
        num: 4,
        title: "CIRT",
        text: "Computer Incident Response Team for security events, containment, and recovery.",
      },
    ],
    businessOutcomes: {
      heading: "What This Means for Your Business.",
      outcomes: [
        {
          label: "15-Minute Response",
          text: "Response times as low as 15 minutes for critical issues.",
        },
        {
          label: "24/7/365 Monitoring",
          text: "24x7x365 monitoring across your estate.",
        },
        {
          label: "Guaranteed Resolution",
          text: "Guaranteed resolution or escalation windows.",
        },
      ],
    },
    relatedSolutions: ["networks-infrastructure", "cybersecurity"],
    customerProof: [
      "300-seat IPCC | Telenor Pakistan",
      "Kiosk Project | PITB",
      "MS Contract | TWA",
      "MS Contract | PTCL",
      "Cisco NDR | BOP",
    ],
    finalCta: {
      headline: "Talk to a Managed Services Specialist",
      subhead:
        "Talk to our team about taking operational ownership of your IT environment.",
    },
  },
  {
    slug: "data-center-storage",
    title: "Data Center & Storage",
    heroImage: "/dataCenter.jpg",
    summary:
      "Resilient, scalable infrastructure for the workloads your business can’t afford to lose.",
    tags: ["Data Center", "Storage", "Virtualization"],
    hero: {
      headline: "Resilient, Scalable Infrastructure for Mission-Critical Workloads",
      body: "Modernize storage and compute without disrupting the systems your business runs on today.",
      cta: { label: "Talk to a Data Center Specialist", href: "/contact" },
    },
    challenge:
      "Growing data volumes and always-on expectations mean legacy storage and compute can’t keep up — but replacing it can’t come at the cost of downtime.",
    capabilities: [
      {
        label: "Storage & Backup",
        image: "/solutions/storageBackup.jpg",
        points: [
          "Data Storage",
          "Data Recovery & Backup Solutions",
        ],
      },
      {
        label: "Virtualization & HCI",
        image: "/solutions/Virtualization.jpg",
        points: [
          "Hyperconverged Infrastructure",
          "Virtualization",
          "Converged Infrastructure",
        ],
      },
      {
        label: "Compute",
        image: "/solutions/compute.jpg",
        points: [
          "Servers",
          "Edge, AI & Rack Servers",
        ],
      },
    ],
    ecosystem: {
      heading: "Built on Proven Platforms.",
      partners: ["Dell Technologies", "Nutanix", "Commvault", "Sangfor", "IBM"],
      note: "Certified engineering across the vendors behind modern data centers.",
    },
    businessOutcomes: {
      heading: "What This Means for Your Business.",
      needsConfirmation: true,
      outcomes: [
        {
          label: "Always Available",
          text: "Data that stays available through failure and growth.",
        },
        {
          label: "Provable Recovery",
          text: "Recovery you can prove, not just hope for.",
        },
        {
          label: "Scales Without Forklift",
          text: "A core that scales without forklift upgrades.",
        },
      ],
    },
    relatedSolutions: ["networks-infrastructure", "managed-services"],
    customerProof: [
      "Dell VX Rail | PSCA",
      "Cisco Hyperflex | Mind Bridge",
      "Cisco UCSX | BOP, Meezan Bank",
      "Huawei Block Storage | SNGPL",
      "Dell EMC Power Store | DGKC & MB",
    ],
    finalCta: {
      headline: "Talk to a Data Center Specialist",
      subhead:
        "Talk to our team about modernizing your compute, storage, and backup environment.",
    },
  },
];

export const solutionMap: Record<string, Solution> = Object.fromEntries(
  solutions.map((s) => [s.slug, s]),
);

export const solutionSlugs = solutions.map((s) => s.slug);

export const hubContent = {
  eyebrow: "SOLUTIONS",
  headline: "IT Solutions Built for Complex Enterprise Needs",
  intro:
    "Future Point delivers four integrated solution areas, not four separate vendors bolted together. Whatever the starting point, every engagement is backed by the same certified team and delivery methodology.",
};
