import React from "react"
import { motion } from "framer-motion"

export const AdvancedTrading = () => {
  return (
    <section className="bg-[#050505] w-full pt-0 md:pt-0">
      <div className="mb-[0px] md:mb-[-32px] w-full pb-[0px] md:pb-[32px] lg:mb-[-64px] lg:pb-[-64px]">
        <div className="z-0 w-full px-0 sm:px-0">
          <div 
            className="z-10 w-full overflow-hidden rounded-none md:rounded-t-[48px] lg:rounded-t-[64px] pt-12 sm:pt-12 lg:pt-16 relative"
            style={{
              background: "linear-gradient(185deg, rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 90.38%), linear-gradient(rgb(0, 0, 0) 0%, rgb(146, 156, 172) 100%)"
            }}
          >
            <div className="flex z-[100] mx-auto w-full max-w-[1200px] flex-col items-center gap-4 px-4 sm:px-8 pb-8 lg:gap-8 lg:px-16 lg:pb-0 relative">
              
              {/* Top Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex flex-row items-center justify-center gap-2.5 mb-1"
              >
                <div className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] rounded-[6px] bg-[#111827] border border-white/10 flex items-center justify-center shrink-0 shadow-lg">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[12px] sm:h-[12px]">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
                    <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[13px] sm:text-[15px] lg:text-[17px] text-[#A1A7B5] font-semibold tracking-wide">
                  Advanced Trading
                </span>
              </motion.div>
              
              {/* Title & Subtitle */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-2 sm:gap-4 lg:max-w-none z-10"
              >
                <h2 className="text-[34px] sm:text-5xl md:text-6xl lg:text-[72px] font-bold font-outfit tracking-tight leading-[1.15] text-white text-center">
                  Power meets <br />
                  precision
                </h2>
                <p className="text-[14px] sm:text-[17px] md:text-[22px] lg:text-[24px] text-[#A1A7B5] font-medium text-center leading-snug sm:mt-2">
                  Trade with institutional-grade <br />
                  speed and deeper liquidity
                </p>
              </motion.div>

              {/* Action Buttons - Desktop Only */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="hidden sm:flex flex-wrap items-center justify-center gap-4 mt-2 sm:mt-4 z-10 w-full sm:w-auto"
              >
                <button className="px-6 md:px-8 py-2 md:py-3 w-full sm:w-auto justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-[24px] text-white font-semibold text-[14px] sm:text-[15px] transition-all flex items-center gap-2 hover:bg-white/15">
                  Create Account <span className="transform transition-transform group-hover:translate-x-1">→</span>
                </button>
              </motion.div>

              {/* Image Container */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="relative w-full mt-4 sm:mt-8 lg:mt-12" 
                dir="ltr"
              >
                <div 
                  className="h-auto relative w-[120%] sm:w-[110%] md:w-full overflow-hidden"
                  style={{ 
                    position: "relative", 
                    left: "50%", 
                    transform: "translateX(-50%)"
                  }}
                >
                  <img 
                    alt="Power meets precision" 
                    className="object-contain h-auto w-full mx-auto" 
                    loading="lazy" 
                    src="https://mkt-static.crypto.com/cdc_home_exchangehero_global(usd).webp" 
                  />
                </div>
              </motion.div>
              
              {/* Action Buttons - Mobile Only (positioned below image to match exact layout) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex sm:hidden w-full justify-center px-4 mt-[-20px] pb-4 z-20 relative"
              >
                <button className="flex w-[85%] max-w-[320px] items-center justify-center gap-2 py-3 bg-[#131416] backdrop-blur-xl border border-white/10 rounded-full text-white font-semibold text-[15px]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20V18H18V20H6Z" fill="white"/>
                  </svg>
                  Get the app
                </button>
              </motion.div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Core Features Below Image in dark section */}
      <div className="w-full bg-[#050505] relative z-20 pt-8 sm:pt-16 pb-16 lg:pt-24 lg:pb-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 text-left">
            {[
              {
                title: "Ultra-low latency",
                desc: "Competitive pricing across multiple trading pairs"
              },
              {
                title: "Competitive fees",
                desc: "Maker and taker fees as low as 0.08% / 0.18% - trade more, pay less"
              },
              {
                title: "Deeper liquidity",
                desc: "Order-book depth across 400+ markets for tighter spreads"
              },
              {
                title: "Pro-grade reliability",
                desc: "Trusted global infrastructure delivering 99.99% uptime worldwide"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                viewport={{ once: true }}
                className="flex flex-col gap-1 sm:gap-2"
              >
                <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold font-outfit text-white leading-snug">
                  {item.title}
                </h4>
                <p className="text-[#A1A7B5] text-[13px] sm:text-[14px] md:text-[15px] font-sans leading-relaxed pr-4">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
