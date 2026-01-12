'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  ArrowLeft,
  CalendarDays,
  Layers3,
  ExternalLink,
  Cpu,
  Code2,
} from 'lucide-react'

type Project = {
  id: number
  title: string
  description: string
  technologies: string[]
  category?: string
  year?: number
  createdAt?: string
  projectType?: string
  liveUrl?: string
  repoUrl?: string
  about?: string
  technicalApproach?: string
}

function Dot() {
  return <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400" />
}

/**
 * 3D tilt card (hover) — responsive-friendly
 */
function TiltCard({
  children,
  className = '',
  intensity = 10,
}: {
  children: React.ReactNode
  className?: string
  intensity?: number
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x, { stiffness: 220, damping: 18, mass: 0.7 })
  const ySpring = useSpring(y, { stiffness: 220, damping: 18, mass: 0.7 })

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [intensity, -intensity])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-intensity, intensity])

  const glareX = useTransform(xSpring, [-0.5, 0.5], ['30%', '70%'])
  const glareY = useTransform(ySpring, [-0.5, 0.5], ['30%', '70%'])

  return (
    <div className="perspective-[1200px]">
      <motion.div
        onMouseMove={(e) => {
          // tilt only on devices with mouse
          const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
          const px = (e.clientX - rect.left) / rect.width
          const py = (e.clientY - rect.top) / rect.height
          x.set(px - 0.5)
          y.set(py - 0.5)
        }}
        onMouseLeave={() => {
          x.set(0)
          y.set(0)
        }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={[
          'relative rounded-3xl',
          'shadow-[0_20px_80px_rgba(0,0,0,0.55)]',
          'transition-[border-color,transform] duration-300',
          className,
        ].join(' ')}
      >
        <motion.div
          aria-hidden="true"
          style={{
            background: `radial-gradient(circle at ${glareX.get()} ${glareY.get()}, rgba(167,139,250,0.22), transparent 55%)`,
          }}
          className="absolute inset-0 pointer-events-none rounded-3xl opacity-80"
        />

        <div className="relative" style={{ transform: 'translateZ(18px)' }}>
          {children}
        </div>
      </motion.div>
    </div>
  )
}

export function DetailsContent({ project }: { project: Project }) {
  const year = project.year ?? 2026
  const createdAt = project.createdAt ?? '3 janvier 2026'
  const projectType = project.projectType ?? 'Développement Full-Stack'
  const about =
    project.description ?? "Aucune description détaillée n'est disponible pour ce projet."
  const technicalApproach =
    project.technicalApproach ??
    "Ce projet a été conçu avec une attention particulière à la performance et à l'expérience utilisateur. L'architecture repose sur des principes modernes, assurant scalabilité et maintenabilité. L'utilisation de composants réutilisables et d'un système de design cohérent garantit une interface fluide."

  return (
    <section className="relative">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute left-0 top-24 h-[380px] w-[380px] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>

      {/* ✅ Responsive container paddings */}
      <div className="w-full px-4 py-20 mx-auto max-w-7xl sm:px-6 sm:py-20 lg:px-8 lg:py-20">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 sm:mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm transition-colors text-white/60 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux projets
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mb-6 sm:mb-8"
        >
          {/* ✅ Responsive title sizes */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-sm border rounded-full border-violet-500/30 bg-violet-500/10 text-violet-200">
              <Dot />
              {project.category ?? 'Portfolio'}
            </span>

            <span className="inline-flex items-center gap-2 px-3 py-1 text-sm border rounded-full border-white/10 bg-white/5 text-white/70">
              {year}
            </span>
          </div>
        </motion.div>

        {/* ✅ Responsive grid:
            - Mobile/tablet: 1 colonne
            - Desktop: 2 colonnes
            - Sidebar droite "sticky" sur desktop
        */}
        <div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:gap-8">
          {/* LEFT */}
          <div className="space-y-6">
            <TiltCard className="p-6 sm:p-8 bg-gradient-to-br from-[#0B0B0F] via-[#0F0F14] to-[#0B0B0F] rounded-xl hover:border-violet-500/40 border border-violet-500/40 backdrop-blur shadow-[0_10px_40px_rgba(124,58,237,0.25)]">
              <div className="flex items-center gap-3">
                <Layers3 className="w-5 h-5 text-violet-300" />
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  À propos du projet
                </h2>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                {about}
              </p>

              <div className="flex items-center gap-3 mt-10">
                <Code2 className="w-5 h-5 text-violet-300" />
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  Approche Technique
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                {technicalApproach}
              </p>
            </TiltCard>
          </div>

          {/* RIGHT */}
          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {/* Informations */}
            <TiltCard className="p-6 sm:p-8 bg-gradient-to-br from-[#0B0B0F] via-[#0F0F14] to-[#0B0B0F] rounded-xl hover:border-violet-500/40 border border-violet-500/40 backdrop-blur shadow-[0_10px_40px_rgba(124,58,237,0.25)]" intensity={8}>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Informations
              </h2>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 border rounded-xl border-white/10 bg-white/5">
                    <CalendarDays className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-sm text-white/45">Date de création</p>
                    <p className="mt-1 font-semibold text-white">{createdAt}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 border rounded-xl border-white/10 bg-white/5">
                    <Layers3 className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-sm text-white/45">Type de projet</p>
                    <p className="mt-1 font-semibold text-white">{projectType}</p>
                  </div>
                </div>
              </div>

              {/* <div className="pt-6 border-t mt-7 border-white/10">
                <a
                  href={project.liveUrl ?? '#'}
                  target="_blank"
                  rel="noreferrer"
                  className={[
                    'group inline-flex w-full items-center justify-center gap-3 rounded-xl',
                    'bg-violet-600 px-4 py-3 font-semibold text-white',
                    'hover:bg-violet-500 transition-colors',
                    !project.liveUrl ? 'pointer-events-none opacity-60' : '',
                  ].join(' ')}
                >
                  Voir le site en direct
                  <ExternalLink className="h-4 w-4 opacity-90 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                {!project.liveUrl && (
                  <p className="mt-3 text-xs text-white/40">
                    Ajoute <code className="text-white/60">liveUrl</code> dans ton
                    projet pour activer ce bouton.
                  </p>
                )}
              </div> */}
            </TiltCard>

            {/* Technologies */}
            <TiltCard className="p-6 sm:p-8 bg-gradient-to-br from-[#0B0B0F] via-[#0F0F14] to-[#0B0B0F] rounded-xl hover:border-violet-500/40 border border-violet-500/40 backdrop-blur shadow-[0_10px_40px_rgba(124,58,237,0.25)]" intensity={8}>
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-violet-300" />
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Technologies
                </h2>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {(project.technologies ?? []).map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm border rounded-full border-white/10 bg-white/5 text-white/75"
                  >
                    <Dot />
                    {tech}
                  </span>
                ))}
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  )
}
