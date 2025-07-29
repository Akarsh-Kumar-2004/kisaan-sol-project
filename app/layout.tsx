import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kisaan Direct - Transform Your Farm Business | Farm-to-Table Commerce Platform",
  description: "Connect directly with consumers, manage inventory, track orders, and boost your profits with our comprehensive farm-to-table platform. Trusted by 10,000+ farmers across India.",
  keywords: "farm management, agriculture technology, farm-to-table, inventory management, order processing, payment processing, logistics management, farmer platform",
  authors: [{ name: "Kisaan Direct Team" }],
  openGraph: {
    title: "Kisaan Direct - Transform Your Farm Business",
    description: "Connect directly with consumers, manage inventory, track orders, and boost your profits with our comprehensive farm-to-table platform.",
    type: "website",
  },
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
