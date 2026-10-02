import React, { useState } from 'react'
import { siteContent } from '../../content/siteContent'
import {
  PhoneCall,
  ArrowRight,
  Radio,
  Sparkles,
  PhoneOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Grid,
  UserCheck,
  Plus,
  Wifi
} from 'lucide-react'
import {
  GoogleCalendarLogo,
  JaneAppLogo,
  HubSpotLogo,
  TwilioLogo
} from '../common/BrandLogos'

export const HeroSection: React.FC = () => {
  const { subheadline, primaryCta, secondaryCta } = siteContent.hero
  const [isMuted, setIsMuted] = useState(false)
  const [isSpeakerOn, setIsSpeakerOn] = useState(true)

  const scrollToDemo = (e: React.MouseEvent) => {
    e.preventDefault()
    const demoCard = document.getElementById('demo-showcase')
    if (demoCard) {
      demoCard.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clear, Confident, Human Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Origin & Category Tag */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-800 text-[11px] font-bold border border-blue-200 tracking-wide uppercase">
                <span>🇨🇦 Ontario, Canada</span>
                <span className="text-blue-300">•</span>
                <span>Custom Voice Telephony</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200 tracking-wide uppercase">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                <span>Zero Hallucinations</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-[2.6rem] sm:text-5xl lg:text-[3.6rem] font-extrabold text-slate-900 leading-[1.07]">
              Voice agents that sound human —{' '}
              <span className="gradient-text">and work like your best employee.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-[1.05rem] sm:text-lg text-slate-500 font-normal leading-[1.7] max-w-2xl mx-auto lg:mx-0">
              {subheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#book-demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-150 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] tracking-wide"
              >
                <span>{primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={scrollToDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-blue-50/60 hover:text-blue-700 border border-slate-200 hover:border-blue-300 transition-all duration-150 shadow-sm tracking-wide"
              >
                <Radio className="w-4 h-4 text-blue-600" />
                <span>{secondaryCta}</span>
              </button>
            </div>

            {/* Real Branded Trust Symbols (Replacing Generic AI Icons) */}
            <div className="pt-6 border-t border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                
                {/* 1. Real Canadian Fast-Track Guarantee */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 transition-colors shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center shrink-0 text-base">
                    🇨🇦
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-400 font-semibold uppercase tracking-widest mb-0.5">
                      Turnaround
                    </p>
                    <p className="text-xs font-bold text-slate-900 font-heading">
                      Live in 7–14 Days
                    </p>
                  </div>
                </div>

                {/* 2. Real Sub-800ms Neural Audio Equalizer */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 transition-colors shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                    {/* Live Equalizer Animation */}
                    <div className="flex items-center gap-0.5 h-4">
                      <span className="w-1 bg-blue-600 rounded-full animate-soundwave" style={{ animationDelay: '0ms' }} />
                      <span className="w-1 bg-blue-500 rounded-full animate-soundwave" style={{ animationDelay: '200ms' }} />
                      <span className="w-1 bg-sky-400 rounded-full animate-soundwave" style={{ animationDelay: '400ms' }} />
                      <span className="w-1 bg-blue-600 rounded-full animate-soundwave" style={{ animationDelay: '100ms' }} />
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-400 font-semibold uppercase tracking-widest mb-0.5">
                      Conversational
                    </p>
                    <p className="text-xs font-bold text-slate-900 font-heading">
                      &lt; 800ms Latency
                    </p>
                  </div>
                </div>

                {/* 3. Real Brand Logo Overlapping Stack */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 transition-colors shadow-sm">
                  <div className="flex -space-x-2 shrink-0">
                    <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-xs z-30">
                      <JaneAppLogo className="w-4 h-4" />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-xs z-20">
                      <GoogleCalendarLogo className="w-4 h-4" />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-xs z-10">
                      <HubSpotLogo className="w-4 h-4" />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                      <TwilioLogo className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono text-slate-400 font-semibold uppercase tracking-widest mb-0.5">
                      Integration
                    </p>
                    <p className="text-xs font-bold text-slate-900 font-heading truncate">
                      CRM & Calendar
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Realistic Animated Smartphone Mockup */}
          <div className="lg:col-span-5 relative" id="live-call-preview">
            
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 via-sky-400/10 to-indigo-500/20 rounded-full blur-2xl -z-10" />

            {/* Floating Trust Pills */}
            <div className="hidden sm:flex items-center gap-1.5 absolute -top-3 -right-2 z-30 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-blue-200 shadow-md text-[11px] font-bold text-blue-900 animate-float-slow">
              <span>🇨🇦</span>
              <span>PIPEDA & PHIPA Verified</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 absolute -bottom-3 -left-3 z-30 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 shadow-md text-[11px] font-bold text-slate-800 animate-float-slow" style={{ animationDelay: '2s' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Direct Canadian SIP Trunk</span>
            </div>

            {/* Smartphone Outer Chassis */}
            <div className="w-full max-w-[340px] sm:max-w-[360px] mx-auto rounded-[48px] bg-gradient-to-b from-slate-800 to-slate-950 p-3.5 shadow-2xl shadow-blue-900/40 ring-2 ring-slate-700/50 border-[5px] border-slate-900 relative">
              
              {/* Phone Inner Screen */}
              <div className="rounded-[36px] bg-gradient-to-b from-[#0d1117] via-[#0f1923] to-[#0a1628] text-white relative overflow-hidden flex flex-col justify-between min-h-[580px]">
                
                {/* Status Bar */}
                <div className="flex items-center justify-between px-5 pt-4 pb-1">
                  <span className="text-[12px] font-bold text-white/90">9:41</span>
                  <div className="w-[100px] h-6 bg-black rounded-full flex items-center justify-between px-3">
                    <span className="w-2 h-2 rounded-full bg-slate-700" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Wifi className="w-3.5 h-3.5 text-white/80" />
                    <span className="text-[11px] font-bold text-white/80">5G</span>
                  </div>
                </div>

                {/* Active In-Call Header */}
                <div className="text-center px-4 pt-3 pb-2">
                  {/* Pulsing avatar */}
                  <div className="relative w-[60px] h-[60px] mx-auto mb-3 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-blue-500/15 animate-pulse-ring" />
                    <div className="absolute inset-[6px] rounded-full bg-blue-500/20 animate-pulse-ring" style={{ animationDelay: '0.8s' }} />
                    <div className="relative w-[44px] h-[44px] rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-white/30 flex items-center justify-center shadow-xl shadow-blue-600/40">
                      <PhoneCall className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <p className="text-[13px] font-bold text-white mb-0.5 leading-tight">
                    Lakeview Health Clinic
                  </p>
                  <p className="text-[11px] text-blue-300 font-medium">
                    AI Assistant Maya • Inbound Call
                  </p>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mt-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>CONNECTED • 00:42</span>
                  </div>
                </div>

                {/* Live Waveform */}
                <div className="flex items-center justify-center gap-1 mx-4 py-2 px-3 rounded-xl bg-white/5 border border-white/10 mb-3">
                  <span className="text-[10px] font-bold uppercase text-blue-300/80 mr-1.5 tracking-wider">Live</span>
                  {[8, 14, 20, 12, 18, 24, 16, 22, 14, 20, 10, 16, 22, 12, 8].map((h, i) => (
                    <span
                      key={i}
                      className="w-[3px] bg-blue-400 rounded-full animate-soundwave"
                      style={{ height: `${h}px`, animationDelay: `${i * 90}ms` }}
                    />
                  ))}
                </div>

                {/* Conversation Bubbles */}
                <div className="space-y-2.5 px-4 text-left">
                  {/* Agent */}
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl rounded-tl-sm px-3.5 py-2.5 bg-[#1e2d45] border border-blue-900/60 shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wide">Maya · WISE AI</span>
                        <span className="text-[10px] text-slate-500 font-mono ml-auto">00:03</span>
                      </div>
                      <p className="text-[12px] text-slate-200 leading-[1.55] font-medium">
                        Thank you for calling Lakeview Clinic. How can I help with your booking?
                      </p>
                    </div>
                  </div>

                  {/* Caller */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-sm px-3.5 py-2.5 bg-blue-600 shadow-lg shadow-blue-700/30">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-blue-100 uppercase tracking-wide">Marcus V.</span>
                        <span className="text-[10px] text-blue-200/70 font-mono ml-auto">00:14</span>
                      </div>
                      <p className="text-[12px] text-white leading-[1.55] font-medium">
                        I need to see Dr. Miller for knee pain — Thursday afternoon if possible.
                      </p>
                    </div>
                  </div>

                  {/* Agent confirmation */}
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl rounded-tl-sm px-3.5 py-2.5 bg-[#1e2d45] border border-blue-900/60 shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wide">Maya · WISE AI</span>
                        <span className="text-[10px] text-slate-500 font-mono ml-auto">00:26</span>
                      </div>
                      <p className="text-[12px] text-slate-200 leading-[1.55] font-medium">
                        Dr. Miller has Thu 2:30 PM free. Booking it now and logging to Jane App.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Dynamic Notification + In-Call Dock */}
                <div className="space-y-3 pt-3">
                  
                  {/* EMR Sync Banner */}
                  <div className="mx-4 mb-2 p-3 rounded-xl bg-white/8 backdrop-blur border border-white/15 flex items-center gap-3 text-left">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center shrink-0">
                      <JaneAppLogo className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[11px] font-bold text-white">Jane App EMR Synced</span>
                        <span className="text-[10px] font-bold text-emerald-400 font-mono">✓ LOCKED</span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-medium">
                        Dr. Sarah Miller · Thu 2:30 PM · SMS Sent
                      </p>
                    </div>
                  </div>

                  {/* In-Call Controls */}
                  <div className="grid grid-cols-3 gap-3 px-4 pb-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setIsMuted(!isMuted)}
                      className="flex flex-col items-center gap-1.5"
                      aria-label="Toggle mute"
                    >
                      <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isMuted ? 'bg-rose-600 border-rose-400 text-white' : 'bg-white/10 border-white/20 text-white/80'
                      }`}>
                        {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                      </div>
                      <span className="text-[10px] font-semibold text-white/60">{isMuted ? 'Muted' : 'Mute'}</span>
                    </button>

                    <button type="button" className="flex flex-col items-center gap-1.5" aria-label="Keypad">
                      <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-white/80">
                        <Grid className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold text-white/60">Keypad</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsSpeakerOn(!isSpeakerOn)}
                      className="flex flex-col items-center gap-1.5"
                      aria-label="Toggle speaker"
                    >
                      <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isSpeakerOn ? 'bg-blue-600 border-blue-400 text-white' : 'bg-white/10 border-white/20 text-white/80'
                      }`}>
                        {isSpeakerOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                      </div>
                      <span className="text-[10px] font-semibold text-white/60">Speaker</span>
                    </button>

                    <button type="button" className="flex flex-col items-center gap-1.5" aria-label="Add call">
                      <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-white/80">
                        <Plus className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold text-white/60">Add</span>
                    </button>

                    <button type="button" className="flex flex-col items-center gap-1.5" aria-label="Warm Transfer">
                      <div className="w-12 h-12 rounded-full bg-blue-600/30 border-2 border-blue-400/40 flex items-center justify-center text-blue-300">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold text-blue-300/80">Transfer</span>
                    </button>

                    <button type="button" className="flex flex-col items-center gap-1.5" aria-label="End call">
                      <div className="w-12 h-12 rounded-full bg-rose-600 border-2 border-rose-400/50 flex items-center justify-center text-white shadow-lg shadow-rose-600/40">
                        <PhoneOff className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold text-rose-400/80">End</span>
                    </button>
                  </div>

                  {/* Home Bar */}
                  <div className="w-28 h-[3px] bg-white/30 rounded-full mx-auto mb-2" />

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
