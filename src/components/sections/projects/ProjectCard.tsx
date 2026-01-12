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
  // link: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="overflow-hidden transition-all duration-300 glass rounded-xl hover:border-violet-500/40 group"
    >
      {/* Image du projet */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-t from-dark-card/80 to-transparent group-hover:opacity-100" />
      </div>
      
      {/* Contenu */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-violet-400">
          {project.title}
        </h3>
        
        <p className="text-sm leading-relaxed text-gray-400 line-clamp-3">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs border rounded-full bg-violet-500/10 text-violet-400 border-violet-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Bouton */}
        {/* <Link href={project.link} target="_blank" rel="noopener noreferrer"> */}
        <Link href={`/projects/${project.id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 font-semibold text-white transition-colors rounded-lg bg-violet-600 hover:bg-violet-500"
          >
            Voir détails
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

