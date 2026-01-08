'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaInstagram, FaFacebook } from 'react-icons/fa'
import { personalInfo } from '@/src/data/mockData'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/about', label: 'À propos' },
  { href: '/skills', label: 'Compétences' },
  { href: '/projects', label: 'Projets' },
  { href: '/contact', label: 'Contact' },
]

const socialIcons = [
  { icon: FaGithub, href: personalInfo.socialLinks.github, label: 'GitHub' },
  { icon: FaLinkedin, href: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
  { icon: FaInstagram, href: personalInfo.socialLinks.instgram, label: 'Instagram' },
  { icon: FaFacebook, href: personalInfo.socialLinks.facebook, label: 'Facebook' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-violet-500/20 glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-violet-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Réseaux sociaux</h3>
            <div className="flex gap-4">
              {socialIcons.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-violet-400 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Copyright */}
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Contact</h3>
            <p className="text-gray-400">{personalInfo.email}</p>
            <p className="text-gray-400 mt-2">{personalInfo.location}</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-violet-500/20 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}


