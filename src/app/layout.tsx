import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const inter = Mulish({
  subsets: ["latin"],
  fallback: ['sans-serif'],
  display: 'swap',
  preload: true,
  variable: '--font-mulish'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jagransamrat.com'),
  title: {
    default: "Jagran Samrat Dharmendra Pandey | Official Website",
    template: "%s | Jagran Samrat"
  },
  description: "Welcome to the official website of Jagran Samrat Dharmendra Pandey, a distinguished artist dedicated to preserving and promoting India's rich cultural heritage through soulful music. Explore his mesmerizing journey, watch exclusive videos, and connect with this cultural ambassador who bridges traditional values with contemporary expressions. Join us in celebrating the essence of Sanskritik Virasat and Sanskar through his unique artistic vision.",
  keywords: ["Jagran Samrat", "Dharmendra Pandey", "Indian Cultural Heritage", "Sanskritik Virasat", "Cultural Ambassador", "Traditional Music", "Indian Artist"],
  authors: [{ name: "Jagran Samrat Dharmendra Pandey" }],
  creator: "Jagran Samrat Dharmendra Pandey",
  publisher: "Jagran Samrat Dharmendra Pandey",
  openGraph: {
    title: "Jagran Samrat Dharmendra Pandey | Official Website",
    description: "Welcome to the official website of Jagran Samrat Dharmendra Pandey, a distinguished artist dedicated to preserving and promoting India's rich cultural heritage through soulful music.",
    type: "website",
    locale: "en_IN",
    siteName: "Jagran Samrat",
    url: "https://jagransamrat.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jagran Samrat Dharmendra Pandey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagran Samrat Dharmendra Pandey | Official Website",
    description: "Welcome to the official website of Jagran Samrat Dharmendra Pandey, a distinguished artist dedicated to preserving and promoting India's rich cultural heritage.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://jagransamrat.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jagran Samrat Dharmendra Pandey",
              "url": "https://jagransamrat.com",
              "sameAs": [
                "https://twitter.com/jagransamrat",
                "https://facebook.com/jagransamrat",
                "https://instagram.com/jagransamrat"
              ],
              "description": "A distinguished artist dedicated to preserving and promoting India's rich cultural heritage through soulful music.",
              "image": "https://jagransamrat.com/og-image.png"
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
