import React from 'react'
import {
  AlertTriangle,
  TrendingDown,
  Sparkles,
  PhoneMissed,
  PhoneCall,
  Clock,
  DollarSign,
  ShieldCheck
} from 'lucide-react'

export const ProblemOutcomeSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-[11px] font-bold uppercase tracking-widest">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            <span>The High Cost of Inbound Phone Bottlenecks</span>
          </div>

          <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 leading-[1.12]">
            Every missed call is a missed customer.
          </h2>

          <p className="text-base text-slate-500 leading-[1.7] max-w-2xl mx-auto">
            When high-intent customers or patients call, they expect immediate answers. If your phone rings out or goes to voicemail, 85% hang up and call your competitor. Here is what changes when you deploy WISE AI.
          </p>
        </div>

        {/* Executive Caller Journey Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Traditional Way (The Voicemail Black Hole) */}
          <div className="rounded-3xl bg-white border border-rose-200 p-7 sm:p-9 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-rose-500" />

            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center font-bold shadow-2xs">
                    <PhoneMissed className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Traditional Phone Operations</h3>
                    <p className="text-xs text-rose-600 font-semibold">The Inbound Bottleneck</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-rose-50 text-[11px] font-mono font-bold text-rose-700 border border-rose-200">
                  REVENUE LEAK
                </span>
              </div>

              {/* Step-by-Step Breakdown */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Caller dials during peak hours or after 5 PM</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Front desk is busy with in-person patients or the clinic is closed. Phone rings 5+ times.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Voicemail tone picks up</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      "Please leave a message with your name and number, and we'll call you back..."
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-rose-50/60 border border-rose-200/80">
                  <span className="w-6 h-6 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <p className="text-xs font-bold text-rose-950">Caller hangs up immediately</p>
                    <p className="text-[11px] text-rose-800 mt-0.5 font-medium">
                      Over 67% refuse to leave a message. They open Google and book with the next competitor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Loss Summary */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-rose-900 bg-rose-50/80 p-4 rounded-xl border border-rose-200/70">
              <span className="flex items-center gap-1.5">
                <TrendingDown className="w-4 h-4 text-rose-600" />
                <span>Estimated Opportunity Cost:</span>
              </span>
              <span className="font-mono font-extrabold text-sm text-rose-700">$3,500 – $8,000+ / mo</span>
            </div>
          </div>

          {/* Card 2: With WISE AI Voice Agents */}
          <div className="rounded-3xl bg-white border-2 border-blue-500 p-7 sm:p-9 shadow-xl shadow-blue-500/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-600" />

            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center font-bold shadow-2xs">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">With WISE AI Voice Agents</h3>
                    <p className="text-xs text-blue-600 font-semibold">Autonomous Inbound Coverage 24/7</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-[11px] font-mono font-bold text-emerald-700 border border-emerald-200">
                  100% CAPTURED
                </span>
              </div>

              {/* Step-by-Step Breakdown */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-blue-50/50 border border-blue-100">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Answered on the 1st ring (&lt; 800ms)</p>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Zero hold queues. Greeted warmly in natural Canadian voice with custom clinic knowledge.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-blue-50/50 border border-blue-100">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Live triage, answers & calendar check</p>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Answers insurance/service questions, triages urgency, and negotiates available doctor time slots.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <p className="text-xs font-bold text-emerald-950">Appointment confirmed & locked in CRM</p>
                    <p className="text-[11px] text-emerald-800 mt-0.5 font-medium">
                      Writes directly to Jane App/HubSpot. Caller receives SMS confirmation in 30 seconds.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Gain Summary */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900 bg-blue-50/80 p-4 rounded-xl border border-blue-200">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Operational Efficiency Gain:</span>
              </span>
              <span className="font-mono font-extrabold text-sm text-blue-700">15+ Staff Hours Saved Weekly</span>
            </div>
          </div>

        </div>

        {/* 3 Clear Hard Financial Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mb-4">
              <DollarSign className="w-5 h-5" />
            </div>
            <p className="text-2xl font-extrabold text-slate-900 stat-number">$4,800 / mo</p>
            <p className="text-xs font-bold text-slate-900 mt-1">Average Revenue Lost</p>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Calculated from unreturned after-hours inquiries, abandoned hold queues, and missed weekend appointment requests.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <p className="text-2xl font-extrabold text-slate-900 stat-number">67% Abandon Rate</p>
            <p className="text-xs font-bold text-slate-900 mt-1">Refuse to Leave Voicemail</p>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Callers looking for immediate service hang up within 5 seconds of hearing an answering machine tone.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="text-2xl font-extrabold text-blue-600 stat-number">15+ Hours Saved</p>
            <p className="text-xs font-bold text-slate-900 mt-1">Front Desk Time Recovered</p>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Your staff ceases being overwhelmed by repetitive inquiries about hours, directions, and basic pricing.
            </p>
          </div>
        </div>

        {/* 4 Guaranteed Operational KPI Benchmarks Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="text-center p-2">
            <p className="stat-number text-2xl font-extrabold text-blue-600">100%</p>
            <p className="text-xs font-bold text-slate-900 mt-0.5">First-Ring Pick-Up</p>
            <p className="text-[11px] text-slate-500">Zero busy signals or hold queues</p>
          </div>

          <div className="text-center p-2 border-l border-slate-200">
            <p className="stat-number text-2xl font-extrabold text-blue-600">&lt; 800ms</p>
            <p className="text-xs font-bold text-slate-900 mt-0.5">Conversational Latency</p>
            <p className="text-[11px] text-slate-500">Sub-second natural cadence</p>
          </div>

          <div className="text-center p-2 border-l border-slate-200">
            <p className="stat-number text-2xl font-extrabold text-blue-600">24/7/365</p>
            <p className="text-xs font-bold text-slate-900 mt-0.5">After-Hours Active</p>
            <p className="text-[11px] text-slate-500">Nights, weekends & statutory holidays</p>
          </div>

          <div className="text-center p-2 border-l border-slate-200">
            <p className="stat-number text-2xl font-extrabold text-emerald-600">PIPEDA</p>
            <p className="text-xs font-bold text-slate-900 mt-0.5">Canadian Sovereign</p>
            <p className="text-[11px] text-slate-500">Data stays strictly on Canadian soil</p>
          </div>
        </div>

      </div>
    </section>
  )
}

