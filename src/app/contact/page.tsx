import LinkedInIcon from "@/components/Contact/LinkedInLogo";
import MailLogo from "@/components/Contact/MailLogo";

export default function Contact(){
    return (
        <section className="text-center py-32">
            <h1 className="text-3xl">Let&apos;s work together</h1>
            <p className="text-2xl text-gray-600">Get in touch</p>
            <section className="flex flex-row gap-4 justify-center pt-4">
                <a href="https://www.linkedin.com/in/alejo-ezequiel-vilches/" target="_blank" rel="noreferrer">
                    <LinkedInIcon style={{ fill: '#9ca3af' }}/>
                </a>
                <a href="mailto:alejoevilches@gmail.com">
                    <MailLogo style={{ fill: '#9ca3af' }}/>
                </a>
            </section>
        </section>
    )
}