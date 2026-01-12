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
      <div className="space-y-3 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl xl:text-6xl"
        >
          <span className="text-white">Une chronologie d’innovation</span>
          <br />
          <span className="text-white"> et de</span>
          <span className="gradient-text text-glow"> développement</span>
        </motion.h2>

        <p className="leading-relaxed text-gray-400">
          Une vue d’ensemble de mon parcours professionnel, de mes formations académiques aux projets clés
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
                    className="p-6 transition-colors border group glass rounded-2xl border-white/10 hover:border-violet-400/80"
                  >
                    {/* badge + period */}
                    <div className="flex items-start justify-between gap-4">
                      <span className={badgeClasses(label)}>{label}</span>

                      <span
                        className="px-3 py-1 text-sm text-gray-300 transition-colors border rounded-lg border-white/10 bg-white/5 group-hover:text-black group-hover:border-black/10 group-hover:bg-white/70"
                      >
                        {it.period}
                      </span>
                    </div>

                    {/* title */}
                    <div className="mt-4">
                      <h3
                        className="text-lg font-bold text-white transition-colors md:text-xl group-hover:gradient-text"
                      >
                        {it.title}
                      </h3>
                    </div>

                    {/* org row */}
                    <div className="flex items-center gap-2 mt-3 text-gray-300 transition-colors">
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{it.org}</span>
                    </div>

                    {/* description */}
                    <p className="mt-3 leading-relaxed text-gray-400 transition-colors">
                      {it.description}
                    </p>

                    {/* technologies (optionnel) */}
                    {it.technologies && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {it.technologies.split(',').map((t) => (
                          <span
                            key={t.trim()}
                            className="px-2 py-1 text-xs text-gray-300 transition-colors border rounded-lg border-white/10 bg-white/5 group-hover:text-black group-hover:bg-white/70 group-hover:border-black/10"
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
