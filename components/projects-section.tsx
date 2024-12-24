import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from 'lucide-react'
import Image from "next/image"

const projects = [
  {
    title: "School Management System",
    description: "Comprehensive school management solution hosted on AWS",
    image: "/sms.jpeg",
    tags: ["AWS", "React", "Node.js", "MongoDB"],
    github: "https://github.com/amar-sree/school-management",
    demo: "https://school-demo.example.com"
  },
  {
    title: "Inventory Management System",
    description: "Large-scale inventory system managing 20k+ products",
    image: "/ims.webp",
    tags: ["Laravel", "MySQL", "Vue.js", "Redis"],
    github: "https://github.com/amar-sree/inventory",
    demo: "https://inventory-demo.example.com"
  },
  {
    title: "ARMS",
    description: "Honda showroom receipt management system",
    image: "/next.svg",
    tags: ["PHP", "MySQL", "jQuery", "Bootstrap"],
    github: "https://github.com/amar-sree/arms",
    demo: "https://arms-demo.example.com"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 flex justify-center items-center">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

