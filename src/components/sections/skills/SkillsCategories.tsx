'use client'

import { motion } from 'framer-motion'
import { skills } from '@/src/data/mockData'
import { SkillCard } from './SkillCard'

const categories = [
  { title: 'Frontend', skills: skills.frontend, icon: '💻' },
  { title: 'Outils', skills: skills.tools, icon: '🛠️' },
  { title: 'Gestion de projet', skills: skills.project, icon: '📋' },
  { title: 'Backend', skills: skills.backend, icon: '⚙️' },
  { title: 'Design & 3D', skills: skills.design, icon: '🎨' },
  { title: 'Base de données', skills: skills.BDD, icon: '☁️' },
]

export function SkillsCategories() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl p-8 md:p-12"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <SkillCard category={category} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}


