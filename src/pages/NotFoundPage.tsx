import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Compass } from 'lucide-react'

export const NotFoundPage: React.FC = () => {
  return (
    <section className="py-32 bg-white text-center">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center mx-auto mb-6">
          <Compass className="w-7 h-7" />
        </div>
        <h1 className="font-heading text-3xl font-bold text-slate-900 mb-3">Page not found</h1>
        <p className="text-sm text-slate-500 mb-8">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-md"
        >
          <span>Back to homepage</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
