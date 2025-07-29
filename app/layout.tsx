import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kisaan Direct - Farm-to-Table Commerce Platform",
  description: "A comprehensive platform connecting farmers directly to consumers, streamlining the agricultural supply chain with modern technology.",
  keywords: "agriculture, farm-to-table, farmers, direct selling, e-commerce, India, farming",
  authors: [{ name: "Kisaan Direct Team" }],
  openGraph: {
    title: "Kisaan Direct - Farm-to-Table Commerce Platform",
    description: "Connect directly with farmers and get fresh produce delivered to your doorstep.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
