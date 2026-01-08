'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/src/data/mockData'
import { formatExperience } from '@/src/lib/utils'

const stats = [
  { label: 'Années d\'expérience', value: personalInfo.stats.experience, suffix: ' ans' },
  { label: 'Projets réalisés', value: personalInfo.stats.projects, suffix: '+' },
]

export function HomeStats() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-md">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          className="glass rounded-xl p-6 hover:border-violet-500/40 transition-all duration-300"
        >
          <div className="text-4xl font-bold gradient-text mb-2">
            {stat.value}{stat.suffix}
          </div>
          <div className="text-gray-400 text-sm">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}


