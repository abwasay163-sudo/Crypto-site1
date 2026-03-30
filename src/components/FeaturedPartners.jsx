import React from "react"
import { motion } from "framer-motion"

export const FeaturedPartners = () => {
  return (
    <section className="bg-[#050505] w-full pb-12 lg:pb-24 pt-12 lg:pt-24">
      <div 
        className="w-full rounded-[32px] lg:rounded-[64px] pt-16 lg:pt-24 pb-20 px-6 overflow-hidden relative"
        style={{
          background: "linear-gradient(0deg, rgb(240, 245, 255) 23.91%, rgb(51, 81, 123) 40.72%, rgb(19, 26, 42) 58.78%, rgb(8, 13, 27) 76.09%)"
        }}
      >
        <div className="max-w-[1000px] mx-auto flex flex-col items-center relative z-10">
          
          {/* Header Text */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-[40px] font-bold font-outfit text-white text-center leading-tight mb-8"
          >
            We work with world-class brands, institutions, and <br className="hidden md:block" />
            partners to put crypto in every wallet.
          </motion.h2>

          {/* Link */}
          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[#1069ff] hover:text-[#3884ff] font-semibold text-base flex items-center gap-1 transition-colors mb-20 lg:mb-28"
          >
            More about our Partners →
          </motion.a>

          {/* Video Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full max-w-[1100px] rounded-2xl md:rounded-[32px] overflow-hidden bg-black shadow-2xl relative"
            style={{
              boxShadow: "0px 20px 60px rgba(0,0,0,0.5)"
            }}
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto object-cover"
            >
              <source src="/10.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
