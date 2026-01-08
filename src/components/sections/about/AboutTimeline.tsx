'use client'

import { motion } from 'framer-motion'
import { Building2, GraduationCap } from 'lucide-react'
import { timeline } from '@/src/data/mockData'

type TimelineItem = {
  type: 'experience' | 'formation'
  title: string
  period: string
  org: string
  description: string
  technologies?: string
  badge?: string
}

function badgeClasses(label: string) {
  const base =
    'text-xs font-semibold px-3 py-1 rounded-full border transition-colors'

  if (label.toLowerCase() === 'freelance') {
    return `${base} border-pink-400/40 text-pink-300 bg-pink-500/10 group-hover:bg-white/70 group-hover:text-black`
  }
  if (label.toLowerCase() === 'formation') {
    return `${base} border-pink-400/40 text-pink-300 bg-pink-500/10 group-hover:bg-white/70 group-hover:text-black`
  }
  return `${base} border-violet-400/50 text-violet-300 bg-violet-500/10 group-hover:bg-white/70 group-hover:text-black`
}

export function AboutTimeline() {
  const items = timeline as unknown as TimelineItem[]

  return (
    <section className="space-y-10">
      <div className="text-center space-y-3">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
        >
          <span className="text-white">Une chronologie d&apos;innovation</span>
          <br />
          <span className="text-white"> et de</span>
          <span className="gradient-text text-glow"> développement</span>
        </motion.h2>

        <p className="text-gray-400 leading-relaxed">
          Une vue d&apos;ensemble de mon parcours professionnel, de mes formations académiques aux projets clés
          qui ont défini mon expertise technique.
        </p>
      </div>

      <div className="relative">
        {/* barre chronologique */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-violet-500/50" />

        <div className="space-y-6">
          {items.map((it, idx) => {
            const isFormation = it.type === 'formation'
            const Icon = isFormation ? GraduationCap : Building2
            const label = it.badge ?? (isFormation ? 'Formation' : 'Experience')

            return (
              // ✅ wrapper par item: permet une dot indépendante + bon alignement
              <div key={`${it.title}-${idx}`} className="relative pl-14">
                {/* ✅ dot (pas animée) */}
                <div className="absolute left-[15px] top-7 w-6 h-6 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.7)]" />

                {/* ✅ card animée uniquement */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                >
                  <div
                    className="
                      group glass rounded-2xl p-6 border border-white/10
                      hover:border-violet-400/80
                      transition-colors
                    "
                  >
                    {/* badge + period */}
                    <div className="flex items-start justify-between gap-4">
                      <span className={badgeClasses(label)}>{label}</span>

                      <span
                        className="
                          text-sm text-gray-300 px-3 py-1 rounded-lg border border-white/10 bg-white/5
                          group-hover:text-black group-hover:border-black/10 group-hover:bg-white/70
                          transition-colors
                        "
                      >
                        {it.period}
                      </span>
                    </div>

                    {/* title */}
                    <div className="mt-4">
                      <h3
                        className="
                          text-lg md:text-xl font-bold text-white
                          group-hover:gradient-text
                          transition-colors
                        "
                      >
                        {it.title}
                      </h3>
                    </div>

                    {/* org row */}
                    <div className="mt-3 flex items-center gap-2 text-gray-300 transition-colors">
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{it.org}</span>
                    </div>

                    {/* description */}
                    <p className="mt-3 text-gray-400 leading-relaxed transition-colors">
                      {it.description}
                    </p>

                    {/* technologies (optionnel) */}
                    {it.technologies && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {it.technologies.split(',').map((t) => (
                          <span
                            key={t.trim()}
                            className="
                              text-xs px-2 py-1 rounded-lg border border-white/10 bg-white/5 text-gray-300
                              group-hover:text-black group-hover:bg-white/70 group-hover:border-black/10
                              transition-colors
                            "
                          >
                            {t.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
