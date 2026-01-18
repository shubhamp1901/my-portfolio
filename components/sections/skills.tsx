"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { 
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiGit,
  SiWebpack,
  SiVite,
  SiFirebase,
  SiCss3,
  SiPostman,
} from "react-icons/si"
import { 
  Code2,
  Database,
  Layers,
  Palette,
  Settings,
  Network
} from "lucide-react"

// Icon mapping for skills
const skillIcons: Record<string, React.ReactNode> = {
  "React.js": <SiReact className="w-4 h-4" />,
  "Next.js": <SiNextdotjs className="w-4 h-4" />,
  "TypeScript": <SiTypescript className="w-4 h-4" />,
  "JavaScript": <SiJavascript className="w-4 h-4" />,
  "HTML": <SiHtml5 className="w-4 h-4" />,
  "NodeJS": <SiNodedotjs className="w-4 h-4" />,
  "ExpressJS": <SiExpress className="w-4 h-4" />,
  "MongoDB": <SiMongodb className="w-4 h-4" />,
  "Redis": <SiRedis className="w-4 h-4" />,
  "REST API": <Network className="w-4 h-4" />,
  "Redux Toolkit": <SiRedux className="w-4 h-4" />,
  "Zustand": <Layers className="w-4 h-4" />,
  "Tailwind CSS": <SiTailwindcss className="w-4 h-4" />,
  "Material UI": <SiMui className="w-4 h-4" />,
  "CSS Modules": <SiCss3 className="w-4 h-4" />,
  "Git": <SiGit className="w-4 h-4" />,
  "Webpack": <SiWebpack className="w-4 h-4" />,
  "Vite": <SiVite className="w-4 h-4" />,
  "Firebase": <SiFirebase className="w-4 h-4" />,
  "Postman": <SiPostman className="w-4 h-4" />,
  "TanStack Query": <Database className="w-4 h-4" />,
  "Context API": <Code2 className="w-4 h-4" />,
  "Shadcn UI": <Palette className="w-4 h-4" />,
  "Web Performance": <Settings className="w-4 h-4" />,
}

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML"],
  },
  {
    title: "Backend",
    skills: ["NodeJS", "ExpressJS", "MongoDB", "Redis", "REST API"],
  },
  {
    title: "State & Data",
    skills: [
      "Redux Toolkit",
      "TanStack Query",
      "Zustand",
      "Context API",
    ],
  },
  {
    title: "UI & Styling",
    skills: [
      "Tailwind CSS",
      "Shadcn UI",
      "Material UI",
      "CSS Modules"
    ],
  },
  {
    title: "Others",
    skills: [
      "Git",
      "Webpack",
      "Vite",
      "Firebase",
      "Postman",
      "Web Performance",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="hover:shadow-2xl transition-all duration-300 border-l-4 border-l-primary bg-gradient-to-r from-card to-card/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium cursor-default flex items-center gap-1.5"
                        whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {skillIcons[skill] || <Code2 className="w-4 h-4" />}
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
