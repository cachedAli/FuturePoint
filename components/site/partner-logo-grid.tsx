"use client";

const logoMap: Record<string, string | null> = {
  Cisco: "/partners/cisco.svg",
  H3C: "/partners/h3c.png",
  Huawei: "/partners/huawei.webp",
  F5: "/partners/f5.svg",
  Fortinet: "/partners/fortinet.svg",
  "Palo Alto Networks": "/partners/palo-alto-networks.svg",
  "Trend Micro": "/partners/trend-micro.svg",
  CrowdStrike: "/partners/crowdstrike.png",
  Forcepoint: "/partners/forcepoint.png",
  BeyondTrust: "/partners/beyondtrust.png",
  Liztek: "/partners/liztek.png",
  Dahua: null,
  "Dell Technologies": "/partners/dell-technologies.svg",
  Nutanix: "/partners/nutanix.svg",
  Commvault: "/partners/commvault.png",
  Sangfor: "/partners/sangfor.png",
  IBM: "/partners/ibm.svg",
};

export function PartnerLogoGrid({
  names,
  count,
  dark = false,
}: {
  names: string[];
  count?: number;
  dark?: boolean;
}) {
  const list = count ? names.slice(0, count) : names;

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
      {list.map((name) => {
        const logo = logoMap[name];
        return (
          <div key={name} className="inline-flex items-center">
            {logo ? (
              <img
                src={logo}
                alt={name}
                className={
                  dark
                    ? `h-8 w-auto ${name === "Liztek" ? "max-w-[100px]" : "max-w-[150px]"} object-contain invert`
                    : `h-8 w-auto ${name === "Liztek" ? "max-w-[100px]" : "max-w-[150px]"} object-contain`
                }
              />
            ) : (
              <span
                className={`text-sm font-semibold uppercase tracking-[0.06em] ${
                  dark
                    ? "text-white"
                    : "text-charcoal"
                }`}
              >
                {name}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
