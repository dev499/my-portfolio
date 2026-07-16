import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  JetBrains_Mono,
} from "next/font/google";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["500", "600", "700", "800"],
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: `${portfolio.name} — ${portfolio.title}`,
  description: portfolio.seo.description,
  authors: [{ name: portfolio.name }],
  creator: portfolio.name,
  keywords: [...portfolio.seo.keywords],
  openGraph: {
    title: `${portfolio.name} — ${portfolio.title}`,
    description: portfolio.seo.ogDescription,
    siteName: `${portfolio.name} — Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} — ${portfolio.title}`,
    description: portfolio.seo.twitterDescription,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#070B14",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolio.name,
  jobTitle: portfolio.title,
  email: `mailto:${portfolio.email}`,
  telephone: portfolio.phoneSchema,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurgaon",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: portfolio.company,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: portfolio.seo.education,
  },
  sameAs: [portfolio.linkedin, ...(portfolio.github ? [portfolio.github] : [])],
  knowsAbout: [...portfolio.seo.knowsAbout],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":true;document.documentElement.classList.toggle("dark",d);}catch(e){document.documentElement.classList.add("dark");}})();`,
          }}
        />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
