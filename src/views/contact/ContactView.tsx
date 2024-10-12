import LinkedInIcon from "@/components/generics/LinkedinIcon/LinkedinIcon";
import MailIcon from "@/components/generics/MailIcon/MailIcon";
import DiscordIcon from "@/components/generics/DiscordLogo/DiscordIcon";
import { TitleComponent } from "@/components/generics/TitleComponent/TitleComponent";

export default function ContactView(){
    return (
        <div className="pt-32 fadeout">
            <TitleComponent title="Contact me" />
            <section className="flex flex-row gap-4 justify-center">
                <a href="https://www.linkedin.com/in/alejo-ezequiel-vilches/" target="_blank" rel="noreferrer">
                    <LinkedInIcon style={{ fill: '#9ca3af' }}/>
                </a>
                <a href="mailto:alejoevilches@gmail.com">
                    <MailIcon style={{ fill: '#9ca3af' }}/>
                </a>
            </section>
        </div>
    )
}

