import React from "react"
import { motion } from "framer-motion"

export const AppShowcase = () => {
  return (
    <section className="relative pt-0 lg:pt-24 bg-white md:bg-[rgb(240,245,255)]">
      <div className="w-full rounded-none md:rounded-t-[48px] lg:rounded-t-[64px] bg-[#0B1425] pt-16 md:pt-24 lg:pt-32 pb-0 overflow-hidden relative border-t-0 md:border-t border-white/5">
        <div className="max-w-[1248px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-3 md:gap-6 mb-6 md:mb-16">
            
            {/* Top Badge matching reference image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-row items-center justify-center gap-2 mb-2 sm:mb-0"
            >
              <div className="w-[24px] h-[24px] rounded-[6px] bg-[#001D4A] flex items-center justify-center shrink-0 border border-white/5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
                  <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[14px] sm:text-[15px] text-[#A1A7B5] font-semibold tracking-normal">
                Crypto.com App
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-[36px] sm:text-5xl md:text-7xl font-bold font-outfit tracking-tight leading-[1.1] md:leading-tight text-white mb-1 max-w-[280px] sm:max-w-none"
            >
              Your crypto <br className="hidden sm:block" />
              journey starts <br className="hidden sm:block"/>
              here
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-[16px] sm:text-lg md:text-xl text-[#B9C0D3] font-medium px-4 max-w-[280px] sm:max-w-none leading-snug"
            >
              Trade with ease and the lowest fees
            </motion.p>
            
            <div className="hidden sm:flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mt-4 w-full sm:w-auto px-4 sm:px-0">
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.12)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="px-6 md:px-8 py-3 w-full sm:w-auto justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-[24px] text-white font-semibold text-sm md:text-base transition-all flex items-center gap-2"
              >
                Create Account <span>→</span>
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.12)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                className="px-6 md:px-8 py-3 w-full sm:w-auto justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-[24px] text-white font-semibold text-sm md:text-base transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.5 13c-.1 0-.2 0-.3.1-1.3.6-2.5 1.5-3.5 2.6-.9-1.1-2.1-2-3.5-2.6-.1-.1-.2-.1-.3-.1-.5 0-1 .4-1 1 0 .2.1.5.3.7 1.1.6 2.1 1.4 3 2.4l.2.2c.1.1.3.2.5.2s.4-.1.5-.2l.2-.2c.9-1.1 1.9-1.9 3-2.4.2-.2.3-.4.3-.7 0-.6-.5-1-1-1zm-5.5-3.5c1.4 0 2.5-1.1 2.5-2.5S13.4 4.5 12 4.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z" />
                </svg>
                Get the app
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* iPhones Showcase */}
        <div className="relative mt-8 md:mt-12 mb-0 flex justify-center z-0 w-full overflow-hidden">
          <motion.div
            initial={{ opacity: 1, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative w-full flex justify-center px-4 md:px-4"
          >
            <div className="relative w-[85%] sm:w-[90%] md:w-full max-w-[536px] flex justify-center mt-4 md:mt-0">
              <img 
                src="https://mkt-static.crypto.com/cdc_home_producthero_mainapp_usa_2x.webp" 
                alt="Crypto App Showcase" 
                className="w-full h-auto object-contain scale-100 origin-bottom relative z-10 mx-auto"
              />
              
              {/* Subtle blue depth glow */}
              <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#0a1128]/40 blur-[60px] md:blur-[100px] -z-10 pointer-events-none rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Core Features Below Apps Showcase */}
        <div className="mx-auto max-w-[1200px] px-6 py-12 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {[
              {
                title: "BTC, ETH, CRO, and 400+ crypto",
                desc: "Buy, sell, and trade in your local currency"
              },
              {
                title: "Account Protection Programme",
                desc: "Up to US$250,000 against unauthorised transactions"
              },
              {
                title: "Near-zero trading fees",
                desc: "When you buy crypto with a credit/debit card"
              },
              {
                title: "Secure by design",
                desc: "Leading the industry in licences and certifications"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                viewport={{ once: true }}
                className="flex flex-col gap-2 md:gap-3"
              >
                <h4 className="text-[18px] md:text-[20px] font-bold font-outfit text-white leading-snug">
                  {item.title}
                </h4>
                <p className="text-[#A1A7B5] text-[14px] md:text-[15px] font-sans leading-relaxed pr-4">
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
