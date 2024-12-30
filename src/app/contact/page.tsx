'use client'
import LinkedInIcon from "@/components/Contact/LinkedInLogo";
import MailLogo from "@/components/Contact/MailLogo";
import { motion } from "framer-motion";

export default function Contact(){
    return (
        <motion.section initial={{ y: 200, opacity:0 }} animate={{y:0, opacity:1}} transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }} className="text-center py-32 md:py-56">
            <h1 className="text-3xl md:text-7xl">Let&apos;s work together</h1>
            <p className="text-2xl text-gray-600 md:text-5xl md:pt-4">Get in touch</p>
            <section className="flex flex-row gap-4 justify-center pt-4">
                <a href="https://www.linkedin.com/in/alejo-ezequiel-vilches/" target="_blank" rel="noreferrer">
                    <LinkedInIcon style={{ fill: '#9ca3af' }}/>
                </a>
                <a href="mailto:alejoevilches@gmail.com">
                    <MailLogo style={{ fill: '#9ca3af' }}/>
                </a>
            </section>
        </motion.section>
    )
}