import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Target, Users, Zap } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "Exploring cutting-edge AI solutions that can revolutionize how businesses operate and make decisions.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Problem Solving",
      description:
        "Identifying real business pain points and developing AI-powered solutions that address core challenges.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Human-Centered",
      description:
        "Creating AI tools that enhance human capabilities rather than replace them, fostering collaboration.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Efficiency Focus",
      description: "Streamlining workflows and automating repetitive tasks to free up time for strategic thinking.",
    },
  ]

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">About Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            We believe artificial intelligence has the power to transform how businesses operate. Our passion project
            explores practical AI applications that can simplify complex processes, reduce operational overhead, and
            enable organizations to focus on innovation and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-accent rounded-lg text-accent-foreground">{feature.icon}</div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-card-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-card-foreground text-balance">
                Why AI for Business Simplification?
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Modern businesses face increasing complexity in their operations, from managing customer relationships
                  to optimizing supply chains. Traditional solutions often add more layers of complexity rather than
                  simplifying processes.
                </p>
                <p>
                  Our research focuses on how AI can cut through this complexity, providing intelligent automation that
                  learns and adapts to business needs while maintaining the human touch that customers value.
                </p>
                <p>
                  Through this project, we're exploring real-world applications and documenting our findings to help
                  other students and businesses understand the transformative potential of AI in everyday operations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent to-muted rounded-2xl flex items-center justify-center">
                <div className="text-6xl">🤖</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
