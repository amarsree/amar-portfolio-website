import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "ThinkAlt",
    period: "Aug 2022 - Present",
    role: "Senior Developer",
    achievements: [
      "Developed comprehensive inventory management system",
      "Created interactive sales data visualization dashboard",
      "Implemented automated reporting system"
    ]
  },
  {
    company: "Primelogic Technologies",
    period: "Mar 2021 - Aug 2022",
    role: "Fullstack Developer",
    achievements: [
      "Built matrimony app with video calling features",
      "Integrated secure payment gateway systems",
      "Developed interactive e-learning platform"
    ]
  },
  {
    company: "Ambiot Infotech",
    period: "Oct 2019 - Oct 2020",
    role: "Developer",
    achievements: [
      "Configured web hosting on Raspberry Pi",
      "Led ARMS project development",
      "Executed PHP desktop application conversion"
    ]
  },
  // {
  //   company: "Panchayat Secretary",
  //   period: "Oct 2019 - Oct 2020",
  //   role: "Technical Lead",
  //   achievements: [
  //     "Automated data extraction processes",
  //     "Streamlined form submission systems",
  //     "Implemented Python-based automation"
  //   ]
  // }
]

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-muted/50 flex justify-center items-center">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">
          Work Experience
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 h-full w-px bg-border -translate-x-1/2" />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={cn(
                  "relative grid gap-6",
                  index % 2 === 0 ? "md:grid-cols-[1fr,1fr]" : "md:grid-cols-[1fr,1fr]"
                )}
              >
                <div
                  className={cn(
                    "md:col-start-1",
                    index % 2 === 0 ? "md:text-right" : "md:col-start-2"
                  )}
                >
                  <Card>
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
                        {exp.achievements.map((achievement) => (
                          <li key={achievement}>{achievement}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

