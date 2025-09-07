'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { contactInfo } from '@/lib/data/portfolio'

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center relative overflow-hidden">
      {/* Google AI inspired background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-100 via-transparent to-gray-50"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-green-100 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-100 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Ismail <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Kattakath</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-600 mb-8 font-light">
              Principal Software Engineer & AI Research Scientist
            </h2>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">15+ Years Experience</span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">AI/ML Expert</span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">Full-Stack Leader</span>
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
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="https://github.com/aloshy-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-full transition-colors flex items-center gap-2 font-medium"
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
                className="border border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-full transition-colors flex items-center gap-2 font-medium"
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
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full opacity-30"></div>
              <img 
                src="./images/profile.jpg" 
                alt="Ismail Kattakath - Principal Software Engineer & AI Research Scientist"
                className="relative z-10 w-80 h-80 mx-auto mt-8 rounded-full object-cover border-4 border-white shadow-lg"
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