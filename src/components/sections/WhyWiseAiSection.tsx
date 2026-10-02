import React from 'react'
import { siteContent } from '../../content/siteContent'
import { Award, ArrowRight } from 'lucide-react'
import {
  Soc2Seal,
  PipedaCanadaSeal,
  HipaaSeal,
  EncryptionSeal
} from '../common/BrandLogos'

export const WhyWiseAiSection: React.FC = () => {
  const { heading, subheading } = siteContent.whyWiseAi

  return (
    <section id="why-wise" className="py-24 bg-slate-50 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>Why Choose WISE AI</span>
          </div>

          <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 leading-[1.12]">
            {heading}
          </h2>

          <p className="text-base text-slate-500 leading-[1.7]">
            {subheading}
          </p>
        </div>

        {/* 5 Bespoke Engineering Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Custom Voice & Personality */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                  PILLAR 01
                </span>
                <span className="text-xs font-semibold text-slate-500">🇨🇦 Canadian Accents</span>
              </div>

              {/* Visual Soundwave & Tone Tuner */}
              <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 mb-5">
                <div className="flex items-center justify-between text-xs font-bold text-blue-900 mb-2">
                  <span>Acoustic Profile</span>
                  <span className="text-[10px] font-mono text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                    NATURAL SPEECH
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1 py-1.5">
                  {[10, 20, 32, 16, 26, 36, 22, 14, 28, 38, 18, 12].map((h, i) => (
                    <span
                      key={i}
                      className="w-1.5 bg-blue-600 rounded-full animate-soundwave"
                      style={{ height: `${h}px`, animationDelay: `${i * 80}ms` }}
                    />
                  ))}
                </div>
                <p className="text-[10px] text-center text-blue-700 font-medium mt-1">
                  Canadian English & Québécois French Bilingual
                </p>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Custom Voice & Personality
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                Tuned specifically to reflect your brand tone — whether clinical and reassuring, professional and authoritative, or energetic and warm.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Zero Robotic Pauses</span>
              <span className="text-blue-600 font-bold">100% Bespoke</span>
            </div>
          </div>

          {/* Card 2: Human-Level Response Speed */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                  PILLAR 02
                </span>
                <span className="text-xs font-semibold text-emerald-600 font-mono font-bold">&lt; 780ms Latency</span>
              </div>

              {/* Visual Speed Comparison Bar */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 mb-5 space-y-2">
                <div>
                  <div className="flex justify-between text-[10px] font-mono font-bold text-slate-500 mb-1">
                    <span>Traditional Legacy IVR</span>
                    <span>4,200ms</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-slate-400" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] font-mono font-bold text-blue-900 mb-1">
                    <span>WISE AI Streaming Node</span>
                    <span className="text-blue-600 font-bold">780ms (Real-time)</span>
                  </div>
                  <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
                    <div className="w-1/4 h-full bg-blue-600 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Human-Level Response Speed
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                Sub-second audio latency ensures callers never experience awkward delays or robotic conversational pauses. Callers speak freely without interruptions.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Streaming Speech-to-Speech</span>
              <span className="text-blue-600 font-bold">Natural Cadence</span>
            </div>
          </div>

          {/* Card 3: Secure Handling of Call Data (Authentic Seals!) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                  PILLAR 03
                </span>
                <span className="text-xs font-semibold text-emerald-700">Canadian Sovereign</span>
              </div>

              {/* Real Compliance Seals Stack */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 mb-5">
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded-xl bg-white border border-slate-200 flex items-center gap-2 shadow-2xs">
                    <PipedaCanadaSeal className="w-7 h-7 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold text-slate-900">PIPEDA</p>
                      <p className="text-[9px] text-slate-500">Canadian Law</p>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-white border border-slate-200 flex items-center gap-2 shadow-2xs">
                    <Soc2Seal className="w-7 h-7 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold text-slate-900">SOC 2</p>
                      <p className="text-[9px] text-slate-500">Type II Audit</p>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-white border border-slate-200 flex items-center gap-2 shadow-2xs">
                    <HipaaSeal className="w-7 h-7 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold text-slate-900">PHIPA/HIPAA</p>
                      <p className="text-[9px] text-slate-500">Health Privacy</p>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-white border border-slate-200 flex items-center gap-2 shadow-2xs">
                    <EncryptionSeal className="w-7 h-7 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold text-slate-900">TLS 1.3</p>
                      <p className="text-[9px] text-slate-500">AES-256 Vault</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Secure Handling of Call Data
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                Enterprise-grade encryption for all call transcripts, caller telemetry, and PII, complying with strict Canadian PIPEDA and provincial health standards.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Local AWS Montreal Residency</span>
              <span className="text-emerald-600 font-bold">100% Compliant</span>
            </div>
          </div>

          {/* Card 4: Smooth Handoff to a Human */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                  PILLAR 04
                </span>
                <span className="text-xs font-semibold text-slate-500">Telephony Protocol</span>
              </div>

              {/* Visual Warm Transfer Routing Diagram */}
              <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200 mb-5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">Trigger:</span>
                  <span className="font-mono text-[10px] font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                    EXPLICIT REQUEST OR VIP
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-blue-200 flex items-center justify-between text-xs text-slate-800">
                  <span className="font-bold text-slate-900">Warm SIP Transfer</span>
                  <span className="text-emerald-600 font-mono font-bold">&lt; 1.2s Handoff</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-tight">
                  Transfers caller directly with complete conversation summary screen pop on staff phone.
                </p>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Smooth Handoff to a Human
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                When callers request a human or an edge case occurs, the agent executes a warm live transfer with the conversation context intact.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Zero Context Loss</span>
              <span className="text-blue-600 font-bold">Fail-Safe Active</span>
            </div>
          </div>

          {/* Card 5: Ongoing Optimization & Reporting */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-200 md:col-span-2 lg:col-span-2">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                  PILLAR 05
                </span>
                <span className="text-xs font-semibold text-blue-600">Weekly Prompt Tuning</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="text-[10px] font-mono text-slate-400 font-bold uppercase">Intent Match</p>
                  <p className="text-xl font-mono font-extrabold text-blue-600 mt-1">99.4%</p>
                  <p className="text-[10px] text-slate-500">Autonomous resolution</p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="text-[10px] font-mono text-slate-400 font-bold uppercase">Hallucination</p>
                  <p className="text-xl font-mono font-extrabold text-emerald-600 mt-1">0.00%</p>
                  <p className="text-[10px] text-slate-500">Strict deterministic boundaries</p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="text-[10px] font-mono text-slate-400 font-bold uppercase">Engineering Review</p>
                  <p className="text-xl font-mono font-extrabold text-slate-800 mt-1">Weekly</p>
                  <p className="text-[10px] text-slate-500">Prompt & transcription audit</p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Ongoing Optimization & Engineering Support
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Continuous analysis of call recordings, conversation logs, and sentiment metrics to constantly refine accuracy and booking conversion. You are paired with a dedicated Canadian technical account engineer.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
              <span>Managed by Canadian AI Engineers</span>
              <a href="#book-demo" className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-1">
                <span>Request Custom Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

