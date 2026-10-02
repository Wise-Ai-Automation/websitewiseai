import React, { useState } from 'react'
import { Logo } from '../common/Logo'
import { siteContent } from '../../content/siteContent'
import { Phone, Mail, ArrowUpRight, X, ShieldCheck, Lock } from 'lucide-react'
import { WhatsAppIcon } from '../common/WhatsAppIcon'

export const Footer: React.FC = () => {
  const { footer, brand } = siteContent
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && href !== '#privacy-policy' && href !== '#terms-of-service') {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleLegalClick = (e: React.MouseEvent, type: 'privacy' | 'terms') => {
    e.preventDefault()
    setActiveModal(type)
  }

  return (
    <footer className="bg-[#0B1528] text-slate-300 pt-16 pb-12 border-t border-blue-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Brand & Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-blue-950/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size="md" />
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-950 text-blue-200 text-xs font-semibold border border-blue-800/50">
                <span>🇨🇦</span>
                <span>Ontario, Canada</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {footer.description}
            </p>

            <div className="pt-2 space-y-2">
              <a
                href={brand.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#25D366] hover:underline transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp: {brand.contact.displayPhone}</span>
              </a>

              <div>
                <a
                  href={`tel:${brand.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>Direct: {brand.contact.displayPhone} (Ontario Line)</span>
                </a>
              </div>

              <div>
                <a
                  href={`mailto:${brand.contact.email}`}
                  className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>{brand.contact.email}</span>
                </a>
              </div>
            </div>

            {/* Compliance badges pill */}
            <div className="flex items-center gap-3 pt-2 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>PIPEDA Compliant</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>SOC 2 Aligned</span>
              </span>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {footer.links.solutions.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footer.links.company.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Actions & Quick Demo */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Get Started
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Book a live demonstration customized with your practice or company's actual call scripts.
            </p>
            <a
              href="#book-demo"
              onClick={(e) => scrollToSection(e, '#book-demo')}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md"
            >
              <span>Schedule Live Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {brand.meta.copyrightYear} {brand.name} Inc. (Ontario, Canada). All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={(e) => handleLegalClick(e, 'privacy')}
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              Privacy Policy (PIPEDA Compliant)
            </button>
            <button
              type="button"
              onClick={(e) => handleLegalClick(e, 'terms')}
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>

      {/* Modal for Privacy Policy / Terms */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white text-slate-900 border border-slate-200 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-base font-bold text-slate-900">
                {activeModal === 'privacy' ? 'Privacy Policy & Canadian PIPEDA Safeguards' : 'Terms of Service'}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-slate-600 space-y-3 max-h-80 overflow-y-auto pr-2 leading-relaxed">
              <p>
                <strong>Canadian Data Protection Commitment:</strong> WISE AI Inc. operates out of Ontario, Canada, in compliance with PIPEDA (Personal Information Protection and Electronic Documents Act) and applicable provincial privacy standards such as Ontario's PHIPA.
              </p>
              <p>
                All voice telephony audio streams and digital transcripts are transmitted over TLS 1.3 encryption and stored with AES-256 standards. Customer phone numbers, recordings, and caller CRM data are strictly owned by your organization.
              </p>
              <p>
                Canadian data residency options (AWS Montreal / Azure Canada Central) are guaranteed for domestic healthcare and enterprise partners.
              </p>
            </div>

            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
