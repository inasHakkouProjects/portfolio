'use client'

import { motion } from 'framer-motion'

interface Category {
  id: string
  label: string
}

interface ProjectFiltersProps {
  categories: Category[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export function ProjectFilters({ categories, selectedCategory, onSelectCategory }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category) => {
        const isActive = selectedCategory === category.id
        return (
          <motion.button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              isActive
                ? 'bg-violet-600 text-white glow-violet'
                : 'glass text-gray-300 hover:border-violet-500/40 hover:text-violet-400'
            }`}
          >
            {category.label}
          </motion.button>
        )
      })}
    </div>
  )
}


