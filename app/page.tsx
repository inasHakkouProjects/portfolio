import { HomeHero } from '@/src/components/sections/home/HomeHero'
import { HomeBrain3D } from '@/src/components/sections/home/HomeBrain3D'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-16">
      {/* Fond animé gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/20 via-transparent to-violet-900/10" />
      
      {/* Particules de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh]">
          {/* Colonne gauche - Contenu principal */}
          <div className="space-y-6 md:space-y-8">
            <HomeHero />
          </div>

          {/* Colonne droite - 3D Brain avec stats */}
          <div className="hidden lg:block relative h-[600px]">
            <HomeBrain3D />
          </div>
        </div>
      </div>
    </div>
  )
}


