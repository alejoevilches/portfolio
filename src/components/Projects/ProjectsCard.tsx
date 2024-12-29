import { IProjects } from "@/constants/projects";
import SkillChip from "./SkillChip";

interface IProjectsCardProps{
    project: IProjects
}

export default function ProjectsCard({project}:IProjectsCardProps){
    const {title, description, tags, image}=project
    return (
        <article className="relative text-white flex flex-col justify-end 
        h-80 mx-4 bg-gray-500 bg-cover rounded-2xl pb-2"
        style={{ backgroundImage: `url(${image})` }}>
            <h2 className="text-white text-2xl pl-2 font-semibold">{title}</h2>
            <p className="px-2">{description}</p>
            <div data-testid="tags" className="flex flex-row flex-wrap pl-2">
                    {tags.map((tag, index) => (
                        <SkillChip key={index} skill={tag} />
                    ))}
                </div>
        </article>
    )
}