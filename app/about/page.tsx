import { AboutHero } from '@/src/components/sections/about/AboutHero'
import { AboutContent } from '@/src/components/sections/about/AboutContent'
import { AboutImage } from '@/src/components/sections/about/AboutImage'
import { AboutExpertiseVision } from '@/src/components/sections/about/AboutExpertiseVision'
import { AboutTimeline } from '@/src/components/sections/about/AboutTimeline'

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fond animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg" />
      <div className="absolute inset-0 bg-gradient-to-tl from-violet-900/30 via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AboutHero />

        <div className="grid lg:grid-cols-2 gap-16 mt-20 items-center">
          <AboutImage />
          <AboutContent />
        </div>

        {/* ✅ NOUVEAUX BLOCS EN BAS */}
        <div className="mt-24 space-y-24">
          <AboutExpertiseVision />
          <AboutTimeline />
        </div>
      </div>
    </div>
  )
}
