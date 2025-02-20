"use client"
import { MainNav } from "@/components/main-nav"
import { HeroSection } from "@/components/hero-section"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { ProjectsSection } from "@/components/projects-section"
import { ContactForm } from "@/components/contact-form"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone } from 'lucide-react'
import ParticlesBackground from "@/components/ParticlesBackground"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
    <main className="relative min-h-screen">
      <ParticlesBackground />
      <MainNav />
       {/* <main className="flex min-h-screen flex-col">  */}
        <HeroSection />
        
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          id="about" 
          className="scroll-mt-20 py-24 bg-gradient-to-br from-primary/20 to-background z-10"
        >
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold tracking-tighter"
              >
                About Me
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-muted-foreground"
              >
                I am a passionate Fullstack Developer and DevOps Engineer with over 4 years
                of experience in building web applications, automating systems, and working
                with IoT projects. I love experimenting with new technologies and finding
                innovative solutions to complex problems.
              </motion.p>
            </div>
          </Container>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          id="experience" 
          className="scroll-mt-20"
        >
          <ExperienceTimeline />
        </motion.section> 

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          id="projects" 
          className="scroll-mt-20"
        >
          <ProjectsSection />
        </motion.section> 

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          id="contact" 
          className="scroll-mt-20 py-24 bg-muted/50"
        >
          <Container>
            <div className="grid gap-12 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
                <div className="space-y-4">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2"
                  >
                    <Mail className="h-5 w-5" />
                    <a href="mailto:amarsree007@gmail.com" className="hover:text-primary">
                      amarsree007@gmail.com
                    </a>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    <a href="tel:+919440969532" className="hover:text-primary">
                      +91 9440969532
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </Container>
        </motion.section>
      </main>
    </>
  )
}

