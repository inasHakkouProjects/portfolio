'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/src/data/mockData'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from 'react-icons/fa'

const socialIcons = [
  { icon: FaGithub, href: personalInfo.socialLinks.github, label: 'GitHub' },
  { icon: FaLinkedin, href: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
  { icon: FaInstagram, href: personalInfo.socialLinks.instgram, label: 'Instagram' },
  { icon: FaFacebook, href: personalInfo.socialLinks.facebook, label: 'Facebook' },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Cards d'information */}
      <div className="p-6 space-y-4 glass rounded-xl">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-violet-600/20">
            <FaEnvelope className="w-6 h-6 text-violet-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Email</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-white transition-colors hover:text-violet-400"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-violet-600/20">
            <FaMapMarkerAlt className="w-6 h-6 text-violet-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Localisation</p>
            <p className="text-white">{personalInfo.location}</p>
          </div>
        </div>
      </div>
      
      {/* Réseaux sociaux */}
      <div className="p-6 glass rounded-xl">
        <h3 className="mb-4 text-lg font-semibold gradient-text">Réseaux sociaux</h3>
        <div className="flex gap-4">
          {socialIcons.map((social) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-12 h-12 transition-all border rounded-lg bg-violet-600/20 hover:bg-violet-600/30 text-violet-400 hover:text-violet-300 border-violet-500/20 hover:border-violet-500/40"
                aria-label={social.label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}


