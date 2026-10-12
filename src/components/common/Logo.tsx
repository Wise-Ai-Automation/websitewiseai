import React from 'react'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  size = 'md'
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  }

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  }

  return (
    <a href="#" className={`flex items-center gap-2.5 group select-none ${className}`}>
      {/* Teal Star Logo Mark Matching Mockup */}
      <div className={`relative ${iconSizes[size]} rounded-full bg-[#00c5c8] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200 shrink-0`}>
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-slate-950">
          <path
            d="M12 2L14.39 9.61L22 12L14.39 14.39L12 22L9.61 14.39L2 12L9.61 9.61L12 2Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex items-center gap-1.5">
          <span className={`font-bold text-slate-900 font-heading tracking-tight ${textSizes[size]}`}>
            Wise AI <span className="font-semibold text-slate-700">Automation</span>
          </span>
        </div>
      )}
    </a>
  )
}
