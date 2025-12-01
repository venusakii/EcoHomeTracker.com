import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, Clock, ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"

// Sample guide content - in production this would come from a CMS or markdown files
const guideContent = {
  title: "How to Reduce Your Home's Standby Energy Use",
  category: "Energy",
  readTime: "8 min",
  lastUpdated: "December 2024",
  summary:
    "Phantom power drains cost the average home $100+ annually. This guide shows you how to identify and eliminate standby power consumption with smart monitoring and simple automation.",
  sections: [
    {
      heading: "What is Standby Power?",
      content:
        "Standby power (also called phantom load or vampire power) is electricity consumed by devices when they're turned off but still plugged in. Most homes have 20-40 devices drawing standby power 24/7, costing $100-200 annually.",
    },
    {
      heading: "Common Culprits",
      content:
        'The biggest offenders are cable boxes (30W), gaming consoles (15W), desktop computers (10W), and phone chargers (5W). Even "off" devices with LED indicators consume 1-5W continuously.',
    },
    {
      heading: "Smart Monitoring Solutions",
      content:
        "Modern energy monitors can identify standby power at the circuit level. Install a whole-home monitor to see which devices consume power when idle. Most users are shocked by the results.",
    },
    {
      heading: "Practical Solutions",
      content:
        "Use smart power strips to cut power to multiple devices at once. Schedule devices to power down during sleep hours. Replace old cable boxes and routers with energy-efficient models that use 50-75% less standby power.",
    },
    {
      heading: "Expected Savings",
      content:
        "Eliminating 75% of standby power typically saves $75-150 annually. The payback period for smart power strips and monitors is usually 12-18 months.",
    },
  ],
  keyTakeaways: [
    "Standby power costs most homes $100-200 per year",
    "Smart energy monitors identify phantom loads instantly",
    "Smart power strips automate the elimination process",
    "Expected payback period is 12-18 months",
    "Annual savings of $75-150 are typical",
  ],
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen">
      <Navigation />

      <article className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link href="/guides">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Guides
            </Button>
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#9EE5C3]/20 text-[#9EE5C3] border-0">{guideContent.category}</Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {guideContent.readTime} read
              </span>
              <span className="text-sm text-muted-foreground">Updated {guideContent.lastUpdated}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{guideContent.title}</h1>

            <p className="text-xl text-muted-foreground text-pretty">{guideContent.summary}</p>
          </div>

          {/* Key Takeaways */}
          <Card className="glass-panel p-6 mb-8 glow-eco">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#9EE5C3]" />
              Key Takeaways
            </h2>
            <ul className="space-y-2">
              {guideContent.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#9EE5C3] flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{takeaway}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {guideContent.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Card className="glass-panel p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to start saving?</h3>
            <p className="text-muted-foreground mb-6">
              Browse our recommended energy monitors to identify standby power in your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/devices/energy-monitors">
                <Button className="bg-[#9EE5C3] text-[#1E1F24] hover:bg-[#7DD8B8]">View Energy Monitors</Button>
              </Link>
              <Link href="/dashboard-tools">
                <Button variant="outline" className="border-[#9EE5C3] hover:bg-[#9EE5C3]/10 bg-transparent">
                  Try Savings Calculator
                </Button>
              </Link>
            </div>
          </Card>

          {/* Related Guides */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Related Guides</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/guides/energy-cost">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold mb-2">Understanding Real Energy Cost Per Device</h4>
                  <p className="text-sm text-muted-foreground">Calculate lifetime costs for all your appliances.</p>
                </Card>
              </Link>
              <Link href="/guides/ai-automation">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold mb-2">AI-Driven Home Automation</h4>
                  <p className="text-sm text-muted-foreground">Let AI optimize your home automatically.</p>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
