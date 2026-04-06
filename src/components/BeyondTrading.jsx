import React from "react"
import { motion } from "framer-motion"

const bCards = [
  {
    title: "University",
    description: "Learn the fundamentals and master crypto knowledge",
    image: "/6.webp",
    link: "#"
  },
  {
    title: "Security",
    description: "Leading the world in licences, registrations, and certifications",
    image: "/7.webp",
    link: "#"
  },
  {
    title: "Developers",
    description: "Build, manage, and interact with applications on Cronos chain",
    image: "/8.webp",
    link: "#"
  }
]

export const BeyondTrading = () => {
  return (
    <section 
      className="relative py-16 md:py-20 pb-20 md:pb-32 overflow-hidden"
      style={{
        background: "linear-gradient(0deg, rgb(240, 245, 255) 23.91%, rgb(51, 81, 123) 40.72%, rgb(19, 26, 42) 58.78%, rgb(8, 13, 27) 76.09%)"
      }}
    >
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold font-outfit text-white tracking-tight mb-8 md:mb-12 px-2">
          Crypto beyond trading
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {bCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group relative flex flex-col justify-between h-[360px] sm:h-[420px] lg:h-[480px] w-full cursor-pointer overflow-hidden rounded-[24px] lg:rounded-[32px] border border-white/5 bg-[#10141e]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                onError={(e) => {
                  /* Fallbacks if files are missing locally */
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('bg-[#141d2f]');
                }}
              />
              
              {/* Top fade to read the title */}
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050505]/60 via-transparent to-transparent h-[40%] pointer-events-none" />
              
              {/* Bottom fade to read the text */}
              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#050505]/95 via-[#050505]/40 to-transparent h-[60%] pointer-events-none" />
              
              <div className="relative z-20 p-6 md:p-8 h-full flex flex-col justify-between">
                <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-white tracking-wide">
                  {card.title}
                </h3>
                
                <div className="flex items-end justify-between gap-4 mt-auto">
                  <p className="text-[#a1a7c0] text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed max-w-[85%] font-medium">
                    {card.description}
                  </p>
                  
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40">
                    <span className="text-white text-lg sm:text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
