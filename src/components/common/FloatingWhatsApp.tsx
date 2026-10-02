import React, { useState } from 'react'
import { siteContent } from '../../content/siteContent'
import { WhatsAppIcon } from './WhatsAppIcon'
import { X } from 'lucide-react'

export const FloatingWhatsApp: React.FC = () => {
  const { whatsappUrl } = siteContent.brand.contact
  const [showTooltip, setShowTooltip] = useState(true)

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 bg-white border border-slate-200 text-slate-800 px-3.5 py-2 rounded-xl shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-xs font-semibold">Chat with our Canadian team on WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5 ml-1"
            aria-label="Dismiss chat hint"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button with Real WhatsApp Brand Icon */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/25 hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </a>
    </div>
  )
}
