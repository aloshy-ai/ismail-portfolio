'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data/portfolio'
import { ExternalLink, Code } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="headline-large text-[#202124] mb-4">
            Featured Projects
          </h2>
          <p className="body-large text-[#5f6368] max-w-3xl mx-auto">
            Showcase of innovative solutions and technical achievements that demonstrate
            expertise across AI/ML, full-stack development, and system architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="google-card overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="title-medium text-[#202124]">{project.name}</h3>
                  <Code className="text-[#5f6368]" size={20} />
                </div>
                
                <p className="body-medium text-[#202124] mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="title-medium text-[#202124] mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2 body-medium text-[#5f6368]">
                        <div className="w-1.5 h-1.5 bg-[#1a73e8] rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#f8f9fa] text-[#5f6368] rounded text-xs border border-[#e8eaed] body-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-[#e8eaed] text-[#5f6368] rounded text-xs body-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="google-btn-primary flex-1 py-2 px-4 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}