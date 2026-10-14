import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Sparkles,
} from 'lucide-react'
import { getServiceBySlug, serviceDetails } from '../content/serviceDetails'
import { siteContent } from '../content/siteContent'
import { getServiceIcon } from '../lib/serviceIcons'

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0)

  useEffect(() => {
    if (service) {
      document.title = `${service.name} | Wise AI Automation`
    }
  }, [service])

  if (!service) {
    return <Navigate to="/" replace />
  }

  const HeroIcon = getServiceIcon(service.iconName)
  const otherServices = serviceDetails.filter((s) => s.id !== service.id)

  return (
    <>
      {/* Hero */}
      <section className="relative isolate pt-28 pb-16 md:pt-36 md:pb-20 bg-white border-b border-slate-200 overflow-hidden">
        <div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: 'linear-gradient(to right, #CBD5E1 1px, transparent 1px), linear-gradient(to bottom, #CBD5E1 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            opacity: 0.45,
          }}
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: 'radial-gradient(ellipse 65% 55% at 50% 0%, transparent 0%, white 75%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/#services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-brand-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All services</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 min-w-0 flex flex-col items-start text-left gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center shrink-0">
                  <HeroIcon className="w-7 h-7" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-50 text-brand-800 text-[11px] font-bold border border-brand-200 tracking-wide uppercase">
                  {service.badge}
                </span>
              </div>

              <h1 className="font-heading text-[2.25rem] sm:text-5xl lg:text-[3rem] font-extrabold text-slate-900 leading-[1.08] max-w-xl">
                {service.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-slate-500 leading-[1.7] max-w-xl">
                {service.heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Link
                  to="/#book-demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 transition-all duration-150 shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] tracking-wide"
                >
                  <span>Book a free call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/#services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-brand-50/60 hover:text-brand-700 border border-slate-200 hover:border-brand-300 transition-all duration-150 shadow-sm tracking-wide"
                >
                  <span>See all services</span>
                </Link>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 w-full max-w-xl">
                {service.heroStats.map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <p className="stat-number text-xl font-extrabold text-brand-600">{stat.value}</p>
                    <p className="text-xs font-semibold text-slate-600 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: live-preview UI mockup panel */}
            <div className="lg:col-span-5 min-w-0 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-500/10 via-signal-400/5 to-brand-500/10 rounded-[2rem] blur-2xl -z-10" />
              <div className="bg-ink-950 rounded-3xl border border-ink-800 shadow-2xl shadow-brand-900/20 overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-ink-800">
                  <span className="text-sm font-bold text-white">{service.mockupTitle}</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-signal-500/10 border border-signal-500/20 text-signal-400 text-[10px] font-bold uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal-400 animate-pulse" />
                    Live preview
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 p-5">
                  {service.mockupTiles.map((tile) => {
                    const TileIcon = getServiceIcon(tile.iconName)
                    return (
                      <div key={tile.label} className="p-4 rounded-2xl bg-ink-900 border border-ink-800">
                        <div className="w-8 h-8 rounded-lg bg-signal-500/10 border border-signal-500/20 text-signal-400 flex items-center justify-center mb-3">
                          <TileIcon className="w-4 h-4" />
                        </div>
                        <p className="text-lg font-extrabold text-white stat-number leading-none mb-1">{tile.value}</p>
                        <p className="text-[11px] font-semibold text-slate-400 leading-snug">{tile.label}</p>
                        <p className="text-[10px] text-signal-400/80 font-mono mt-1">{tile.note}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 min-w-0 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
              <img
                src={service.heroImageUrl}
                alt={service.heroImageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
            </div>
            <div className="lg:col-span-7 min-w-0">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-4">
                {service.overviewHeading}
              </h2>
              <p className="text-base text-slate-600 leading-[1.75]">
                {service.overviewBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-section-alt border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>What's included</span>
            </div>
            <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] font-bold text-slate-900 leading-[1.15]">
              Everything included with {service.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature) => {
              const FeatureIcon = getServiceIcon(feature.iconName)
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm card-lift"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center mb-4">
                    <FeatureIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-semibold">
              <span>How It Works</span>
            </div>
            <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] font-bold text-slate-900 leading-[1.15]">
              From kickoff to live, in four stages
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.howItWorks.map((step) => (
              <div key={step.number} className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="stat-number text-3xl font-extrabold text-brand-100">{step.number}</span>
                <h3 className="text-sm font-bold text-slate-900 mt-2 mb-1.5">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal for */}
      <section className="py-20 bg-section-alt border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            Built for businesses like yours
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {service.idealFor.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white text-slate-700 border border-slate-200"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
              <span>Common Questions</span>
            </div>
            <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] font-bold text-slate-900 leading-[1.15]">
              {service.name} FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'bg-slate-50 border-brand-400 shadow-sm' : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-brand-600 rounded-2xl"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 pr-4">{faq.question}</span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-brand-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-700 leading-relaxed border-t border-slate-200/80">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA banner */}
      <section className="py-20 bg-ink-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-signal-500/10 rounded-full blur-[120px] pointer-events-none -z-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to see {service.name} built for your business?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            {siteContent.finalCta.subheadline}
          </p>
          <Link
            to="/#book-demo"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-signal-500 hover:bg-signal-400 transition-all duration-150 shadow-lg shadow-signal-500/25"
          >
            <span>Book a free strategy call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mb-8 text-center">
            Explore our other services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {otherServices.map((other) => {
              const OtherIcon = getServiceIcon(other.iconName)
              return (
                <Link
                  key={other.id}
                  to={`/services/${other.slug}`}
                  className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all duration-200 flex flex-col"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center mb-3 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <OtherIcon className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-bold text-slate-900">{other.name}</p>
                  <p className="text-xs text-brand-600 font-semibold mt-auto pt-3 inline-flex items-center gap-1">
                    Learn more
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetailPage
