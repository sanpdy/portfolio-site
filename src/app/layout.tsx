import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Geo } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geo = Geo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-geo",
});

export const metadata: Metadata = {
  title: "Sankalp Pandey",
  description: "Portfolio website of Sankalp Pandey",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
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
        className={`${geistSans.variable} ${geistMono.variable} ${geo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
