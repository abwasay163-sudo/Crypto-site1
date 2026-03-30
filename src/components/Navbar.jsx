import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, Wallet2 } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Company", href: "#" },
    { name: "Pricing", href: "#pricing" },
    { name: "Resources", href: "#" },
  ]

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav 
        className={cn(
          "w-full max-w-7xl flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300 pointer-events-auto",
          isScrolled 
            ? "bg-[#050505]/80 backdrop-blur-xl border-white/10 shadow-lg" 
            : "bg-[#050505]/40 backdrop-blur-md border-white/5"
        )}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Wallet2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-outfit font-bold text-xl tracking-tight hidden sm:block">
            Wasay's <span className="text-primary">Crypto</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Log in
          </Button>
          <Button size="sm" className="rounded-full px-5">
            Get started
          </Button>
          
          {/* Mobile Menu Trigger */}
          <button 
            className="md:hidden p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-[#050505] border border-white/10 rounded-2xl p-6 md:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium py-2 border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="outline" className="w-full">Log in</Button>
                <Button className="w-full">Get started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
