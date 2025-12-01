import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Zap, Droplet, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DevicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Smart Home Devices</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium energy and water monitoring solutions for the modern home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/devices/energy-monitors">
              <Card className="glass-panel p-8 hover:glow-eco transition-all group cursor-pointer h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9EE5C3] to-[#7DD8B8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-[#1E1F24]" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Energy Monitors</h2>
                <p className="text-muted-foreground mb-6">
                  Track every watt in real-time. Advanced AI-powered energy monitoring systems that show you exactly
                  where your electricity goes.
                </p>
                <div className="flex items-center gap-2 text-[#9EE5C3] font-medium">
                  View Energy Monitors <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </Card>
            </Link>

            <Link href="/devices/water-trackers">
              <Card className="glass-panel p-8 hover:glow-aqua transition-all group cursor-pointer h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#5DC4E0] to-[#45B8D8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Droplet className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Water Trackers</h2>
                <p className="text-muted-foreground mb-6">
                  Detect leaks instantly and save up to 30% annually. Smart water meters with AI leak detection and
                  usage optimization.
                </p>
                <div className="flex items-center gap-2 text-[#5DC4E0] font-medium">
                  View Water Trackers <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
