import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/main-components/Header";
// import { NavbarDemo } from "@/components/layout/navbar";
// import { Footer } from "@/components/layout/footer";
import { Footer } from "@/components/main-components/footer";


// Font variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Feeding Trends",
  description: "Ignite your voice. Discover, share, and explore trending stories and ideas.",
  keywords: [
    "Feeding Trends",
    "Ignite your voice",
    "Trending Stories",
    "Blog",
    "Community",
    "Ideas",
    "News"
  ],
  openGraph: {
    title: "Feeding Trends",
    description: "Ignite your voice. Discover, share, and explore trending stories and ideas.",
    url: "https://yourdomain.com",
    siteName: "Feeding Trends",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Feeding Trends Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feeding Trends",
    description: "Ignite your voice. Discover, share, and explore trending stories and ideas.",
    images: ["https://yourdomain.com/twitter-image.jpg"],
    creator: "@yourtwitterhandle",
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Fontshare Fonts */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=gambetta@400,500,600,700,800&f[]=gamberino@400,700,800,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=plus-jakarta-sans@400&f[]=zodiak@500,600,700,800&display=swap"
          rel="stylesheet"
        />

        {/* SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Feeding Trends Team" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Feeding Trends",
              "url": "https://yourdomain.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://yourdomain.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-general`}>
       
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}