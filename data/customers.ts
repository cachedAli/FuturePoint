export type CustomerCategory =
  | "Financial"
  | "Public Sector"
  | "Telecom"
  | "Enterprise";

export interface Customer {
  name: string;
  slug: string;
  category: CustomerCategory;
  logoFile: string | null;
  featured?: boolean;
  unverified?: boolean;
}

export const customerFilters: Array<"All" | CustomerCategory> = [
  "All",
  "Financial",
  "Public Sector",
  "Telecom",
  "Enterprise",
];

export const customers: Customer[] = [
  { name: "State Bank of Pakistan", slug: "state-bank-of-pakistan", category: "Public Sector", logoFile: "/logos/customers/state-bank-of-pakistan.webp", featured: true },
  { name: "HBL", slug: "hbl", category: "Financial", logoFile: "/logos/customers/hbl.png", featured: true },
  { name: "MCB", slug: "mcb", category: "Financial", logoFile: "/logos/customers/mcb.png", featured: true },
  { name: "Meezan Bank", slug: "meezan-bank", category: "Financial", logoFile: "/logos/customers/meezan-bank.png", featured: true },
  { name: "Euronet Worldwide", slug: "euronet-worldwide", category: "Enterprise", logoFile: "/logos/customers/euronet-worldwide.png" },
  { name: "UBL", slug: "ubl", category: "Financial", logoFile: "/logos/customers/ubl.webp", featured: true },
  { name: "LUMS", slug: "lums", category: "Enterprise", logoFile: "/logos/customers/lums.svg", featured: true },
  { name: "MCB Islamic Bank", slug: "mcb-islamic-bank", category: "Financial", logoFile: "/logos/customers/mcb-islamic-bank.png" },
  { name: "NBP", slug: "nbp", category: "Financial", logoFile: "/logos/customers/nbp.png", featured: true },
  { name: "FINCA Microfinance Bank", slug: "finca-microfinance-bank", category: "Financial", logoFile: "/logos/customers/finca-microfinance-bank.png" },
  { name: "Virtual University of Pakistan", slug: "virtual-university-of-pakistan", category: "Public Sector", logoFile: "/logos/customers/virtual-university-of-pakistan.png" },
  { name: "PLRA", slug: "plra", category: "Public Sector", logoFile: "/logos/customers/plra.png" },
  { name: "PITB", slug: "pitb", category: "Public Sector", logoFile: "/logos/customers/pitb.png" },
  { name: "Bank of Punjab", slug: "bank-of-punjab", category: "Financial", logoFile: "/logos/customers/bank-of-punjab.png", featured: true },
  { name: "IBA", slug: "iba", category: "Public Sector", logoFile: "/logos/customers/iba.png" },
  { name: "Allied Bank", slug: "allied-bank", category: "Financial", logoFile: "/logos/customers/allied-bank.png", featured: true },
  { name: "PSCA", slug: "psca", category: "Public Sector", logoFile: "/logos/customers/psca.png" },
  { name: "PTCL", slug: "ptcl", category: "Telecom", logoFile: "/logos/customers/ptcl.png", featured: true },
  { name: "Transworld", slug: "transworld", category: "Telecom", logoFile: "/logos/customers/transworld.png" },
  { name: "NCA", slug: "nca", category: "Public Sector", logoFile: "/logos/customers/nca.png" },
  { name: "Multinet", slug: "multinet", category: "Telecom", logoFile: "/logos/customers/multinet.png" },
  { name: "NAVTTC", slug: "navttc", category: "Public Sector", logoFile: "/logos/customers/navttc.png" },
  { name: "Abbott", slug: "abbott", category: "Enterprise", logoFile: "/logos/customers/abbott.svg" },
  { name: "SSC", slug: "ssc", category: "Enterprise", logoFile: "/logos/customers/ssc.png" },
  { name: "Nishat Group", slug: "nishat-group", category: "Enterprise", logoFile: "/logos/customers/nishat-group.png", featured: true },
  { name: "Hyundai", slug: "hyundai", category: "Enterprise", logoFile: "/logos/customers/hyundai.png", featured: true },
  { name: "DHA Lahore", slug: "dha-lahore", category: "Public Sector", logoFile: "/logos/customers/dha-lahore.png", featured: true },
  { name: "BAT", slug: "bat", category: "Enterprise", logoFile: "/logos/customers/bat.png", featured: true },
  { name: "Mindbridge", slug: "mindbridge", category: "Enterprise", logoFile: "/logos/customers/mindbridge.jpg" },
  { name: "DG Cement", slug: "dg-cement", category: "Enterprise", logoFile: "/logos/customers/dg-cement.webp" },
  { name: "DP World", slug: "dp-world", category: "Enterprise", logoFile: "/logos/customers/dp-world.webp", featured: true },
  { name: "Gourmet Foods", slug: "gourmet-foods", category: "Enterprise", logoFile: "/logos/customers/gourmet-foods.png" },
  { name: "Bata", slug: "bata", category: "Enterprise", logoFile: "/logos/customers/bata.png" },
  { name: "Inbox", slug: "inbox", category: "Enterprise", logoFile: "/logos/customers/inbox.png" },
  { name: "Afiniti", slug: "afiniti", category: "Enterprise", logoFile: "/logos/customers/afiniti.png" },
  { name: "Descon", slug: "descon", category: "Enterprise", logoFile: "/logos/customers/descon.png" },
  { name: "KFC", slug: "kfc", category: "Enterprise", logoFile: "/logos/customers/kfc.png", featured: true },
  { name: "Maple Leaf Cement", slug: "maple-leaf-cement", category: "Enterprise", logoFile: "/logos/customers/maple-leaf-cement.png" },
  { name: "Fatima Group", slug: "fatima-group", category: "Enterprise", logoFile: "/logos/customers/fatima-group.png" },
  { name: "IBEX Global", slug: "ibex-global", category: "Enterprise", logoFile: "/logos/customers/ibex-global.png" },
  { name: "Daraz", slug: "daraz", category: "Enterprise", logoFile: "/logos/customers/daraz.png", featured: true },
  { name: "Systems Limited", slug: "systems-limited", category: "Enterprise", logoFile: "/logos/customers/systems-limited.png" },
  { name: "TPL Corp", slug: "tpl-corp", category: "Enterprise", logoFile: "/logos/customers/tpl-corp.png" },
  { name: "Hutchison Ports Pakistan", slug: "hutchison-ports-pakistan", category: "Enterprise", logoFile: "/logos/customers/hutchison-ports-pakistan.png" },
  { name: "Izhar", slug: "izhar", category: "Enterprise", logoFile: "/logos/customers/izhar.png" },
];

