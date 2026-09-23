export const siteContent = {
  company: {
    name: "Future Point",
    tagline: "Innovate, Integrate & Inspire",
    description:
      "Future Point is a Pakistan-based IT Systems Integrator delivering Networks, Cybersecurity, Data Center and Managed Services.",
  },
  hero: {
    headline: "Simplifying complex IT systems for smarter business outcomes.",
    subheadline:
      "Future Point is an IT Systems Integrator delivering Networks, Cybersecurity, Data Center and Managed Services.",
    primaryCta: { label: "Contact Us", href: "/contact" },
    secondaryCta: { label: "Explore Solutions", href: "/solutions" },
  },
  proofStrip: [
    { target: 500, suffix: "+", label: "Projects delivered nationally and internationally" },
    { target: 4, suffix: "", label: "Offices in Lahore, Karachi, Islamabad & Dubai" },
    { target: 3, suffix: "x ", suffixAccent: "CCIE", label: "Certified architects on the team" },
    { target: 9, suffix: "", label: "Vendor awards from Cisco, Huawei, Dell & Meraki" },
  ],
  whatWeDo: {
    heading: "Intelligent IT Integration",
    intro: "At Future Point, we believe true innovation begins with intelligent integration. Our IT integration services connect diverse systems, applications, and technologies so organizations operate more efficiently and make smarter, data-driven decisions.",
    details: [
      "By leveraging advanced methodologies and industry best practices, we help businesses enhance agility and accelerate digital transformation.",
    ],
  },
  whyFuturePoint: {
    heading: "Why Future Point",
    values: [
      {
        title: "Expertise & Reach",
        description:
          "From employee training to regulatory compliance, we build security and resilience into every engagement.",
      },
      {
        title: "Turnkey Solutions",
        description:
          "We own the full project lifecycle: requirements, deployment, training and support.",
      },
      {
        title: "Customer-Centric Approach",
        description:
          "We don\u2019t just deliver projects. We deliver outcomes aligned to your goals and your users.",
      },
      {
        title: "Proven Methodology",
        description:
          "A 6-phase delivery process, security-first at every stage.",
      },
    ],
  },
  technologyEcosystem: {
    eyebrow: "Technology Ecosystem",
    heading: "Built on technology from leading enterprise platforms.",
    body: "Future Point works across a trusted ecosystem of technology partners to design, integrate and manage secure, resilient IT environments.",
  },
  customersPreview: {
    eyebrow: "Trusted By",
    heading: "Trusted by Leading Organizations",
    body: "500+ projects delivered across banking, telecom, public sector and enterprise.",
    cta: { label: "View Customers & Case Studies", href: "/customers" },
  },
  methodology: {
    heading: "A Process Built for Certainty",
    steps: [
      {
        title: "Discovery & Requirement Gathering",
        description:
          "A clear and validated set of business, technical and security requirements.",
      },
      {
        title: "Planning & Design",
        description:
          "A detailed project plan and solution design, approved by all stakeholders.",
      },
      {
        title: "Implementation & Integration",
        description:
          "Fully operational and securely integrated systems, with minimal business disruption.",
      },
      {
        title: "Testing & Quality Assurance",
        description:
          "A robust, secure and tested solution ready for production.",
      },
      {
        title: "Training & Knowledge Transfer",
        description:
          "Empowered client teams with full operational understanding.",
      },
      {
        title: "Go-Live & Support",
        description:
          "A seamless transition with continuous support and optimization options.",
      },
    ],
  },
  support: {
    heading: "World-Class Support. Always On. Always Secure.",
    metrics: [{ target: 15, suffix: " min", label: "Critical issue response" }],
    badges: [
      { text: "24×7×365", label: "NOC / SOC monitoring" },
      { text: "Monthly", label: "Performance reporting" },
      { text: "Quarterly", label: "Business reviews" },
    ],
    tiers: [
      {
        tier: "Tier 1",
        title: "Helpdesk Support",
        description: "First point of contact, immediate assistance.",
      },
      {
        tier: "Tier 2",
        title: "Technical Expertise Desk",
        description:
          "Complex infrastructure, security configuration and integration issues.",
      },
      {
        tier: "Tier 3",
        title: "Engineering & Vendor Liaison",
        description: "Senior architects, root-cause analysis and OEM coordination.",
      },
      {
        tier: "Tier 4",
        title: "Cybersecurity Incident Response Team (CIRT)",
        description: "Real-time threats, breaches and forensic investigation.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Let's Talk",
    heading: "Ready to simplify your IT?",
    body: "Talk to our team about your network, security, infrastructure, or managed services needs.",
    cta: { label: "Contact Us", href: "/contact" },
  },
  footer: {
    solutions: [
      { label: "Networks & Infrastructure", href: "/solutions/networks-infrastructure" },
      { label: "Cybersecurity", href: "/solutions/cybersecurity" },
      { label: "Managed Services", href: "/solutions/managed-services" },
      { label: "Data Center & Storage", href: "/solutions/data-center-storage" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/about#team" },
      { label: "Awards", href: "/about#certifications" },
      { label: "CSR", href: "/about#csr" },
    ],
    resources: [
      { label: "Customers", href: "/customers" },
      { label: "Services", href: "/services" },
    ],
    offices: [
      {
        city: "Lahore (Head Office)",
        address: "19A, Ahmad Block Garden Town Lahore",
      },
      {
        city: "Karachi (Branch Office)",
        address: "A-2/3 West Land Trade Center, Jinnah Housing Society PECHS, Shahrah-e-Faisal Karachi",
      },
      {
        city: "Islamabad (Branch Office)",
        address: "Office number 312, 3rd floor Lord Trade Center F11, Markaz Islamabad",
      },
      {
        city: "Dubai",
        address: "FPS Technologies L.L.C., PO Box 237798, Dubai, United Arab Emirates",
      },
    ],
    contact: {
      email: "sales@futurepointt.com",
      phone: "+92 42 5846691-2",
    },
    social: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/future-point-technologies" },
      { label: "Twitter / X", href: "https://twitter.com/FuturePoint17" },
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100084498926966" },
      { label: "YouTube", href: "https://www.youtube.com/channel/UCcpGKTYiQkdcQW6U8p3MSHA" },
    ],
  },
} as const;
