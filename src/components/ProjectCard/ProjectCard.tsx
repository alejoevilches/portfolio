import { IProjects } from "@/types/projectTypes";

export default function ProjectCard({image, name}: IProjects) {
    return (
        <div
          className="w-full h-80 mb-4 px-4 bg-gray-500 bg-cover rounded-2xl"
          style={{ backgroundImage: `url(${image})` }}
        >
            <h2>{name}</h2>
        </div>
    )
}