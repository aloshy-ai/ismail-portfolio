'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data/portfolio'

const colorMap: { [key: string]: string } = {
  'AI/ML Stack': 'bg-[#ff0080]',
  'Cloud Services': 'bg-[#00ffff]',
  'Authentication & Security': 'bg-[#00ff88]',
  'DevOps & CI/CD': 'bg-[#8b5cf6]',
  'Programming Languages': 'bg-[#3b82f6]',
  'Web & Mobile UI': 'bg-[#ff6b35]',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-[#12121f] to-[#0a0a0f] relative">
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
            Technical Expertise
          </h2>
          <p className="body-large text-[#a0a5b8] max-w-3xl mx-auto">
            Comprehensive technical skills across AI/ML, cloud platforms, 
            and modern development frameworks built over 15+ years of experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="google-card p-6"
            >
              <div className="flex items-center mb-4">
                <div className={`w-3 h-3 ${colorMap[skillCategory.category] || 'bg-[#9aa0a6]'} rounded-full mr-3`}></div>
                <h3 className="title-medium text-[#ffffff]">{skillCategory.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-[#1a1a2e] text-[#a0a5b8] rounded-full text-sm border border-[#2a2a4e] hover:bg-[#2a2a4e] hover:text-[#00ffff] transition-all duration-300 body-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}