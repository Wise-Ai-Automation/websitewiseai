import React, { useState } from 'react'
import { ArrowRight, ShieldCheck, CheckCircle2, Cpu } from 'lucide-react'
import {
  JaneAppLogo,
  GoogleCalendarLogo,
  HubSpotLogo,
  TwilioLogo
} from '../common/BrandLogos'

interface PhaseDetail {
  number: string
  title: string
  subtitle: string
  timeline: string
  focusBadge: string
  description: string
  deliverables: string[]
  technicalProof: {
    label: string
    value: string
    subtext: string
  }
}

const phases: PhaseDetail[] = [
  {
    number: '01',
    title: 'Discovery & Telephony Audit',
    subtitle: 'Mapping caller intents, edge cases, and call flows',
    timeline: 'Days 1 – 3',
    focusBadge: 'Architecture & Logic',
    description:
      'We audit your historical call recordings, frequently asked questions, qualification rules, and existing Canadian phone setup to engineer a bespoke conversational decision tree.',
    deliverables: [
      'Complete call logic & intent decision tree',
      'FAQ & objection handling knowledge base',
      'Telephony architecture & SIP trunk assessment',
      'Canadian carrier compatibility check (Bell / Rogers / Telus)'
    ],
    technicalProof: {
      label: 'Intent Classification Accuracy',
      value: '99.4%',
      subtext: 'Trained on your industry-specific terminology'
    }
  },
  {
    number: '02',
    title: 'Voice Persona & Script Engineering',
    subtitle: 'Designing natural speech cadence and conversational guardrails',
    timeline: 'Days 4 – 7',
    focusBadge: 'Acoustic Tuning',
    description:
      'We engineer a tailored neural voice with natural Canadian conversational cadence, zero robotic pauses, and strict deterministic guardrails to eliminate hallucinations.',
    deliverables: [
      'Custom neural voice model with Canadian inflection',
      'Deterministic anti-hallucination boundary rules',
      'Natural interruption handling & barge-in detection',
      'Seamless warm human transfer protocol'
    ],
    technicalProof: {
      label: 'Conversational Turn Latency',
      value: '< 780ms',
      subtext: 'Paced naturally like a veteran front-desk employee'
    }
  },
  {
    number: '03',
    title: 'Two-Way Telephony & CRM Integration',
    subtitle: 'Connecting live calendars, EHR/EMR, and dispatch systems',
    timeline: 'Days 8 – 11',
    focusBadge: 'System Sync',
    description:
      'We connect your agent directly into your phone lines (Twilio, Bell, Rogers, SIP PBX), calendar (Google, Outlook, Jane App), and CRM for real-time bi-directional data flow.',
    deliverables: [
      'Direct phone line / SIP trunk interconnection',
      'Two-way real-time calendar availability locking',
      'Automated CRM lead & transcript sync (HubSpot, Jane, GHL)',
      'Automated SMS confirmations with Canadian A2P 10DLC'
    ],
    technicalProof: {
      label: 'Double-Booking Conflict Rate',
      value: '0.00%',
      subtext: 'Atomic locking prevents overlapping appointments'
    }
  },
  {
    number: '04',
    title: 'Stress-Testing & Monitored Go-Live',
    subtitle: 'Rigorous scenario verification before routing production calls',
    timeline: 'Days 12 – 14',
    focusBadge: 'Production Release',
    description:
      'We execute 100+ simulated edge-case calls with noisy backgrounds, thick accents, and unexpected interruptions. Once certified, we launch with shadow monitoring and weekly prompt tuning.',
    deliverables: [
      '100+ scenario edge-case audio stress tests',
      'Fail-safe instant fallback routing to staff phones',
      'Live shadow call monitoring during week one',
      'Weekly prompt optimization and analytics reporting'
    ],
    technicalProof: {
      label: 'Edge Case Test Pass Rate',
      value: '100%',
      subtext: 'Certified under real-world caller noise profiles'
    }
  }
]

