'use client'

import { motion } from 'framer-motion'
import { architecture } from '@/src/data/mockData'

export function AboutExpertiseVision() {
  return (
    <section className="space-y-10">
      {/* Header à droite */}
      {/* <div className="space-y-3 text-left">
        <h1 className="text-6xl font-bold text-white md:text-6xl">
          Une architecture scalable pour des solutions durables.
        </h1>
        <p className="max-w-2xl ml-auto leading-relaxed text-gray-400">
          Mon approche combine rigueur technique et créativité numérique pour concevoir des expériences immersives et performantes.
          Chaque ligne de code est pensée pour l&apos;avenir.
        </p>
      </div> */}
      <div className="space-y-6 text-left">
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl xl:text-7xl"
        >
            <span className="text-white">Une architecture</span>
            <span className="gradient-text text-glow"> scalable</span><br></br>
            <span className="text-white">pour des solutions durables.</span>
            {/* <span className="gradient-text text-glow">Code</span> */}
        </motion.h1>
        <p className="max-w-2xl leading-relaxed text-gray-400">
          Mon approche combine rigueur technique et créativité numérique pour concevoir des expériences immersives et performantes.
          Chaque ligne de code est pensée pour l’avenir.
        </p>
    </div>
      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {architecture.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className="
              group glass rounded-2xl p-6 border border-white/10
              hover:border-violet-400/70 hover:shadow-[0_0_35px_rgba(167,139,250,0.20)]
              cursor-default
            "
          >
            {/* Logo + line */}
            <div className="flex items-start justify-between gap-4">
              <div
                className="flex items-center justify-center w-12 h-12 transition-colors border  rounded-xl border-white/10 bg-white/5 group-hover:border-pink-400/80"
              >
                {/* architecture.logo = image (path) */}
                <img
                  src={item.logo}
                  alt={item.name}
                  className="object-contain w-6 h-6"
                />
              </div>

              {/* <div className="h-[1px] flex-1 mt-6 bg-white/10 group-hover:bg-pink-400/70 transition-colors" /> */}
            </div>

            <div className="mt-4 space-y-2">
              <h4
                className="text-xl font-bold text-white transition-colors  group-hover:gradient-text"
              >
                {item.name}
              </h4>

              <p className="leading-relaxed text-gray-400">
                {item.description}
              </p>

              {/* petite ligne en bas */}
              <div className="pt-4">
                <div className="h-[3px] bg-white/10 group-hover:bg-pink-400/70 transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
