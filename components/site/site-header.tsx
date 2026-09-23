"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

const nav = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Customers", href: "/customers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader({
  className = "",
  solid = false,
}: {
  className?: string;
  solid?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid || scrolled
          ? "bg-charcoal-deep/95 shadow-[0_1px_24px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          : "bg-transparent"
      } ${className}`}
    >
      <div className="mx-auto flex h-[76px] max-w-screen-2xl items-center justify-between px-6 py-3 sm:px-9 lg:px-12">
        <Link
          href="/"
          className="w-[92px] sm:w-[80px]"
          aria-label="Future Point home"
        >
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors hover:text-lime ${
                isActive(item.href) ? "text-lime" : "text-white/65"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={siteContent.hero.primaryCta.href}
          className="group hidden items-center gap-2 rounded-lg border border-lime bg-lime px-4 py-3 text-[11px] font-bold uppercase tracking-[0.13em] text-charcoal-deep transition-all hover:bg-transparent hover:text-lime lg:inline-flex"
        >
          {siteContent.hero.primaryCta.label}
          <ArrowUpRight className="size-4 text-charcoal-deep transition-colors group-hover:text-lime" />
        </Link>

        <Button
          onClick={() => setMobileOpen(!mobileOpen)}
          variant="ghost"
          size="icon-lg"
          className="flex border border-white/15 text-white hover:bg-white/10 hover:text-lime lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-5 text-white" /> : <Menu className="size-5 text-white" />}
        </Button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-[76px] z-[60] h-[calc(100dvh-76px)] overflow-y-auto bg-[#18181B] lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-2 px-5 pt-8 pb-8 sm:px-8"
            aria-label="Mobile navigation"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`border-b border-white/10 px-1 py-4 text-sm font-semibold uppercase tracking-[0.16em] transition-colors hover:text-lime ${
                  isActive(item.href) ? "text-lime" : "text-white/75"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-5 border-t border-white/10 pt-6">
              <Link
                href={siteContent.hero.primaryCta.href}
                onClick={() => setMobileOpen(false)}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-lime bg-lime px-4 py-4 text-sm font-bold uppercase tracking-[0.14em] text-charcoal-deep transition-colors hover:bg-transparent hover:text-lime"
              >
                {siteContent.hero.primaryCta.label}
                <ArrowUpRight className="size-4 text-charcoal-deep transition-colors group-hover:text-lime" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
