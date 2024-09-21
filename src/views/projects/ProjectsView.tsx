import { TitleComponent } from "@/components/generics/TitleComponent/TitleComponent";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { PROJECTS } from "@/constants/projects";

export default function ProjectsView() {
    return (
        <div>
            <TitleComponent title="A software developer inspired by the fear of being average" />
            <div className="flex flex-wrap justify-center w-full max-w-screen-xl p-4">
                <div className="flex flex-wrap justify-center w-full"> 
                    {PROJECTS.map(project => (
                        <div className="w-full max-w-[500px] sm:w-1/2 lg:w-1/3 p-4" key={project.id}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
