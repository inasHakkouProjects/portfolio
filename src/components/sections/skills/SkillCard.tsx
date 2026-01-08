'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface Skill {
  name: string
  level: number
}

interface SkillCardProps {
  category: {
    title: string
    skills: Skill[]
    icon: string
  }
}

function AnimatedProgressBar({ level, delay }: { level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <div className="w-full bg-dark-surface rounded-full h-2 overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: 'easeOut' }}
        className="h-full bg-gradient-to-r from-violet-600 to-violet-400 rounded-full"
      />
    </div>
  )
}

export function AboutSkills() {
  return (
    <div className="text-center space-y-6">
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
        >
            <span className="text-white">Arsenal</span>
            <span className="gradient-text text-glow"> Technologique</span>
            {/* <span className="gradient-text text-glow">Code</span> */}
        </motion.h1>
        <p className="text-gray-400 leading-relaxed text-xl">
        Une vue détaillée de mon expertise technique, Un éventail de compétences techniques pour transformer vos idées en réalité
        </p>
    </div>
  )}

export function SkillCard({ category }: SkillCardProps) {
  return (
    
    <motion.div 
        whileHover={{ y: -2 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="bg-gradient-to-br from-[#0B0B0F] via-[#0F0F14] to-[#0B0B0F] rounded-xl p-6 space-y-4 hover:border-violet-500/40 border border-violet-500/40 backdrop-blur shadow-[0_10px_40px_rgba(124,58,237,0.25)]">
      
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{category.icon}</span>
        <h3 className="text-xl font-bold text-white">{category.title}</h3>
      </div>
      
      <div className="space-y-4">
        {category.skills.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">{skill.name}</span>
              <span className="text-violet-400 text-sm font-semibold">{skill.level}%</span>
            </div>
            <AnimatedProgressBar level={skill.level} delay={index * 0.1} />
          </div>
        ))}
      </div>
    </motion.div>
  )
}


