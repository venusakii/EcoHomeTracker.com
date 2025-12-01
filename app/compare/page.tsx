"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Check, X, Star, Zap, TrendingDown, Leaf } from "lucide-react"

const devices = [
  {
    id: 1,
    name: "EcoTrack Pro X1",
    type: "Energy Monitor",
    price: 299,
    rating: 95,
    annualSavings: 380,
    sustainabilityScore: 92,
    features: {
      realTimeMonitoring: true,
      circuitBreakdown: 16,
      aiPredictions: true,
      solarIntegration: true,
      voiceControl: true,
      mobileApp: true,
      warranty: 5,
    },
  },
  {
    id: 2,
    name: "PowerSense Ultra",
    type: "Energy Monitor",
    price: 249,
    rating: 91,
    annualSavings: 320,
    sustainabilityScore: 88,
    features: {
      realTimeMonitoring: true,
      circuitBreakdown: 16,
      aiPredictions: true,
      solarIntegration: false,
      voiceControl: true,
      mobileApp: true,
      warranty: 3,
    },
  },
  {
    id: 3,
    name: "AquaSense Pro",
    type: "Water Tracker",
    price: 349,
    rating: 94,
    annualSavings: 420,
    sustainabilityScore: 93,
    features: {
      realTimeMonitoring: true,
      circuitBreakdown: 4,
      aiPredictions: true,
      solarIntegration: false,
      voiceControl: true,
      mobileApp: true,
      warranty: 5,
    },
  },
]

export default function ComparePage() {
  const [selectedDevices, setSelectedDevices] = useState([devices[0], devices[1], devices[2]])

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Device Comparison</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compare features, savings, and efficiency ratings side-by-side to find the perfect smart monitoring
              solution.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header Row */}
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="col-span-1">
                  <Card className="glass-panel p-4 h-full flex items-center">
                    <h3 className="font-semibold">Features</h3>
                  </Card>
                </div>
                {selectedDevices.map((device) => (
                  <div key={device.id} className="col-span-1">
                    <Card className="glass-panel p-6 text-center h-full">
                      <Badge className="mb-3 bg-[#9EE5C3]/20 text-[#9EE5C3] border-0">{device.type}</Badge>
                      <h3 className="font-bold text-lg mb-2">{device.name}</h3>
                      <div className="text-3xl font-bold text-[#9EE5C3] mb-4">${device.price}</div>
                      <Button className="w-full bg-[#9EE5C3] text-[#1E1F24] hover:bg-[#7DD8B8]">View Details</Button>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Ratings Section */}
              <Card className="glass-panel p-6 mb-4">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#F7D154]" />
                  Performance Metrics
                </h4>
                <div className="space-y-4">
                  <ComparisonRow
                    label="Efficiency Rating"
                    icon={<Zap className="w-4 h-4" />}
                    values={selectedDevices.map((d) => `${d.rating}/100`)}
                  />
                  <ComparisonRow
                    label="Annual Savings"
                    icon={<TrendingDown className="w-4 h-4" />}
                    values={selectedDevices.map((d) => `$${d.annualSavings}`)}
                  />
                  <ComparisonRow
                    label="Eco Score"
                    icon={<Leaf className="w-4 h-4" />}
                    values={selectedDevices.map((d) => `${d.sustainabilityScore}/100`)}
                  />
                </div>
              </Card>

              {/* Features Section */}
              <Card className="glass-panel p-6 mb-4">
                <h4 className="font-semibold mb-4">Core Features</h4>
                <div className="space-y-4">
                  <ComparisonRow
                    label="Real-Time Monitoring"
                    values={selectedDevices.map((d) => d.features.realTimeMonitoring)}
                    isBoolean
                  />
                  <ComparisonRow
                    label="Circuit/Zone Breakdown"
                    values={selectedDevices.map((d) => `${d.features.circuitBreakdown} channels`)}
                  />
                  <ComparisonRow
                    label="AI Predictions"
                    values={selectedDevices.map((d) => d.features.aiPredictions)}
                    isBoolean
                  />
                  <ComparisonRow
                    label="Solar Integration"
                    values={selectedDevices.map((d) => d.features.solarIntegration)}
                    isBoolean
                  />
                  <ComparisonRow
                    label="Voice Control"
                    values={selectedDevices.map((d) => d.features.voiceControl)}
                    isBoolean
                  />
                  <ComparisonRow
                    label="Mobile App"
                    values={selectedDevices.map((d) => d.features.mobileApp)}
                    isBoolean
                  />
                  <ComparisonRow label="Warranty" values={selectedDevices.map((d) => `${d.features.warranty} years`)} />
                </div>
              </Card>

              {/* Value Analysis */}
              <Card className="glass-panel p-6">
                <h4 className="font-semibold mb-4">Value Analysis</h4>
                <div className="grid grid-cols-4 gap-4">
                  <div className="font-medium">Payback Period</div>
                  {selectedDevices.map((device) => (
                    <div key={device.id} className="text-center">
                      <div className="text-xl font-bold text-[#F7D154]">
                        {Math.round((device.price / device.annualSavings) * 12)} mo
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  <div className="font-medium">5-Year Savings</div>
                  {selectedDevices.map((device) => (
                    <div key={device.id} className="text-center">
                      <div className="text-xl font-bold text-[#9EE5C3]">${device.annualSavings * 5 - device.price}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Info Section */}
          <Card className="glass-panel p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">How to Choose the Right Device</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Consider Your Usage</h4>
                <p>
                  High energy homes (1000+ kWh/month) benefit most from premium monitors with detailed circuit
                  breakdowns.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Integration Matters</h4>
                <p>
                  If you have solar panels or plan to add them, choose a monitor with solar integration capabilities.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Long-Term Value</h4>
                <p>Focus on annual savings potential and warranty length rather than upfront cost alone.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ComparisonRow({
  label,
  icon,
  values,
  isBoolean = false,
}: {
  label: string
  icon?: React.ReactNode
  values: (string | boolean)[]
  isBoolean?: boolean
}) {
  return (
    <div className="grid grid-cols-4 gap-4 py-3 border-b last:border-b-0">
      <div className="flex items-center gap-2 font-medium">
        {icon}
        {label}
      </div>
      {values.map((value, index) => (
        <div key={index} className="text-center flex items-center justify-center">
          {isBoolean ? (
            value ? (
              <Check className="w-5 h-5 text-[#9EE5C3]" />
            ) : (
              <X className="w-5 h-5 text-muted-foreground" />
            )
          ) : (
            <span className="text-muted-foreground">{value}</span>
          )}
        </div>
      ))}
    </div>
  )
}
