import { ProjectsHero } from '@/src/components/sections/projects/ProjectsHero'
import { ProjectsGrid } from '@/src/components/sections/projects/ProjectsGrid'

export default function Projects() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fond animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg" />
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/20 via-transparent to-violet-900/10" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ProjectsHero />
        <ProjectsGrid />
      </div>
    </div>
  )
}


