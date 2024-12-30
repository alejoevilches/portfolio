'use client'

import Projects from "@/components/Projects/Projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main initial={{ y: 200, opacity:0 }} animate={{y:0, opacity:1}} transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}  className="flex flex-col items-center">
      <h1 className="text-center py-20 px-4 text-6xl max-w-3xl lg:text-8xl">A software developer inspired by the fear of being average</h1>
      <Projects />
    </motion.main>
  )
}
