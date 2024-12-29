import { PROJECTS } from "@/constants/projects";
import ProjectsCard from "./ProjectsCard";

export default function Projects() {
    return (
        <section className="flex flex-col gap-4">
            {PROJECTS.map((p)=>{
                return (
                    <ProjectsCard key={p.title} project={p} />
                )
            })}
            <section className="pt-16 text-center text-3xl">
                <h2 className="pb-4">Ready to create great things together?</h2>
                <h3 className="text-gray-500">Get in touch</h3>
            </section>
            <p className="text-center text-sm py-6 text-gray-400">© Alejo Vilches 2025</p>
        </section>
    )
}