export type EngagementCategory =
  | "networks"
  | "cybersecurity"
  | "managed-services"
  | "data-center";

export interface Engagement {
  customer: string;
  project: string;
  category: EngagementCategory;
  logoFile: string | null;
}

export const engagementCategories: Array<{
  id: EngagementCategory;
  label: string;
  solutionLabel: string;
  href: string;
}> = [
  {
    id: "networks",
    label: "Networks",
    solutionLabel: "Networks & Infrastructure",
    href: "/solutions/networks-infrastructure",
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    solutionLabel: "Cybersecurity",
    href: "/solutions/cybersecurity",
  },
  {
    id: "managed-services",
    label: "Managed Services",
    solutionLabel: "Managed Services",
    href: "/solutions/managed-services",
  },
  {
    id: "data-center",
    label: "Data Center",
    solutionLabel: "Data Center & Storage",
    href: "/solutions/data-center-storage",
  },
];

export const engagements: Engagement[] = [
  { customer: "Allied Bank", project: "Cisco SD-WAN", category: "networks", logoFile: "/logos/customers/allied-bank.png" },
  { customer: "SNGPL", project: "Cisco SD-WAN", category: "networks", logoFile: "/logos/customers/sngpl.png" },
  { customer: "DGKC", project: "Fortinet SD-WAN", category: "networks", logoFile: "/logos/customers/dg-cement.webp" },
  { customer: "J-ISP", project: "Cisco Intersight", category: "networks", logoFile: null },
  { customer: "Afiniti", project: "Video Call Center", category: "networks", logoFile: "/logos/customers/afiniti.png" },
  { customer: "Telenor Pakistan", project: "300-seat IPCC", category: "managed-services", logoFile: "/logos/customers/telenor-pakistan.png" },
  { customer: "PITB", project: "Kiosk Project", category: "managed-services", logoFile: "/logos/customers/pitb.png" },
  { customer: "TWA", project: "MS Contract", category: "managed-services", logoFile: "/logos/customers/transworld.png" },
  { customer: "PTCL", project: "MS Contract", category: "managed-services", logoFile: "/logos/customers/ptcl.png" },
  { customer: "BOP", project: "Cisco NDR", category: "managed-services", logoFile: "/logos/customers/bank-of-punjab.png" },
  { customer: "BOP", project: "Cisco NDR", category: "cybersecurity", logoFile: "/logos/customers/bank-of-punjab.png" },
  { customer: "SBP", project: "Cisco MFA", category: "cybersecurity", logoFile: "/logos/customers/state-bank-of-pakistan.webp" },
  { customer: "Mindbridge", project: "BeyondTrust PAM", category: "cybersecurity", logoFile: "/logos/customers/mindbridge.jpg" },
  { customer: "DGKC", project: "Trend Micro XDR", category: "cybersecurity", logoFile: "/logos/customers/dg-cement.webp" },
  { customer: "DHA Lahore", project: "Trend Micro Server Security", category: "cybersecurity", logoFile: "/logos/customers/dha-lahore.png" },
  { customer: "SNGPL", project: "Forti Email", category: "cybersecurity", logoFile: "/logos/customers/sngpl.png" },
  { customer: "PLRA", project: "Citrix WAF", category: "cybersecurity", logoFile: "/logos/customers/plra.png" },
  { customer: "PSCA", project: "Dell VxRail", category: "data-center", logoFile: "/logos/customers/psca.png" },
  { customer: "Mindbridge", project: "Cisco HyperFlex, Dell EMC PowerStore", category: "data-center", logoFile: "/logos/customers/mindbridge.jpg" },
  { customer: "BOP", project: "Cisco UCSX", category: "data-center", logoFile: "/logos/customers/bank-of-punjab.png" },
  { customer: "Meezan Bank", project: "Cisco UCSX", category: "data-center", logoFile: "/logos/customers/meezan-bank.png" },
  { customer: "SNGPL", project: "Huawei Block Storage", category: "data-center", logoFile: "/logos/customers/sngpl.png" },
  { customer: "DGKC", project: "Dell EMC PowerStore", category: "data-center", logoFile: "/logos/customers/dg-cement.webp" },
];
