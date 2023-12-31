import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/app/utils/NavFoot";
import "../styles/globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZephyrAssets",
  description: "The complete real-world Tokenizer, Make your assets digital ! Generated by Next.js",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.ico" sizes="any" />
      <body className="topography-bg min-h-screen min-w-sreen cursor-default">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
