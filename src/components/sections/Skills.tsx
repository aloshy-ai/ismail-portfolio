'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data/portfolio'

const colorMap: { [key: string]: string } = {
  'AI/ML Stack': 'bg-purple-600',
  'Cloud Services': 'bg-blue-600',
  'Authentication & Security': 'bg-red-600',
  'DevOps & CI/CD': 'bg-green-600',
  'Programming Languages': 'bg-yellow-600',
  'Web & Mobile UI': 'bg-indigo-600',
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`w-3 h-3 ${colorMap[skillCategory.category] || 'bg-gray-600'} rounded-full mr-3`}></div>
                <h3 className="text-xl font-semibold text-gray-900">{skillCategory.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-white text-gray-600 rounded-full text-sm border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
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