import React from "react"
import { motion } from "motion/react"
import { PricingCard } from "./ui/pricing-card"

export const Pricing = () => {
  const tiers = [
    {
      title: "Starter",
      price: "$0",
      description: "Perfect for individuals exploring Web3.",
      features: [
        { text: "Up to 5 wallets", included: true },
        { text: "Standard trading tools", included: true },
        { text: "Basic security features", included: true },
        { text: "Email support", included: true },
        { text: "Institutional-grade custody", included: true },
        { text: "Priority settlements", included: true },
      ],
      cta: "Get started",
      delay: 0.1
    },
    {
      title: "Pro",
      price: "$79",
      description: "For professional traders and small funds.",
      features: [
        { text: "Unlimited wallets", included: true },
        { text: "Advanced AI trading engine", included: true },
        { text: "Institutional-grade custody", included: true },
        { text: "Priority settlements", included: true },
        { text: "24/7 dedicated account manager", included: true },
        { text: "API access for HFT", included: true },
      ],
      highlighted: true,
      cta: "Upgrade to Pro",
      delay: 0
    },
    {
      title: "Whale",
      price: "Contact us",
      description: "Custom solutions for large institutions.",
      features: [
        { text: "Bespoke infrastructure", included: true },
        { text: "OTC desk integration", included: true },
        { text: "Multi-jurisdictional compliance", included: true },
        { text: "White-label solutions", included: true },
        { text: "On-site private cloud", included: true },
        { text: "Zero-latency dedicated line", included: true },
      ],
      cta: "Talk to sales",
      delay: 0.2
    }
  ]

  return (
    <section className="relative py-24 bg-[#080D1B] overflow-hidden" id="pricing">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-outfit mb-6"
          >
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/50"
          >
            Choose the plan that fits your growth ambitions. No hidden fees, ever.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {tiers.map((tier, idx) => (
            <PricingCard key={idx} {...tier} />
          ))}
        </div>
      </div>
    </section>
  )
}
