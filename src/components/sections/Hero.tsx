'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { contactInfo } from '@/lib/data/portfolio'

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#12121f] flex items-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 floating-animation"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-xl opacity-20 floating-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full blur-xl opacity-20 floating-animation" style={{animationDelay: '4s'}}></div>
      <div className="max-w-6xl mx-auto px-6 py-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative inline-block mb-6">
            <div className="relative">
              <img 
                src="./images/profile.jpg" 
                alt="Ismail Kattakath - Principal Software Engineer & AI Research Scientist"
                className="w-32 h-32 rounded-full object-cover border-4 border-cyan-400 shadow-lg mx-auto pulse-glow"
              />
              <div className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-ping opacity-30"></div>
            </div>
          </div>
          
          <h1 className="display-large text-[#f0f6fc] mb-4 max-w-4xl mx-auto">
            Ismail Kattakath
          </h1>
          
          <h2 className="title-large text-[#a0a5b8] mb-6 max-w-2xl mx-auto text-glow" style={{color: '#00ffff'}}>
            Principal Software Engineer & AI Research Scientist
          </h2>
          
          <p className="body-large text-[#a0a5b8] mb-8 max-w-2xl mx-auto">
            15+ years of expertise in AI/ML engineering, full-stack development, 
            and technical leadership. Specializing in production-ready AI infrastructure 
            and scalable software architectures.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a2e] rounded-full border border-[#2a2a4e] body-medium backdrop-blur-sm">
            <MapPin size={16} className="text-[#00ffff]" />
            <span className="text-[#a0a5b8]">{contactInfo.location}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a2e] rounded-full border border-[#2a2a4e] body-medium backdrop-blur-sm">
            <Phone size={16} className="text-[#00ffff]" />
            <span className="text-[#a0a5b8]">{contactInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a2e] rounded-full border border-[#2a2a4e] body-medium backdrop-blur-sm">
            <Mail size={16} className="text-[#00ffff]" />
            <span className="text-[#a0a5b8]">{contactInfo.email}</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <motion.a
            href="#projects"
            className="google-btn-primary inline-flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="https://github.com/aloshy-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="google-btn-secondary inline-flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={16} />
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/ismailkattakath"
            target="_blank"
            rel="noopener noreferrer"
            className="google-btn-secondary inline-flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Linkedin size={16} />
            LinkedIn
          </motion.a>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown className="text-[#00ffff] hover:text-[#ffffff] transition-colors animate-bounce" size={24} />
        </motion.div>
      </div>
    </section>
  )
}