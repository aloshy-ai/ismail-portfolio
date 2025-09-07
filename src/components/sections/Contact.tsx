'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import { contactInfo } from '@/lib/data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="headline-large text-[#202124] mb-4">
            Get In Touch
          </h2>
          <p className="body-large text-[#5f6368] max-w-3xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, 
            or potential collaborations in AI/ML and software engineering.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="headline-medium text-[#202124] mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ scale: 1.02 }}
                className="google-card flex items-center gap-4 p-4"
              >
                <div className="w-12 h-12 bg-[#1a73e8] rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="title-medium text-[#202124]">Email</p>
                  <p className="body-medium text-[#5f6368]">{contactInfo.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${contactInfo.phone}`}
                whileHover={{ scale: 1.02 }}
                className="google-card flex items-center gap-4 p-4"
              >
                <div className="w-12 h-12 bg-[#34a853] rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="title-medium text-[#202124]">Phone</p>
                  <p className="body-medium text-[#5f6368]">{contactInfo.phone}</p>
                </div>
              </motion.a>

              <div className="google-card flex items-center gap-4 p-4">
                <div className="w-12 h-12 bg-[#ea4335] rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="title-medium text-[#202124]">Location</p>
                  <p className="body-medium text-[#5f6368]">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="title-medium text-[#202124] mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/aloshy-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-[#202124] rounded-lg flex items-center justify-center hover:bg-[#5f6368] transition-colors"
                >
                  <Github className="text-white" size={20} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/ismailkattakath"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-[#1a73e8] rounded-lg flex items-center justify-center hover:bg-[#1565c0] transition-colors"
                >
                  <Linkedin className="text-white" size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="google-card p-8"
          >
            <h3 className="headline-medium text-[#202124] mb-6">Professional Focus</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="title-medium text-[#202124] mb-2">AI/ML Engineering</h4>
                <p className="body-medium text-[#5f6368]">
                  Specializing in production-ready AI infrastructure, model deployment, 
                  and MLOps pipelines with a focus on scalability and performance.
                </p>
              </div>
              
              <div>
                <h4 className="title-medium text-[#202124] mb-2">Full-Stack Architecture</h4>
                <p className="body-medium text-[#5f6368]">
                  Designing and implementing robust, scalable web applications 
                  with modern frameworks and cloud-native architectures.
                </p>
              </div>
              
              <div>
                <h4 className="title-medium text-[#202124] mb-2">Technical Leadership</h4>
                <p className="body-medium text-[#5f6368]">
                  Leading cross-functional teams, mentoring engineers, and driving 
                  technical strategy for complex, mission-critical systems.
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-[#f8f9fa] rounded-lg border border-[#e8eaed]">
              <p className="body-medium text-[#202124] text-center">
                <strong>Currently open to:</strong> Senior engineering roles, AI/ML consulting, 
                and strategic technical advisory positions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}