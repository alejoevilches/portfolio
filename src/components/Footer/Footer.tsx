import Link from "next/link";

export default function Footer(){
    return (
    <>
        <section className="pt-16 text-center text-3xl">
            <h2 className="pb-4">Ready to create great things together?</h2>
            <Link className="text-gray-500" href={'/contact'}>Get in touch</Link>
        </section>
        <p className="text-center text-sm py-6 text-gray-400">© Alejo Vilches 2025</p>
    </>
    )
}