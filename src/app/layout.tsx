import type { Metadata } from "next";
import "./globals.css";
import { NavigationSection } from "@/components/NavigationSection/NavigationSection";
import ContactInviteComponent from "@/components/generics/ContactInviteComponent/ContactInviteComponent";
import FooterComponent from "@/components/generics/FooterComponent/FooterComponent";

export const metadata: Metadata = {
  title: "Alejo Vilches | Portfolio",
  description: "Software Developer based in Buenos Aires, Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavigationSection />
        {children}
        <ContactInviteComponent />
        <FooterComponent />
      </body>
    </html>
  );
}
