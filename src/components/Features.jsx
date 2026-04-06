import React from "react"
import { motion } from "framer-motion"
import { Globe, ShieldCheck, Fingerprint, Star } from "lucide-react"

const WreathBadge = ({ score, storeName }) => {
  return (
    <div className="flex items-center gap-4 group cursor-pointer transition-all duration-300 hover:opacity-100 opacity-80">
      <div className="flex items-center">
        {/* Left Branch SVG */}
        <svg width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/60 group-hover:text-white transition-colors">
          <path d="M22 6C18 6 15 9 14 12C12 9 8 7 5 7M14 12C12 16 11 21 11 26C11 32 14 38 17 42M14 12C14 12 10 15 7 18M11 26C11 26 7 28 5 32M13 36C13 36 8 38 6 41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        
        <div className="flex flex-col items-center pt-2 px-1">
          <span className="text-[24px] font-bold text-white leading-none mb-1 font-outfit">{score}</span>
          <div className="flex items-center gap-[2px]">
            {[1, 2, 3, 4, 5].map((i) => {
              if (i <= Math.floor(score)) {
                 return <Star key={i} className="w-[8px] h-[8px] fill-white text-white" />
              }
              if (i === Math.ceil(score) && score % 1 !== 0) {
                 return (
                    <div key={i} className="relative w-[8px] h-[8px]">
                       <Star className="w-[8px] h-[8px] text-white/30" />
                       <div className="absolute top-0 left-0 overflow-hidden" style={{ width: '60%' }}>
                          <Star className="w-[8px] h-[8px] fill-white text-white" />
                       </div>
                    </div>
                 )
              }
              return <Star key={i} className="w-[8px] h-[8px] text-white/30" />
            })}
          </div>
        </div>

        {/* Right Branch SVG */}
        <svg width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/60 group-hover:text-white transition-colors">
          <path d="M2 6C6 6 9 10 12C12 9 16 7 19 7M10 12C12 16 13 21 13 26C13 32 10 38 7 42M10 12C10 12 14 15 17 18M13 26C13 26 17 28 19 32M11 36C11 36 16 38 18 41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <span className="text-[17px] md:text-[20px] text-[#AAB0C6] font-medium font-outfit">{storeName}</span>
    </div>
  )
}

const featuresData = [
  {
    icon: <Globe className="w-7 h-7 text-white/60" strokeWidth={1.5} />,
    title: "150m+ users\nglobally",
    desc: "Trusted by investors around the world\nsince 2016"
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-white/60" strokeWidth={1.5} />,
    title: "Sign up in\nminutes",
    desc: "Set up your account and begin trading in\na few steps"
  },
  {
    icon: <Fingerprint className="w-7 h-7 text-white/60" strokeWidth={1.5} />,
    title: "Zero-fee deposits",
    desc: "Fund your wallet at no cost with major fiat\ncurrencies"
  }
]

export const Features = () => {
  return (
    <section className="w-full py-16 md:py-24 pb-20 md:pb-32" style={{ background: "#080D1B" }}>
      <div className="max-w-[1240px] mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-6 md:gap-10 mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight font-outfit px-2">
            Built for wealth, made for everyone
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-16">
            <WreathBadge score={4.6} storeName="App Store Rating" />
            <WreathBadge score={4.5} storeName="Google Play Rating" />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {featuresData.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col justify-between h-[320px] md:h-[360px] p-6 lg:p-10 rounded-[20px] transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(180deg, #141f36 0%, #0d1424 100%)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
              }}
            >
              <div className="flex flex-col gap-5 md:gap-6">
                <div>{feature.icon}</div>
                <h3 className="text-2xl lg:text-[32px] font-bold text-white font-outfit leading-[1.1] md:whitespace-pre-line">
                  {feature.title.replace('\n', ' ')}
                </h3>
              </div>
              
              <div>
                <p className="text-[#8e95a5] text-sm md:text-[15px] leading-relaxed font-outfit font-medium md:whitespace-pre-line">
                  {feature.desc.replace('\n', ' ')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
