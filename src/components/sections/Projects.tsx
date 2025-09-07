'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data/portfolio'
import { Code } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-24" style={{background: 'var(--md-sys-color-surface-container-lowest)'}}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="md3-headline-large mb-4">
            Featured Projects
          </h2>
          <p className="md3-body-large md3-on-surface-variant max-w-3xl mx-auto">
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
              className="md3-card overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="md3-title-medium">{project.name}</h3>
                  <Code className="md3-on-surface-variant" size={20} />
                </div>
                
                <p className="md3-body-medium mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="md3-title-medium mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2 md3-body-medium md3-on-surface-variant">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{background: 'var(--md-sys-color-primary)'}}></div>
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
                        className="px-2 py-1 text-xs rounded md3-body-small md3-on-surface-variant" style={{background: 'var(--md-sys-color-surface-container)', border: '1px solid var(--md-sys-color-outline-variant)'}}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded text-xs md3-body-small md3-on-surface-variant" style={{background: 'var(--md-sys-color-surface-container-high)'}}>
                        +{project.technologies.length - 4} more
                      </span>
                    )}
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