'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  link: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="glass rounded-xl overflow-hidden hover:border-violet-500/40 transition-all duration-300 group"
    >
      {/* Image du projet */}
      <div className="relative h-48 bg-gradient-to-br from-violet-600/20 to-violet-800/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-violet-600 to-violet-800 rounded-xl flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
              <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      {/* Contenu */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-violet-500/10 text-violet-400 text-xs rounded-full border border-violet-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Bouton */}
        <Link href={project.link} target="_blank" rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-semibold transition-colors"
          >
            Voir le site
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

