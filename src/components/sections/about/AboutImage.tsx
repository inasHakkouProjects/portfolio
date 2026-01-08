'use client'

import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from "next/image"

export function AboutImage() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="relative"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="glass rounded-2xl p-8"
      >
        {/* Placeholder pour image personnelle */}
        {/* <div className="aspect-square w-full bg-gradient-to-br from-violet-600/20 to-violet-800/20 rounded-xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent" />
          <div className="relative z-10 text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-violet-600 to-violet-800 rounded-full flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-400 text-sm">Photo de profil</p>
          </div> */}
          
          {/* Effet de glow */}
          {/* <div className="absolute inset-0 bg-violet-500/20 blur-3xl opacity-50" />
        </div> */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden">
          {/* Image */}
          <Image
            src="/me.png"
            alt="Photo de profil"
            fill
            className="object-cover object-top"
            priority
          />

          {/* Overlay gradient (optionnel, léger style corporate) */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent" />

          {/* Effet glow */}
          <div className="absolute inset-0 bg-violet-500/20 blur-3xl opacity-40" />
        </div>
      </motion.div>
    </motion.div>
  )
}


