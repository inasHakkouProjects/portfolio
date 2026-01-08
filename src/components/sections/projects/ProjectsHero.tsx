'use client'

import { motion } from 'framer-motion'

export function ProjectsHero() {
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
        <span className="text-white">Mes</span>{' '}
        <span className="gradient-text text-glow">réalisations</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-300 max-w-2xl mx-auto"
      >
        Une sélection de projets qui illustrent mon expertise et ma passion pour l'innovation
      </motion.p>
    </motion.div>
  )
}


