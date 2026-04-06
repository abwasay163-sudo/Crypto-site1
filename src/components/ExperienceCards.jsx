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
    <section className="py-12 md:py-20 bg-[#0B1425]">
      <div className="max-w-[1140px] mx-auto px-4 md:px-6">
        {/* 2x2 grid on mobile and desktop! */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden group rounded-[20px] md:rounded-[40px] bg-[#121A2F] border border-white/5 flex flex-col md:flex-row p-4 md:p-10 min-h-[220px] md:min-h-[280px]"
              style={{ background: card.bgColor }}
            >
              {/* Mobile Image (top) */}
              <div className="md:hidden relative w-full h-[100px] flex justify-center items-start overflow-hidden mb-3">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="absolute top-0 w-[140%] max-w-none origin-top object-contain drop-shadow-lg opacity-80"
                />
              </div>

              {/* Card Text Content */}
              <div className="relative z-10 w-full md:max-w-[280px] flex flex-col h-full md:justify-between">
                <h3 className="text-[15px] sm:text-[18px] md:text-3xl font-bold font-outfit text-white mb-1 md:mb-4">
                  {card.title}
                </h3>
                <p className="text-[#A1A7B5] text-[11px] sm:text-[13px] md:text-lg font-sans leading-snug md:leading-relaxed mb-3 md:mb-6 flex-grow">
                  {card.description}
                </p>
                
                <motion.button
                  whileHover={{ backgroundColor: "#0651AB", scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 md:px-8 py-1.5 md:py-3 bg-[#11316B] md:bg-[#1e2a47] rounded-full text-white font-semibold text-[11px] md:text-base transition-all duration-300 w-max border-none md:border md:border-white/5"
                >
                  {card.buttonText}
                </motion.button>
              </div>

              {/* Desktop 3D Asset (right) */}
              <div className={`hidden md:block absolute top-0 right-[-30px] sm:right-0 md:right-[30px] z-0 h-[120%] sm:h-full w-[200px] sm:w-[280px] md:w-[408px] origin-top-right pointer-events-none transition-transform duration-500 group-hover:sm:scale-[1.05] ${card.imageStyle}`}>
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="h-full w-full object-contain object-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-40 sm:opacity-80 md:opacity-100"
                />
              </div>

              {/* Radial Glow behind asset */}
              <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[50%] h-[80%] bg-[#7135D9]/10 blur-[60px] rounded-full -z-0 pointer-events-none group-hover:bg-[#7135D9]/20 transition-all duration-500 hidden md:block" />
            </motion.div>
          ))}
        </div>

        {/* Level Up Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 md:mt-6 w-full"
        >
          <a
            href="#"
            className="group relative flex min-h-[380px] md:h-[305px] w-full cursor-pointer flex-col justify-end overflow-hidden rounded-[20px] md:rounded-[24px] p-5 lg:p-10 lg:justify-center border border-white/5 bg-black"
          >
            {/* Image Container: Capped height on mobile to prevent massive 0 graphic scaling */}
            <div className="absolute top-0 left-0 right-0 z-0 h-[70%] md:h-full w-full overflow-hidden">
              <img
                 alt="level up desktop banner"
                 className="h-full w-full object-cover object-[70%_top] md:object-right transition-transform duration-300 ease-out group-hover:scale-[1.05]"
                 loading="lazy"
                 src="https://mkt-static.crypto.com/level-up-desktop-banner.webp"
              />
              {/* Fade out the bottom edge of the image to blend into the black card background on mobile */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent md:hidden"></div>
            </div>

            {/* General Dark bottom gradient overlay to ensure text visibility */}
            <div
              className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 md:from-black/80 to-transparent"
            ></div>
            
            <div className="flex relative z-20 w-full gap-3 flex-col items-start lg:flex-row lg:items-center lg:justify-between mt-auto lg:mt-0">
              <div className="flex max-w-[360px] flex-col gap-1 z-20">
                <h2 className="text-[17px] sm:text-2xl lg:text-4xl font-bold font-outfit text-white">
                  Level Up
                </h2>
                <p className="text-[#A1A7B5] text-[13px] sm:text-[15px] font-sans">
                  Subscribe to industry leading rewards
                </p>
              </div>
              
              <div className="relative flex h-8 md:h-10 w-max items-center justify-center gap-2 overflow-hidden rounded-[24px] border border-white/20 px-[16px] md:px-[18px] py-1.5 md:py-2 backdrop-blur-xl transition-all duration-300 ease-out active:scale-95">
                <span className="text-center text-[12px] md:text-[14px] font-bold text-white">Learn More →</span>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
