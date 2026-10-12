import React, { useState, useRef } from 'react'
import { siteContent } from '../../content/siteContent'
import {
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
  Wifi,
  Play,
  Pause
} from 'lucide-react'
import {
  GoogleCalendarLogo,
  JaneAppLogo,
  HubSpotLogo,
  TwilioLogo
} from '../common/BrandLogos'

export const HeroSection: React.FC = () => {
  const { subheadline, primaryCta, secondaryCta } = siteContent.hero
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(72)
  const [isMuted, setIsMuted] = useState(false)
  const [isSpeakerOn, setIsSpeakerOn] = useState(true)

  const togglePlayAudio = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch((err) => {
        console.warn('Audio playback error:', err)
      })
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current && audioRef.current.duration) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleAudioEnded = () => {
    setIsPlaying(false)
    setCurrentTime(0)
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleSpeaker = () => {
    if (audioRef.current) {
      const nextSpeaker = !isSpeakerOn
      setIsSpeakerOn(nextSpeaker)
      audioRef.current.volume = nextSpeaker ? 1.0 : 0.0
    }
  }

  const endCall = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setIsPlaying(false)
    setCurrentTime(0)
  }

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
    const s = Math.floor(secs % 60)
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  const scrollToDemo = (e: React.MouseEvent) => {
    e.preventDefault()
    const demoCard = document.getElementById('demo-showcase')
    if (demoCard) {
      demoCard.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative isolate pt-28 pb-16 md:pt-36 md:pb-24 bg-white border-b border-slate-200 overflow-hidden">
      {/* Subtle premium background depth: faint grid + soft brand glow, not a decorative blob */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: 'linear-gradient(to right, #CBD5E1 1px, transparent 1px), linear-gradient(to bottom, #CBD5E1 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          opacity: 0.55,
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 0%, transparent 0%, white 75%)',
        }}
      />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-500/[0.08] rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clear, Confident, Human Copy */}
          <div className="lg:col-span-7 min-w-0 space-y-6 text-center lg:text-left">

            {/* Origin & Category Tag */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex flex-wrap items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-50 text-brand-800 text-[11px] font-bold border border-brand-200 tracking-wide uppercase">
                <span>🇨🇦 Ontario, Canada</span>
                <span className="text-brand-300">•</span>
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 transition-all duration-150 shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] tracking-wide"
              >
                <span>{primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={scrollToDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-brand-50/60 hover:text-brand-700 border border-slate-200 hover:border-brand-300 transition-all duration-150 shadow-sm tracking-wide cursor-pointer"
              >
                <Radio className="w-4 h-4 text-brand-600" />
                <span>{secondaryCta}</span>
              </button>
            </div>

            {/* Real Branded Trust Symbols (Replacing Generic AI Icons) */}
            <div className="pt-6 border-t border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                
                {/* 1. Real Canadian Fast-Track Guarantee */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-brand-300 transition-colors shadow-sm">
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
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-brand-300 transition-colors shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-brand-50 border border-brand-200 flex items-center justify-center shrink-0">
                    {/* Live Equalizer Animation */}
                    <div className="flex items-center gap-0.5 h-4">
                      <span className="w-1 bg-brand-600 rounded-full animate-soundwave" style={{ animationDelay: '0ms' }} />
                      <span className="w-1 bg-brand-500 rounded-full animate-soundwave" style={{ animationDelay: '200ms' }} />
                      <span className="w-1 bg-sky-400 rounded-full animate-soundwave" style={{ animationDelay: '400ms' }} />
                      <span className="w-1 bg-brand-600 rounded-full animate-soundwave" style={{ animationDelay: '100ms' }} />
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
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-brand-300 transition-colors shadow-sm">
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

          {/* Right Column: Realistic Animated Smartphone Mockup with Real Playable Audio */}
          <div className="lg:col-span-5 min-w-0 relative" id="live-call-preview">
            
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-signal-500/20 via-sky-400/10 to-indigo-500/20 rounded-full blur-2xl -z-10" />

            {/* Floating Trust Pills */}
            <div className="hidden sm:flex items-center gap-1.5 absolute -top-3 -right-2 z-30 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-brand-200 shadow-md text-[11px] font-bold text-brand-900 animate-float-slow">
              <span>🇨🇦</span>
              <span>PIPEDA & PHIPA Verified</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 absolute -bottom-3 -left-3 z-30 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 shadow-md text-[11px] font-bold text-slate-800 animate-float-slow" style={{ animationDelay: '2s' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Direct Canadian SIP Trunk</span>
            </div>

            {/* Smartphone Outer Chassis */}
            <div className="w-full max-w-[340px] sm:max-w-[360px] mx-auto rounded-[48px] bg-gradient-to-b from-slate-800 to-slate-950 p-3.5 shadow-2xl shadow-brand-900/40 ring-2 ring-slate-700/50 border-[5px] border-slate-900 relative">
              
              {/* Hidden Real HTML5 Audio Element */}
              <audio
                ref={audioRef}
                src="https://storage.googleapis.com/synthflow-website-assets/Dental%20%28Healthcare%29.mp3"
                preload="metadata"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleAudioEnded}
              />

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

                {/* Active In-Call Header with Real Audio Playback Trigger */}
                <div className="text-center px-4 pt-3 pb-2">
                  {/* Pulsing avatar / clickable play */}
                  <button
                    type="button"
                    onClick={togglePlayAudio}
                    className="relative w-[64px] h-[64px] mx-auto mb-2 flex items-center justify-center group cursor-pointer focus:outline-none"
                    aria-label={isPlaying ? 'Pause dental call audio' : 'Play dental call audio'}
                  >
                    <div className={`absolute inset-0 rounded-full transition-opacity ${isPlaying ? 'bg-signal-500/25 animate-pulse-ring' : 'bg-brand-500/15'}`} />
                    <div className={`absolute inset-[6px] rounded-full transition-opacity ${isPlaying ? 'bg-signal-500/30 animate-pulse-ring' : 'bg-brand-500/20'}`} style={{ animationDelay: '0.8s' }} />
                    <div className="relative w-[48px] h-[48px] rounded-full bg-gradient-to-br from-signal-500 to-brand-700 border-2 border-white/40 flex items-center justify-center shadow-xl shadow-signal-600/40 group-hover:scale-105 transition-transform">
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-white fill-current" />
                      ) : (
                        <Play className="w-5 h-5 text-white fill-current ml-0.5" />
                      )}
                    </div>
                  </button>

                  <p className="text-[13px] font-bold text-white mb-0.5 leading-tight">
                    Lakeview Dental Practice
                  </p>
                  <p className="text-[11px] text-signal-300 font-medium">
                    AI Dental Assistant Maya • Inbound Call
                  </p>

                  {/* Play Recording Action Button */}
                  <div className="pt-1.5 flex justify-center">
                    <button
                      type="button"
                      onClick={togglePlayAudio}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold transition-all shadow-md active:scale-95 cursor-pointer ${
                        isPlaying
                          ? 'bg-amber-400 text-slate-950 shadow-amber-400/25 ring-2 ring-amber-300'
                          : 'bg-signal-500 hover:bg-signal-400 text-slate-950 shadow-signal-500/25'
                      }`}
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-3 h-3 fill-current" />
                          <span>PAUSE RECORDING ({formatTime(currentTime)})</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                          <span>LISTEN TO LIVE RECORDING</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Live Waveform Equalizer */}
                <div className="mx-4 py-2 px-3 rounded-xl bg-white/5 border border-white/10 mb-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-signal-300/80 mb-1 px-1">
                    <span className="font-bold uppercase tracking-wider">
                      {isPlaying ? '● AUDIO PLAYING' : 'AUDIO DEMO'}
                    </span>
                    <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                  </div>

                  <div className="flex items-center justify-center gap-1 py-1">
                    {[8, 14, 22, 12, 18, 26, 16, 24, 14, 20, 10, 16, 22, 12, 8].map((h, i) => (
                      <span
                        key={i}
                        className={`w-[3px] rounded-full transition-all duration-150 ${
                          isPlaying
                            ? 'bg-signal-400 animate-soundwave'
                            : 'bg-brand-400/50'
                        }`}
                        style={{
                          height: isPlaying ? `${h}px` : '6px',
                          animationDelay: `${i * 90}ms`
                        }}
                      />
                    ))}
                  </div>

                  {/* Progress scrubber bar */}
                  <div className="w-full bg-slate-800 rounded-full h-1 mt-1 overflow-hidden">
                    <div
                      className="bg-signal-500 h-full rounded-full transition-all duration-100"
                      style={{ width: `${Math.min(100, (currentTime / (duration || 72)) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Conversation Bubbles */}
                <div className="space-y-2.5 px-4 text-left">
                  {/* Agent */}
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl rounded-tl-sm px-3.5 py-2.5 bg-[#1e2d45] border border-brand-900/60 shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-signal-400 uppercase tracking-wide">Maya · WISE AI</span>
                        <span className="text-[10px] text-slate-500 font-mono ml-auto">00:03</span>
                      </div>
                      <p className="text-[12px] text-slate-200 leading-[1.55] font-medium">
                        Thank you for calling Lakeview Dental. How can I help with your booking today?
                      </p>
                    </div>
                  </div>

                  {/* Caller */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-sm px-3.5 py-2.5 bg-brand-600 shadow-lg shadow-brand-700/30">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-brand-100 uppercase tracking-wide">Patient</span>
                        <span className="text-[10px] text-brand-200/70 font-mono ml-auto">00:14</span>
                      </div>
                      <p className="text-[12px] text-white leading-[1.55] font-medium">
                        I need to book a dental cleaning and checkup this Thursday afternoon.
                      </p>
                    </div>
                  </div>

                  {/* Agent confirmation */}
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl rounded-tl-sm px-3.5 py-2.5 bg-[#1e2d45] border border-brand-900/60 shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-signal-400 uppercase tracking-wide">Maya · WISE AI</span>
                        <span className="text-[10px] text-slate-500 font-mono ml-auto">00:26</span>
                      </div>
                      <p className="text-[12px] text-slate-200 leading-[1.55] font-medium">
                        Dr. Watson has Thu 2:30 PM open. Reserving that slot and syncing to Jane App EMR!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Dynamic Notification + In-Call Dock */}
                <div className="space-y-3 pt-3">
                  
                  {/* EMR Sync Banner */}
                  <div className="mx-4 mb-2 p-3 rounded-xl bg-white/8 backdrop-blur border border-white/15 flex items-center gap-3 text-left">
                    <div className="w-8 h-8 rounded-lg bg-signal-500/20 border border-signal-400/30 flex items-center justify-center shrink-0">
                      <JaneAppLogo className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[11px] font-bold text-white">Jane App EMR Synced</span>
                        <span className="text-[10px] font-bold text-emerald-400 font-mono">✓ LOCKED</span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-medium">
                        Dr. Watson · Thu 2:30 PM · SMS Sent
                      </p>
                    </div>
                  </div>

                  {/* In-Call Controls: Wired to Audio Actions */}
                  <div className="grid grid-cols-3 gap-3 px-4 pb-2 pt-1">
                    <button
                      type="button"
                      onClick={toggleMute}
                      className="flex flex-col items-center gap-1.5 cursor-pointer"
                      aria-label="Toggle mute"
                    >
                      <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isMuted ? 'bg-rose-600 border-rose-400 text-white' : 'bg-white/10 border-white/20 text-white/80'
                      }`}>
                        {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                      </div>
                      <span className="text-[10px] font-semibold text-white/60">{isMuted ? 'Muted' : 'Mute'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={togglePlayAudio}
                      className="flex flex-col items-center gap-1.5 cursor-pointer"
                      aria-label="Toggle play pause"
                    >
                      <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isPlaying ? 'bg-amber-400 border-amber-300 text-slate-950' : 'bg-signal-500 border-signal-300 text-slate-950'
                      }`}>
                        {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                      </div>
                      <span className="text-[10px] font-semibold text-white/60">{isPlaying ? 'Pause' : 'Play'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={toggleSpeaker}
                      className="flex flex-col items-center gap-1.5 cursor-pointer"
                      aria-label="Toggle speaker"
                    >
                      <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isSpeakerOn ? 'bg-brand-600 border-brand-400 text-white' : 'bg-white/10 border-white/20 text-white/80'
                      }`}>
                        {isSpeakerOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                      </div>
                      <span className="text-[10px] font-semibold text-white/60">Speaker</span>
                    </button>

                    <button type="button" className="flex flex-col items-center gap-1.5" aria-label="Keypad">
                      <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-white/80">
                        <Grid className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold text-white/60">Keypad</span>
                    </button>

                    <button type="button" className="flex flex-col items-center gap-1.5" aria-label="Warm Transfer">
                      <div className="w-12 h-12 rounded-full bg-brand-600/30 border-2 border-brand-400/40 flex items-center justify-center text-signal-300">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold text-signal-300/80">Transfer</span>
                    </button>

                    <button
                      type="button"
                      onClick={endCall}
                      className="flex flex-col items-center gap-1.5 cursor-pointer"
                      aria-label="End call"
                    >
                      <div className="w-12 h-12 rounded-full bg-rose-600 border-2 border-rose-400/50 flex items-center justify-center text-white shadow-lg shadow-rose-600/40">
                        <PhoneOff className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold text-rose-400/80">Reset</span>
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
