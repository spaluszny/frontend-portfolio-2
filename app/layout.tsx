import type { Metadata } from "next";
import { Inria_Sans, Inria_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/navbar";
import { ModeToggle } from "@/Components/modeToggle";
import { Providers } from "@/Components/providers";



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
      <body className={` ${inriaSans.variable} ${inriaSerif.variable} antialiased`}>
        <Navbar />
        <ModeToggle />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
