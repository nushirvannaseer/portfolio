import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://nushirvannaseer.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Nushirvan Naseer — Senior Software Engineer",
    template: "%s | Nushirvan Naseer",
  },
  description:
    "Nushirvan Naseer is a Senior Software Engineer with 6+ years of experience building high-performance full-stack applications using React, Next.js, Node.js, GoLang, and AWS. Based in Lahore, Pakistan.",
  keywords: [
    "Nushirvan Naseer",
    "Nushirvan",
    "Naseer",
    "Senior Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "GoLang Developer",
    "AWS Engineer",
    "Software Engineer Pakistan",
    "Software Engineer Lahore",
    "Portfolio",
    "TypeScript Developer",
    "Backend Engineer",
    "Frontend Engineer",
  ],
  authors: [{ name: "Nushirvan Naseer", url: BASE_URL }],
  creator: "Nushirvan Naseer",
  publisher: "Nushirvan Naseer",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Nushirvan Naseer",
    title: "Nushirvan Naseer — Senior Software Engineer",
    description:
      "Senior Software Engineer with 6+ years of experience in React, Next.js, GoLang, and AWS. Explore my projects and experience.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nushirvan Naseer — Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nushirvan Naseer — Senior Software Engineer",
    description:
      "Senior Software Engineer with 6+ years of experience in React, Next.js, GoLang, and AWS.",
    images: ["/og-image.png"],
    creator: "@nushirvannaseer",
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nushirvan Naseer",
  url: BASE_URL,
  jobTitle: "Senior Software Engineer",
  description:
    "Senior Software Engineer with 6+ years of experience building high-performance applications using React, Next.js, Node.js, GoLang, and AWS.",
  sameAs: [
    "https://github.com/nushirvannaseer",
    "https://linkedin.com/in/nushirvan-naseer",
    "https://www.instagram.com/nush0w0rvan",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "GoLang",
    "AWS",
    "Docker",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Python",
    "NestJS",
  ],
  worksFor: {
    "@type": "Organization",
    name: "The Moonshot Factory",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "FAST-NUCES Lahore",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.svg" sizes="any" />
        <link rel="canonical" href={BASE_URL} />
        <meta name="theme-color" content="#09090b" />
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lahore" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <Analytics />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
