'use client'

import { motion } from 'framer-motion'

export function ContactHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16 space-y-6 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl font-bold md:text-5xl lg:text-6xl"
      >
        <span className="text-white">Entrons en</span>{' '}
        <span className="gradient-text text-glow">contact</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-300"
      >
        Vous avez un projet innovant ou une opportunité technique ? Discutons de la manière dont nous pouvons 
        collaborer pour créer quelque chose d`&apos`exceptionnel.
      </motion.p>
    </motion.div>
  )
}


