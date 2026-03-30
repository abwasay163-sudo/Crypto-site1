import React from "react"
import { motion } from "motion/react"

const partners = [
  { name: "Binance", logo: "BINANCE" },
  { name: "Coinbase", logo: "COINBASE" },
  { name: "Kraken", logo: "KRAKEN" },
  { name: "Gemini", logo: "GEMINI" },
  { name: "Crypto.com", logo: "CRYPTO.COM" },
  { name: "Metamask", logo: "METAMASK" },
]

export const Partners = () => {
  return (
    <section className="py-20 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-sm font-outfit uppercase tracking-[0.2em] text-white/40">
          Trusted by the world's most innovative companies
        </p>
      </div>
      
      <div className="flex w-full overflow-hidden">
        <motion.div 
          className="flex items-center gap-16 whitespace-nowrap px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Double the list for seamless loop */}
          {[...partners, ...partners].map((partner, idx) => (
            <div 
              key={idx} 
              className="text-3xl font-bold font-outfit text-white/20 hover:text-white transition-all duration-500 cursor-default tracking-tighter"
            >
              {partner.logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
