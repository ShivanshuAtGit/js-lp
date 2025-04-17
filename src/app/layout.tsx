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
  metadataBase: new URL('https://jagransamrat.com'), // Replace with your actual domain
  title: {
    default: "Jagran Samrat Dharmendra Pandey | Official Website",
    template: "%s | Jagran Samrat"
  },
  description: "Official website of Jagran Samrat Dharmendra Pandey. Explore his journey, videos, and connect with him.",
  keywords: ["Jagran Samrat", "Dharmendra Pandey", "Jagran", "Samrat", "Official Website"],
  authors: [{ name: "Jagran Samrat Dharmendra Pandey" }],
  creator: "Jagran Samrat Dharmendra Pandey",
  publisher: "Jagran Samrat Dharmendra Pandey",
  openGraph: {
    title: "Jagran Samrat Dharmendra Pandey | Official Website",
    description: "Official website of Jagran Samrat Dharmendra Pandey. Explore his journey, videos, and connect with him.",
    type: "website",
    locale: "en_IN",
    siteName: "Jagran Samrat",
    url: "https://jagransamrat.com", // Replace with your actual domain
    images: [
      {
        url: "/og-image.png", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Jagran Samrat Dharmendra Pandey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagran Samrat Dharmendra Pandey | Official Website",
    description: "Official website of Jagran Samrat Dharmendra Pandey. Explore his journey, videos, and connect with him.",
    images: ["/twitter-image.png"], // Add your Twitter image
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
  verification: {
    google: "your-google-site-verification", // Add your Google verification code
  },
  alternates: {
    canonical: "https://jagransamrat.com", // Add your actual domain
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
