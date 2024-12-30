import ProfileSubtitleChip from "@/components/About/ProfileSubtitleChip";
import StackTitle from "@/components/About/StackTitle";
import { FRONTEND_TAGS, BACKEND_TAGS, DATABASES_TAGS, TESTING_TAGS, VERSIONCONTROL_TAGS } from "@/constants/tags";
import StackItem from "@/components/About/StackItem";
import Image from "next/image";
import { TAGS } from "@/constants/tags";
import ProfileSubtitleText from "@/components/About/ProfileSubtitleText";

export default function ProfileView(){
    return (
        <section className="flex flex-col fadeout">
            <div className="text-center text-4xl py-28">
                <p>Hello!</p>
                <p>I&apos;m Alejo Vilches 👋🏻</p>
            </div>
            <div className="flex flex-col fadeout-delayed">
                <Image src={'/images/alejo.webp'} width={300} height={300} alt={'Alejo Vilches'} className="rounded-full mx-auto" />
                <>
                <ProfileSubtitleChip subtitle="About me" />
                <ProfileSubtitleText>
                    I&apos;m a software developer based in Buenos Aires, Argentina. 
                    My expertise is creating digital products designed to solve problems of millons of people worldwide.
                </ProfileSubtitleText>
            </>
            <>
                <ProfileSubtitleChip subtitle="Where I work" />
                <ProfileSubtitleText>
                    I&apos;m currently working at Tinkin, a software factory who develops web-based solutions for startups all across Latin America.
                </ProfileSubtitleText>
            </>
            <>
                <ProfileSubtitleChip subtitle="My stack" />
                <StackTitle title="Frontend"/>
                <ul className="pl-4 flex flex-row flex-wrap gap-4">
                    {FRONTEND_TAGS.map((tag: TAGS)=>{
                        return (
                            <StackItem key={tag}>
                                {tag}
                            </StackItem>
                        )
                    })}
                </ul>
                <StackTitle title="Backend"/>
                <ul className="pl-4 flex flex-row flex-wrap gap-4">
                    {BACKEND_TAGS.map((tag: TAGS)=>{
                        return (
                            <StackItem key={tag}>
                                {tag}
                            </StackItem>
                        )
                    })}
                </ul>
                <StackTitle title="Databases"/>
                <ul className="pl-4 flex flex-row flex-wrap gap-4">
                    {DATABASES_TAGS.map((tag: TAGS)=>{
                        return (
                            <StackItem key={tag}>
                                {tag}
                            </StackItem>
                        )
                    })}
                </ul>
                <StackTitle title="Testing"/>
                <ul className="pl-4 flex flex-row flex-wrap gap-4">
                    {TESTING_TAGS.map((tag: TAGS)=>{
                        return (
                            <StackItem key={tag}>
                                {tag}
                            </StackItem>
                        )
                    })}
                </ul>
                <StackTitle title="Version Control"/>
                <ul className="pl-4 flex flex-row flex-wrap gap-4 mb-10">
                    {VERSIONCONTROL_TAGS.map((tag: TAGS)=>{
                        return (
                            <StackItem key={tag}>
                                {tag}
                            </StackItem>
                        )
                    })}
                </ul>
            </>
            </div>
        </section>
    )
}