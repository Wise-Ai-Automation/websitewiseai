import React from 'react'
import { Link } from 'react-router-dom'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  /** Use on dark backgrounds (e.g. the footer) — wraps the full-color mark in a light chip so it stays legible against ink-950. */
  onDark?: boolean
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  onDark = false,
}) => {
  const heightClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  }

  const img = (
    <img
      src="/onewise-ai-logo.png"
      alt="OneWise AI"
      className={`${heightClasses[size]} w-auto object-contain`}
    />
  )

  return (
    <Link to="/" className={`flex items-center group select-none shrink-0 ${className}`}>
      {onDark ? (
        <div className="px-3 py-1.5 rounded-xl bg-white shadow-sm group-hover:scale-105 transition-transform duration-200">
          {img}
        </div>
      ) : (
        <div className="group-hover:scale-105 transition-transform duration-200">
          {img}
        </div>
      )}
    </Link>
  )
}
