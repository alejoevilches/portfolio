'use client'

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname=usePathname()
  return (
    <html lang="en">
      <body
      >
        <Navbar />
        {children}
        {pathname!=='/contact' && <Footer />}
      </body>
    </html>
  );
}
