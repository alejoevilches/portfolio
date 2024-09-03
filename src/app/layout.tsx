import type { Metadata } from "next";
import "./globals.css";
import { NavigationSection } from "@/components/NavigationSection/NavigationSection";

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
      </body>
    </html>
  );
}
