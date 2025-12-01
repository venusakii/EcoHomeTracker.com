"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { Droplet, Zap, DollarSign, Leaf, Calculator } from "lucide-react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"

export default function DashboardToolsPage() {
  const [energyUsage, setEnergyUsage] = useState(850)
  const [waterUsage, setWaterUsage] = useState(7500)
  const [numDevices, setNumDevices] = useState(15)

  // Calculate savings potential
  const energySavings = Math.round(energyUsage * 0.25)
  const waterSavings = Math.round(waterUsage * 0.3)
  const monthlyCostSavings = Math.round(energySavings * 0.12 + waterSavings * 0.003)
  const annualSavings = monthlyCostSavings * 12
  const carbonReduction = Math.round(energySavings * 0.92 * 12)

  // Sample data for charts
  const projectedSavings = [
    { month: "Jan", baseline: energyUsage, optimized: energyUsage - energySavings * 0.5 },
    { month: "Feb", baseline: energyUsage, optimized: energyUsage - energySavings * 0.6 },
    { month: "Mar", baseline: energyUsage, optimized: energyUsage - energySavings * 0.7 },
    { month: "Apr", baseline: energyUsage, optimized: energyUsage - energySavings * 0.8 },
    { month: "May", baseline: energyUsage, optimized: energyUsage - energySavings * 0.9 },
    { month: "Jun", baseline: energyUsage, optimized: energyUsage - energySavings },
  ]

  const waterFlowData = [
    { hour: "12am", flow: 2 },
    { hour: "3am", flow: 1 },
    { hour: "6am", flow: 15 },
    { hour: "9am", flow: 8 },
    { hour: "12pm", flow: 6 },
    { hour: "3pm", flow: 5 },
    { hour: "6pm", flow: 18 },
    { hour: "9pm", flow: 12 },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Interactive Dashboard Tools</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-time calculators and visualizations to understand your home's energy and water consumption.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Energy Tracker Simulator */}
            <Card className="glass-panel p-6 lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#9EE5C3] to-[#7DD8B8] rounded-xl flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-[#1E1F24]" />
                </div>
                <h2 className="text-2xl font-bold">Home Energy Savings Calculator</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <Label className="text-sm font-medium mb-2 block">Monthly Energy Usage (kWh): {energyUsage}</Label>
                  <Slider
                    value={[energyUsage]}
                    onValueChange={(value) => setEnergyUsage(value[0])}
                    min={200}
                    max={2000}
                    step={50}
                    className="w-full"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium mb-2 block">Monthly Water Usage (gallons): {waterUsage}</Label>
                  <Slider
                    value={[waterUsage]}
                    onValueChange={(value) => setWaterUsage(value[0])}
                    min={2000}
                    max={15000}
                    step={500}
                    className="w-full"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium mb-2 block">Number of Smart Devices: {numDevices}</Label>
                  <Slider
                    value={[numDevices]}
                    onValueChange={(value) => setNumDevices(value[0])}
                    min={5}
                    max={40}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="text-center p-4 bg-[#9EE5C3]/10 rounded-lg">
                    <Zap className="w-6 h-6 text-[#9EE5C3] mx-auto mb-2" />
                    <div className="text-2xl font-bold">{energySavings} kWh</div>
                    <div className="text-sm text-muted-foreground">Energy Saved/Month</div>
                  </div>
                  <div className="text-center p-4 bg-[#5DC4E0]/10 rounded-lg">
                    <Droplet className="w-6 h-6 text-[#5DC4E0] mx-auto mb-2" />
                    <div className="text-2xl font-bold">{waterSavings} gal</div>
                    <div className="text-sm text-muted-foreground">Water Saved/Month</div>
                  </div>
                  <div className="text-center p-4 bg-[#F7D154]/10 rounded-lg">
                    <DollarSign className="w-6 h-6 text-[#F7D154] mx-auto mb-2" />
                    <div className="text-2xl font-bold">${annualSavings}</div>
                    <div className="text-sm text-muted-foreground">Annual Savings</div>
                  </div>
                  <div className="text-center p-4 bg-[#7DD8B8]/10 rounded-lg">
                    <Leaf className="w-6 h-6 text-[#7DD8B8] mx-auto mb-2" />
                    <div className="text-2xl font-bold">{carbonReduction} lbs</div>
                    <div className="text-sm text-muted-foreground">CO2 Reduced/Year</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="space-y-6">
              <Card className="glass-panel p-6 glow-eco">
                <h3 className="font-semibold mb-4">Your Efficiency Score</h3>
                <div className="relative">
                  <svg className="w-full h-auto" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-muted/20"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="45"
                      fill="none"
                      stroke="#9EE5C3"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 45}
                      strokeDashoffset={2 * Math.PI * 45 * 0.15}
                      style={{
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                      }}
                    />
                    <text x="60" y="65" textAnchor="middle" className="text-3xl font-bold fill-current">
                      85
                    </text>
                  </svg>
                </div>
                <p className="text-sm text-center text-muted-foreground mt-4">Above average efficiency. Great work!</p>
              </Card>

              <Card className="glass-panel p-6">
                <h3 className="font-semibold mb-3">Payback Period</h3>
                <div className="text-3xl font-bold text-[#F7D154] mb-2">14 months</div>
                <p className="text-sm text-muted-foreground">
                  Estimated time to recover smart device investment costs.
                </p>
              </Card>

              <Card className="glass-panel p-6">
                <h3 className="font-semibold mb-3">Peak Usage Time</h3>
                <div className="text-3xl font-bold text-[#5DC4E0] mb-2">6-9 PM</div>
                <p className="text-sm text-muted-foreground">Shift loads to off-peak hours for 40% savings.</p>
              </Card>
            </div>
          </div>

          {/* Energy Projection Chart */}
          <Card className="glass-panel p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">6-Month Savings Projection</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={projectedSavings}>
                <CartesianGrid strokeDasharray="3 3" stroke="#3A3B41" />
                <XAxis dataKey="month" stroke="#B8B8BD" />
                <YAxis stroke="#B8B8BD" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#2A2B30",
                    border: "1px solid #9EE5C3",
                    borderRadius: "8px",
                  }}
                />
                <Line type="monotone" dataKey="baseline" stroke="#6B6B70" strokeWidth={2} name="Current Usage" />
                <Line
                  type="monotone"
                  dataKey="optimized"
                  stroke="#9EE5C3"
                  strokeWidth={3}
                  name="With Smart Monitoring"
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4">
              Projected energy consumption with smart monitoring vs. baseline usage. Most homes achieve 20-30% reduction
              within 6 months.
            </p>
          </Card>

          {/* Water Flow Dashboard */}
          <Card className="glass-panel p-6">
            <h2 className="text-2xl font-bold mb-6">Real-Time Water Flow Pattern</h2>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={waterFlowData}>
                <defs>
                  <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5DC4E0" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#5DC4E0" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#3A3B41" />
                <XAxis dataKey="hour" stroke="#B8B8BD" />
                <YAxis stroke="#B8B8BD" label={{ value: "GPM", angle: -90, position: "insideLeft" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#2A2B30",
                    border: "1px solid #5DC4E0",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="flow"
                  stroke="#5DC4E0"
                  fillOpacity={1}
                  fill="url(#waterGradient)"
                  name="Flow Rate (GPM)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-3 bg-[#5DC4E0]/10 rounded-lg">
                <div className="text-xl font-bold">7.2 GPM</div>
                <div className="text-xs text-muted-foreground">Current Flow</div>
              </div>
              <div className="text-center p-3 bg-[#9EE5C3]/10 rounded-lg">
                <div className="text-xl font-bold">0 Leaks</div>
                <div className="text-xs text-muted-foreground">Detected Today</div>
              </div>
              <div className="text-center p-3 bg-[#F7D154]/10 rounded-lg">
                <div className="text-xl font-bold">247 gal</div>
                <div className="text-xs text-muted-foreground">Used Today</div>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Card className="glass-panel p-8 glow-eco inline-block">
              <h3 className="text-2xl font-bold mb-4">Ready to see these results in your home?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Start with a smart energy monitor or water tracker to get real-time insights and immediate savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#9EE5C3] text-[#1E1F24] hover:bg-[#7DD8B8]">Browse Energy Monitors</Button>
                <Button variant="outline" className="border-[#5DC4E0] hover:bg-[#5DC4E0]/10 bg-transparent">
                  View Water Trackers
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
