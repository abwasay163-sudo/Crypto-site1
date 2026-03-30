import React from "react"
import { motion } from "framer-motion"

const cards = [
  {
    title: "Baskets",
    description: "Thematic coins to instantly diversify your portfolio",
    buttonText: "Browse Baskets",
    image: "/1.webp",
    bgColor: "radial-gradient(ellipse at center, #1E2B4B 0%, #0B1426 100%)",
    imageStyle: "scale-100 md:scale-110"
  },
  {
    title: "Earn",
    description: "Generate passive income by putting idle assets to work",
    buttonText: "Start Earning",
    image: "/2.webp",
    bgColor: "radial-gradient(ellipse at center, #1E2B4B 0%, #0B1426 100%)",
    imageStyle: "scale-100 md:scale-110"
  },
  {
    title: "Staking",
    description: "On-chain staking earns you rewards for securing your favourite blockchain",
    buttonText: "Stake Now",
    image: "/3.webp",
    bgColor: "radial-gradient(ellipse at center, #1E2B4B 0%, #0B1426 100%)",
    imageStyle: "scale-95 md:scale-100"
  },
  {
    title: "Pay",
    description: "Spending crypto is easy with over 300,000 merchants worldwide",
    buttonText: "Explore Pay",
    image: "/4.webp",
    bgColor: "radial-gradient(ellipse at center, #1E2B4B 0%, #0B1426 100%)",
    imageStyle: "scale-95 md:scale-100"
  }
]

export const ExperienceCards = () => {
  return (
    <section className="py-20 bg-[#0B1425]">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden group rounded-[40px] bg-[#10192D] border border-white/5 min-h-[280px] flex flex-col justify-between p-10"
              style={{ background: card.bgColor }}
            >
              <div className="relative z-10 max-w-[280px]">
                <h3 className="text-3xl font-bold font-outfit text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-[#A1A7B5] text-lg font-sans leading-relaxed mb-8">
                  {card.description}
                </p>
                
                <motion.button
                  whileHover={{ backgroundColor: "#7135D9", scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-[#1e2a47] rounded-full text-white font-semibold text-base transition-all duration-300 border border-white/5 group-hover:border-[#7135D9]/30"
                >
                  {card.buttonText}
                </motion.button>
              </div>

              {/* 3D Asset */}
              <div className={`absolute top-0 right-[30px] z-0 h-full w-[408px] origin-top-right pointer-events-none transition-transform duration-500 group-hover:!scale-[1.05] ${card.imageStyle}`}>
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="h-full w-full object-contain object-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Radial Glow behind asset */}
              <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[50%] h-[80%] bg-[#7135D9]/10 blur-[60px] rounded-full -z-0 pointer-events-none group-hover:bg-[#7135D9]/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Level Up Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 w-full"
        >
          <a
            href="#"
            className="group relative flex h-[305px] w-full cursor-pointer flex-col justify-end overflow-hidden rounded-[24px] p-6 lg:p-10 lg:justify-center border border-white/5"
          >
            <img
              alt="level up desktop banner"
              className="absolute inset-0 z-0 h-full w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-110"
              loading="lazy"
              src="https://mkt-static.crypto.com/level-up-desktop-banner.webp"
            />
            {/* Dark bottom gradient overlay */}
            <div
              className="pointer-events-none absolute inset-0 z-10"
              style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 100%)" }}
            ></div>
            
            <div className="flex relative z-20 w-full gap-4 flex-col items-start lg:flex-row lg:items-center lg:justify-between mt-auto lg:mt-0">
              <div className="flex max-w-[360px] flex-col gap-2 z-20">
                <h2 className="text-3xl lg:text-4xl font-bold font-outfit text-white drop-shadow-md">
                  Level Up
                </h2>
                <p className="text-[#A1A7B5] text-[15px] font-sans drop-shadow-md leading-relaxed">
                  Subscribe to industry leading rewards
                </p>
              </div>
              
              <div className="relative flex h-10 min-w-16 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-[24px] border border-white/20 bg-white/10 px-[18px] py-2 backdrop-blur-xl transition-all duration-300 ease-out group-hover:border-white/30 group-hover:bg-white/20 active:scale-95">
                <span className="text-center text-[14px] font-semibold text-white">Learn More →</span>
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"></div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
