import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-center py-20 px-4 text-6xl max-w-3xl lg:text-8xl">A software developer inspired by the fear of being average</h1>
      <Projects />
    </main>
  )
}
