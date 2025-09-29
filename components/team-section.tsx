import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Project Lead & AI Research",
      bio: "Passionate about machine learning and its applications in business automation. Currently studying computer science with a focus on artificial intelligence.",
      image: "/professional-headshot-of-young-student.jpg",
      social: {
        github: "#",
        linkedin: "#",
        email: "alex@aisimplify.com",
      },
    },
    {
      name: "Sarah Johnson",
      role: "Business Analysis & Strategy",
      bio: "Focused on understanding business processes and identifying opportunities for AI integration. Interested in entrepreneurship and business optimization.",
      image: "/young-female-student-headshot.png",
      social: {
        github: "#",
        linkedin: "#",
        email: "sarah@aisimplify.com",
      },
    },
    {
      name: "Marcus Rodriguez",
      role: "Technical Development",
      bio: "Full-stack developer with experience in building AI-powered applications. Passionate about creating user-friendly interfaces for complex systems.",
      image: "/testimonial-2.png",
      social: {
        github: "#",
        linkedin: "#",
        email: "marcus@aisimplify.com",
      },
    },
  ]

  return (
    <section id="team" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            A dedicated group of high school students passionate about exploring the intersection of artificial
            intelligence and business innovation. Together, we're researching and developing solutions for tomorrow's
            challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden bg-muted">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-card-foreground">{member.name}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{member.role}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.github}
                    className="p-2 rounded-full bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="p-2 rounded-full bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 rounded-full bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Join Our Mission</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              We're always looking for passionate students, mentors, and industry professionals who share our vision of
              using AI to simplify business operations. Interested in collaborating or learning more about our research?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:team@aisimplify.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
