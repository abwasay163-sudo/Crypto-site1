import React from "react"
import { motion } from "framer-motion"

export const AppShowcase = () => {
  return (
    <section className="relative pt-12 lg:pt-24" style={{ backgroundColor: "rgb(240, 245, 255)" }}>
      <div className="w-full rounded-t-[48px] lg:rounded-t-[64px] bg-[#0B1425] pt-24 lg:pt-32 pb-0 overflow-hidden relative border-t border-white/5">
        <div className="max-w-[1248px] mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold font-outfit tracking-tight leading-tight text-white mb-2"
            >
              Your crypto journey <br />
              <span className="text-white">starts here</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-[#B9C0D3] font-medium"
            >
              Trade with ease and the lowest fees
            </motion.p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.12)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="px-8 py-3 bg-white/8 backdrop-blur-xl border border-white/20 rounded-[24px] text-white font-semibold text-base transition-all flex items-center gap-2"
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
                className="px-8 py-3 bg-white/8 backdrop-blur-xl border border-white/20 rounded-[24px] text-white font-semibold text-base transition-all flex items-center gap-2"
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
        <div className="relative mt-12 mb-0 flex justify-center z-0 w-full overflow-hidden">
          <motion.div
            initial={{ opacity: 1, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative w-full flex justify-center"
          >
            <div className="relative w-full max-w-[536px] flex justify-center">
              <img 
                src="https://mkt-static.crypto.com/cdc_home_producthero_mainapp_usa_2x.webp" 
                alt="Crypto App Showcase" 
                className="w-full h-auto object-contain scale-[1.2] lg:scale-[1] origin-bottom relative z-10"
              />
              
              {/* Subtle blue depth glow */}
              <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#0a1128]/40 blur-[100px] -z-10 pointer-events-none rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Core Features Below Apps Showcase */}
        <div className="mx-auto max-w-[1200px] px-6 py-12 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
                className="flex flex-col gap-2"
              >
                <h4 className="text-[20px] font-bold font-outfit text-white leading-snug">
                  {item.title}
                </h4>
                <p className="text-[#A1A7B5] text-[15px] font-sans leading-relaxed pr-4">
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
