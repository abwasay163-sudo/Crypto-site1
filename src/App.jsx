import React from "react"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Partners } from "./components/Partners"
import { Features } from "./components/Features"
import { LivePrices } from "./components/LivePrices"
import { AppShowcase } from "./components/AppShowcase"
import { CreditCard } from "./components/CreditCard"
import { Pricing } from "./components/Pricing"
import { ExperienceCards } from "./components/ExperienceCards"
import { BeyondTrading } from "./components/BeyondTrading"
import { AdvancedTrading } from "./components/AdvancedTrading"
import { FeaturedPartners } from "./components/FeaturedPartners"
import { WaysToTrade } from "./components/WaysToTrade"
import { Footer } from "./components/Footer"
import { FAQ } from "./components/FAQ"


function App() {
  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Features />
        <LivePrices />
        <AppShowcase />
        <ExperienceCards />
        <CreditCard />
        <BeyondTrading />
        <AdvancedTrading />
        <FeaturedPartners />
        <WaysToTrade />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
