import React from "react"
import { motion } from "framer-motion"

const TradeCards = [
  {
    id: 1,
    pill: "Advanced Features",
    pillColor: "text-white/60",
    image: "/11.webp",
    title: "Advanced Trading",
    description: "Pro features for advanced traders",
    buttonText: "Open the Exchange",
    cardStyle: {
      background: "linear-gradient(180deg, #1c1f27 0%, #0d1117 100%)",
    },
    imageClass: "object-contain object-bottom scale-[1.12]",
    hoverBorder: "hover:border-white/20",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#1a2233"/>
        <circle cx="16" cy="16" r="10" fill="none" stroke="#4a9eff" strokeWidth="1.5"/>
        <path d="M11 21 L14 16 L17 18 L21 12" stroke="#4a9eff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 2,
    pill: "Easy & Fast",
    pillColor: "text-[#f0a352]",
    image: "/12.webp",
    title: "Crypto.com App",
    description: "All-in-one platform built for everyday users",
    buttonText: "Start Trading",
    isPrimary: true,
    cardStyle: {
      background: "linear-gradient(180deg, #12213a 0%, #0a1628 50%, #070f1e 100%)",
    },
    imageClass: "object-contain object-bottom scale-[1.18]",
    hoverBorder: "hover:border-blue-500/30",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#1155cc"/>
        <circle cx="16" cy="16" r="9" fill="none" stroke="white" strokeWidth="1.5"/>
        <path d="M16 8 L19 13 L25 14 L20.5 18 L22 24 L16 21 L10 24 L11.5 18 L7 14 L13 13 Z" fill="white" opacity="0.9"/>
      </svg>
    )
  },
  {
    id: 3,
    pill: "Explore DeFi",
    pillColor: "text-black/50",
    image: "/13.webp",
    title: "Onchain Wallet",
    description: "Self-custody wallet built for Web3 users",
    buttonText: "Download the App",
    cardStyle: {
      background: "linear-gradient(180deg, #d8dde8 0%, #b0bac8 40%, #1a2233 80%, #0d1117 100%)",
    },
    imageClass: "object-contain object-bottom scale-[1.12]",
    hoverBorder: "hover:border-white/20",
    icon: (
      <div className="bg-white rounded-lg w-[26px] h-[26px] flex items-center justify-center shadow-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="none" stroke="#1155cc" strokeWidth="2"/>
          <path d="M12 4 C9 4 6 7 6 12 C6 17 9 20 12 20 C15 20 18 17 18 12 C18 7 15 4 12 4Z" fill="#1155cc" opacity="0.2"/>
          <path d="M4 12 C6 10 9 9 12 9 C15 9 18 10 20 12" stroke="#1155cc" strokeWidth="1.5"/>
          <path d="M4 12 C6 14 9 15 12 15 C15 15 18 14 20 12" stroke="#1155cc" strokeWidth="1.5"/>
          <line x1="12" y1="2" x2="12" y2="22" stroke="#1155cc" strokeWidth="1.5"/>
        </svg>
      </div>
    )
  }
]

export const WaysToTrade = () => {
  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ background: "#080D1B" }}
    >
      <div className="max-w-[1240px] mx-auto px-6">

        {/* Header Row — Centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-8 mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight font-outfit max-w-[800px]">
            One platform, multiple ways to trade
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[16px] font-bold text-white transition-all duration-300 font-outfit whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg, #1a4fd4 0%, #1069ff 100%)",
              boxShadow: "0 0 0 0 rgba(16,105,255,0)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(16,105,255,0.45)"
              e.currentTarget.style.transform = "translateY(-2px)"
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = "0 0 0 0 rgba(16,105,255,0)"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            Create an account
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

        {/* Cards Grid */}
        <div className="mx-auto flex h-auto lg:h-[560px] w-full max-w-[1240px] flex-col lg:flex-row items-center justify-center gap-[10px] sm:gap-[16px] lg:gap-[18px]">
          {TradeCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: "easeOut" 
              }}
              whileHover={{ 
                scale: 1.1, 
                zIndex: 50,
              }}
              viewport={{ once: true }}
              className="group relative flex h-[520px] w-full flex-1 cursor-pointer flex-col items-start justify-between overflow-hidden p-4 md:p-8 rounded-[16px] transition-all duration-100 ease-out"
              style={{
                background: card.id === 3 
                  ? "linear-gradient(rgba(0, 0, 0, 0) 55.2%, rgb(0, 0, 0) 86.03%), linear-gradient(243deg, #d8dde8 4.93%, #1a2233 152.94%)"
                  : card.id === 2
                  ? "linear-gradient(rgba(0, 0, 0, 0) 55.2%, rgb(0, 0, 0) 86.03%), linear-gradient(243deg, #12213a 4.93%, #070f1e 152.94%)"
                  : "linear-gradient(rgba(0, 0, 0, 0) 55.2%, rgb(0, 0, 0) 86.03%), linear-gradient(243deg, rgb(0, 0, 0) 4.93%, rgb(102, 102, 102) 152.94%)"
              }}
            >
              {/* Top Row: Icon and Pill */}
              <div className="flex z-20 w-full flex-row items-start justify-between">
                <div className="h-[26px] w-[26px] drop-shadow-xl">
                  {card.icon}
                </div>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-[12px] font-normal bg-[#212121] text-[rgba(255,255,255,0.43)] border border-white/5">
                  {card.pill}
                </span>
              </div>

              {/* Dark Gradient Overlay for readability (Stronger bottom face) */}
              <div className="pointer-events-none absolute inset-0 z-10" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.8) 70%, rgb(0, 0, 0) 100%)" }}></div>

              {/* Absolute Product Image (Static child, no internal hover scale) */}
              <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-auto max-w-none absolute z-0 object-center block overflow-hidden">
                <img 
                  alt={card.title} 
                  className="object-fill h-full w-auto max-w-none transition-transform duration-200 ease-out" 
                  loading="lazy" 
                  src={card.image}
                />
              </div>

              {/* Content Row (Bottom) - On top of overlay */}
              <div className="flex z-20 flex-col items-start gap-4 w-full relative">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[28px] font-bold text-white font-outfit leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-[rgba(255,255,255,0.6)] text-[15px] font-medium font-outfit leading-relaxed max-w-[260px]">
                    {card.description}
                  </p>
                </div>

                <button
                  className={`w-max py-2.5 px-7 rounded-full text-[14px] font-bold font-outfit transition-all duration-100 ${
                    card.isPrimary 
                    ? "bg-[#7135D9] text-white border-none shadow-[0_4px_15px_rgba(113,53,217,0.3)] group-hover:bg-[#5b2ab3] group-hover:shadow-[0_4px_25px_rgba(113,53,217,0.5)]" 
                    : "bg-[rgba(255,255,255,0.12)] text-white border border-white/10 group-hover:bg-[rgba(255,255,255,0.2)] group-hover:border-white/20"
                  }`}
                >
                  {card.buttonText} →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
