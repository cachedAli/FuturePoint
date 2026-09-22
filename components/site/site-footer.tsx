"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { Logo } from "./logo";

const EASE = [0.22, 1, 0.36, 1] as const;

function SocialIcon({ name, className }: { name: string; className?: string }) {
  const base = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className,
  };

  switch (name) {
    case "LinkedIn":
      return (
        <svg {...base}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 10v7" />
          <path d="M7 7v.01" />
          <path d="M11 17v-4a2 2 0 0 1 4 0v4" />
          <path d="M11 17v-7" />
        </svg>
      );
    case "Twitter / X":
      return (
        <svg {...base}>
          <path d="M4 4l16 16" />
          <path d="M20 4L4 20" />
        </svg>
      );
    case "Facebook":
      return (
        <svg {...base}>
          <path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg {...base}>
          <rect x="3" y="6" width="18" height="12" rx="3" />
          <path d="M10 9.5l5 2.5-5 2.5z" />
        </svg>
      );
    default:
      return null;
  }
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="inline-block text-sm text-[#a8a69c] transition-[color,transform] duration-150 ease-out hover:translate-x-1 hover:text-lime"
      >
        {children}
      </Link>
    </li>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#232320] py-1 md:border-none md:py-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-3 text-left md:cursor-default md:py-0"
      >
        <h3 className="text-xs font-semibold uppercase tracking-[0.05em] text-[#55534c]">
          {title}
        </h3>
        <ChevronDown
          className={`size-4 text-[#55534c] transition-transform duration-200 md:hidden ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div className={`${open ? "pb-3" : "hidden"} md:block md:pb-0`}>
        <ul className="space-y-2.5 pt-1 md:pt-4">{children}</ul>
      </div>
    </div>
  );
}

function ContactColumn() {
  const { footer } = siteContent;
  const cities = footer.offices.map((o) => o.city.replace(/\s*\(.*\)/, ""));

  return (
    <>
      <li>
        <Link
          href="/contact"
          className="text-sm font-semibold text-lime transition-colors hover:text-lime-light"
        >
          Talk to an Expert
        </Link>
      </li>
      <li>
        <a
          href={`mailto:${footer.contact.email}`}
          className="text-sm font-semibold text-lime transition-colors hover:text-lime-light"
        >
          {footer.contact.email}
        </a>
      </li>
      <li className="flex flex-wrap gap-x-3 gap-y-1 pt-1 text-xs leading-relaxed text-[#55534c]">
        {cities.map((city) => (
          <span key={city}>{city}</span>
        ))}
      </li>
    </>
  );
}

export function SiteFooter() {
  const reduce = useReducedMotion();
  const { footer } = siteContent;

  return (
    <motion.footer
      initial={{ opacity: 0, y: reduce ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
      className="bg-[#111110]"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="lg:flex lg:gap-16">
          <div className="lg:w-[30%]">
            <Logo className="w-[150px]" />
          </div>

          <div className="mt-10 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr_0.8fr]">
              <FooterColumn title="Solutions">
                {footer.solutions.map((item) => (
                  <FooterLink key={item.href} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
              </FooterColumn>

              <FooterColumn title="Company">
                {footer.company.map((item) => (
                  <FooterLink key={item.href} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
              </FooterColumn>

              <FooterColumn title="Resources">
                {footer.resources.map((item) => (
                  <FooterLink key={item.href} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
              </FooterColumn>

              <FooterColumn title="Follow">
                {footer.social.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#a8a69c] transition-colors hover:text-lime"
                    >
                      <SocialIcon name={item.label} className="size-4" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </FooterColumn>

              <FooterColumn title="Contact">
                <ContactColumn />
              </FooterColumn>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="footer-dotdivider" />
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="text-xs text-[#55534c]">
          &copy; {new Date().getFullYear()} Future Point. All rights reserved.
        </p>
        <a
          href="https://cachedali.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-[10px] text-[#a8a69c] transition-colors hover:text-white"
          aria-label="Made by CachedAli"
        >
          Made with <Heart className="text-red-500 size-3" /> by
          <Image
            src="/developer/cachedAli.png"
            alt="CachedAli"
            width={54}
            height={24}
            className=" object-contain transition-[filter] duration-200 group-hover:grayscale"
          />
        </a>
      </div>
    </motion.footer>
  );
}
