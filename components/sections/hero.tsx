"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }


  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-slate-950/80 dark:via-slate-900/80 dark:to-slate-950/80 pointer-events-none" />

      {/* Floating shapes - using CSS animations for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '22s' }} />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s', animationDuration: '24s' }} />
        <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s', animationDuration: '18s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none opacity-40 dark:opacity-20"></div>

      {/* Floating code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-20 left-10 text-sm sm:text-base font-mono text-primary/50 dark:text-primary/40 select-none"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.5, 0.65, 0.5],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <pre className="whitespace-pre-wrap leading-tight">
{`const app = express();
app.use(cors());
app.listen(3000);`}
          </pre>
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-20 text-sm sm:text-base font-mono text-primary/50 dark:text-primary/40 select-none"
          animate={{
            y: [0, -40, 0],
            x: [0, -25, 0],
            opacity: [0.5, 0.65, 0.5],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <pre className="whitespace-pre-wrap leading-tight">
{`function Component() {
  return <div>Hello</div>;
}`}
          </pre>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/4 text-sm sm:text-base font-mono text-primary/50 dark:text-primary/40 select-none"
          animate={{
            y: [0, 30, 0],
            x: [0, 15, 0],
            opacity: [0.5, 0.65, 0.5],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          <pre className="whitespace-pre-wrap leading-tight">
{`useEffect(() => {
  fetchData();
}, [deps]);`}
          </pre>
        </motion.div>


        <motion.div
          className="absolute top-2/3 right-10 text-sm sm:text-base font-mono text-primary/50 dark:text-primary/40 select-none"
          animate={{
            y: [0, -20, 0],
            x: [0, 25, 0],
            opacity: [0.5, 0.65, 0.5],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <pre className="whitespace-pre-wrap leading-tight">
{`async function getData() {
  const res = await api.get();
  return res;
}`}
          </pre>
        </motion.div>
      </div>

      <motion.div
        className="container mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-8">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Shubham Patel
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6"
            variants={itemVariants}
          >
            Fullstack Developer
          </motion.p>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            Building scalable and performance-optimized full-stack web applications with React.js, Next.js, and Node.js
          </motion.p>
        </div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm sm:text-base"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/shubhamp1901"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-4 w-4" />
            <span>shubhamp1901</span>
          </motion.a>
          <span className="text-muted-foreground hidden sm:inline">•</span>
          <motion.a
            href="https://www.linkedin.com/in/ishubhampatel/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="h-4 w-4" />
            <span>shubham</span>
          </motion.a>
          <span className="text-muted-foreground hidden sm:inline">•</span>
          <motion.a
            href="mailto:pshubham1886@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">pshubham1886@gmail.com</span>
            <span className="sm:hidden">Email</span>
          </motion.a>
          <span className="text-muted-foreground hidden sm:inline">•</span>
          <motion.a
            href="tel:+919350047443"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="h-4 w-4" />
            <span>+91-9350047443</span>
          </motion.a>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
