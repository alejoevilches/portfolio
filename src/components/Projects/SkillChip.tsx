import { TAGS } from "@/constants/tags"

interface ISkillChipProps{
    skill: TAGS
}

export default function SkillChip(skill: ISkillChipProps){
    return (
        <div className="flex h-min p-1 bg-gray-800 rounded-full px-3 my-1">
            <p className="whitespace-nowrap break-words text-sm">{skill.skill}</p>
        </div>
    )
}