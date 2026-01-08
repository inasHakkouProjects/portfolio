'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function HomeCTAs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="flex flex-wrap gap-4"
    >
      <Link href="/contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-semibold transition-all duration-300 glow-violet"
        >
          Contactez-moi
        </motion.button>
      </Link>
      
      <Link href="/projects">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 glass hover:border-violet-500/40 text-white rounded-lg font-semibold transition-all duration-300"
        >
          Voir mes projets
        </motion.button>
      </Link>
    </motion.div>
  )
}


