import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Target, TrendingUp, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#9EE5C3] to-[#7DD8B8] rounded-xl flex items-center justify-center glow-eco">
              <Zap className="w-6 h-6 text-[#1E1F24]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Smarter homes. Lower bills.{" "}
            <span className="bg-gradient-to-r from-[#9EE5C3] to-[#5DC4E0] bg-clip-text text-transparent">
              Smaller footprint.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We believe that efficiency is not a trend — it's your next upgrade. EcoHomeTracker empowers homeowners with
            the tools, data, and insights needed to reduce consumption and live sustainably.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-panel p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#9EE5C3] to-[#7DD8B8] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#1E1F24]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                Make smart home monitoring accessible, affordable, and actionable for every household.
              </p>
            </Card>

            <Card className="glass-panel p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5DC4E0] to-[#45B8D8] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Values</h3>
              <p className="text-muted-foreground">
                Transparency, sustainability, and empowering homeowners with real data and real savings.
              </p>
            </Card>

            <Card className="glass-panel p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F7D154] to-[#E5C048] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#1E1F24]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                A future where every home operates at peak efficiency, reducing waste and environmental impact.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              EcoHomeTracker was born from a simple frustration: why is it so hard to understand where your energy and
              water goes?
            </p>
            <p>
              We watched homeowners pay hundreds of dollars in wasted energy each year, completely unaware of which
              devices were responsible. We saw water leaks cost thousands in damage because they went undetected for
              weeks.
            </p>
            <p>
              The technology to prevent this existed, but it was expensive, complicated, and inaccessible to most
              people. So we built EcoHomeTracker — a platform that demystifies smart home monitoring, reviews the best
              devices, and provides actionable insights anyone can use.
            </p>
            <p>
              Today, we've helped over 50,000 homes reduce their consumption, save money, and shrink their environmental
              footprint. And we're just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#9EE5C3] mb-2">50K+</div>
              <div className="text-muted-foreground">Homes Monitored</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#5DC4E0] mb-2">$2.4M</div>
              <div className="text-muted-foreground">Saved This Year</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#F7D154] mb-2">3.2M</div>
              <div className="text-muted-foreground">kWh Reduced</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#7DD8B8] mb-2">5.8M</div>
              <div className="text-muted-foreground">Tons CO₂ Avoided</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Built by Experts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-panel p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#9EE5C3] to-[#7DD8B8] rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center mb-2">Energy Engineers</h3>
              <p className="text-sm text-muted-foreground text-center">
                Former utility company experts who understand energy systems inside and out.
              </p>
            </Card>
            <Card className="glass-panel p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#5DC4E0] to-[#45B8D8] rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center mb-2">Smart Home Technologists</h3>
              <p className="text-sm text-muted-foreground text-center">
                IoT and automation specialists building the future of connected homes.
              </p>
            </Card>
            <Card className="glass-panel p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#F7D154] to-[#E5C048] rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center mb-2">Sustainability Advocates</h3>
              <p className="text-sm text-muted-foreground text-center">
                Environmental scientists committed to reducing residential carbon footprints.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass-panel p-12 text-center glow-eco">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join 50,000+ smart homeowners</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start tracking your energy and water usage today. Your home can save energy even when you're asleep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devices">
                <Button size="lg" className="bg-[#9EE5C3] text-[#1E1F24] hover:bg-[#7DD8B8] text-lg px-8">
                  Explore Devices
                </Button>
              </Link>
              <Link href="/dashboard-tools">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-[#9EE5C3] hover:bg-[#9EE5C3]/10 bg-transparent"
                >
                  Try Dashboard Tools
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
