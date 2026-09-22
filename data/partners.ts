export interface PartnerCategory {
  name: string;
  tagline: string;
  partners: string[];
}

export const partnerCategories: PartnerCategory[] = [
  {
    name: "Network Modernization",
    tagline: "Enterprise networking built on Cisco, H3C, F5, Huawei and Fortinet.",
    partners: ["Cisco", "H3C", "F5", "Huawei", "Fortinet"],
  },
  {
    name: "Cybersecurity",
    tagline: "Layered cybersecurity across leading platforms.",
    partners: [
      "Fortinet",
      "Palo Alto Networks",
      "Trend Micro",
      "CrowdStrike",
      "Forcepoint",
      "BeyondTrust",
    ],
  },
  {
    name: "Data Center & Storage",
    tagline: "Resilient infrastructure from Cisco, Dell, Nutanix and IBM.",
    partners: [
      "Cisco",
      "Dell Technologies",
      "Nutanix",
      "Commvault",
      "Sangfor",
      "IBM",
    ],
  },
];

export const partnerLogos: string[] = [
  "Cisco",
  "Trend Micro",
  "Palo Alto Networks",
  "Fortinet",
  "Huawei",
  "Commvault",
  "H3C",
  "CrowdStrike",
  "Dell Technologies",
  "Forcepoint",
  "Nutanix",
  "Sangfor",
  "IBM",
  "F5",
  "BeyondTrust",
];

export const confirmedPartnerTiers: Record<string, string> = {
  "Dell Technologies": "Gold Partner",
  Cisco: "Advanced Specializations",
  Huawei: "Silver Partner 2026",
  Meraki: "Authorized Partner",
};
