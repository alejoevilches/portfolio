import { TitleComponent } from "@/components/generics/TitleComponent/TitleComponent";
import ProfileSubtitleChip from "@/components/ProfileSubtitleChip/ProfileSubtitleChip";
import ProfileText from "@/components/ProfileText/ProfileText";
import Image from "next/image";

export default function ProfileView(){
    return (
        <section className="flex flex-col">
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
                    I&apos;m currently working at Tinkin, a software factory who develops software solutions for startups all across Latin America.
                    There, I am responsible for developing the full stack development, and maintenance of the projects.
                </ProfileText>
            </>
        </section>
    )
}