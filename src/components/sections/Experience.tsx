'use client'

import { motion } from 'framer-motion'
import { experience } from '@/lib/data/portfolio'
import { MapPin, Calendar } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="headline-large text-[#202124] mb-4">
            Professional Experience
          </h2>
          <p className="body-large text-[#5f6368] max-w-3xl mx-auto">
            A journey through innovative technology companies, leading AI/ML initiatives
            and building scalable software solutions that impact millions of users.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-16 last:mb-0"
            >
              {/* Timeline line */}
              {index < experience.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-32 bg-gray-300"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-[#1a73e8] rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="ml-20 google-card p-8">
                <div className="mb-4">
                  <h3 className="title-large text-[#202124] mb-2">{exp.title}</h3>
                  <h4 className="title-medium text-[#1a73e8] mb-3">{exp.company}</h4>
                  
                  <div className="flex flex-wrap gap-4 text-[#5f6368] mb-4 body-medium">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {exp.description.map((desc, descIndex) => (
                      <motion.li
                        key={descIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: descIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-[#202124] body-medium"
                      >
                        <div className="w-1.5 h-1.5 bg-[#1a73e8] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{desc}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="title-medium text-[#202124] mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-[#f8f9fa] text-[#5f6368] rounded-full text-sm border border-[#e8eaed] body-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}