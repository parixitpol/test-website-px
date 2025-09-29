import { Button } from "@/components/ui/button"
import { ArrowRight, Brain } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
            <Brain className="w-4 h-4 mr-2" />
            AI for Business Simplification
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
            Transforming Business
            <br />
            <span className="text-muted-foreground">Through AI Innovation</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            A high school passion project exploring how artificial intelligence can streamline operations, reduce
            complexity, and empower businesses to focus on what matters most - growth and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group">
              Explore Our Vision
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-foreground">50%</div>
              <div className="text-muted-foreground">Time Saved</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-foreground">80%</div>
              <div className="text-muted-foreground">Error Reduction</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-foreground">3x</div>
              <div className="text-muted-foreground">Productivity Boost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
