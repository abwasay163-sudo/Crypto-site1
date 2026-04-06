import React from "react"
import { Wallet2, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export const Footer = () => {
  const years = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-16 md:py-24 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 lg:gap-12 mb-12 md:mb-16">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Wallet2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-outfit font-bold text-xl tracking-tight">
                Wasay's <span className="text-primary">Crypto</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-sm">
              The ultimate Web3 gateway for institutional growth. 
              Bridging the gap between traditional finance and decentralized innovation.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-outfit font-bold mb-6 text-sm uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Trading Engine</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Custody Solutions</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Liquidity Pools</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">API Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-outfit font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Press & Media</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Contact Support</a></li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-outfit font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6">Subscribe for the latest Web3 insights.</p>
            <form className="flex gap-2 w-full max-w-sm">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary/50 flex-grow min-w-0"
              />
              <button 
                type="submit"
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary/80 transition-all font-medium text-sm px-4 shrink-0"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-xs">
          <p className="text-center md:text-left">© {years} Wasay's Crypto. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
