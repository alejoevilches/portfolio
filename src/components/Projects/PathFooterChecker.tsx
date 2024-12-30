'use client';
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer/Footer";

const LayoutFooter = () => {
  const pathname = usePathname();

  if (pathname === '/contact') return null;
  
  return <Footer />;
};

export default LayoutFooter;