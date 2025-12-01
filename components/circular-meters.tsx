"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

export function CircularMeters() {
  const [energyValue, setEnergyValue] = useState(67)
  const [waterValue, setWaterValue] = useState(82)
  const [efficiency, setEfficiency] = useState(91)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyValue((prev) => Math.min(100, Math.max(0, prev + (Math.random() - 0.5) * 5)))
      setWaterValue((prev) => Math.min(100, Math.max(0, prev + (Math.random() - 0.5) * 3)))
      setEfficiency((prev) => Math.min(100, Math.max(0, prev + (Math.random() - 0.5) * 2)))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <MeterCard
        label="Electricity Usage"
        value={energyValue}
        unit="kWh"
        color="eco-mint"
        gradient="from-[#9EE5C3] to-[#7DD8B8]"
      />
      <MeterCard
        label="Water Consumption"
        value={waterValue}
        unit="gal"
        color="aqua-blue"
        gradient="from-[#5DC4E0] to-[#45B8D8]"
      />
      <MeterCard
        label="Efficiency Score"
        value={efficiency}
        unit="%"
        color="energy-yellow"
        gradient="from-[#F7D154] to-[#E5C048]"
      />
    </div>
  )
}

function MeterCard({
  label,
  value,
  unit,
  color,
  gradient,
}: {
  label: string
  value: number
  unit: string
  color: string
  gradient: string
}) {
  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <Card className="glass-panel p-6 relative overflow-hidden group hover:scale-105 transition-transform">
      <div className="relative">
        {/* SVG Circular Meter */}
        <svg className="w-full h-auto" viewBox="0 0 120 120">
          {/* Background circle */}
          <circle cx="60" cy="60" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-muted/20" />
          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
          {/* Center text */}
          <text x="60" y="55" textAnchor="middle" className="text-2xl font-bold fill-current">
            {Math.round(value)}
          </text>
          <text x="60" y="70" textAnchor="middle" className="text-xs fill-muted-foreground">
            {unit}
          </text>

          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                className={`${gradient.split(" ")[0].replace("from-", "text-")}`}
                stopColor="currentColor"
              />
              <stop
                offset="100%"
                className={`${gradient.split(" ")[1].replace("to-", "text-")}`}
                stopColor="currentColor"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="text-center mt-4">
        <h3 className="font-semibold text-sm text-muted-foreground">{label}</h3>
        <div
          className={`inline-flex items-center gap-1 mt-2 px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-[#1E1F24] text-xs font-medium`}
        >
          <span className="w-2 h-2 bg-[#1E1F24] rounded-full animate-pulse" />
          Real-time
        </div>
      </div>
    </Card>
  )
}
