'use client'

import { motion } from 'framer-motion'
// import { HomeStatsCards } from './HomeStatsCards'

export function HomeBrain3D() {
  return (
    <div className="relative w-full h-full min-h-[600px] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-full h-full"
      >
        {/* Fond réseau néon */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 600">
            {[...Array(8)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={50 + i * 50}
                y1="0"
                x2={50 + i * 50}
                y2="600"
                stroke="#8b5cf6"
                strokeWidth="1"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
            {[...Array(12)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={50 + i * 50}
                x2="400"
                y2={50 + i * 50}
                stroke="#8b5cf6"
                strokeWidth="1"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </svg>
        </div>

        {/* Centre */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Glow (optionnel) */}
            <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />

            {/* ✅ L’IMAGE QUI BOUGE (motion DIRECTEMENT SUR L’IMAGE) */}
            <motion.img
              src="/brain.png"
              alt="Brain"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                relative z-10 object-contain drop-shadow-2xl
                w-96 h-96
                md:w-80 md:h-80
                lg:w-[600px] lg:h-[600px]
              "
            />
          </div>
        </div>

        {/* Cards */}
        {/* <HomeStatsCards /> */}
      </motion.div>
    </div>
  )
}
