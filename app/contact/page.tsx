import { ContactHero } from '@/src/components/sections/contact/ContactHero'
import { ContactInfo } from '@/src/components/sections/contact/ContactInfo'
import { ContactForm } from '@/src/components/sections/contact/ContactForm'

export default function Contact() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fond animé gradient violet → noir */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-dark-bg to-dark-bg" />
      <div className="absolute inset-0 bg-gradient-to-tl from-violet-900/20 via-transparent to-transparent" />
      
      {/* Effet de particules animées */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-violet-500/15 blur-3xl animate-float" />
        <div className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/15 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10 px-4 py-20 mx-auto sm:px-6 lg:px-8">
        <ContactHero />
        
        <div className="grid gap-12 mt-16 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}


