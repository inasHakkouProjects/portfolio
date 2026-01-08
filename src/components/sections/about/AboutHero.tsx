'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/src/data/mockData'

export function AboutHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold"
      >
        <span className="text-white">À propos de</span>{' '}
        <span className="gradient-text">{personalInfo.firstName}</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-300"
      >
        {personalInfo.role}
      </motion.p>
    </motion.div>
  )
}


