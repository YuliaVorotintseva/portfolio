import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/header";
import { profile } from "@/content/profile";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yuliavorotintseva.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yulia Vorotintseva — Frontend Developer",
    template: "%s — Yulia Vorotintseva",
  },
  description:
    "Frontend developer specializing in React, Next.js, and TypeScript. Selected work, experience, and contact details.",
  keywords: ["Frontend Developer", "React Developer", "Next.js", "TypeScript", "Kazakhstan"],
  authors: [{ name: profile.name }],
  openGraph: {
    title: "Yulia Vorotintseva — Frontend Developer",
    description: "Thoughtful interfaces for complex products.",
    type: "website",
    url: siteUrl,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Yulia Vorotintseva — Frontend Developer",
    description: "Thoughtful interfaces for complex products.",
  },
  icons: { icon: "/favicon.svg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressCountry: "Kazakhstan" },
  sameAs: [profile.github, profile.linkedin, profile.telegram],
  knowsAbout: ["React", "Next.js", "TypeScript", "Frontend Development", "React Native"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        {children}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "try{document.documentElement.dataset.theme=localStorage.getItem('theme')||((matchMedia('(prefers-color-scheme:dark)').matches)?'dark':'light')}catch(e){}",
          }}
        />
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
