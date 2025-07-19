import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inria_Sans, Inria_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inriaSans = Inria_Sans({
  variable: "--font-inria-sans",
  subsets: ["latin"],
  weight: ['300', '400', '700']
});

const inriaSerif = Inria_Serif({
  variable: "--font-inria-serif",
  subsets: ["latin"],
  weight: ['300', '400', '700']
});

export const metadata: Metadata = {
  title: "Sarah Paluszny",
  description: "Sarah Paluszny's Front-End Engineering Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inriaSans.variable} ${inriaSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
