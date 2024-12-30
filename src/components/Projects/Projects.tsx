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
        </section>
    )
}