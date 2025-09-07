'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-[#2a2a4e] shadow-2xl shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand - Futuristic Icon */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <Zap 
                size={28} 
                className="text-[#00ffff] group-hover:text-[#8b5cf6] transition-colors duration-300"
                style={{
                  filter: 'drop-shadow(0 0 10px currentColor)',
                }}
              />
              <div className="absolute inset-0 animate-ping">
                <Zap size={28} className="text-[#00ffff] opacity-30" />
              </div>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-[#00ffff] to-[#8b5cf6] bg-clip-text text-transparent">
              IK
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 text-[#a0a5b8] hover:text-[#00ffff] transition-all duration-300 font-medium group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/10 to-[#8b5cf6]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#00ffff] to-[#8b5cf6] group-hover:w-full transition-all duration-300"></div>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#a0a5b8] hover:text-[#00ffff] transition-colors duration-300 relative"
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              {isMobileMenuOpen ? (
                <X size={24} style={{ filter: 'drop-shadow(0 0 5px currentColor)' }} />
              ) : (
                <Menu size={24} style={{ filter: 'drop-shadow(0 0 5px currentColor)' }} />
              )}
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-2 bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-4 border border-[#2a2a4e]">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[#a0a5b8] hover:text-[#00ffff] transition-all duration-300 font-medium text-left py-3 px-4 rounded-lg hover:bg-[#2a2a4e]/50 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="relative">
                    {item.name}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ffff] to-[#8b5cf6] group-hover:w-full transition-all duration-300"></div>
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}