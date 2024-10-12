import Link from "next/link"

export default function ContactInviteComponent(){
    return (
    <section className="flex flex-col gap-2 text-center py-6">
        <h3 className="text-2xl">Ready to create great things together?</h3>
        <Link href={'/contact'} className="text-xl text-gray-500">
        Contact me
        </Link>
    </section>
    )
}