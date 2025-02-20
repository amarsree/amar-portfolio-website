import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const experiences = [
  {
    company: "Freelance",
    period: "Jul 2024 - Present",
    role: "Fullstack Developer & DevOps Engineer",
    achievements: [
      "Providing web development, app development, and hosting solutions",
      "Optimizing cloud-based deployments with CI/CD pipelines",
      "Building scalable authentication and authorization systems"
    ]
  },
  {
    company: "ThinkAlt",
    period: "Aug 2022 - Jul 2024",
    role: "Fullstack Developer",
    achievements: [
      "Developed comprehensive inventory management system for tracking 20K+ products",
      "Created interactive sales data visualization dashboard with graphs and charts",
      "Implemented automated reporting system for real-time insights"
    ]
  },
  {
    company: "Primelogic Technologies",
    period: "Mar 2021 - Aug 2022",
    role: "Fullstack Developer",
    achievements: [
      "Built matrimony app with video calling features",
      "Integrated secure payment gateway systems",
      "Developed interactive e-learning platform for online education"
    ]
  },
  {
    company: "Ambiot Infotech",
    period: "Oct 2019 - Oct 2020",
    role: "Fullstack Developer",
    achievements: [
      "Configured web hosting on Raspberry Pi for scalable applications",
      "Led ARMS project development from inception to deployment",
      "Converted PHP web applications into secure desktop applications"
    ]
  }
]

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-muted/50 flex justify-center items-center overflow-hidden">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter mb-12 text-center"
        >
          Work Experience
        </motion.h2>
        <div className="relative">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 w-px bg-border -translate-x-1/2"
          />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? -50 : 50 
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0 
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 
                }}
                viewport={{ once: true }}
                className={cn(
                  "relative grid gap-6",
                  index % 2 === 0 ? "md:grid-cols-[1fr,1fr]" : "md:grid-cols-[1fr,1fr]"
                )}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={cn(
                    "md:col-start-1",
                    index % 2 === 0 ? "md:text-right" : "md:col-start-2"
                  )}
                >
                  <Card className="relative">
                    <motion.div
                      className="absolute -left-3 top-1/2 w-6 h-6 rounded-full bg-primary"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                    />
                    <CardHeader>
                      <CardTitle>{exp.company}</CardTitle>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                      <p className="font-medium">{exp.role}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className={cn(
                        "space-y-2",
                        index % 2 === 0 ? "md:text-right" : ""
                      )}>
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={achievement}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + (i * 0.1) }}
                          >
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

