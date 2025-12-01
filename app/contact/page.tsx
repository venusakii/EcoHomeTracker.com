"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about smart home monitoring? Need help choosing the right device? We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="glass-panel p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#9EE5C3] to-[#7DD8B8] rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-[#1E1F24]" />
                </div>
                <h2 className="text-2xl font-bold">Send us a message</h2>
              </div>

              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us more about your needs..." rows={6} className="mt-2" />
                </div>
                <Button className="w-full bg-[#9EE5C3] text-[#1E1F24] hover:bg-[#7DD8B8]">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="glass-panel p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#5DC4E0] to-[#45B8D8] rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Email Us</h3>
                </div>
                <p className="text-muted-foreground mb-2">For general inquiries and support:</p>
                <a href="mailto:hello@ecohometracker.com" className="text-[#9EE5C3] hover:underline font-medium">
                  hello@ecohometracker.com
                </a>
              </Card>

              <Card className="glass-panel p-8">
                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Do I need professional installation?</h4>
                    <p className="text-sm text-muted-foreground">
                      Most devices are plug-and-play or require basic DIY installation. Professional installation is
                      optional but available for whole-home systems.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">How quickly will I see savings?</h4>
                    <p className="text-sm text-muted-foreground">
                      Most users see immediate insights and start reducing consumption within the first week.
                      Significant savings typically appear within 30-60 days.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Are your recommendations unbiased?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes. We test and evaluate all products independently and prioritize accuracy over affiliate
                      relationships.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass-panel p-8 glow-eco">
                <h3 className="text-xl font-bold mb-2">Response Time</h3>
                <p className="text-muted-foreground">
                  We typically respond within 24 hours during business days. For urgent technical support, please
                  indicate "URGENT" in your subject line.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
