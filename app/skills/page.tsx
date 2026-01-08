import { SkillsHero } from '@/src/components/sections/skills/SkillsHero'
import { SkillsCategories } from '@/src/components/sections/skills/SkillsCategories'
import { AboutSkills } from '@/src/components/sections/skills/SkillCard'

export default function Skills() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fond animé violet */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-dark-bg to-dark-bg" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-violet-900/10 to-transparent" />
      
      {/* Effet de particules */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* <SkillsHero /> */}
        <AboutSkills />
        <SkillsCategories />
      </div>
    </div>
  )
}


