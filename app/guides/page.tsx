import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Droplet, Brain, TrendingUp, Clock, Leaf, Shield, Home } from "lucide-react"
import Link from "next/link"

const guides = [
  {
    id: "standby-energy",
    title: "How to Reduce Your Home's Standby Energy Use",
    description:
      "Phantom power drains cost the average home $100+ annually. Learn how to eliminate it with smart power strips and monitoring.",
    icon: Zap,
    category: "Energy",
    readTime: "8 min",
    color: "#9EE5C3",
  },
  {
    id: "water-monitoring",
    title: "Smart Water Monitoring: Save Up to 30% Annually",
    description:
      "Modern water trackers can detect micro-leaks and optimize usage in real-time. Discover the technology behind water savings.",
    icon: Droplet,
    category: "Water",
    readTime: "6 min",
    color: "#5DC4E0",
  },
  {
    id: "ai-automation",
    title: "AI-Driven Home Automation for Low Energy Living",
    description:
      "Let machine learning optimize your thermostat, lights, and appliances automatically. Setup takes minutes, savings last years.",
    icon: Brain,
    category: "Automation",
    readTime: "10 min",
    color: "#F7D154",
  },
  {
    id: "energy-cost",
    title: "Understanding Real Energy Cost Per Device",
    description:
      'Calculate the true lifetime cost of every appliance in your home. Some "efficient" devices cost more than you think.',
    icon: TrendingUp,
    category: "Energy",
    readTime: "7 min",
    color: "#9EE5C3",
  },
  {
    id: "peak-hours",
    title: "Time-of-Use Electricity: Save During Off-Peak Hours",
    description:
      "Shift major loads to off-peak times and save 40-60% on electricity costs. Smart automation makes this effortless.",
    icon: Clock,
    category: "Energy",
    readTime: "5 min",
    color: "#9EE5C3",
  },
  {
    id: "sustainability",
    title: "Measuring Your Home's Environmental Footprint",
    description:
      "Track carbon emissions, water usage, and waste generation. Small changes add up to massive environmental impact.",
    icon: Leaf,
    category: "Sustainability",
    readTime: "9 min",
    color: "#7DD8B8",
  },
  {
    id: "leak-prevention",
    title: "Preventing Water Damage with Smart Leak Detection",
    description:
      "A 1mm crack can leak 250 gallons daily. Learn how smart sensors prevent $10,000+ in water damage before it happens.",
    icon: Shield,
    category: "Water",
    readTime: "6 min",
    color: "#5DC4E0",
  },
  {
    id: "home-retrofit",
    title: "Smart Home Retrofitting: Where to Start",
    description:
      "You don't need to rewire your entire house. Start with these 5 devices for maximum impact at minimum cost.",
    icon: Home,
    category: "Getting Started",
    readTime: "12 min",
    color: "#9EE5C3",
  },
]

export default function GuidesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Eco Knowledge Hub</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert guides and insights for reducing energy consumption, preventing water waste, and building a
              smarter, more sustainable home.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Badge variant="outline" className="text-sm py-2 px-4 cursor-pointer hover:bg-accent">
              All Guides
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 cursor-pointer hover:bg-accent">
              Energy
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 cursor-pointer hover:bg-accent">
              Water
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 cursor-pointer hover:bg-accent">
              Automation
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 cursor-pointer hover:bg-accent">
              Sustainability
            </Badge>
          </div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide) => {
              const IconComponent = guide.icon
              return (
                <Link key={guide.id} href={`/guides/${guide.id}`}>
                  <Card className="glass-panel p-6 hover:glow-eco transition-all group cursor-pointer h-full">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${guide.color}20` }}
                      >
                        <IconComponent className="w-6 h-6" style={{ color: guide.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {guide.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{guide.readTime} read</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-[#9EE5C3] transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{guide.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 glass-panel p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
            <p className="text-muted-foreground mb-6">
              Request a guide topic or ask our AI assistant for personalized energy-saving recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-6 py-3 bg-[#9EE5C3] text-[#1E1F24] rounded-lg font-medium hover:bg-[#7DD8B8] transition-colors">
                  Request a Guide
                </button>
              </Link>
              <Link href="/dashboard-tools">
                <button className="px-6 py-3 border border-[#9EE5C3] text-[#9EE5C3] rounded-lg font-medium hover:bg-[#9EE5C3]/10 transition-colors">
                  Try Dashboard Tools
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
