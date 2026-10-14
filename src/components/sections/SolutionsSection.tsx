import React from 'react'
import { Link } from 'react-router-dom'
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
  slug: string
  title: string
  description: string
  icon: React.ElementType
  badge?: string
  imageUrl: string
  imageAlt: string
}

const services: ServiceCard[] = [
  {
    id: 'voice-ai',
    slug: 'voice-ai-agents',
    title: 'Voice AI Agents',
    description: 'AI phone agents that answer every call, book appointments, and qualify leads — 24/7, in English and French.',
    icon: PhoneCall,
    badge: '24/7 Phone Answering',
    imageUrl: 'https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'A professional taking a phone call at a café table with a laptop open'
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI Automation',
    description: 'Automate repetitive work: follow-ups, invoicing, data entry, and CRM updates across the tools you already use.',
    icon: GitFork,
    badge: 'End-to-End Workflow',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Two team members reviewing an automated workflow dashboard on their laptops'
  },
  {
    id: 'ai-chatbots',
    slug: 'ai-chatbots',
    title: 'AI Chatbots',
    description: 'Website chatbots trained on your business that answer questions, capture leads, and hand off to your team.',
    icon: MessageSquare,
    badge: 'Lead Capture',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'A person checking a chat conversation on a phone next to an open laptop'
  },
  {
    id: 'scheduling-apps',
    slug: 'scheduling-apps',
    title: 'Scheduling Apps',
    description: 'Smart booking systems with reminders, time-zone handling, and calendar sync — built for your workflow.',
    icon: Calendar,
    badge: 'Calendar Sync',
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'An open planner with a monthly calendar and a cup of coffee on the desk'
  },
  {
    id: 'website-creation',
    slug: 'website-creation',
    title: 'Website Creation',
    description: 'Fast, modern websites designed to convert visitors into customers, with AI built in from day one.',
    icon: Globe,
    badge: 'Conversion Engine',
    imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'A dark-mode code editor next to a second monitor showing a website design preview'
  },
  {
    id: 'app-development',
    slug: 'app-development',
    title: 'App Development',
    description: "Custom web and mobile apps that put your business in your customers' pockets.",
    icon: Smartphone,
    badge: 'iOS & Android',
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'A hand holding a smartphone displaying a custom business app dashboard'
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

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="bg-ink-900/90 border border-slate-800/90 rounded-3xl overflow-hidden hover:border-signal-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-signal-500/10 flex flex-col group relative"
              >
                {/* Photo */}
                <div className="relative h-44 overflow-hidden shrink-0">
                  <img
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent" />
                  <span className="absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-full bg-ink-950/80 backdrop-blur-sm border border-slate-700/80 text-[10px] font-bold text-signal-300 uppercase tracking-wide">
                    {service.badge}
                  </span>
                </div>

                {/* Icon overlapping the photo/content seam */}
                <div className="px-7 -mt-7 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-ink-900 border border-slate-700 text-signal-400 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-signal-500/50 transition-all duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-7 pb-7 pt-4">
                  <h3 className="font-heading text-xl font-bold text-white mb-2.5 group-hover:text-signal-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-800/60">
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-signal-400 group-hover:gap-2.5 transition-all duration-200">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
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
          <Link
            to="/#book-demo"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-signal-500 hover:bg-signal-400 transition-all duration-150 shadow-md shadow-signal-500/20 hover:shadow-signal-500/30 active:scale-[0.98]"
          >
            <span>Book a free strategy call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
