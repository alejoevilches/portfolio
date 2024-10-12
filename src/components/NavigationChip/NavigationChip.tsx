'use client'

import { Sections } from "@/constants/sections"
import Link from "next/link"
import { usePathname } from "next/navigation"
export function NavigationChip(){
    const pathname = usePathname()
    return (
        <div className="flex w-min py-3 px-8 bg-gray-200 rounded-full gap-9">
            {Sections.map(section => 
                <Link 
                key={section.name} 
                href={section.href}
                className={`flex items-center justify-center transition-colors duration-300 ease-in-out px-2 py-2 rounded-full ${pathname === section.href ? 'bg-gray-400' : 'hover:bg-gray-300'}`}>
                    {section.name}
                </Link>
            )}
        </div>
    )
}