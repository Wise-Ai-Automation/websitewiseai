import React from 'react'
import { siteContent, TestimonialItem } from '../../content/siteContent'
import { MessageSquareQuote, Info } from 'lucide-react'

export const TestimonialsSection: React.FC = () => {
  const testimonials = siteContent.testimonials

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
            <MessageSquareQuote className="w-3.5 h-3.5 text-blue-600" />
            <span>Client Perspectives</span>
          </div>

          <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 leading-[1.12]">
            Built for Real-World Phone Demands
          </h2>

          <p className="text-base text-slate-500 leading-[1.7]">
            See how organizations across healthcare, real estate, and home services rely on custom voice agents to capture revenue around the clock.
          </p>

          {/* Placeholder Transparency Notice */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Early adopter quotes shown below are illustrative placeholders until case studies publish.</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t: TestimonialItem) => (
            <div
              key={t.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-7 flex flex-col justify-between hover:border-slate-300 transition-all duration-200 group"
            >
              <div>
                <MessageSquareQuote className="w-8 h-8 text-blue-600/30 mb-4" />
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{t.authorRole}</h4>
                    <p className="text-[11px] text-blue-700 font-semibold mt-0.5">{t.industry}</p>
                  </div>
                  {t.isPlaceholder && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-500 border border-slate-200">
                      Sample
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
