import React from "react"
import { motion } from "motion/react"
import { GlowingEffect } from "./ui/glowing-effect"

export const CreditCard = () => {
  return (
    <>
    <section className="bg-[#0B1425] overflow-hidden pt-12 pb-8 rounded-b-[48px] lg:rounded-b-[64px]">
      {/* Top Header Section remains as per previous context */}
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block"
          >
            The Ultimate Crypto Card
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-outfit mb-6"
          >
            The Only Card <br />
            <span className="text-white/40">You Need.</span>
          </motion.h2>
        </div>
      </div>

      {/* Video Content based on Inspector Screenshot */}
      <div className="mx-auto w-full px-8 lg:py-16 py-8 translate-y-0 opacity-100">
        <div className="w-full max-w-[1280px] min-w-[1128px] mx-auto px-4 py-8">
          <a className="block w-full" href="#">
            <div className="flex flex-col items-center gap-[26px] lg:gap-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-3xl relative z-10 flex h-[505px] w-full max-w-[1280px] overflow-hidden lg:h-[660px]"
              >
                <video
                  src="https://mkt-static.crypto.com/us-credit-card-video.mp4"
                  className="w-full bg-transparent object-cover absolute inset-0 z-0 h-full w-full"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10" />
                
                {/* Content Overlay */}
                <div className="flex relative z-20 h-full w-full flex-col items-start gap-4 p-8 lg:flex-row lg:items-end justify-between">
                  <div className="max-w-2xl">
                    <motion.h3 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                      Visa Card
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-white/70 text-xl md:text-2xl"
                    >
                      Get up to 5% in CRO rewards on all purchases
                    </motion.p>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold transition-all flex items-center gap-2 whitespace-nowrap"
                  >
                    Choose your card <span>→</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section className="bg-[#050505] overflow-hidden">
      {/* Feature Grid based on Screenshot Structure */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Cashback", value: "8%" },
            { label: "Annual fee", value: "$0" },
            { label: "Metal card", value: "Premium" },
            { label: "Lounge access", value: "Global" }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold font-outfit mb-2">{feature.value}</div>
              <div className="text-sm md:text-base text-white/50 uppercase tracking-[0.2em] font-medium">{feature.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      </section>
    </>
  )
}
