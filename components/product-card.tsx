import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingDown, Leaf, Zap, Droplet, ArrowRight } from "lucide-react"
import Image from "next/image"

interface Product {
  id: number
  name: string
  image: string
  rating: number
  annualSavings: number
  sustainabilityScore: number
  features: string[]
  price: number
  badge?: string
}

export function ProductCard({ product, type }: { product: Product; type: "energy" | "water" }) {
  const accentColor = type === "energy" ? "#9EE5C3" : "#5DC4E0"
  const Icon = type === "energy" ? Zap : Droplet

  return (
    <Card className="glass-panel overflow-hidden group hover:glow-eco transition-all">
      {/* Image */}
      <div className="relative h-64 bg-muted/20 overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#9EE5C3] to-[#7DD8B8] text-[#1E1F24] border-0">
            {product.badge}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div>
          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
          <div className="text-3xl font-bold" style={{ color: accentColor }}>
            ${product.price}
          </div>
        </div>

        {/* Ratings Dashboard */}
        <div className="grid grid-cols-3 gap-3 py-4 border-y">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Star className="w-4 h-4 fill-[#F7D154] text-[#F7D154]" />
              <span className="font-bold text-lg">{product.rating}</span>
            </div>
            <div className="text-xs text-muted-foreground">Efficiency</div>
          </div>
          <div className="text-center border-x">
            <div className="flex items-center justify-center gap-1 mb-1">
              <TrendingDown className="w-4 h-4 text-[#9EE5C3]" />
              <span className="font-bold text-lg">${product.annualSavings}</span>
            </div>
            <div className="text-xs text-muted-foreground">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Leaf className="w-4 h-4 text-[#7DD8B8]" />
              <span className="font-bold text-lg">{product.sustainabilityScore}</span>
            </div>
            <div className="text-xs text-muted-foreground">Eco Score</div>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: accentColor }} />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button className="w-full group/btn" style={{ backgroundColor: accentColor, color: "#1E1F24" }}>
          View Details
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  )
}
