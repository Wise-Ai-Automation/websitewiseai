import React, { useState, useEffect } from 'react'
import { Logo } from '../common/Logo'
import { siteContent } from '../../content/siteContent'
import { Menu, X, ArrowRight, Phone } from 'lucide-react'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5'
          : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Logo size="md" />

          {/* Simple, Clean Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {siteContent.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${siteContent.brand.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 text-xs font-mono font-medium text-slate-600 hover:text-slate-900 transition-colors"
              title="Call us directly in Ontario"
            >
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              <span>{siteContent.brand.contact.displayPhone}</span>
            </a>

            <a
              href="#book-demo"
              onClick={(e) => scrollToSection(e, '#book-demo')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-150 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="#book-demo"
              onClick={(e) => scrollToSection(e, '#book-demo')}
              className="px-4 py-2 text-xs font-bold rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-500/20"
            >
              Book Demo
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[57px] z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-slate-900/30 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative z-50 flex flex-col justify-between h-[calc(100vh-57px)] p-6 bg-white border-b border-slate-200">
            <div className="space-y-4 pt-2">
              <p className="text-xs font-mono font-medium uppercase tracking-wider text-slate-400">
                Menu
              </p>

              <div className="flex flex-col space-y-1">
                {siteContent.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="flex items-center justify-between px-3 py-3 rounded-lg text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <a
                href="#book-demo"
                onClick={(e) => scrollToSection(e, '#book-demo')}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={siteContent.brand.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200"
              >
                <span>WhatsApp: {siteContent.brand.contact.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
