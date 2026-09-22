import Image from "next/image";

interface LogoProps { className?: string; }

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/brand/FPT_Logo_HD-trans.png"
        alt="Future Point - Innovate, Integrate & Inspire"
        width={232}
        height={72}
        priority
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
