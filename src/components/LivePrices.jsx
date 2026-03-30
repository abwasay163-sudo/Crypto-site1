import React from "react"
import { motion } from "motion/react"
import { ArrowRight, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react"
import { GlowingEffect } from "./ui/glowing-effect"

const coins = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$66,445.52",
    change: "+3.60%",
    color: "#F7931A",
    icon: "/18.webp",
    sparkline: "M0 80 L10 75 L20 60 L30 65 L40 55 L50 60 L60 45 L70 50 L80 35 L90 15 L100 20"
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$2,001.93",
    change: "-2.98%",
    color: "#627EEA",
    icon: "/19.webp",
    sparkline: "M0 35 L10 45 L20 30 L30 40 L40 35 L50 50 L60 45 L70 60 L80 55 L90 75 L100 70"
  },
  {
    name: "Cronos",
    symbol: "CRO",
    price: "$0.07183593",
    change: "+1.88%",
    color: "#002D72",
    icon: "/20.webp",
    sparkline: "M0 80 L10 75 L20 60 L30 65 L40 55 L50 60 L60 45 L70 50 L80 35 L90 15 L100 20"
  },
  {
    name: "XRP",
    symbol: "XRP",
    price: "$1.34",
    change: "-1.17%",
    color: "#23292F",
    icon: "/21.webp",
    sparkline: "M0 45 L10 55 L20 40 L30 50 L40 45 L50 60 L60 55 L70 70 L80 65 L90 85 L100 80"
  }
]

const AreaChart = ({ path, color, isNegative }) => {
  const chartId = `chart-${Math.random().toString(36).substr(2, 9)}`
  const strokeColor = isNegative ? "#ef4444" : "#22c55e"
  
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-32 overflow-visible">
      <defs>
        <linearGradient id={chartId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={strokeColor} stopOpacity="0.3" />
          <stop offset="100%" stopColor={strokeColor} stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Fill Area */}
      <motion.path
        d={`${path} L100 100 L0 100 Z`}
        fill={`url(#${chartId})`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Stroke Line */}
      <motion.path
        d={path}
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </svg>
  )
}

export const LivePrices = () => {
  return (
    <section className="py-24 overflow-hidden" style={{ background: "linear-gradient(0deg, rgb(240, 245, 255) 0%, rgb(51, 81, 123) 28.86%, rgb(19, 26, 42) 59.87%, rgb(8, 13, 27) 89.59%)" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-outfit max-w-4xl mx-auto mb-6"
          >
            Stay up-to-date with live crypto prices, <br />
            market cap movement, and trending tokens
          </motion.h2>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary hover:text-primary/80 transition-colors flex items-center justify-center gap-2 group"
          >
            View Live Prices
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex bg-white/5 rounded-full p-1 self-start">
            <button className="px-6 py-2 rounded-full bg-primary text-sm font-medium flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Trending
            </button>
            <button className="px-6 py-2 rounded-full text-white/50 hover:text-white text-sm font-medium transition-colors flex items-center gap-2">
              <TrendingUp className="w-4 h-4 opacity-0" />
              Top Movers
            </button>
          </div>
          

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coins.map((coin, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <GlowingEffect glowColor={coin.color} className="h-full">
                <div className="p-8 h-full bg-[#111828]/50 flex flex-col relative overflow-hidden group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white/5 flex items-center justify-center">
                      <img src={coin.icon} alt={coin.name} className="w-8 h-8 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-outfit leading-tight">{coin.name}</h3>
                      <p className="text-white/40 text-xs uppercase tracking-wider">{coin.symbol}</p>
                    </div>
                  </div>

                  <div className="flex-1 mt-4">
                    <AreaChart 
                      path={coin.sparkline} 
                      color={coin.color} 
                      isNegative={coin.change.startsWith("-")} 
                    />
                  </div>

                  <div className="mt-8 flex items-end justify-between">
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold font-outfit">{coin.price}</span>
                        <span className="text-[10px] text-white/40 font-medium">USD</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className={coin.change.startsWith("-") ? "text-red-500" : "text-green-500 font-medium"}>
                          {coin.change}
                        </span>
                        <span className="text-[10px] text-white/40 uppercase">24h</span>
                      </div>
                    </div>
                    
                    <button className="px-5 py-2.5 bg-[#7135D9]/20 text-[#a882e8] hover:bg-[#7135D9] hover:text-white rounded-lg text-sm font-bold transition-all duration-300 border border-[#7135D9]/30">
                      Buy
                    </button>
                  </div>
                </div>
              </GlowingEffect>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
