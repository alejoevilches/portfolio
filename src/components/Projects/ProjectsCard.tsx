import { IProjects } from "@/constants/projects";
import SkillChip from "./SkillChip";

interface IProjectsCardProps{
    project: IProjects
}

export default function ProjectsCard({project}:IProjectsCardProps){
    const {title, description, tags, image, link}=project
    return (
        <article 
            className="relative text-white flex items-center flex-col mx-4 justify-end h-80 bg-gray-500 bg-cover rounded-2xl pb-2 group max-w-lg lg:max-w-2xl"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="opacity-0 group-hover:opacity-100 transition-opacity ease-linear duration-150">
                <a href={link} target="_blank"><h2 className="text-white text-2xl pl-2 font-semibold hover:underline">{title}</h2></a>
                <p className="px-2">{description}</p>
                <div data-testid="tags" className="flex flex-row flex-wrap pl-2">
                    {tags.map((tag, index) => (
                        <SkillChip key={index} skill={tag} />
                    ))}
                </div>
            </div>
        </article>
    )
}