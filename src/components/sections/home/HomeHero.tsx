'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function HomeHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Tag de disponibilité */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="inline-flex items-center gap-2 px-4 py-2 border rounded-full bg-dark-card/50 border-violet-500/20"
      >
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-sm text-gray-300">DISPONIBLE POUR DE NOUVEAUX PROJETS</span>
      </motion.div>

      {/* Sous-titre */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl font-semibold md:text-5xl gradient-text"
      >
        Développeur Full-Stack
      </motion.p>

      {/* Titre principal */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl xl:text-7xl"
      >
        <span className="text-white">Sculpter le Futur </span>
        <span className="gradient-text text-glow">Numérique</span>
        <span className="text-white"> par le </span>
        <span className="gradient-text text-glow">Code</span>
      </motion.h1>
      
      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-2xl text-lg leading-relaxed text-gray-400"
      >
        Je conçois des expériences web immersives et ultra-performantes. Alliant rigueur technique et sensibilité artistique, je transforme vos idées en solutions numériques d’exception.
      </motion.p>

      {/* Boutons CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-wrap gap-4 pt-4"
      >
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all transition-colors duration-300 rounded-lg btn-pink glow-violet"
          >
            Contactez-moi
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </Link>
        
        <Link href="/projects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 font-semibold text-white transition-all duration-300 border rounded-lg glass hover:border-violet-500/40 border-violet-500/30"
          >
            Voir mes projets
          </motion.button>
        </Link>
      </motion.div>

      {/* Footer technologies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex items-center gap-6 pt-8 text-sm text-gray-400"
      >
        <span className="flex items-center gap-2">
          <span className="text-violet-400">&lt;/&gt;</span>
          Next.js 15
        </span>
        <span>Tailwind</span>
        <span>Three.js</span>
      </motion.div>
    </motion.div>
  )
}


