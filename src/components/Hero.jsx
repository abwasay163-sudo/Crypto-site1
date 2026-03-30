import React from "react"
import { motion } from "motion/react"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export const Hero = () => {
  return (
    <section className="relative w-full h-[100vh] min-h-[700px] overflow-hidden flex items-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/tput.mp4" type="video/mp4" />
      </video>

      {/* Subtle Gradient Overlay only at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-outfit font-bold text-white leading-[1.05] tracking-tight mb-8">
              Unlock growth <br />
              <span className="text-white/50">with every payment</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 max-w-lg mb-12 leading-relaxed"
          >
            The ultimate Web3 gateway for institutional-grade growth. 
            Seamlessly bridge traditional finance with the future of digital assets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button 
                variant="gradient" 
                size="lg" 
                className="rounded-full shadow-[0_0_20px_rgba(255,100,50,0.3)] group"
            >
              Get started 
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
                variant="glass" 
                size="lg" 
                className="rounded-full px-8"
            >
              Talk to a human
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
