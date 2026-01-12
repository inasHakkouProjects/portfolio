'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

// type DetailsVideoProps = {
//   video: string
//   title?: string
// }
// type Project = {
//   id: number
//   title: string
//   video:string
// }
type Project = {
  id: number
  title: string
  video: string
  subtitle: string
}
// export function DetailsContent({ project }: { project: Project }) 
export function DetailsVideo({ project }: { project: Project }) {
  return (
    <section className="relative mt-20">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
      </div>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {project.title}
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-sm text-white/60 sm:text-base">
            {project.subtitle}
          </p>
        </motion.div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl
                     shadow-[0_30px_120px_rgba(0,0,0,0.65)]"
        >
          {/* Top bar (fake window) */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/40">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />

            <div className="px-3 py-1 ml-4 text-xs border rounded-full border-white/10 bg-white/5 text-white/60">
              live_demo_preview.mp4
            </div>
          </div>

          {/* Video */}
          <div className="relative w-full aspect-video">
            <video
              src={project.video}
              className="w-full h-full object-fit"
              controls
              preload="metadata"
            />

            {/* Optional play overlay (aesthetic) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex h-20 w-20 items-center justify-center rounded-full
                              border border-violet-400/30 bg-violet-500/20 backdrop-blur
                              shadow-[0_0_40px_rgba(139,92,246,0.45)]">
                <Play className="w-8 h-8 text-white" fill="white" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
