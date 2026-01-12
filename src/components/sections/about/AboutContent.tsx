
'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/src/data/mockData'
import { Briefcase, MapPin, Mail, ArrowRight } from 'lucide-react'

export function AboutContent() {
  const fullName = `${personalInfo.firstName} ${personalInfo.lastName}`

  // Adapte selon ton mockData (mets les bons champs si tu les as)
  // const headline =
  //   (personalInfo as any).headline ||
  //   (personalInfo as any).title ||
  //   'Développeur Full-Stack'

  // const location =
  //   (personalInfo as any).location || 'Paris, France (Distanciel)'

  type PersonalInfo = {
    role?: string
    location?: string
  }

  return (
    <motion.section
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Fond/Glow */}
      <div className="absolute pointer-events-none -z-10">
        <div className="absolute rounded-full -right-24 -top-20 h-80 w-80 bg-violet-500/10 blur-3xl" />
        <div className="absolute rounded-full -left-24 -bottom-24 h-80 w-80 bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/20" />
      </div>

      <div className="space-y-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 border rounded-full border-violet-400/30 bg-white/5 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.65)]" />
          <span className="text-xs font-semibold tracking-widest text-violet-200/90">
            DISPONIBLE POUR PROJETS
          </span>
        </motion.div>

        {/* Titre */}
        <div className="space-y-4">
          {/* 🔧 Taille du nom */}
          <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            {fullName}
          </h2>

          {/* 🔧 Couleur du titre violet */}
          <p className="text-2xl font-semibold sm:text-3xl gradient-text">
            {personalInfo.role}
          </p>

          {/* Bio avec barre à gauche */}
          <div className="relative max-w-2xl pl-6">
            {/* 🔧 Couleur/épaisseur de la barre */}
            <div className="absolute left-0 top-1 h-full w-[2px] bg-violet-500/60" />
            <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
              {personalInfo.bio}
            </p>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Expérience */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className="
              rounded-2xl
              border border-violet-500/40
              bg-gradient-to-br from-[#0B0B0F] via-[#0F0F14] to-[#0B0B0F]
              p-6
              backdrop-blur
              shadow-[0_10px_40px_rgba(124,58,237,0.25)]
            ">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-violet-500/15 p-2.5 border border-violet-500/20">
                <Briefcase className="w-5 h-5 text-violet-300" />
              </div>
              <div className="text-sm text-gray-400">Expérience</div>
            </div>

            <div className="flex items-end gap-2">
              {/* 🔧 Taille du chiffre */}
              <div className="text-6xl font-extrabold leading-none text-white">
                {personalInfo.stats.experience}
              </div>
              <div className="pb-1 text-gray-300">Ans</div>
            </div>
          </motion.div>

          {/* Localisation */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className="
              rounded-2xl
              border border-violet-500/40
              bg-gradient-to-br from-[#0B0B0F] via-[#0F0F14] to-[#0B0B0F]
              p-6
              backdrop-blur
              shadow-[0_10px_40px_rgba(124,58,237,0.25)]
            ">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-violet-500/15 p-2.5 border border-violet-500/20">
                <MapPin className="w-5 h-5 text-violet-300" />
              </div>
              <div className="text-sm text-gray-400">Localisation</div>
            </div>

            {/* 🔧 Taille du texte localisation */}
            <div className="mt-6 text-3xl font-extrabold text-white truncate">
              {personalInfo.location}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* Bouton principal */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl
                       bg-violet-600 px-6 py-3 font-semibold text-white
                       shadow-[0_10px_30px_rgba(124,58,237,0.35)]
                       hover:bg-violet-500 transition"
          >
            <Mail className="w-4 h-4" />
            Me contacter
          </motion.a>

          {/* Bouton secondaire outline */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold transition bg-transparent border rounded-xl border-violet-500/50 text-violet-300 hover:text-white hover:border-violet-400"
          >
            Voir mes projets
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.section>
  )
}
