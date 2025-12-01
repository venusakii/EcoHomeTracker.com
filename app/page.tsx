import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  Droplet,
  Brain,
  TrendingDown,
  Shield,
  Leaf,
  Activity,
  Play,
  Check,
  ArrowRight,
  Smartphone,
  Wifi,
  BarChart3,
  Globe,
  LineChart,
} from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* SECTION 1: Hero Section with 3D Elements */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-[#0f1432] to-background -z-10" />

        <div className="absolute top-20 right-10 w-96 h-96 bg-[#ff6b6b] rounded-full blur-[120px] opacity-20 floating -z-10" />
        <div
          className="absolute top-40 left-10 w-96 h-96 bg-[#4ecdc4] rounded-full blur-[120px] opacity-20 floating -z-10"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-96 h-96 bg-[#ff6b9d] rounded-full blur-[120px] opacity-20 floating -z-10"
          style={{ animationDelay: "4s" }}
        />

        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-10">
            <div className="relative inline-block">
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter gradient-text leading-none">POWER</h1>
              <div className="absolute -right-12 top-0 w-24 h-24 bg-[#ff6b6b] rounded-full blur-xl opacity-20" />
            </div>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              YOUR{" "}
              <span className="relative inline-block">
                <span className="text-[#4ecdc4] text-glow">HOME</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#4ecdc4] to-[#ff6b9d] rounded-full" />
              </span>
            </h2>

            <p className="text-xl md:text-3xl text-[#8892b0] max-w-3xl mx-auto font-light leading-relaxed">
              Real-time monitoring. AI-driven insights. Radical savings.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#ff6b6b] to-[#ff6b9d] hover:shadow-2xl hover:scale-105 transition-all glow-coral text-xl px-12 py-8 rounded-2xl font-bold"
              >
                Start Tracking
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="neon-border text-xl px-12 py-8 rounded-2xl font-bold hover:bg-[#4ecdc4]/10 bg-transparent"
              >
                Explore Devices
              </Button>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="holographic p-8 card-3d hover:scale-105 transition-all cursor-pointer group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b6b] to-[#ff6b9d] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-black mb-2 text-[#ff6b6b] text-glow">2.4kW</div>
                <div className="text-muted-foreground">Live Energy Draw</div>
                <div className="mt-4 flex items-center gap-2 text-sm text-[#4ecdc4]">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span>Real-time monitoring</span>
                </div>
              </div>
            </Card>

            <Card className="holographic p-8 card-3d hover:scale-105 transition-all cursor-pointer group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4ecdc4] to-[#95e1d3] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Droplet className="w-8 h-8 text-[#0a0e27]" />
                </div>
                <div className="text-5xl font-black mb-2 text-[#4ecdc4] text-glow">156L</div>
                <div className="text-muted-foreground">Water Usage Today</div>
                <div className="mt-4 flex items-center gap-2 text-sm text-[#4ecdc4]">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span>Smart tracking</span>
                </div>
              </div>
            </Card>

            <Card className="holographic p-8 card-3d hover:scale-105 transition-all cursor-pointer group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ffd93d] to-[#ff6b6b] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Brain className="w-8 h-8 text-[#0a0e27]" />
                </div>
                <div className="text-5xl font-black mb-2 text-[#ffd93d] text-glow">94%</div>
                <div className="text-muted-foreground">Efficiency Score</div>
                <div className="mt-4 flex items-center gap-2 text-sm text-[#ffd93d]">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span>AI optimized</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 2: Impact Stats */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#13182e] to-background -z-10" />
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4 group">
              <div className="text-7xl font-black text-[#4ecdc4] text-glow group-hover:scale-110 transition-transform">
                30%
              </div>
              <div className="text-xl text-muted-foreground">Average Energy Reduction</div>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#4ecdc4] to-transparent mx-auto" />
            </div>
            <div className="text-center space-y-4 group">
              <div className="text-7xl font-black text-[#ff6b6b] text-glow group-hover:scale-110 transition-transform">
                50K+
              </div>
              <div className="text-xl text-muted-foreground">Smart Homes Connected</div>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#ff6b6b] to-transparent mx-auto" />
            </div>
            <div className="text-center space-y-4 group">
              <div className="text-7xl font-black text-[#ffd93d] text-glow group-hover:scale-110 transition-transform">
                $2.4M
              </div>
              <div className="text-xl text-muted-foreground">Savings This Year</div>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#ffd93d] to-transparent mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Features Grid */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-20 gradient-text">NEXT-LEVEL MONITORING</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="holographic p-10 hover:glow-coral transition-all group cursor-pointer border-0">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b6b] to-[#ff6b9d] rounded-3xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Real-Time Energy</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Track every watt with millisecond precision. See exactly what's draining your power.
                </p>
                <div className="pt-4">
                  <div className="text-sm text-[#ff6b6b] font-semibold">Learn more →</div>
                </div>
              </div>
            </Card>

            <Card className="holographic p-10 hover:glow-cyan transition-all group cursor-pointer border-0">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4ecdc4] to-[#95e1d3] rounded-3xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all">
                  <Droplet className="w-10 h-10 text-[#0a0e27]" />
                </div>
                <h3 className="text-2xl font-bold">Smart Water AI</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Detect leaks in seconds. AI predicts usage patterns and alerts you instantly.
                </p>
                <div className="pt-4">
                  <div className="text-sm text-[#4ecdc4] font-semibold">Learn more →</div>
                </div>
              </div>
            </Card>

            <Card className="holographic p-10 hover:glow-pink transition-all group cursor-pointer border-0">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b9d] to-[#ff6b6b] rounded-3xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Automation Brain</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Let AI optimize everything. Temperature, lighting, appliances—automated perfection.
                </p>
                <div className="pt-4">
                  <div className="text-sm text-[#ff6b9d] font-semibold">Learn more →</div>
                </div>
              </div>
            </Card>

            <Card className="holographic p-10 hover:glow-cyan transition-all group cursor-pointer border-0">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4ecdc4] to-[#95e1d3] rounded-3xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all">
                  <TrendingDown className="w-10 h-10 text-[#0a0e27]" />
                </div>
                <h3 className="text-2xl font-bold">Cost Analytics</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Detailed breakdowns of every device. Know exactly where your money goes.
                </p>
                <div className="pt-4">
                  <div className="text-sm text-[#4ecdc4] font-semibold">Learn more →</div>
                </div>
              </div>
            </Card>

            <Card className="holographic p-10 hover:glow-coral transition-all group cursor-pointer border-0">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d] rounded-3xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Leak Defense</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Instant alerts prevent damage. Save thousands in potential water disasters.
                </p>
                <div className="pt-4">
                  <div className="text-sm text-[#ff6b6b] font-semibold">Learn more →</div>
                </div>
              </div>
            </Card>

            <Card className="holographic p-10 hover:glow-pink transition-all group cursor-pointer border-0">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#ffd93d] to-[#ff6b9d] rounded-3xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all">
                  <Leaf className="w-10 h-10 text-[#0a0e27]" />
                </div>
                <h3 className="text-2xl font-bold">Eco Impact</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Visualize your carbon footprint. Track sustainability with detailed eco-scores.
                </p>
                <div className="pt-4">
                  <div className="text-sm text-[#ffd93d] font-semibold">Learn more →</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4: Product Showcase */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4ecdc4]/10 to-background -z-10" />
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-[#4ecdc4]/20 text-[#4ecdc4] border-[#4ecdc4]/50 px-6 py-2 text-base">
              HARDWARE
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black gradient-text mb-6">CUTTING-EDGE DEVICES</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional-grade monitors engineered for precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="holographic p-12 border-0 hover:glow-cyan transition-all group cursor-pointer">
              <div className="space-y-6">
                <div className="aspect-video bg-gradient-to-br from-[#4ecdc4]/20 to-[#95e1d3]/20 rounded-2xl flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#4ecdc4]/30 to-transparent" />
                  <Zap className="w-32 h-32 text-[#4ecdc4] opacity-50 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-3xl font-bold">EcoMonitor Pro X1</h3>
                <div className="flex items-center gap-4">
                  <Badge className="bg-[#4ecdc4] text-[#0a0e27]">98% Efficiency</Badge>
                  <Badge className="bg-[#ffd93d] text-[#0a0e27]">$849/year savings</Badge>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Neural network-powered energy monitor with quantum-precision sensors. Tracks 128 circuits
                  simultaneously.
                </p>
                <Button className="w-full bg-gradient-to-r from-[#4ecdc4] to-[#95e1d3] text-[#0a0e27] hover:scale-105 transition-all text-lg py-6">
                  View Details <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </Card>

            <Card className="holographic p-12 border-0 hover:glow-coral transition-all group cursor-pointer">
              <div className="space-y-6">
                <div className="aspect-video bg-gradient-to-br from-[#ff6b6b]/20 to-[#ff6b9d]/20 rounded-2xl flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b6b]/30 to-transparent" />
                  <Droplet className="w-32 h-32 text-[#ff6b6b] opacity-50 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-3xl font-bold">AquaSense Ultra</h3>
                <div className="flex items-center gap-4">
                  <Badge className="bg-[#4ecdc4] text-[#0a0e27]">AI Leak Detection</Badge>
                  <Badge className="bg-[#ffd93d] text-[#0a0e27]">$1,200/year savings</Badge>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Military-grade water monitor with predictive AI. Detects micro-leaks before they become disasters.
                </p>
                <Button className="w-full bg-gradient-to-r from-[#ff6b6b] to-[#ff6b9d] hover:scale-105 transition-all text-lg py-6">
                  View Details <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 5: Live Dashboard Preview */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0f1432] to-background -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff6b9d] rounded-full blur-[200px] opacity-20 -z-10" />

        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-[#ff6b6b]/20 text-[#ff6b6b] border-[#ff6b6b]/50 px-6 py-2 text-base">
                LIVE DASHBOARD
              </Badge>
              <h2 className="text-6xl font-black gradient-text leading-tight">COMMAND CENTER FOR YOUR HOME</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Every metric that matters. Real-time updates. Intelligent automation. All from one beautiful interface.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#4ecdc4]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-[#4ecdc4]" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Instant Insights</div>
                    <div className="text-muted-foreground">See usage patterns the moment they emerge</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#ff6b6b]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-[#ff6b6b]" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Predictive Alerts</div>
                    <div className="text-muted-foreground">AI warns you before problems happen</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#ffd93d]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-[#ffd93d]" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Smart Automation</div>
                    <div className="text-muted-foreground">Set it once, save forever</div>
                  </div>
                </li>
              </ul>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#ff6b6b] to-[#ff6b9d] hover:scale-105 transition-all text-lg px-10 py-7"
              >
                <Play className="mr-2 w-6 h-6" /> Watch Demo
              </Button>
            </div>

            <Card className="holographic p-8 border-0">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">Current Usage</div>
                  <Badge className="bg-[#4ecdc4]/20 text-[#4ecdc4]">LIVE</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-5xl font-black text-[#ff6b6b] text-glow">2.4kW</div>
                    <div className="text-sm text-muted-foreground">Energy Draw</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-5xl font-black text-[#4ecdc4] text-glow">156L</div>
                    <div className="text-sm text-muted-foreground">Water Flow</div>
                  </div>
                </div>
                <div className="h-48 bg-gradient-to-br from-[#4ecdc4]/10 to-[#ff6b6b]/10 rounded-xl flex items-center justify-center">
                  <LineChart className="w-24 h-24 text-[#4ecdc4] opacity-30" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="holographic p-4 text-center">
                    <div className="text-2xl font-bold text-[#ffd93d]">94%</div>
                    <div className="text-xs text-muted-foreground">Efficiency</div>
                  </div>
                  <div className="holographic p-4 text-center">
                    <div className="text-2xl font-bold text-[#4ecdc4]">$142</div>
                    <div className="text-xs text-muted-foreground">Saved</div>
                  </div>
                  <div className="holographic p-4 text-center">
                    <div className="text-2xl font-bold text-[#ff6b6b]">-28%</div>
                    <div className="text-xs text-muted-foreground">vs Last Month</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 6: App Integration */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b6b]/10 to-[#4ecdc4]/10 -z-10" />
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-[#ff6b9d]/20 text-[#ff6b9d] border-[#ff6b9d]/50 px-6 py-2 text-base">
              MOBILE FIRST
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black gradient-text mb-6">CONTROL FROM ANYWHERE</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              iOS, Android, and Web. Your home in your pocket.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="holographic p-10 border-0 hover:glow-coral transition-all group text-center">
              <Smartphone className="w-16 h-16 text-[#ff6b6b] mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Native Apps</h3>
              <p className="text-muted-foreground leading-relaxed">Blazing-fast native performance on every device</p>
            </Card>

            <Card className="holographic p-10 border-0 hover:glow-cyan transition-all group text-center">
              <Wifi className="w-16 h-16 text-[#4ecdc4] mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Offline Mode</h3>
              <p className="text-muted-foreground leading-relaxed">
                Works without internet. Data syncs when you reconnect
              </p>
            </Card>

            <Card className="holographic p-10 border-0 hover:glow-pink transition-all group text-center">
              <BarChart3 className="w-16 h-16 text-[#ff6b9d] mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Push Alerts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get notified instantly when efficiency drops or leaks detected
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 7: Social Proof / Testimonials */}

      {/* SECTION 8: Environmental Impact */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4ecdc4]/10 via-background to-[#95e1d3]/10 -z-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4ecdc4] rounded-full blur-[180px] opacity-20 -z-10" />

        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Card className="holographic p-12 border-0">
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4ecdc4] to-[#95e1d3] flex items-center justify-center">
                      <Globe className="w-10 h-10 text-[#0a0e27]" />
                    </div>
                    <div>
                      <div className="text-5xl font-black text-[#4ecdc4] text-glow">2.8M</div>
                      <div className="text-muted-foreground">Tons CO₂ Prevented</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Energy Saved</span>
                      <span className="font-bold text-[#4ecdc4]">450 GWh</span>
                    </div>
                    <div className="h-3 bg-[#1a1f3a] rounded-full overflow-hidden">
                      <div className="h-full w-[78%] bg-gradient-to-r from-[#4ecdc4] to-[#95e1d3] rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Water Conserved</span>
                      <span className="font-bold text-[#ff6b6b]">1.2B Liters</span>
                    </div>
                    <div className="h-3 bg-[#1a1f3a] rounded-full overflow-hidden">
                      <div className="h-full w-[92%] bg-gradient-to-r from-[#ff6b6b] to-[#ff6b9d] rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Trees Equivalent</span>
                      <span className="font-bold text-[#95e1d3]">380,000</span>
                    </div>
                    <div className="h-3 bg-[#1a1f3a] rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-[#95e1d3] to-[#4ecdc4] rounded-full" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <Badge className="bg-[#4ecdc4]/20 text-[#4ecdc4] border-[#4ecdc4]/50 px-6 py-2 text-base">
                PLANET POSITIVE
              </Badge>
              <h2 className="text-6xl font-black gradient-text leading-tight">SAVING MONEY. SAVING THE PLANET.</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Every EcoHomeTracker household prevents an average of 56 tons of CO₂ emissions per year. Together, we're
                creating real environmental impact.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <Leaf className="w-6 h-6 text-[#4ecdc4] flex-shrink-0 mt-1" />
                  <div className="text-lg text-muted-foreground">
                    Carbon-neutral operations and sustainable manufacturing
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Leaf className="w-6 h-6 text-[#4ecdc4] flex-shrink-0 mt-1" />
                  <div className="text-lg text-muted-foreground">
                    1% of revenue donated to climate action initiatives
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Leaf className="w-6 h-6 text-[#4ecdc4] flex-shrink-0 mt-1" />
                  <div className="text-lg text-muted-foreground">Recycled materials in all packaging and hardware</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Pricing */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0f1432] to-background -z-10" />
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-[#ff6b9d]/20 text-[#ff6b9d] border-[#ff6b9d]/50 px-6 py-2 text-base">
              FLEXIBLE PLANS
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black gradient-text mb-6">CHOOSE YOUR POWER</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All plans include free hardware shipping and 30-day money-back guarantee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="holographic p-10 border-0 hover:glow-cyan transition-all">
              <div className="space-y-6">
                <div>
                  <div className="text-[#4ecdc4] text-sm font-bold mb-2">STARTER</div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#4ecdc4]" />
                      <span>1 Energy Monitor</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#4ecdc4]" />
                      <span>Real-time Dashboard</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#4ecdc4]" />
                      <span>Mobile App Access</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#4ecdc4]" />
                      <span>Email Alerts</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full bg-gradient-to-r from-[#4ecdc4] to-[#95e1d3] text-[#0a0e27] hover:scale-105 transition-all py-6">
                  Get Started
                </Button>
              </div>
            </Card>

            <Card className="holographic p-10 border-2 border-[#ff6b6b] glow-coral relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-[#ff6b6b] to-[#ff6b9d] text-white px-6 py-1">
                  MOST POPULAR
                </Badge>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-[#ff6b6b] text-sm font-bold mb-2">PRO</div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#ff6b6b]" />
                      <span>3 Energy Monitors</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#ff6b6b]" />
                      <span>1 Water Tracker</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#ff6b6b]" />
                      <span>AI Automation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#ff6b6b]" />
                      <span>Priority Support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#ff6b6b]" />
                      <span>Predictive Alerts</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full bg-gradient-to-r from-[#ff6b6b] to-[#ff6b9d] hover:scale-105 transition-all py-6">
                  Get Started
                </Button>
              </div>
            </Card>

            <Card className="holographic p-10 border-0 hover:glow-pink transition-all">
              <div className="space-y-6">
                <div>
                  <div className="text-[#ff6b9d] text-sm font-bold mb-2">ENTERPRISE</div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#ff6b9d]" />
                      <span>Unlimited Monitors</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#ff6b9d]" />
                      <span>Advanced Analytics</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#ff6b9d]" />
                      <span>Custom Integrations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#ff6b9d]" />
                      <span>24/7 Support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#ff6b9d]" />
                      <span>Dedicated Account Manager</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full bg-gradient-to-r from-[#ff6b9d] to-[#ff6b6b] hover:scale-105 transition-all py-6">
                  Contact Sales
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 10: Final CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b6b]/20 via-background to-[#4ecdc4]/20 -z-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff6b9d] rounded-full blur-[150px] opacity-30 -z-10" />

        <div className="container mx-auto max-w-5xl text-center space-y-10">
          <h2 className="text-6xl md:text-8xl font-black gradient-text leading-tight">TRANSFORM YOUR HOME</h2>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto">
            Join 50,000+ smart homes already saving energy, money, and the planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#4ecdc4] to-[#95e1d3] text-[#0a0e27] hover:scale-105 transition-all glow-cyan text-xl px-12 py-8 rounded-2xl font-bold"
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="neon-border text-xl px-12 py-8 rounded-2xl font-bold hover:bg-[#ff6b6b]/10 bg-transparent"
            >
              View Live Demo
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 pt-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#4ecdc4]" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#4ecdc4]" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#4ecdc4]" />
              <span>Lifetime Updates</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
