'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/src/data/mockData'

export function SkillsHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-4 mb-16"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold"
      >
        <span className="gradient-text text-glow">{personalInfo.role}</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-300 max-w-2xl mx-auto"
      >
        Un éventail de compétences techniques pour transformer vos idées en réalité
      </motion.p>
    </motion.div>
  )
}


