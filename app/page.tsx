import { MainNav } from "@/components/main-nav"
import { HeroSection } from "@/components/hero-section"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { ProjectsSection } from "@/components/projects-section"
import { ContactForm } from "@/components/contact-form"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone } from 'lucide-react'
import ParticlesBackground from "@/components/ParticlesBackground"

export default function Home() {
  return (
    <>
    <main className="relative min-h-screen">
      <ParticlesBackground />
      <MainNav />
       {/* <main className="flex min-h-screen flex-col">  */}
        <HeroSection />
        
        <section id="about" className="scroll-mt-20 py-24 bg-gradient-to-br from-primary/20 to-background z-10 ">
          <Container >
            <div className="max-w-3xl mx-auto text-center space-y-6 ">
              <h2 className="text-3xl font-bold tracking-tighter ">About Me</h2>
              <p className="text-lg text-muted-foreground">
                I am a passionate Fullstack Developer and DevOps Engineer with over 4 years
                of experience in building web applications, automating systems, and working
                with IoT projects. I love experimenting with new technologies and finding
                innovative solutions to complex problems.
              </p>
            </div>
          </Container>
        </section>

        <section id="experience" className="scroll-mt-20 ">
          <ExperienceTimeline />
        </section> 

        <section id="projects" className="scroll-mt-20">
          <ProjectsSection />
        </section> 

        <section id="contact" className="scroll-mt-20 py-24 bg-muted/50">
          <Container>
            <div className="grid gap-12 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:amarsree007@gmail.com" className="hover:text-primary">
                      amarsree007@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <a href="tel:+919440969532" className="hover:text-primary">
                      +91 9440969532
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}