export const HowItWorksSection: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0)
  const currentPhase = phases[activePhaseIndex]

  return (
    <section id="how-it-works" className="py-24 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>Turnkey Engineering Roadmap</span>
          </div>

          <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 leading-[1.12]">
            How we build your custom voice agent
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We don’t hand you a generic self-serve template. Our Canadian engineering team audits your call operations, designs your conversational voice persona, integrates your phone system, and rigorously stress-tests every scenario before going live.
          </p>
        </div>

        {/* Interactive Sprint Phase Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {phases.map((phase, idx) => {
            const isActive = idx === activePhaseIndex
            return (
              <button
                key={phase.number}
                type="button"
                onClick={() => setActivePhaseIndex(idx)}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 relative overflow-hidden group ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25 ring-2 ring-blue-500/20'
                    : 'bg-slate-50 hover:bg-blue-50/50 text-slate-900 border-slate-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-extrabold px-2 py-0.5 rounded-md ${
                      isActive ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    PHASE {phase.number}
                  </span>
                  <span
                    className={`text-[11px] font-mono font-semibold ${
                      isActive ? 'text-blue-100' : 'text-slate-500'
                    }`}
                  >
                    {phase.timeline}
                  </span>
                </div>

                <p
                  className={`text-xs sm:text-sm font-bold line-clamp-1 ${
                    isActive ? 'text-white' : 'text-slate-900 group-hover:text-blue-600'
                  }`}
                >
                  {phase.title}
                </p>

                <p
                  className={`text-[11px] mt-1 font-medium truncate ${
                    isActive ? 'text-blue-100' : 'text-slate-500'
                  }`}
                >
                  {phase.focusBadge}
                </p>

                {/* Active Indicator Bar */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white" />
                )}
              </button>
            )
          })}
        </div>

        {/* Phase Deep-Dive Stage Canvas */}
        <div className="rounded-3xl bg-slate-50/90 border border-slate-200/90 p-6 sm:p-10 shadow-sm transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 7 Cols: Detailed Engineering Description & Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-blue-600">
                  Phase {currentPhase.number}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                  {currentPhase.timeline}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Turnkey Managed by WISE AI
                </span>
              </div>

              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                  {currentPhase.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-700 mt-1">
                  {currentPhase.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-500 leading-[1.7]">
                {currentPhase.description}
              </p>

              {/* Concrete Verified Deliverables */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Verified Engineering Deliverables:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentPhase.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5 text-emerald-600">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Assurance Badge */}
              <div className="pt-2 flex items-center gap-4 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5 text-blue-700 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Canadian Sovereign Deployment</span>
                </div>
                <span className="text-slate-300">•</span>
                <span>Zero Hallucination Guarantee</span>
              </div>

            </div>

            {/* Right 5 Cols: Visual Engineering Artifact Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-md relative overflow-hidden">
                
                {/* Visual Artifact Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                      Live Phase Telemetry
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md font-semibold border border-blue-200/60">
                    STAGE {currentPhase.number} OF 04
                  </span>
                </div>

                {/* Dynamic Visual Content depending on Active Phase */}
                {activePhaseIndex === 0 && (
                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="text-[10px] font-mono text-slate-400 font-bold uppercase mb-1">
                        Inbound Trunk Intercept
                      </p>
                      <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                        <span>Bell / Rogers / Twilio SIP</span>
                        <span className="text-emerald-600 font-mono">200 OK • CONNECTED</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                        NLP Intent Classification Triage
                      </p>
                      
                      <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-between text-xs">
                        <span className="font-semibold text-blue-900">Urgent Triage / Emergency</span>
                        <span className="font-mono text-blue-700 font-bold">99.8% match</span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-700">
                        <span className="font-medium">Appointment Booking / Reschedule</span>
                        <span className="font-mono text-slate-500 font-bold">99.4% match</span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-700">
                        <span className="font-medium">Hours, Directions & Practice FAQ</span>
                        <span className="font-mono text-slate-500 font-bold">99.1% match</span>
                      </div>
                    </div>
                  </div>
                )}

                {activePhaseIndex === 1 && (
                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-blue-900">Canadian Natural Acoustic Model</span>
                        <span className="text-[10px] font-mono text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200 font-bold">
                          LATENCY: 760ms
                        </span>
                      </div>

                      {/* Animated Soundwave Equalizer */}
                      <div className="flex items-center justify-center gap-1.5 py-3">
                        {[12, 24, 38, 20, 32, 42, 28, 18, 34, 46, 22, 16, 30, 40, 20].map((h, i) => (
                          <span
                            key={i}
                            className="w-1.5 bg-blue-600 rounded-full animate-soundwave"
                            style={{
                              height: `${h}px`,
                              animationDelay: `${i * 70}ms`
                            }}
                          />
                        ))}
                      </div>

                      <p className="text-[11px] text-center text-blue-700 font-medium">
                        Inflection: Calm • Empathetic • Professional
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-700">Anti-Hallucination Guardrail:</span>
                        <span className="font-bold text-emerald-700 font-mono">100% Deterministic</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-700">Barge-in / Interruption Sense:</span>
                        <span className="font-bold text-blue-700 font-mono">&lt; 150ms Instant Cut</span>
                      </div>
                    </div>
                  </div>
                )}

                {activePhaseIndex === 2 && (
                  <div className="space-y-4">
                    <p className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                      Two-Way Direct Connectors
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs shrink-0">
                          <JaneAppLogo className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-800">Jane App</p>
                          <p className="text-[10px] text-emerald-600 font-mono font-bold">LIVE SYNC</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs shrink-0">
                          <GoogleCalendarLogo className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-800">G-Calendar</p>
                          <p className="text-[10px] text-emerald-600 font-mono font-bold">2-WAY API</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs shrink-0">
                          <HubSpotLogo className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-800">HubSpot</p>
                          <p className="text-[10px] text-emerald-600 font-mono font-bold">CRM LOGGED</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs shrink-0">
                          <TwilioLogo className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-800">Twilio SIP</p>
                          <p className="text-[10px] text-emerald-600 font-mono font-bold">A2P 10DLC</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-center justify-between">
                      <span className="font-medium">Atomic Calendar Lock:</span>
                      <span className="font-mono font-bold text-blue-700">Zero Conflict Verified</span>
                    </div>
                  </div>
                )}

                {activePhaseIndex === 3 && (
                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-emerald-950">100+ Stress Scenarios Passed</span>
                        <span className="text-[10px] font-mono text-emerald-700 font-bold bg-white px-2 py-0.5 rounded border border-emerald-300">
                          CERTIFIED
                        </span>
                      </div>
                      <p className="text-[11px] text-emerald-800">
                        Tested with car background noise, multi-speaker crosstalk, and rapid speech.
                      </p>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                        <span className="text-slate-700">Bell, Rogers, Telus Telephony:</span>
                        <span className="font-bold text-emerald-600 font-mono">100% ROUTABLE</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                        <span className="text-slate-700">Warm Human Fail-Safe Transfer:</span>
                        <span className="font-bold text-blue-600 font-mono">&lt; 1.2s LATENCY</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                        <span className="text-slate-700">Canadian Privacy (PIPEDA):</span>
                        <span className="font-bold text-blue-700 font-mono">SOVEREIGN</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Metric Pill */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                      {currentPhase.technicalProof.label}
                    </p>
                    <p className="text-xl font-extrabold text-blue-600 font-mono mt-0.5">
                      {currentPhase.technicalProof.value}
                    </p>
                  </div>
                  <div className="text-right max-w-[170px]">
                    <p className="text-[11px] text-slate-500 font-medium leading-tight">
                      {currentPhase.technicalProof.subtext}
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Reassurance Footer Card with Gradient */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-500/15">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold text-blue-100">
              🇨🇦 100% Turnkey Canadian Deployment
            </span>
            <h4 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Ready to see how your calls would sound with Voice AI?
            </h4>
            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl leading-relaxed">
              We will prepare a customized prototype simulating your exact receptionist workflows, calendar availability, and caller questions in 7–14 days.
            </p>
          </div>
          <a
            href="#book-demo"
            className="shrink-0 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-blue-900 bg-white hover:bg-blue-50 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] flex items-center gap-2"
          >
            <span>Book Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  )
}

