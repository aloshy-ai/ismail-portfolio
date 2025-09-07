'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { contactInfo } from '@/lib/data/portfolio'

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Ismail <span className="text-blue-600">Kattakath</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-700 mb-8">
              Principal Software Engineer & AI Research Scientist
            </h2>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">15+ Years Experience</span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">AI/ML Expert</span>
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm">Full-Stack Leader</span>
            </div>
            
            <div className="flex flex-col gap-3 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{contactInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="https://github.com/aloshy-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-lg transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                GitHub
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/ismailkattakath"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-lg transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-green-600 rounded-full opacity-20 animate-pulse"></div>
              <img 
                src="/images/profile.jpg" 
                alt="Ismail Kattakath - Principal Software Engineer & AI Research Scientist"
                className="relative z-10 w-80 h-80 mx-auto mt-8 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown className="text-gray-400 hover:text-gray-600 transition-colors" size={32} />
        </motion.div>
      </div>
    </section>
  )
}