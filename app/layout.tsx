// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

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
        alt: "VentureReady.ai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "VentureReady.ai — Pitch Deck Evaluation",
    description: "Investor-ready pitch feedback in 24 hours.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />   {/* ← add this line */}
      </body>
    </html>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
