import React from 'react'
import { siteContent, IntegrationCategory } from '../../content/siteContent'
import { Cpu, ArrowUpRight } from 'lucide-react'
import { ToolLogo } from '../common/BrandLogos'

export const IntegrationsSection: React.FC = () => {
  const { heading, subheading, categories } = siteContent.integrations

  return (
    <section id="integrations" className="py-24 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>Ecosystem Connectivity</span>
          </div>

          <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 leading-[1.12]">
            {heading}
          </h2>

          <p className="text-base text-slate-500 leading-[1.7]">
            {subheading}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat: IntegrationCategory, idx: number) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-50/80 border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {cat.category}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500 font-medium px-2 py-0.5 rounded-md bg-white border border-slate-200">
                    {cat.tools.length} Verified Tools
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  {cat.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 hover:border-blue-400 hover:shadow-xs transition-all duration-150"
                    >
                      {/* Real Brand Logo */}
                      <ToolLogo name={tool.name} className="w-4 h-4 shrink-0" />
                      <span className="font-semibold text-slate-800">{tool.name}</span>
                      {tool.tag && (
                        <span className="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                          {tool.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>Bidirectional sync • Canadian SIP supported</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Custom API integration callout */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500">
            Don't see your practice management software or PBX? We build custom REST API & webhook connectors for enterprise deployments.
          </p>
        </div>

      </div>
    </section>
  )
}
