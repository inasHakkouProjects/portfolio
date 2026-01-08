'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setIsSubmitting(true)
    
//     // Simuler l'envoi du formulaire
//     await new Promise(resolve => setTimeout(resolve, 1500))
    
//     setIsSubmitting(false)
//     setSubmitted(true)
    
//     // Réinitialiser après 3 secondes
//     setTimeout(() => {
//       setSubmitted(false)
//       setFormData({ name: '', email: '', message: '' })
//     }, 3000)
//   }
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => null)
      throw new Error(data?.error || 'Erreur lors de l’envoi.')
    }

    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  } catch (err) {
    alert(err instanceof Error ? err.message : 'Erreur inconnue')
  } finally {
    setIsSubmitting(false)
  }
}


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <form onSubmit={handleSubmit} className="p-8 space-y-6 glass rounded-xl">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 text-white placeholder-gray-500 transition-all border rounded-lg bg-dark-surface border-violet-500/20 focus:outline-none focus:border-violet-500/40 focus:ring-2 focus:ring-violet-500/20"
            placeholder="Votre nom"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 text-white placeholder-gray-500 transition-all border rounded-lg bg-dark-surface border-violet-500/20 focus:outline-none focus:border-violet-500/40 focus:ring-2 focus:ring-violet-500/20"
            placeholder="votre.email@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 text-white placeholder-gray-500 transition-all border rounded-lg resize-none bg-dark-surface border-violet-500/20 focus:outline-none focus:border-violet-500/40 focus:ring-2 focus:ring-violet-500/20"
            placeholder="Décrivez votre projet ou votre demande..."
          />
        </div>
        
        <motion.button
          type="submit"
          disabled={isSubmitting || submitted}
          whileHover={{ scale: submitted ? 1 : 1.02 }}
          whileTap={{ scale: submitted ? 1 : 0.98 }}
          className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
            submitted
              ? 'bg-green-600 text-white'
              : 'bg-violet-600 hover:bg-violet-500 text-white glow-violet'
          } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Envoi en cours...
            </span>
          ) : submitted ? (
            'Message envoyé ! ✓'
          ) : (
            'Envoyer'
          )}
        </motion.button>
      </form>
    </motion.div>
  )
}


