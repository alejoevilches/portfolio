'use client'

import { Sections } from "@/constants/sections"
import Link from "next/link"
export function NavigationChip(){
    return (
        <div className="flex w-min py-3 px-8 bg-gray-200 rounded-full gap-9">
            {Sections.map(section => 
                <Link key={section.name} href={section.href}>{section.name}</Link>
            )}
        </div>
    )
}