import React, { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export const GlowingEffect = ({ children, className, glowColor = "#7c3aed" }) => {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("relative group rounded-2xl p-[1px] overflow-hidden", className)}
    >
      {/* The Glow Border effect */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}44, transparent 80%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      
      {/* Inner Content */}
      <div className="relative z-10 w-full h-full rounded-[15px] bg-[#050505] overflow-hidden">
        {children}
      </div>
      
      {/* Static subtle border */}
      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none z-20" />
    </div>
  )
}
