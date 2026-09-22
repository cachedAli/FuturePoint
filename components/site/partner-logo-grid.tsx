"use client";

const logoMap: Record<string, string | null> = {
  Cisco: "/partners/cisco.svg",
  H3C: null,
  F5: "/partners/f5.svg",
  Fortinet: "/partners/fortinet.svg",
  "Palo Alto Networks": "/partners/palo-alto-networks.svg",
  "Trend Micro": "/partners/trend-micro.svg",
  CrowdStrike: null,
  Forcepoint: null,
  BeyondTrust: null,
  Dahua: null,
  "Dell Technologies": "/partners/dell-technologies.svg",
  Nutanix: "/partners/nutanix.svg",
  Commvault: null,
  Sangfor: null,
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
          <div key={name} className="group relative inline-flex cursor-default items-center pb-1.5">
            {logo ? (
              <img
                src={logo}
                alt={name}
                className={
                  dark
                    ? "h-8 w-auto max-w-[150px] object-contain opacity-70 invert transition-all duration-300 ease-out group-hover:-translate-y-px group-hover:scale-[1.02] group-hover:invert-0 group-hover:opacity-100"
                    : "h-8 w-auto max-w-[150px] object-contain opacity-60 grayscale transition-all duration-300 ease-out group-hover:-translate-y-px group-hover:scale-[1.02] group-hover:opacity-100 group-hover:grayscale-0"
                }
              />
            ) : (
              <span
                className={`text-sm font-semibold uppercase tracking-[0.06em] transition-all duration-300 ease-out group-hover:-translate-y-px ${
                  dark
                    ? "text-white/70 group-hover:text-white"
                    : "text-charcoal/55 group-hover:text-charcoal"
                }`}
              >
                {name}
              </span>
            )}
            <span className="absolute -bottom-0 left-0 h-px w-0 bg-lime transition-all duration-300 ease-out group-hover:w-full" />
          </div>
        );
      })}
    </div>
  );
}
