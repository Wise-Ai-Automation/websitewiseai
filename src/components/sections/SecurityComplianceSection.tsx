import React from 'react'
import { siteContent } from '../../content/siteContent'
import { Server, CheckCircle2, Shield } from 'lucide-react'
import { PipedaCanadaSeal, Soc2Seal, HipaaSeal, EncryptionSeal } from '../common/BrandLogos'

export const SecurityComplianceSection: React.FC = () => {
  const { complianceBadges } = siteContent

  const renderRealSeal = (id: string) => {
    switch (id) {
      case 'pipeda':
        return <PipedaCanadaSeal className="w-14 h-14 drop-shadow-xs" />
      case 'soc2':
        return <Soc2Seal className="w-14 h-14 drop-shadow-xs" />
      case 'hipaa':
        return <HipaaSeal className="w-14 h-14 drop-shadow-xs" />
      case 'encryption':
        return <EncryptionSeal className="w-14 h-14 drop-shadow-xs" />
      default:
        return <Soc2Seal className="w-14 h-14" />
    }
  }

  return (
    <section id="security-compliance" className="py-24 bg-slate-50/70 border-t border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
            <Shield className="w-4 h-4 text-blue-600" />
            <span>Canadian & International Enterprise Standards</span>
          </div>

          <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 leading-[1.12]">
            Enterprise Security & Compliance
          </h2>

          <p className="text-base text-slate-500 leading-[1.7]">
            Your callers' voice conversations, patient records, and CRM credentials are safeguarded with authentic bank-grade security protocols, official Canadian PIPEDA standards, and healthcare privacy controls.
          </p>
        </div>

        {/* 4 Professional Compliance Cards with Authentic Branded Seals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {complianceBadges.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-blue-400 transition-all duration-200 group"
            >
              <div>
                {/* Authentic Official Seal */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-1 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform duration-200">
                    {renderRealSeal(item.id)}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 border border-slate-200 rounded px-2 py-0.5">
                    Official
                  </span>
                </div>

                {/* Badge & Subtitle */}
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 block mb-1">
                  {item.subtitle}
                </span>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Standard</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 font-normal">
                  2026 Audit
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Canadian Data Residency Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0 text-2xl">
              🇨🇦
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span>Canadian Data Sovereignty Guarantee</span>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  Ontario, CA
                </span>
              </h4>
              <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                We offer dedicated Canadian cloud hosting in AWS Montreal and Azure Canada Central. Your phone recordings, call transcripts, and customer PII never cross international borders without your explicit authorization.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 text-xs font-semibold text-slate-700 bg-slate-100 px-4 py-2.5 rounded-xl border border-slate-200">
            <Server className="w-4 h-4 text-blue-600" />
            <span>Canadian Cloud Telephony</span>
          </div>
        </div>

      </div>
    </section>
  )
}
