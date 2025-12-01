import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Zap } from "lucide-react"

const energyMonitors = [
  {
    id: 1,
    name: "EcoTrack Pro X1",
    image: "/modern-smart-energy-monitor-device-sleek-black.jpg",
    rating: 95,
    annualSavings: 380,
    sustainabilityScore: 92,
    features: [
      "Real-time monitoring per circuit",
      "AI consumption predictions",
      "Solar integration ready",
      "Lifetime carbon tracking",
    ],
    price: 299,
    badge: "Best Overall",
  },
  {
    id: 2,
    name: "PowerSense Ultra",
    image: "/circular-white-smart-home-energy-meter.jpg",
    rating: 91,
    annualSavings: 320,
    sustainabilityScore: 88,
    features: [
      "Whole-home monitoring",
      "16-circuit breakdown",
      "Smart automation triggers",
      "Voice assistant compatible",
    ],
    price: 249,
    badge: "Best Value",
  },
  {
    id: 3,
    name: "WattWise Smart Hub",
    image: "/futuristic-energy-monitoring-hub-display.jpg",
    rating: 89,
    annualSavings: 295,
    sustainabilityScore: 85,
    features: ["8-channel monitoring", "Mobile app control", "Historical data analysis", "Smart grid ready"],
    price: 199,
    badge: "Budget Pick",
  },
  {
    id: 4,
    name: "VoltGuard Elite",
    image: "/premium-smart-electricity-monitor-touchscreen.jpg",
    rating: 93,
    annualSavings: 410,
    sustainabilityScore: 94,
    features: ["24-circuit monitoring", "Built-in touchscreen", "Advanced leak detection", "EV charger optimization"],
    price: 399,
    badge: "Premium Choice",
  },
  {
    id: 5,
    name: "EnergyLens Mini",
    image: "/compact-energy-monitor-plug-device.jpg",
    rating: 82,
    annualSavings: 180,
    sustainabilityScore: 79,
    features: ["Plug-and-play setup", "Single appliance tracking", "Cost calculator", "Usage alerts"],
    price: 79,
    badge: "Starter",
  },
  {
    id: 6,
    name: "GridIQ Pro",
    image: "/professional-energy-management-system-display.jpg",
    rating: 96,
    annualSavings: 520,
    sustainabilityScore: 97,
    features: [
      "Enterprise-grade monitoring",
      "32-circuit capacity",
      "Battery storage integration",
      "Time-of-use optimization",
    ],
    price: 599,
    badge: "Pro Series",
  },
]

export default function EnergyMonitorsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#9EE5C3] to-[#7DD8B8] rounded-xl flex items-center justify-center glow-eco">
                <Zap className="w-6 h-6 text-[#1E1F24]" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">Energy Monitors</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced monitoring systems that track every watt in your home. See real-time usage, identify energy
              vampires, and optimize consumption with AI-powered insights.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {energyMonitors.map((product) => (
              <ProductCard key={product.id} product={product} type="energy" />
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-16 glass-panel p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Why Energy Monitoring Matters</h2>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Identify Waste</h3>
                <p>
                  Most homes have 5-10 devices consuming standby power 24/7. Energy monitors reveal these hidden drains
                  instantly.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Track Savings</h3>
                <p>
                  See the real-time financial impact of every decision. Most users reduce consumption by 15-30% in the
                  first year.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Smart Automation</h3>
                <p>
                  Modern monitors integrate with home automation to optimize usage during off-peak hours and reduce
                  demand charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
