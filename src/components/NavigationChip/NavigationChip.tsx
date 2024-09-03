import { Sections } from "@/constants/sections"
export function NavigationChip(){
    return (
        <div className="flex w-min py-3 px-8 bg-gray-200 rounded-full gap-9">
            {Sections.map(section => 
            <p key={section}>{section}</p>
            )}
        </div>
    )
}