// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VentureReady.ai — AI-Powered Pitch Deck Evaluation",
  description:
    "Get institutional-quality feedback on your pitch deck in 24 hours. Evaluated against the proven 15-slide investor framework used by top VCs.",
  metadataBase: new URL("https://ventureready.ai"),
  keywords: [
    "pitch deck evaluation",
    "pitch deck feedback",
    "startup pitch deck",
    "investor feedback",
    "pitch deck review",
    "AI pitch deck analysis",
    "venture capital pitch",
    "startup fundraising",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "VentureReady.ai — AI-Powered Pitch Deck Evaluation",
    description:
      "Investor-ready pitch deck analysis in 24 hours. Slide-by-slide scoring, red flag detection, and a clear action plan.",
    url: "https://ventureready.ai",
    siteName: "VentureReady.ai",
    images: [
      {
        url: "/logo-512.png",
        width: 512,
        height: 512,
        alt: "VentureReady.ai — AI-Powered Pitch Deck Evaluation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VentureReady.ai — Pitch Deck Evaluation",
    description: "Investor-ready pitch deck feedback in 24 hours. Slide-by-slide scoring against the proven VC framework.",
    images: ["/logo-512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo-64.png",  type: "image/png", sizes: "64x64" },
      { url: "/logo-192.png", type: "image/png", sizes: "192x192" },
      { url: "/logo-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/logo-192.png", sizes: "192x192" }],
    shortcut: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ventureready.ai/#organization",
      name: "VentureReady.ai",
      url: "https://ventureready.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://ventureready.ai/logo-512.png",
      },
      description:
        "AI-powered pitch deck evaluation for startup founders. Get institutional-quality investor feedback in 24 hours.",
    },
    {
      "@type": "WebSite",
      "@id": "https://ventureready.ai/#website",
      url: "https://ventureready.ai",
      name: "VentureReady.ai",
      publisher: { "@id": "https://ventureready.ai/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://ventureready.ai/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Service",
      "@id": "https://ventureready.ai/#service",
      name: "AI Pitch Deck Evaluation",
      provider: { "@id": "https://ventureready.ai/#organization" },
      url: "https://ventureready.ai",
      description:
        "Slide-by-slide pitch deck scoring, red flag detection, and an actionable improvement plan — evaluated against the 15-slide investor framework used by top VCs. Delivered in 24 hours.",
      audience: {
        "@type": "Audience",
        audienceType: "Startup founders, entrepreneurs seeking venture capital funding",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Basic Evaluation",
          price: "97",
          priceCurrency: "USD",
          description:
            "Slide-by-slide scoring, red flag detection, and actionable improvement plan delivered within 24 hours.",
        },
        {
          "@type": "Offer",
          name: "Premium Evaluation",
          price: "197",
          priceCurrency: "USD",
          description:
            "Everything in Basic plus a personalized video walkthrough, investor Q&A prep guide, and 30-day email support.",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
