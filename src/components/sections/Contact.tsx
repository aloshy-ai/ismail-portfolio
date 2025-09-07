'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import { contactInfo } from '@/lib/data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">{contactInfo.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${contactInfo.phone}`}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">{contactInfo.phone}</p>
                </div>
              </motion.a>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/aloshy-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Github className="text-white" size={20} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/ismailkattakath"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
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
            className="bg-white rounded-xl p-8 border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Focus</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">AI/ML Engineering</h4>
                <p className="text-gray-600 text-sm">
                  Specializing in production-ready AI infrastructure, model deployment, 
                  and MLOps pipelines with a focus on scalability and performance.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Full-Stack Architecture</h4>
                <p className="text-gray-600 text-sm">
                  Designing and implementing robust, scalable web applications 
                  with modern frameworks and cloud-native architectures.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Technical Leadership</h4>
                <p className="text-gray-600 text-sm">
                  Leading cross-functional teams, mentoring engineers, and driving 
                  technical strategy for complex, mission-critical systems.
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-100 rounded-xl border border-gray-200">
              <p className="text-gray-700 text-sm text-center">
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