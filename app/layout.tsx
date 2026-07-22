import type { Metadata } from "next";
import { Inria_Sans, Inria_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/navbar";
import { Providers } from "@/Components/providers";

import TransitionProvider from "@/providers/transitionProviders";
import TabManager from "@/Components/tabManager";
// import { ViewTransition } from 'react'

const ACTIVE_TITLE = 'Sarah Paluszny';
const INACTIVE_TITLE = 'nooo come back :(';


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
  title: ACTIVE_TITLE,
  description: "Frontend Developer based in NYC specializing in React, TypeScript, and modern web applications. View my portfolio of responsive websites and interactive user experiences.",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="" lang="en" suppressHydrationWarning>
      <body className={` ${inriaSans.variable} ${inriaSerif.variable} antialiased paper-bg`}>
        <main>
          <Providers>
            <Navbar />
            {/* <TabManager activeTitle={ACTIVE_TITLE} inactiveTitle={INACTIVE_TITLE} /> */}
            <TransitionProvider>{children}
            </TransitionProvider>
          </Providers>
        </main>
      </body>
    </html>
  );
}
