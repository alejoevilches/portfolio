'use client'
import { PROJECTS } from "@/constants/projects";
import { motion } from "framer-motion";
import ProjectsCard from "./ProjectsCard";

export default function Projects() {
    return (
        <motion.section initial={{ y: 200, opacity:0 }} animate={{y:0, opacity:1}} transition={{ type: "tween", ease: "easeInOut", duration: 0.6, delay:0.2 }} className="flex flex-col mx-auto justify-center gap-4 md:flex-row md:flex-wrap">
            {PROJECTS.map((p)=>{
                return (
                    <ProjectsCard key={p.title} project={p} />
                )
            })}
        </motion.section>
    )
}