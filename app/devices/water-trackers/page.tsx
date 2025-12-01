import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Droplet } from "lucide-react"

const waterTrackers = [
  {
    id: 1,
    name: "AquaSense Pro",
    image: "/smart-water-meter-monitoring-device-blue.jpg",
    rating: 94,
    annualSavings: 420,
    sustainabilityScore: 93,
    features: [
      "Micro-leak detection (0.01 GPM)",
      "Real-time flow monitoring",
      "AI usage predictions",
      "Instant SMS alerts",
    ],
    price: 349,
    badge: "Best Overall",
  },
  {
    id: 2,
    name: "FlowGuard Smart",
    image: "/modern-water-flow-sensor-device.jpg",
    rating: 90,
    annualSavings: 350,
    sustainabilityScore: 89,
    features: ["Whole-home monitoring", "Automatic shutoff valve", "Pressure monitoring", "Usage benchmarking"],
    price: 279,
    badge: "Best Value",
  },
  {
    id: 3,
    name: "H2O Track Mini",
    image: "/compact-water-usage-tracker.jpg",
    rating: 85,
    annualSavings: 220,
    sustainabilityScore: 82,
    features: ["Easy retrofit installation", "Single-zone tracking", "Mobile notifications", "Usage history"],
    price: 149,
    badge: "Budget Pick",
  },
  {
    id: 4,
    name: "WaterWise Elite",
    image: "/premium-water-monitoring-system-touchscreen.jpg",
    rating: 96,
    annualSavings: 580,
    sustainabilityScore: 96,
    features: ["Multi-zone monitoring", "AI leak prevention", "Smart irrigation control", "Water quality sensors"],
    price: 499,
    badge: "Premium Choice",
  },
  {
    id: 5,
    name: "DropWatch Basic",
    image: "/simple-water-flow-sensor.jpg",
    rating: 79,
    annualSavings: 160,
    sustainabilityScore: 76,
    features: ["Visual flow indicator", "Battery-powered", "Basic leak detection", "Monthly reports"],
    price: 99,
    badge: "Starter",
  },
  {
    id: 6,
    name: "HydroIQ Pro",
    image: "/professional-water-management-system.jpg",
    rating: 97,
    annualSavings: 720,
    sustainabilityScore: 98,
    features: ["8-zone monitoring", "Commercial-grade accuracy", "Smart valve control", "Predictive maintenance"],
    price: 699,
    badge: "Pro Series",
  },
]

export default function WaterTrackersPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5DC4E0] to-[#45B8D8] rounded-xl flex items-center justify-center glow-aqua">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">Water Trackers</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Smart water meters that detect leaks before they become disasters. Monitor flow in real-time, prevent
              costly damage, and save up to 30% on water bills.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waterTrackers.map((product) => (
              <ProductCard key={product.id} product={product} type="water" />
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-16 glass-panel p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Why Water Monitoring Saves Money</h2>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Leak Prevention</h3>
                <p>
                  A small leak (1 drip/second) wastes 3,000 gallons annually. Smart meters detect micro-leaks instantly,
                  preventing $1000+ in damage.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Usage Insights</h3>
                <p>
                  See real-time water consumption by fixture. Identify inefficient toilets, showers, and appliances that
                  waste water.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Smart Alerts</h3>
                <p>
                  Instant notifications for abnormal flow patterns. Get SMS alerts when water runs continuously or
                  exceeds thresholds.
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
