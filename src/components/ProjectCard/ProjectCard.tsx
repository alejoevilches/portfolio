import { IProjects } from "@/types/projectTypes";
import SkillChip from "../SkillChip/SkillChip";

interface ProjectCardProps {
    project: IProjects;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article
            className="relative w-full max-w-[500px] text-white flex flex-col justify-end 
            h-80 mb-10 px-4 bg-gray-500 bg-cover rounded-2xl"
            style={{ backgroundImage: `url(${project.image})` }}
        >
            <div className="absolute p-4 inset-0 flex flex-col justify-end opacity-0 
            transition-opacity duration-300 hover:opacity-100">
                <h2 className="text-2xl font-semibold">{project.name}</h2>
                <p className="text-sm">{project.description}</p>
                <div data-testid="tags" className="flex flex-row flex-wrap">
                    {project.tags.map((tag, index) => (
                        <SkillChip key={index} skill={tag} />
                    ))}
                </div>
            </div>
        </article>
    );
}
