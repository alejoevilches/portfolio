import { PROJECTS } from "@/constants/projects";
import ProjectsCard from "./ProjectsCard";

export default function Projects() {
    return (
        <section className="flex flex-col mx-auto justify-center gap-4 md:flex-row md:flex-wrap">
            {PROJECTS.map((p)=>{
                return (
                    <ProjectsCard key={p.title} project={p} />
                )
            })}
        </section>
    )
}