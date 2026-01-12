'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/about', label: 'À propos' },
  { href: '/skills', label: 'Compétences' },
  { href: '/projects', label: 'Projets' },
  { href: '/contact', label: 'Contact' },
]

// Animations
const panelVariants = {
  closed: { opacity: 0, y: -10, scale: 0.98 },
  open: { opacity: 1, y: 0, scale: 1 },
}

const listVariants = {
  closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
}

const itemVariants = {
  closed: { opacity: 0, y: -6, filter: 'blur(6px)' },
  open: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

function BurgerToX({ isOpen }: { isOpen: boolean }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" className="text-gray-300">
      <motion.path
        d="M4 7h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      />
      <motion.path
        d="M4 12h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.path
        d="M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      />
    </svg>
  )
}

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Fermer menu sur ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Fermer menu quand on change de page (pathname change)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b glass border-violet-500/20">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white">
            inas HAKKOU
          </Link>

          {/* Navigation links - Desktop centrées */}
          <div className="absolute items-center hidden gap-8 transform -translate-x-1/2 md:flex left-1/2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link key={link.href} href={link.href} className="relative group">
                  <span
                    className={`transition-colors ${
                      isActive
                        ? 'text-violet-400'
                        : 'text-gray-300 hover:text-violet-400'
                    }`}
                  >
                    {link.label}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-violet-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Bouton Connexion (desktop) */}
          <div className="hidden md:block">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-lg bg-violet-600 hover:bg-violet-500"
              >
                Connexion
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 transition border group rounded-xl border-white/10 bg-white/5 hover:bg-white/10"
            >
              <span className="transition-colors group-hover:text-violet-400">
                <BurgerToX isOpen={isOpen} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay + panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay (clic dehors) */}
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Panel */}
            <motion.div
              className="fixed top-16 left-4 right-4 z-50 md:hidden overflow-hidden rounded-2xl
                         border border-violet-500/20 bg-black/80 backdrop-blur-xl
                         shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              {/* Glow décoratif */}
              <div className="absolute w-48 h-48 -translate-x-1/2 rounded-full pointer-events-none -top-24 left-1/2 bg-violet-500/20 blur-3xl" />

              <motion.nav
                className="relative flex flex-col p-4"
                variants={listVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {navLinks.map((link) => {
                  const isActive = pathname === link.href

                  return (
                    <motion.div key={link.href} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center justify-between rounded-xl px-4 py-3 transition
                          ${isActive ? 'bg-violet-500/10 text-violet-300' : 'text-gray-200 hover:bg-white/5 hover:text-violet-300'}`}
                      >
                        <span className="text-base font-medium">{link.label}</span>
                        <span className="transition-all -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                          →
                        </span>
                      </Link>
                    </motion.div>
                  )
                })}

                {/* CTA mobile */}
                {/* <motion.div variants={itemVariants} className="pt-2">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-center transition border rounded-xl bg-violet-500/15 text-violet-200 border-violet-500/25 hover:bg-violet-500/20"
                  >
                    Connexion ✨
                  </Link>
                </motion.div> */}
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
