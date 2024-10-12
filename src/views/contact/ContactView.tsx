import LinkedInIcon from "@/components/generics/LinkedinIcon/LinkedinIcon";
import MailIcon from "@/components/generics/MailIcon/MailIcon";
import DiscordIcon from "@/components/generics/DiscordLogo/DiscordIcon";
import { TitleComponent } from "@/components/generics/TitleComponent/TitleComponent";

export default function ContactView(){
    return (
        <div className="pt-14 fadeout">
            <TitleComponent title="Contact me" />
            <section className="flex flex-row gap-4 justify-center">
                <LinkedInIcon style={{ fill: '#9ca3af' }}/>
                <MailIcon style={{ fill: '#9ca3af' }}/>
                <DiscordIcon style={{ fill: '#9ca3af' }}/>
            </section>
        </div>
    )
}

