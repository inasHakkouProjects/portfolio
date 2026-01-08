import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatExperience(years: number): string {
  if (years === 1) return `${years} an d'expérience`
  return `${years} ans d'expérience`
}


