'use client'
import { TABS } from "@/constants/tabs";
import { usePathname } from "next/navigation";

export default function Navbar(){
    const pathname=usePathname();
    return (
        <nav className="my-10">
            <ul className="flex justify-center items-center mx-auto gap-3 border-2 w-max my-3 py-1 px-10 rounded-full bg-[#ededed]">
                {TABS.map((tab)=>{
                    return (
                        <li 
                            key={tab.id}
                            className={`${pathname===tab.id && 'bg-white py-2 rounded-full' }`}
                            >
                                <p className="px-4 m">{tab.label}</p>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}