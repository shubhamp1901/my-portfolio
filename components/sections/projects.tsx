"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "PrimeLive",
    description:
      "Developed a full-scale learning and coaching platform supporting role-based access (coach/student), real-time chat, content sharing, and course management.",
    features: [
      "Implemented a scheduling calendar using react-big-calendar, allowing coaches to schedule regular calls with students",
      "Role-based access control for coaches and students",
      "Real-time chat functionality using Firebase",
      "Content sharing and course management",
    ],
    techStack: ["ReactJS", "Firebase", "NodeJS", "ExpressJS", "MongoDB", "Redux Toolkit"],
    link: "https://app.primelive.ai/",
  },
  {
    title: "Blog App",
    description:
      "A full-featured blog application built with React and Firebase, featuring create/edit/delete posts, authentication, and tag-based organization.",
    features: [
      "Firebase authentication and Firestore for data persistence",
      "Create, edit, and delete blog posts with tag input and rich content",
      "Responsive UI with Bootstrap and SASS styling, plus toast notifications and carousel components for a polished UX",
      "Client-side routing with React Router for seamless page navigation",
    ],
    techStack: ["ReactJS", "Firebase", "React Bootstrap", "React Router", "SASS", "React Toastify"],
    link: "https://react-blog-app-a5bc9.web.app/",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="flex flex-col hover:shadow-2xl transition-all duration-300 group border-l-4 border-l-primary bg-gradient-to-r from-card to-card/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base mt-2 text-foreground/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
                    <ul className="space-y-2 text-sm text-foreground/80 list-none pl-0">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-primary mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary shadow-sm"></span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-foreground">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto pt-4">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="outline" size="sm" asChild className="w-full border-2">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          <span>View Project</span>
                        </a>
                      </Button>
                    </motion.div>
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
