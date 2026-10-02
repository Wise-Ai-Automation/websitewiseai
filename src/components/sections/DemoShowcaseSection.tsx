import React, { useState } from 'react'
import { siteContent } from '../../content/siteContent'
import {
  Calendar,
  Home,
  Wrench,
  ArrowRight,
  Radio,
  PhoneCall,
  Database,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  PhoneOff,
  Grid,
  Wifi,
  UserCheck
} from 'lucide-react'
import {
  JaneAppLogo,
  GoogleCalendarLogo,
  TwilioLogo
} from '../common/BrandLogos'

export const DemoShowcaseSection: React.FC = () => {
  const scenarios = siteContent.demoScenarios
  const [activeScenarioId, setActiveScenarioId] = useState(scenarios[0].id)
  const [isMuted, setIsMuted] = useState(false)
  const [isSpeakerOn, setIsSpeakerOn] = useState(true)

  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0]

  const getScenarioIcon = (id: string) => {
    switch (id) {
      case 'clinic':
        return Calendar
      case 'realestate':
        return Home
      case 'support':
        return Wrench
      default:
        return Radio
    }
  }

  return (
    <section id="demo-showcase" className="py-24 bg-slate-50/70 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
            <Radio className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span>Interactive Smartphone Simulator</span>
          </div>

          <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 leading-[1.12]">
            See how WISE AI handles live calls
          </h2>

          <p className="text-base text-slate-500 leading-[1.7]">
            Select an industry scenario below to simulate how our Canadian voice agents answer on the first ring, maintain human cadence, and execute instant CRM bookings.
          </p>
        </div>

        {/* 3 Industry Scenario Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {scenarios.map((scenario) => {
            const Icon = getScenarioIcon(scenario.id)
            const isActive = scenario.id === activeScenarioId

            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => setActiveScenarioId(scenario.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 ring-2 ring-blue-500/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 shadow-2xs'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                <span>{scenario.title}</span>
              </button>
            )
          })}
        </div>

        {/* Main Showcase Layout: Realistic Smartphone Mockup on Left + Telemetry Console on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (7 cols): Flagship Smartphone Chassis Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[420px] rounded-[52px] bg-slate-950 p-3.5 shadow-2xl shadow-blue-900/25 ring-1 ring-slate-800 border-[7px] border-slate-900 relative">
              
              {/* Glossy Screen Edge Highlight */}
              <div className="absolute inset-x-12 top-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />

              {/* Inner Smartphone Screen */}
              <div className="rounded-[40px] bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 text-white p-5 flex flex-col justify-between min-h-[640px] overflow-hidden relative">
                
                {/* Dynamic Island & Status Bar */}
                <div>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-300 px-2 pt-0.5 mb-3">
                    <span>9:41</span>
                    
                    {/* Dynamic Island Pill with Active Call Animation */}
                    <div className="px-3 py-1 bg-black rounded-full flex items-center gap-2 border border-slate-800/80 shadow-inner">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">
                        {activeScenario.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Wifi className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-mono">5G</span>
                      <div className="w-5 h-2.5 border border-slate-400 rounded-xs p-0.5 flex items-center">
                        <div className="w-full h-full bg-emerald-400 rounded-2xs" />
                      </div>
                    </div>
                  </div>

                  {/* Active In-Call Header */}
                  <div className="text-center pt-1 pb-3">
                    {/* Concentric Pulsing Sound Rings Avatar */}
                    <div className="relative w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse-ring" />
                      <div className="absolute inset-2 rounded-full bg-blue-500/30 animate-pulse-ring" style={{ animationDelay: '0.8s' }} />
                      <div className="relative w-12 h-12 rounded-full bg-blue-600 border-2 border-white/80 flex items-center justify-center shadow-lg shadow-blue-500/50">
                        <PhoneCall className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {activeScenario.title}
                    </h4>
                    <p className="text-[11px] text-blue-300 font-medium">
                      WISE AI Assistant • Inbound Canadian Trunk
                    </p>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mt-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>HD VOICE • LOW LATENCY (&lt;800MS)</span>
                    </div>
                  </div>

                  {/* Dancing Soundwave Equalizer */}
                  <div className="flex items-center justify-center gap-1 py-1.5 px-4 rounded-xl bg-white/5 border border-white/10 mb-3">
                    <span className="text-[9px] font-mono uppercase text-blue-300 mr-2 font-bold">
                      Voice Signal:
                    </span>
                    {[10, 18, 24, 14, 22, 28, 16, 20, 12, 26, 14, 20, 10].map((h, i) => (
                      <span
                        key={i}
                        className="w-1 bg-blue-400 rounded-full animate-soundwave"
                        style={{
                          height: `${h}px`,
                          animationDelay: `${i * 85}ms`
                        }}
                      />
                    ))}
                  </div>

                  {/* Synchronized Call Dialogue Bubbles */}
                  <div className="space-y-2.5 pt-1 text-left max-h-[260px] overflow-y-auto pr-1">
                    {activeScenario.dialogue.map((turn, idx) => {
                      const isAgent = turn.speaker === 'agent'
                      return (
                        <div
                          key={idx}
                          className={`flex ${isAgent ? 'justify-start' : 'justify-end'}`}
                        >
                          <div
                            className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-[11px] leading-relaxed shadow-xs ${
                              isAgent
                                ? 'bg-slate-800/95 border border-slate-700/80 text-slate-100 rounded-tl-xs'
                                : 'bg-blue-600 text-white rounded-tr-xs shadow-md shadow-blue-600/30'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <span className={`font-bold text-[10px] ${isAgent ? 'text-blue-400' : 'text-blue-100'}`}>
                                {isAgent ? 'WISE AI Voice' : activeScenario.callerName}
                              </span>
                              <span className={`text-[9px] font-mono ${isAgent ? 'text-slate-400' : 'text-blue-200'}`}>
                                {turn.timestamp}
                              </span>
                            </div>
                            <p>{turn.text}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Bottom Section: Dynamic Slide-in Action Toast & In-Call Control Dock */}
                <div className="space-y-3 pt-3">
                  
                  {/* Dynamic Slide-in Action Toast */}
                  <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2.5 text-left shadow-lg">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/40 flex items-center justify-center shrink-0">
                      {activeScenario.id === 'clinic' ? (
                        <JaneAppLogo className="w-4 h-4" />
                      ) : activeScenario.id === 'realestate' ? (
                        <GoogleCalendarLogo className="w-4 h-4" />
                      ) : (
                        <TwilioLogo className="w-4 h-4" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-white truncate">
                          {activeScenario.outcome}
                        </span>
                        <span className="text-[9px] font-mono text-emerald-400 font-bold">
                          VERIFIED
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-300 truncate">
                        Logged to CRM • SMS Confirmation Dispatched
                      </p>
                    </div>
                  </div>

                  {/* Interactive Phone In-Call Controls Dock */}
                  <div className="grid grid-cols-3 gap-2 pt-1 pb-1">
                    <button
                      type="button"
                      onClick={() => setIsMuted(!isMuted)}
                      className="flex flex-col items-center gap-1 text-[9px] text-slate-400 hover:text-white transition-colors"
                      aria-label="Toggle mute"
                    >
                      <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                        isMuted ? 'bg-rose-600 border-rose-500 text-white' : 'bg-slate-800/80 border-slate-700 text-slate-300'
                      }`}>
                        {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      </div>
                      <span>{isMuted ? 'Muted' : 'Mute'}</span>
                    </button>

                    <button
                      type="button"
                      className="flex flex-col items-center gap-1 text-[9px] text-slate-400 hover:text-white"
                      aria-label="Keypad"
                    >
                      <div className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300">
                        <Grid className="w-4 h-4" />
                      </div>
                      <span>Keypad</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsSpeakerOn(!isSpeakerOn)}
                      className="flex flex-col items-center gap-1 text-[9px] text-slate-400 hover:text-white transition-colors"
                      aria-label="Toggle speaker"
                    >
                      <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                        isSpeakerOn ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-800/80 border-slate-700 text-slate-300'
                      }`}>
                        {isSpeakerOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                      </div>
                      <span>Speaker</span>
                    </button>

                    <button
                      type="button"
                      className="flex flex-col items-center gap-1 text-[9px] text-blue-300"
                      aria-label="Warm Transfer"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-400/50 flex items-center justify-center text-blue-300">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <span>Transfer</span>
                    </button>

                    <button
                      type="button"
                      className="flex flex-col items-center gap-1 text-[9px] text-slate-400"
                      aria-label="Hold"
                    >
                      <div className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300">
                        <Radio className="w-4 h-4" />
                      </div>
                      <span>Hold</span>
                    </button>

                    <button
                      type="button"
                      className="flex flex-col items-center gap-1 text-[9px] text-rose-400"
                      aria-label="End call"
                    >
                      <div className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center text-white shadow-md shadow-rose-600/50">
                        <PhoneOff className="w-4 h-4" />
                      </div>
                      <span>End</span>
                    </button>
                  </div>

                  {/* Home Bar Indicator */}
                  <div className="w-28 h-1 bg-white/40 rounded-full mx-auto" />

                </div>

              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Enterprise Telemetry & Automated Systems */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Actions Triggered Card */}
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <h4 className="text-sm font-bold text-slate-900">
                  Live Automations Triggered During This Call
                </h4>
              </div>

              <div className="space-y-3.5">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Instant CRM & Telemetry Log</p>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                      Structured contact data, call recording, audio transcription, and qualification score synced to HubSpot / Jane App.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Live Calendar Conflict Lock</p>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                      Two-way calendar check locks the requested time slot in real time with zero risk of double booking.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Canadian SMS Confirmation</p>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                      Caller automatically receives a text message with date, directions link, and digital intake portal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Pill */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Encrypted with TLS 1.3 • Canadian PIPEDA Sovereign</span>
              </div>
            </div>

            {/* Telephony Performance Telemetry Card */}
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Carrier & Latency Benchmarks
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Latency</p>
                  <p className="text-lg font-mono font-extrabold text-blue-600 mt-0.5">&lt; 780ms</p>
                  <p className="text-[10px] text-slate-500">Human-paced audio</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Pick-Up</p>
                  <p className="text-lg font-mono font-extrabold text-emerald-600 mt-0.5">1st Ring</p>
                  <p className="text-[10px] text-slate-500">Zero hold wait</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                <span>Canadian Telephony Trunk:</span>
                <span className="font-mono font-semibold text-slate-800">Bell / Rogers Compatible</span>
              </div>
            </div>

            {/* Quick CTA Card */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white p-6 shadow-xl shadow-blue-500/20">
              <h4 className="text-base font-bold text-white mb-2">
                Need this voice agent in your business?
              </h4>
              <p className="text-xs text-blue-100 leading-relaxed mb-5">
                We engineer and deploy custom voice agents tailored to your business rules in 7 to 14 days.
              </p>
              <a
                href="#book-demo"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-blue-900 bg-white hover:bg-blue-50 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>Book Free Working Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

