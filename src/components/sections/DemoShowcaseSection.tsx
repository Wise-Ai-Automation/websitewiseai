import React, { useState, useRef } from 'react'
import { siteContent } from '../../content/siteContent'
import {
  Calendar,
  Home,
  Laptop,
  ArrowRight,
  Radio,
  Database,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Grid,
  Wifi,
  UserCheck,
  Play,
  Pause,
  RotateCcw,
  Activity
} from 'lucide-react'
import {
  JaneAppLogo,
  GoogleCalendarLogo,
  HubSpotLogo
} from '../common/BrandLogos'

export const DemoShowcaseSection: React.FC = () => {
  const scenarios = siteContent.demoScenarios
  const [activeScenarioId, setActiveScenarioId] = useState(scenarios[0].id)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(72)
  const [isMuted, setIsMuted] = useState(false)
  const [isSpeakerOn, setIsSpeakerOn] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0]

  const fallbackDurationMap: Record<string, number> = {
    clinic: 72,
    realestate: 45,
    software: 58
  }

  const effectiveDuration = duration > 0 ? duration : (fallbackDurationMap[activeScenario.id] || 60)

  // Switch scenario tab
  const handleScenarioChange = (id: string) => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setIsPlaying(false)
    setCurrentTime(0)
    setDuration(fallbackDurationMap[id] || 60)
    setActiveScenarioId(id)
  }

  // Play / Pause toggle
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
    if (audioRef.current && audioRef.current.duration && !isNaN(audioRef.current.duration)) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleAudioEnded = () => {
    setIsPlaying(false)
    setCurrentTime(0)
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const newTime = (clickX / rect.width) * effectiveDuration
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
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

  const resetCall = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setIsPlaying(false)
    setCurrentTime(0)
  }

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '00:00'
    const m = Math.floor(secs / 60)
    const s = Math.floor(secs % 60)
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  const getScenarioIcon = (id: string) => {
    switch (id) {
      case 'clinic':
        return Calendar
      case 'realestate':
        return Home
      case 'software':
        return Laptop
      default:
        return Radio
    }
  }

  return (
    <section id="demo-showcase" className="py-24 bg-slate-50/70 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-signal-50 border border-signal-200 text-signal-900 text-xs font-bold uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 text-signal-600 animate-pulse" />
            <span>Interactive Voice AI Simulator • Real Call Recordings</span>
          </div>

          <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 leading-[1.12]">
            Hear how OneWise AI handles live calls
          </h2>

          <p className="text-base text-slate-600 leading-[1.7]">
            Select an industry scenario below to listen to actual audio recordings of our voice agents answering on the first ring, handling natural dialogue, and executing instant CRM actions.
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
                onClick={() => handleScenarioChange(scenario.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-signal-500 text-slate-950 border-signal-500 shadow-md shadow-signal-500/25 ring-2 ring-signal-400/40'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-signal-300 hover:bg-signal-50/40 shadow-xs'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-signal-600'}`} />
                <span>{scenario.title}</span>
                {isActive && isPlaying && (
                  <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping ml-1" />
                )}
              </button>
            )
          })}
        </div>

        {/* Main Showcase Layout: Realistic Smartphone Mockup on Left + Telemetry Console on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (7 cols): Flagship Smartphone Chassis Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[420px] rounded-[52px] bg-gradient-to-b from-slate-800 to-slate-950 p-3.5 shadow-2xl shadow-brand-900/30 ring-2 ring-slate-700/60 border-[6px] border-slate-900 relative">
              
              {/* Glossy Screen Edge Highlight */}
              <div className="absolute inset-x-12 top-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full pointer-events-none" />

              {/* Hidden HTML5 Audio Element wired to real GCS audio recording */}
              <audio
                ref={audioRef}
                key={activeScenario.audioUrl}
                src={activeScenario.audioUrl}
                preload="metadata"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleAudioEnded}
              />

              {/* Inner Smartphone Screen */}
              <div className="rounded-[40px] bg-gradient-to-b from-[#0d131f] via-[#0f1929] to-[#07111e] text-white p-5 flex flex-col justify-between min-h-[660px] overflow-hidden relative">
                
                {/* Dynamic Island & Status Bar */}
                <div>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-300 px-2 pt-0.5 mb-3">
                    <span className="font-mono">9:41</span>
                    
                    {/* Dynamic Island Pill with Active Call Animation */}
                    <div className="px-3 py-1 bg-black rounded-full flex items-center gap-2 border border-slate-800/80 shadow-inner">
                      <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-signal-400 animate-pulse' : 'bg-slate-500'}`} />
                      <span className="text-[10px] font-mono text-signal-300 font-bold">
                        {isPlaying ? formatTime(currentTime) : activeScenario.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Wifi className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-mono">5G</span>
                      <div className="w-5 h-2.5 border border-slate-400 rounded-xs p-0.5 flex items-center">
                        <div className="w-full h-full bg-signal-400 rounded-2xs" />
                      </div>
                    </div>
                  </div>

                  {/* Active In-Call Header with Clickable Play/Pause Avatar */}
                  <div className="text-center pt-1 pb-2">
                    
                    {/* Concentric Pulsing Sound Rings Avatar with Play Button */}
                    <button
                      type="button"
                      onClick={togglePlayAudio}
                      className="relative w-16 h-16 mx-auto mb-2.5 flex items-center justify-center cursor-pointer group focus:outline-none"
                      aria-label={isPlaying ? 'Pause call recording' : 'Play call recording'}
                    >
                      <div className={`absolute inset-0 rounded-full transition-opacity ${isPlaying ? 'bg-signal-500/25 animate-pulse-ring' : 'bg-signal-500/10'}`} />
                      <div className={`absolute inset-2 rounded-full transition-opacity ${isPlaying ? 'bg-signal-500/35 animate-pulse-ring' : 'bg-signal-500/20'}`} style={{ animationDelay: '0.8s' }} />
                      <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-signal-400 to-brand-600 border-2 border-white/60 flex items-center justify-center shadow-lg shadow-signal-500/40 group-hover:scale-105 transition-transform">
                        {isPlaying ? (
                          <Pause className="w-5 h-5 text-slate-950 fill-current" />
                        ) : (
                          <Play className="w-5 h-5 text-slate-950 fill-current ml-0.5" />
                        )}
                      </div>
                    </button>

                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {activeScenario.title}
                    </h4>
                    <p className="text-[11px] text-signal-300 font-medium mt-0.5">
                      OneWise AI Assistant • Canadian SIP Trunk
                    </p>

                    {/* Big Interactive Audio Play / Pause Pill Button */}
                    <div className="pt-2 flex justify-center">
                      <button
                        type="button"
                        onClick={togglePlayAudio}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer ${
                          isPlaying
                            ? 'bg-amber-400 text-slate-950 shadow-amber-400/30 ring-2 ring-amber-300'
                            : 'bg-signal-500 hover:bg-signal-400 text-slate-950 shadow-signal-500/30 ring-2 ring-signal-400/40'
                        }`}
                      >
                        {isPlaying ? (
                          <>
                            <Pause className="w-3.5 h-3.5 fill-current" />
                            <span>PAUSE RECORDING ({formatTime(currentTime)})</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                            <span>LISTEN TO LIVE RECORDING</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Dancing Soundwave Equalizer & Clickable Progress Scrubber */}
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 mb-3 space-y-2">
                    
                    <div className="flex items-center justify-between text-[10px] font-mono text-signal-300/80 px-1">
                      <span className="font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Activity className={`w-3 h-3 ${isPlaying ? 'text-signal-400 animate-pulse' : 'text-slate-500'}`} />
                        <span>{isPlaying ? 'AUDIO PLAYING' : 'AUDIO DEMO READY'}</span>
                      </span>
                      <span>{formatTime(currentTime)} / {formatTime(effectiveDuration)}</span>
                    </div>

                    {/* Soundwave bars */}
                    <div className="flex items-center justify-center gap-1 py-1">
                      {[10, 18, 26, 14, 22, 30, 16, 24, 12, 28, 18, 22, 14, 20, 10].map((h, i) => (
                        <span
                          key={i}
                          className={`w-[3px] rounded-full transition-all duration-150 ${
                            isPlaying
                              ? 'bg-signal-400 animate-soundwave'
                              : 'bg-signal-600/30'
                          }`}
                          style={{
                            height: isPlaying ? `${h}px` : '6px',
                            animationDelay: `${i * 85}ms`
                          }}
                        />
                      ))}
                    </div>

                    {/* Interactive Clickable Scrubber Bar */}
                    <div
                      onClick={handleSeek}
                      className="w-full bg-slate-800 hover:bg-slate-750 cursor-pointer rounded-full h-2 p-0.5 overflow-hidden transition-all"
                      title="Click to jump audio time"
                    >
                      <div
                        className="bg-signal-500 h-full rounded-full transition-all duration-100"
                        style={{ width: `${Math.min(100, (currentTime / effectiveDuration) * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Synchronized Call Dialogue Bubbles */}
                  <div className="space-y-2.5 pt-1 text-left max-h-[220px] overflow-y-auto pr-1 custom-scrollbar">
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
                                ? 'bg-[#182538] border border-signal-900/50 text-slate-100 rounded-tl-xs'
                                : 'bg-brand-600 text-white rounded-tr-xs shadow-md shadow-brand-600/30'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <span className={`font-bold text-[10px] ${isAgent ? 'text-signal-400' : 'text-brand-100'}`}>
                                {isAgent ? 'OneWise AI Voice' : activeScenario.callerName}
                              </span>
                              <span className={`text-[9px] font-mono ${isAgent ? 'text-slate-400' : 'text-brand-200'}`}>
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

                {/* Bottom Section: Dynamic Action Toast & Phone Dock */}
                <div className="space-y-3 pt-3">
                  
                  {/* Dynamic Slide-in Action Toast */}
                  <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2.5 text-left shadow-lg">
                    <div className="w-8 h-8 rounded-lg bg-signal-500/20 border border-signal-400/40 flex items-center justify-center shrink-0">
                      {activeScenario.id === 'clinic' ? (
                        <JaneAppLogo className="w-4 h-4" />
                      ) : activeScenario.id === 'realestate' ? (
                        <GoogleCalendarLogo className="w-4 h-4" />
                      ) : (
                        <HubSpotLogo className="w-4 h-4" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-white truncate">
                          {activeScenario.outcome}
                        </span>
                        <span className="text-[9px] font-mono text-signal-300 font-bold">
                          VERIFIED
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-300 truncate">
                        Logged to CRM • SMS Confirmation Dispatched
                      </p>
                    </div>
                  </div>

                  {/* Interactive Phone In-Call Controls Dock */}
                  <div className="grid grid-cols-5 gap-2 pt-1 pb-1">
                    
                    {/* Mute */}
                    <button
                      type="button"
                      onClick={toggleMute}
                      className="flex flex-col items-center gap-1 text-[9px] text-slate-400 hover:text-white transition-colors cursor-pointer"
                      aria-label="Toggle mute"
                    >
                      <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
                        isMuted ? 'bg-rose-600 border-rose-500 text-white' : 'bg-slate-800/80 border-slate-700 text-slate-300'
                      }`}>
                        {isMuted ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                      </div>
                      <span>{isMuted ? 'Muted' : 'Mute'}</span>
                    </button>

                    {/* Keypad */}
                    <button
                      type="button"
                      className="flex flex-col items-center gap-1 text-[9px] text-slate-400 hover:text-white"
                      aria-label="Keypad"
                    >
                      <div className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300">
                        <Grid className="w-3.5 h-3.5" />
                      </div>
                      <span>Keypad</span>
                    </button>

                    {/* Speaker */}
                    <button
                      type="button"
                      onClick={toggleSpeaker}
                      className="flex flex-col items-center gap-1 text-[9px] text-slate-400 hover:text-white transition-colors cursor-pointer"
                      aria-label="Toggle speaker"
                    >
                      <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
                        isSpeakerOn ? 'bg-signal-600 border-signal-400 text-slate-950 font-bold' : 'bg-slate-800/80 border-slate-700 text-slate-300'
                      }`}>
                        {isSpeakerOn ? <Volume2 className="w-3.5 h-3.5 text-white" /> : <VolumeX className="w-3.5 h-3.5" />}
                      </div>
                      <span>Speaker</span>
                    </button>

                    {/* Transfer */}
                    <button
                      type="button"
                      className="flex flex-col items-center gap-1 text-[9px] text-signal-300"
                      aria-label="Warm Transfer"
                    >
                      <div className="w-9 h-9 rounded-full bg-signal-600/30 border border-signal-400/50 flex items-center justify-center text-signal-300">
                        <UserCheck className="w-3.5 h-3.5" />
                      </div>
                      <span>Transfer</span>
                    </button>

                    {/* Reset / End */}
                    <button
                      type="button"
                      onClick={resetCall}
                      className="flex flex-col items-center gap-1 text-[9px] text-rose-400 cursor-pointer"
                      aria-label="Reset audio playback"
                    >
                      <div className="w-9 h-9 rounded-full bg-rose-600 hover:bg-rose-500 border border-rose-400 flex items-center justify-center text-white shadow-md shadow-rose-600/40">
                        <RotateCcw className="w-3.5 h-3.5" />
                      </div>
                      <span>Reset</span>
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
            
            {/* Audio Recording Details Badge */}
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-signal-700 bg-signal-50 px-2.5 py-1 rounded-md border border-signal-200">
                  HD Cloud Audio Stream
                </span>
                <span className="text-xs text-slate-500 font-mono font-semibold">
                  {formatTime(currentTime)} / {formatTime(effectiveDuration)}
                </span>
              </div>

              <h3 className="font-heading text-lg font-bold text-slate-900 mb-1">
                {activeScenario.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {activeScenario.summary}
              </p>

              {/* Direct Play/Pause trigger inside right card */}
              <button
                type="button"
                onClick={togglePlayAudio}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-signal-500 hover:bg-signal-400 shadow-md shadow-signal-500/20 active:scale-[0.98] transition-all cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Pause Audio Recording</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                    <span>Play Live Voice Recording</span>
                  </>
                )}
              </button>
            </div>

            {/* Live Actions Triggered Card */}
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-signal-600" />
                <h4 className="text-sm font-bold text-slate-900">
                  Live Automations Triggered During This Call
                </h4>
              </div>

              <div className="space-y-3.5">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-signal-100 text-signal-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Instant CRM & Telemetry Log</p>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                      Structured contact data, call recording, audio transcription, and qualification score synced in real time.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Live Calendar Conflict Lock</p>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                      Two-way calendar check locks the requested time slot with zero risk of double booking.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-100 text-brand-800 flex items-center justify-center shrink-0 mt-0.5">
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

            {/* Carrier & Latency Benchmarks Card */}
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                Carrier & Latency Benchmarks
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Latency</p>
                  <p className="text-lg font-mono font-extrabold text-signal-600 mt-0.5">&lt; 780ms</p>
                  <p className="text-[10px] text-slate-500">Human-paced cadence</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Pick-Up</p>
                  <p className="text-lg font-mono font-extrabold text-emerald-600 mt-0.5">1st Ring</p>
                  <p className="text-[10px] text-slate-500">Zero hold wait</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                <span>Canadian Telephony Trunk:</span>
                <span className="font-mono font-semibold text-slate-900">Bell / Rogers / Telus Compatible</span>
              </div>
            </div>

            {/* Quick CTA Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0c1e33] to-[#071322] border border-signal-900/40 text-white p-6 shadow-xl shadow-signal-950/20">
              <h4 className="text-base font-bold text-white mb-2">
                Need this voice agent in your business?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                We engineer and deploy custom voice agents tailored to your business rules in 7 to 14 days.
              </p>
              <a
                href="#book-demo"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-signal-500 hover:bg-signal-400 transition-all shadow-md active:scale-[0.98]"
              >
                <span>Book Free Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
