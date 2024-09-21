import { TitleComponent } from "@/components/generics/TitleComponent/TitleComponent";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { PROJECTS } from "@/constants/projects";

export default function ProjectsView() {
    return (
        <div>
            <TitleComponent title="A software developer inspired by the fear of being average" />
            <section className="px-4 gap-4">
                {PROJECTS.map(project => <ProjectCard 
                {...project}
                key={project.id} />)}
            </section>
        </div>
    );
}