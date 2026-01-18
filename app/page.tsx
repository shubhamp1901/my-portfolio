import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/hero"
import { ScrollAnimationProvider } from "@/components/scroll-animation"

// Lazy load sections below the fold for better LCP and reduce initial bundle
const About = dynamic(() => import("@/components/sections/about").then(mod => ({ default: mod.About })), {
  ssr: true,
})

const Skills = dynamic(() => import("@/components/sections/skills").then(mod => ({ default: mod.Skills })), {
  ssr: true,
})

const Experience = dynamic(() => import("@/components/sections/experience").then(mod => ({ default: mod.Experience })), {
  ssr: true,
})

const Projects = dynamic(() => import("@/components/sections/projects").then(mod => ({ default: mod.Projects })), {
  ssr: true,
})

const Contact = dynamic(() => import("@/components/sections/contact").then(mod => ({ default: mod.Contact })), {
  ssr: true,
})

export default function Home() {
  return (
    <ScrollAnimationProvider>
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </ScrollAnimationProvider>
  )
}
