import { TitleComponent } from "@/components/generics/TitleComponent/TitleComponent";
import ProfileSubtitleChip from "@/components/ProfileSubtitleChip/ProfileSubtitleChip";
import ProfileText from "@/components/ProfileText/ProfileText";
import StackTitle from "@/components/StackTitle/StackTitle";
import { FRONTEND_TAGS, BACKEND_TAGS, DATABASES_TAGS, VERSIONCONTROL_TAGS, TESTING_TAGS } from "@/types/projectTypes";
import StackItem from "@/components/StackItems/StackItem";
import Image from "next/image";

export default function ProfileView(){
    return (
        <section className="flex flex-col fadeout">
            <>
                <TitleComponent title="Hello! I'm Alejo Vilches 👋🏻"/>
                <Image src={'/img/alejo.webp'} width={300} height={300} alt={'Alejo Vilches'} className="rounded-full mx-auto" />
            </>
            <>
                <ProfileSubtitleChip subtitle="About me" />
                <ProfileText>
                    I&apos;m a software developer based in Buenos Aires, Argentina. 
                    My expertise is creating digital products designed to solve problems of millons of people worldwide.
                </ProfileText>
            </>
            <>
                <ProfileSubtitleChip subtitle="Where I work" />
                <ProfileText>
                    I&apos;m currently working at Tinkin, a software factory who develops web-based solutions for startups all across Latin America.
                </ProfileText>
            </>
            <>
                <ProfileSubtitleChip subtitle="My stack" />
                <StackTitle title="Frontend"/>
                <ul className="pl-4 flex flex-row flex-wrap gap-4">
                    {FRONTEND_TAGS.map((tag)=>{
                        return (
                            <StackItem key={tag}>
                                {tag}
                            </StackItem>
                        )
                    })}
                </ul>
                <StackTitle title="Backend"/>
                <ul className="pl-4 flex flex-row flex-wrap gap-4">
                    {BACKEND_TAGS.map((tag)=>{
                        return (
                            <StackItem key={tag}>
                                {tag}
                            </StackItem>
                        )
                    })}
                </ul>
                <StackTitle title="Databases"/>
                <ul className="pl-4 flex flex-row flex-wrap gap-4">
                    {DATABASES_TAGS.map((tag)=>{
                        return (
                            <StackItem key={tag}>
                                {tag}
                            </StackItem>
                        )
                    })}
                </ul>
                <StackTitle title="Testing"/>
                <ul className="pl-4 flex flex-row flex-wrap gap-4">
                    {TESTING_TAGS.map((tag)=>{
                        return (
                            <StackItem key={tag}>
                                {tag}
                            </StackItem>
                        )
                    })}
                </ul>
                <StackTitle title="Version Control"/>
                <ul className="pl-4 flex flex-row flex-wrap gap-4 mb-10">
                    {VERSIONCONTROL_TAGS.map((tag)=>{
                        return (
                            <StackItem key={tag}>
                                {tag}
                            </StackItem>
                        )
                    })}
                </ul>
            </>
        </section>
    )
}