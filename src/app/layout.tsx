import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Metadata } from "next";
import LayoutFooter from "@/components/Projects/PathFooterChecker";

export const metadata: Metadata = {
  title: 'Alejo Vilches - Software Developer',
  description: "Alejo Vilches is a software developer based in Buenos Aires, Argentina, passionate about creating innovative digital solutions. This portfolio showcases a selection of his projects, reflecting his expertise and commitment to building impactful products.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Navbar />
        {children}
        <LayoutFooter />
      </body>
    </html>
  );
}
