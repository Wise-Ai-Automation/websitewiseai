import React from 'react'
import {
  PhoneCall,
  GitFork,
  MessageSquare,
  Calendar,
  Globe,
  Smartphone,
  ArrowRight,
  Sparkles
} from 'lucide-react'

interface ServiceCard {
  id: string
  title: string
  description: string
  icon: React.ElementType
  badge?: string
}

const services: ServiceCard[] = [
  {
    id: 'voice-ai',
    title: 'Voice AI Agents',
    description: 'AI phone agents that answer every call, book appointments, and qualify leads — 24/7, in English and French.',
    icon: PhoneCall,
    badge: '24/7 Phone Answering'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'Automate repetitive work: follow-ups, invoicing, data entry, and CRM updates across the tools you already use.',
    icon: GitFork,
    badge: 'End-to-End Workflow'
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots',
    description: 'Website chatbots trained on your business that answer questions, capture leads, and hand off to your team.',
    icon: MessageSquare,
    badge: 'Lead Capture'
  },
  {
    id: 'scheduling-apps',
    title: 'Scheduling Apps',
    description: 'Smart booking systems with reminders, time-zone handling, and calendar sync — built for your workflow.',
    icon: Calendar,
    badge: 'Calendar Sync'
  },
  {
    id: 'website-creation',
    title: 'Website Creation',
    description: 'Fast, modern websites designed to convert visitors into customers, with AI built in from day one.',
    icon: Globe,
    badge: 'Conversion Engine'
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: "Custom web and mobile apps that put your business in your customers' pockets.",
    icon: Smartphone,
    badge: 'iOS & Android'
  }
]

export const SolutionsSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-ink-950 text-white border-b border-slate-800/80 relative overflow-hidden scroll-mt-16">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-signal-500/10 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-brand-600/10 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Matching Image 1 */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-signal-400 text-xs font-mono font-bold tracking-widest uppercase">
            <span>WHAT WE BUILD</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight">
            AI systems that do the work for you
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            From the first phone ring to the final invoice, we automate the busywork so your team can focus on customers.
          </p>
        </div>

        {/* 6 Services Grid: Matching Image 1 exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.id}
                className="bg-ink-900/90 border border-slate-800/90 rounded-3xl p-8 hover:border-signal-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-signal-500/5 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top edge glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-signal-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon Container: Cyan rounded squircle */}
                  <div className="w-12 h-12 rounded-2xl bg-signal-500/10 border border-signal-500/20 text-signal-400 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-signal-500/20 transition-all duration-200">
                    <Icon className="w-6 h-6 text-signal-400" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-signal-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description: Exact text from image 1 */}
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-signal-400 transition-colors">
                  <span>{service.badge}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-signal-400" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-ink-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-2xl bg-signal-500/10 border border-signal-500/20 text-signal-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="font-heading text-base font-bold text-white">Need a custom AI setup for your business?</p>
              <p className="text-xs sm:text-sm text-slate-400">We build bespoke workflows tailored specifically to your tools and call volume.</p>
            </div>
          </div>
          <a
            href="#book-demo"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-signal-500 hover:bg-signal-400 transition-all duration-150 shadow-md shadow-signal-500/20 hover:shadow-signal-500/30 active:scale-[0.98]"
          >
            <span>Book a free strategy call</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  )
}
