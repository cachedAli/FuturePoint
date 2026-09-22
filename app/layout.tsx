import type { Metadata } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/site/scroll-to-top";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://futurepointt.com";
const siteDescription =
  "Future Point integrates, secures and manages critical business technology across networks, cybersecurity, data centers and managed services.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Future Point | Enterprise Technology Since 2015",
    template: "%s | Future Point",
  },
  description: siteDescription,
  applicationName: "Future Point",
  category: "Enterprise technology services",
  icons: {
    icon: "/favicon-preview.png",
    shortcut: "/favicon-preview.png",
    apple: "/favicon-preview.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteUrl,
    siteName: "Future Point",
    title: "Future Point | Enterprise Technology Since 2015",
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: "Future Point | Enterprise Technology Since 2015",
    description: siteDescription,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Future Point",
  alternateName: "Future Point Technologies",
  url: siteUrl,
  logo: `${siteUrl}/brand/FPT_Logo_HD-trans.png`,
  email: "sales@futurepointt.com",
  telephone: "+92 42 5846691-2",
  sameAs: [
    "https://www.linkedin.com/company/future-point-technologies",
    "https://twitter.com/FuturePoint17",
    "https://www.facebook.com/profile.php?id=100084498926966",
    "https://www.youtube.com/channel/UCcpGKTYiQkdcQW6U8p3MSHA",
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "19A, Ahmad Block, Garden Town",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    {
      "@type": "PostalAddress",
      streetAddress:
        "A-2/3 West Land Trade Center, Jinnah Housing Society PECHS, Shahrah-e-Faisal",
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Office 312, 3rd Floor, Lord Trade Center, F-11 Markaz",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "FPS Technologies L.L.C., PO Box 237798",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ScrollToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
