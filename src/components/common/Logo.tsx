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
      {/* Voice Waveform Logo Mark */}
      <div className={`relative ${iconSizes[size]} rounded-xl bg-blue-600 p-[1.5px] shadow-sm group-hover:shadow transition-shadow duration-200`}>
        <div className="w-full h-full bg-blue-950 rounded-[10px] flex items-center justify-center gap-[2.5px] p-1.5">
          <span className="w-[2.5px] h-2.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
          <span className="w-[2.5px] h-4 bg-sky-300 rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
          <span className="w-[2.5px] h-5 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
          <span className="w-[2.5px] h-3.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '600ms' }} />
          <span className="w-[2.5px] h-2 bg-indigo-300 rounded-full animate-pulse" style={{ animationDelay: '800ms' }} />
        </div>
      </div>

      {showText && (
        <div className="flex items-center gap-1">
          <span className={`font-bold text-slate-900 font-heading tracking-tight ${textSizes[size]}`}>
            WISE<span className="text-blue-600">AI</span>
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping opacity-75" />
        </div>
      )}
    </a>
  )
}
