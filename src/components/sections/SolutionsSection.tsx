import React from 'react'
import { siteContent, SolutionItem } from '../../content/siteContent'
import {
  PhoneCall,
  PhoneOutgoing,
  CalendarCheck,
  CheckCircle2,
  Headphones,
  Languages,
  ArrowUpRight,
  Zap,
  Clock,
  Globe,
} from 'lucide-react'

// Each solution gets a unique accent color and visual treatment
const solutionConfig: Record<string, {
  gradient: string
  iconBg: string
  iconColor: string
  accentBadge: string
  accentText: string
  stat: string
  statLabel: string
  topBarColor: string
}> = {
  inbound: {
    gradient: 'from-blue-600 to-blue-700',
    iconBg: 'bg-blue-600',
    iconColor: 'text-white',
    accentBadge: 'bg-blue-50 text-blue-700 border-blue-200',
    accentText: 'text-blue-600',
    stat: '100%',
    statLabel: 'First-ring answer rate',
    topBarColor: 'bg-blue-600',
  },
  outbound: {
    gradient: 'from-violet-600 to-indigo-600',
    iconBg: 'bg-violet-600',
    iconColor: 'text-white',
    accentBadge: 'bg-violet-50 text-violet-700 border-violet-200',
    accentText: 'text-violet-600',
    stat: '<30s',
    statLabel: 'Webform to call time',
    topBarColor: 'bg-violet-600',
  },
  booking: {
    gradient: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-600',
    iconColor: 'text-white',
    accentBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    accentText: 'text-emerald-600',
    stat: '0',
    statLabel: 'Double-bookings ever',
    topBarColor: 'bg-emerald-600',
  },
  qualification: {
    gradient: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-500',
    iconColor: 'text-white',
    accentBadge: 'bg-amber-50 text-amber-700 border-amber-200',
    accentText: 'text-amber-600',
    stat: '3×',
    statLabel: 'More qualified leads',
    topBarColor: 'bg-amber-500',
  },
  support: {
    gradient: 'from-sky-500 to-cyan-600',
    iconBg: 'bg-sky-500',
    iconColor: 'text-white',
    accentBadge: 'bg-sky-50 text-sky-700 border-sky-200',
    accentText: 'text-sky-600',
    stat: '24/7',
    statLabel: 'Support coverage',
    topBarColor: 'bg-sky-500',
  },
  multilingual: {
    gradient: 'from-rose-500 to-pink-600',
    iconBg: 'bg-rose-500',
    iconColor: 'text-white',
    accentBadge: 'bg-rose-50 text-rose-700 border-rose-200',
    accentText: 'text-rose-600',
    stat: '30+',
    statLabel: 'Languages & dialects',
    topBarColor: 'bg-rose-500',
  },
}

export const SolutionsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    PhoneCall,
    PhoneOutgoing,
    CalendarCheck,
    CheckCircle2,
    Headphones,
    Languages,
  }

  return (
    <section id="solutions" className="py-24 bg-slate-50 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-bold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>Voice Capabilities</span>
          </div>

          <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 leading-[1.12]">
            Everything your phones need,{' '}
            <span className="gradient-text">handled automatically</span>
          </h2>

          <p className="text-base text-slate-500 leading-[1.7] max-w-2xl mx-auto">
            Every agent is custom-built to your workflows. We handle the prompt logic, voice tuning, and CRM integrations — you just receive booked appointments and qualified leads.
          </p>
        </div>

        {/* Solutions Grid — Premium Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.solutions.map((solution: SolutionItem, idx: number) => {
            const Icon = iconMap[solution.iconName] || PhoneCall
            const config = solutionConfig[solution.id] || solutionConfig.inbound

            return (
              <div
                key={solution.id}
                className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col"
              >
                {/* Colored top bar */}
                <div className={`h-1 w-full ${config.topBarColor}`} />

                <div className="p-7 flex flex-col flex-1">

                  {/* Top row: icon + number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-11 h-11 rounded-xl ${config.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-300 pt-1">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-[1.15rem] font-bold text-slate-900 mb-1.5 leading-snug group-hover:text-blue-600 transition-colors duration-200">
                    {solution.title}
                  </h3>

                  {/* Capability tag */}
                  <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-md border self-start mb-4 ${config.accentBadge}`}>
                    <Clock className="w-3 h-3" />
                    {solution.badge}
                  </span>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-[1.7] mb-6">
                    {solution.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {solution.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span className={`w-4 h-4 rounded-full ${config.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 12 12">
                            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="leading-[1.5] font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom stat + CTA */}
                  <div className="pt-5 mt-auto border-t border-slate-100 flex items-center justify-between">
                    {/* Inline stat */}
                    <div>
                      <p className={`text-xl font-bold font-heading ${config.accentText}`}>
                        {config.stat}
                      </p>
                      <p className="text-[11px] text-slate-400 font-medium leading-tight mt-0.5">
                        {config.statLabel}
                      </p>
                    </div>

                    {/* CTA arrow */}
                    <a
                      href="#book-demo"
                      className={`w-9 h-9 rounded-xl ${config.iconBg} flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all duration-200 group-hover:scale-105`}
                      aria-label={`Learn more about ${solution.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-slate-900">Don't see your use case?</p>
              <p className="text-xs text-slate-500">We build fully bespoke agents for any phone-dependent business workflow.</p>
            </div>
          </div>
          <a
            href="#book-demo"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-150 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            <span>Tell us your workflow</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  )
}
