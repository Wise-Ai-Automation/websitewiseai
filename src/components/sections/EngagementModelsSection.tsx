import React from 'react'
import { siteContent, EngagementPlan } from '../../content/siteContent'
import { Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

export const EngagementModelsSection: React.FC = () => {
  const plans = siteContent.engagementModels

  const handleSelectPlan = (planName: string) => {
    const messageInput = document.getElementById('message') as HTMLTextAreaElement | null
    if (messageInput) {
      messageInput.value = `Hi WISE AI, I am interested in discussing the ${planName} model for our Canadian business.`
      messageInput.dispatchEvent(new Event('input', { bubbles: true }))
    }
    const formSection = document.getElementById('book-demo')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Deployment Partnerships</span>
          </div>

          <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 leading-[1.12]">
            Tailored Engagement Models
          </h2>

          <p className="text-base text-slate-500 leading-[1.7]">
            Every business has specific call loads, software requirements, and phone systems. We build dedicated solutions tailored to your operational scale.
          </p>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan: EngagementPlan) => {
            const isGrowth = plan.isMostChosen

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-200 ${
                  isGrowth
                    ? 'bg-white border-2 border-blue-600 shadow-xl lg:-translate-y-2'
                    : 'bg-white border border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                {/* Most Chosen Floating Ribbon */}
                {isGrowth && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold text-white bg-blue-600 shadow-md shadow-blue-500/30">
                      <Sparkles className="w-3 h-3 text-white" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="mb-6">
                    <h3 className="font-heading text-2xl font-bold text-slate-900">{plan.name}</h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Ideal For Pill */}
                  <div className="mb-6 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="text-slate-500 font-medium">Ideal For: </span>
                    <span className="text-slate-900 font-bold">{plan.idealFor}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      What's Included:
                    </p>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs leading-relaxed text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <button
                  type="button"
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                    isGrowth
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0'
                      : 'bg-blue-50/80 hover:bg-blue-100 text-blue-800 border border-blue-200/90 hover:border-blue-300 hover:-translate-y-0.5 active:translate-y-0'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )
          })}
        </div>

        {/* Pricing Transparency Footnote */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
          🇨🇦 Billed in CAD or USD. Need custom PIPEDA compliance, PHIPA agreements for Ontario clinics, or dedicated Canadian SIP trunks? We construct bespoke agreements.
        </div>

      </div>
    </section>
  )
}
