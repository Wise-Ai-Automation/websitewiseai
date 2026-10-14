import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { FloatingWhatsApp } from '../common/FloatingWhatsApp'

export const SiteLayout: React.FC = () => {
  const location = useLocation()

  // Scroll to top on route change, unless navigating to an in-page hash target.
  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        // Defer so the destination page has rendered before we scroll.
        requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth' }))
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-brand-600 selection:text-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
