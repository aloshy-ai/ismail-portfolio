'use client'

import { motion } from 'framer-motion'
import { summary } from '@/lib/data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-[#0f0f1a] to-[#12121f] relative"> 
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="headline-large mb-4">
            About Me
          </h2>
          <p className="body-large text-[#a0a5b8] max-w-3xl mx-auto">
            A passionate technologist with deep expertise in AI/ML engineering 
            and full-stack development, committed to building innovative solutions 
            that make a meaningful impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {summary.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="google-card p-6 h-full"
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#00ffff] rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                <p className="body-medium text-[#ffffff] leading-relaxed">{point}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}