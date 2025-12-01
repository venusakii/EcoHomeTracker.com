import Link from "next/link"
import { Zap, Mail, Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-[#4ecdc4]/30 bg-[#13182e] mt-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b6b] rounded-full blur-[150px] opacity-10 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4ecdc4] rounded-full blur-[150px] opacity-10 -z-10" />

      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#ff6b6b] to-[#4ecdc4] rounded-xl flex items-center justify-center glow-cyan">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-lg">EcoHomeTracker</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Smarter homes. Lower bills. Smaller footprint.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold mb-4 text-[#ff6b6b]">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/devices/energy-monitors"
                  className="text-muted-foreground hover:text-[#4ecdc4] transition-colors"
                >
                  Energy Monitors
                </Link>
              </li>
              <li>
                <Link
                  href="/devices/water-trackers"
                  className="text-muted-foreground hover:text-[#4ecdc4] transition-colors"
                >
                  Water Trackers
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-muted-foreground hover:text-[#4ecdc4] transition-colors">
                  Device Compare
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4 text-[#4ecdc4]">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/guides" className="text-muted-foreground hover:text-[#ff6b9d] transition-colors">
                  Eco Guides
                </Link>
              </li>
              <li>
                <Link href="/dashboard-tools" className="text-muted-foreground hover:text-[#ff6b9d] transition-colors">
                  Dashboard Tools
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-[#ff6b9d] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold mb-4 text-[#ff6b9d]">Connect</h3>
            <div className="flex gap-4">
              <a
                href="mailto:hello@ecohometracker.com"
                className="text-muted-foreground hover:text-[#ff6b6b] transition-colors hover:scale-110 transform"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                className="text-muted-foreground hover:text-[#4ecdc4] transition-colors hover:scale-110 transform"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                className="text-muted-foreground hover:text-[#ff6b9d] transition-colors hover:scale-110 transform"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center text-sm text-muted-foreground relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ecdc4] to-transparent" />
          <p className="font-medium">
            &copy; {new Date().getFullYear()} EcoHomeTracker.{" "}
            <span className="text-[#4ecdc4]">Efficiency is not a trend</span> — it's your next upgrade.
          </p>
        </div>
      </div>
    </footer>
  )
}
