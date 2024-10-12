'use client'

import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import "./globals.css";
import { NavigationSection } from "@/components/NavigationSection/NavigationSection";
import ContactInviteComponent from "@/components/generics/ContactInviteComponent/ContactInviteComponent";
import FooterComponent from "@/components/generics/FooterComponent/FooterComponent";

const metadata: Metadata = {
  title: "Alejo Vilches | Portfolio",
  description: "Software Developer based in Buenos Aires, Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <NavigationSection />
        <main className="flex-grow">
          {children}
        </main>
        { pathname === '/contact' ? null : <ContactInviteComponent /> }
        <FooterComponent />
      </body>
    </html>
  );
}