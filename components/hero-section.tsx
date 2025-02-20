"use client"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Github, X, Download } from 'lucide-react'
import Image from "next/image"
import { useRouter } from 'next/navigation'
import AnimatedTextWord from "./AnimatedTextWord"
import TypingText from "./TypingText"
import TextFallingAnimation from "./TextFallingAnimation"


export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0  from-primary/20 to-background z-0 " />
      <Container className="relative z-10 py-12 md:py-32">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="h-[48px] sm:h-[56px] md:h-[72px]"> {/* Fixed height container for typing text */}
              <TypingText text="Amar Sree Talari" textClasses="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" />
            </div>
            <div className="h-[24px]"> {/* Fixed height container for animated text */}
              <AnimatedTextWord text="Fullstack Developer | DevOps Engineer | Passionate Innovator" fontSize="1rem" />
            </div>
            <div className="h-[72px]"> {/* Fixed height container for falling text */}
              <TextFallingAnimation>
                Experienced developer with a proven track record in web and app 
                development, system automation, and innovative IoT projects.
              </TextFallingAnimation>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => {
                  console.log("Downloading resume")
                  const link = document.createElement('a')
                  link.href = '/Amar Sree Talari - Resume.pdf'
                  link.download = 'Amar Sree Talari - Resume.pdf'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto hover:bg-black hover:text-white"
                onClick={() => {
                  window.location.href = "tel:9440969532";
                }}
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/amarsree"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors p-2"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://twitter.com/amarsree007"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors p-2"
              >
                {/* <X className="h-6 w-6" /> */}
                <img src="/X_logo.png" alt="X" className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          <div className="relative max-w-[300px] md:max-w-[400px] lg:max-w-none aspect-square mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-background rounded-full animate-pulse" />
            <Image
              src="/whigt_db.png"
              alt="Amar Sree Talari"
              width={500}
              height={500}
              className="rounded-full"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

