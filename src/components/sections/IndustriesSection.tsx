import React, { useState } from 'react'
import { siteContent, IndustryItem } from '../../content/siteContent'
import { Building2, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react'

export const IndustriesSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(siteContent.industries[0].id)

  const activeItem = siteContent.industries.find((i) => i.id === selectedIndustry) || siteContent.industries[0]

  return (
    <section id="industries" className="py-24 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span>Real-World Industry Deployments</span>
          </div>

          <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 leading-[1.12]">
            Engineered for High-Volume Phone Operations
          </h2>

          <p className="text-base text-slate-500 leading-[1.7]">
            See how our custom voice agents handle specialized workflows across Canadian healthcare practices, real estate teams, trades, and service businesses.
          </p>
        </div>

        {/* Industry Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {siteContent.industries.map((item: IndustryItem) => {
            const isSelected = item.id === selectedIndustry
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIndustry(item.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {item.name}
              </button>
            )
          })}
        </div>

        {/* Featured Real Industry Use Case Spotlight Card */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 mb-16 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Real Image from Unsplash */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md group">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono uppercase tracking-wider bg-blue-600/90 backdrop-blur-sm px-2.5 py-1 rounded-md font-semibold inline-block mb-1.5">
                  Live Deployment Model
                </span>
                <p className="text-base font-bold text-white drop-shadow-sm">{activeItem.name}</p>
              </div>
            </div>

            {/* Deep-dive Use Case Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-wider">
                  Target Use Case
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  {activeItem.name}
                </h3>
                <p className="text-sm font-medium text-slate-700 mt-2">
                  {activeItem.tagline}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeItem.useCase}
                </p>
              </div>

              {/* Key Features Checkmarks */}
              <div className="space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Specialized Capabilities:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeItem.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Metric Pill & CTA */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-800 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  <span>{activeItem.impactMetric}</span>
                </div>

                <a
                  href="#book-demo"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <span>Build For My Practice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Industry Cards Grid Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.industries.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedIndustry(item.id)}
              className={`rounded-2xl border bg-white p-5 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                item.id === selectedIndustry
                  ? 'border-blue-600 ring-2 ring-blue-500/20 shadow-md'
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              <div>
                <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/20" />
                  <span className="absolute bottom-2.5 left-2.5 text-[11px] font-semibold bg-white/90 backdrop-blur-sm text-slate-900 px-2.5 py-0.5 rounded-md shadow-sm">
                    {item.impactMetric}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {item.useCase}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                <span>View workflow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
