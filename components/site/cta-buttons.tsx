"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PrimaryCta({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-lg bg-lime px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-charcoal-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-light hover:shadow-[0_12px_30px_-12px_rgba(151,197,11,0.5)] ${className ?? ""}`}
    >
      {label}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </Link>
  );
}

export function SecondaryCta({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-lg border border-charcoal/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-charcoal transition-all duration-300 hover:border-charcoal hover:bg-charcoal hover:text-white ${className ?? ""}`}
    >
      {label}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </Link>
  );
}
