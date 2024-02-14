import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const inter = Mulish({ subsets: ["latin"] , fallback: ['sans-serif'],
  display: 'swap'});

export const metadata: Metadata = {
  title: "Jagran Samrat",
  description: "Come join my mesmerizing journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
