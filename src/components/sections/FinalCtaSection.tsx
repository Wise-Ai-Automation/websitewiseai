import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { siteContent } from '../../content/siteContent'
import { submitLead } from '../../lib/supabase'
import confetti from 'canvas-confetti'
import {
  CheckCircle2,
  Loader2,
  Phone,
  Mail,
  MapPin,
  AlertTriangle,
  ArrowRight,
  ShieldCheck
} from 'lucide-react'
import { WhatsAppIcon } from '../common/WhatsAppIcon'

// Zod schema matching the 4-field form from Image 2
const strategyFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Please enter your full name (at least 2 characters)' })
    .max(100),
  workEmail: z
    .string()
    .email({ message: 'Please enter a valid work email address' }),
  interestedIn: z
    .string()
    .min(1, { message: 'Please select what you are interested in' }),
  message: z
    .string()
    .min(5, { message: 'Please tell us briefly about your business (at least 5 characters)' })
    .max(2500),
  websiteUrlHoneypot: z.string().optional(),
})

type StrategyFormData = z.infer<typeof strategyFormSchema>

export const FinalCtaSection: React.FC = () => {
  const { headline, subheadline } = siteContent.finalCta
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StrategyFormData>({
    resolver: zodResolver(strategyFormSchema),
    defaultValues: {
      name: '',
      workEmail: '',
      interestedIn: 'Voice AI agent',
      message: '',
      websiteUrlHoneypot: '',
    },
  })

  const onSubmit = async (data: StrategyFormData) => {
    if (data.websiteUrlHoneypot && data.websiteUrlHoneypot.trim() !== '') {
      setIsSuccess(true)
      return
    }

    setIsSubmitting(true)
    setServerError(null)

    try {
      const result = await submitLead({
        name: data.name,
        email: data.workEmail,
        interestedIn: data.interestedIn,
        industry: data.interestedIn,
        message: data.message,
        source: 'strategy_call_form',
      })

      if (result.success) {
        setIsSuccess(true)
        reset()
        try {
          confetti({
            particleCount: 90,
            spread: 75,
            origin: { y: 0.6 },
            colors: ['#00C5C8', '#2E66FA', '#1E4AE0', '#35D2D2'],
          })
        } catch {
          // Confetti fallback
        }
      } else {
        setServerError(result.error || 'Failed to submit. Please try again or chat via WhatsApp.')
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An unexpected error occurred'
      setServerError(msg)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="book-demo" className="py-24 bg-ink-950 text-white border-b border-slate-800/80 relative overflow-hidden scroll-mt-16">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[400px] bg-signal-500/10 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[350px] bg-brand-600/10 rounded-full blur-[130px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Subtitle & Direct Contact Info (Matching Image 2) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-signal-400 text-xs font-mono font-bold tracking-widest uppercase">
                <span>GET STARTED</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
                {headline}
              </h2>

              <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal max-w-xl">
                {subheadline}
              </p>
            </div>

            {/* Direct Contact Details: Exact match from Image 2 */}
            <div className="space-y-4 pt-2">
              <a
                href="tel:+14165550142"
                className="flex items-center gap-3.5 text-slate-300 hover:text-signal-400 transition-colors group text-sm sm:text-base"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-signal-400 group-hover:border-signal-500/50 transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium">+1 (416) 555-0142</span>
              </a>

              <a
                href="mailto:hello@wiseaiautomation.ca"
                className="flex items-center gap-3.5 text-slate-300 hover:text-signal-400 transition-colors group text-sm sm:text-base"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-signal-400 group-hover:border-signal-500/50 transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium">hello@wiseaiautomation.ca</span>
              </a>

              <div className="flex items-center gap-3.5 text-slate-300 text-sm sm:text-base">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-signal-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium">Toronto, Ontario — serving all of Canada</span>
              </div>
            </div>

            {/* Fast WhatsApp Chat Alternative */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="p-5 rounded-2xl bg-ink-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#25D366] flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Prefer to chat on WhatsApp?</p>
                    <p className="text-[11px] text-slate-400">Get answers directly from our Canadian automation team</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/12262010271?text=Hi%20Wise%20AI%20Automation%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shrink-0 shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Trust note */}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-signal-400" />
              <span>Strict privacy adherence • Canadian PIPEDA Compliant • Zero obligation</span>
            </div>
          </div>

          {/* Right Column: Lead Form (Exact Match from Image 2) */}
          <div className="lg:col-span-6">
            <div className="bg-ink-900 border border-slate-800 rounded-3xl p-7 sm:p-9 shadow-2xl relative">
              
              {isSuccess ? (
                /* Success View */
                <div className="py-12 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-signal-500/10 border-2 border-signal-400 flex items-center justify-center mx-auto text-signal-400 shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-white">
                    Strategy Call Request Received!
                  </h3>

                  <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Our Canadian team will review your business requirements and reply within 24 business hours to lock in your free strategy session.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>

                    <a
                      href="https://wa.me/12262010271?text=Hi%20Wise%20AI%20Automation%2C%20I%20just%20submitted%20a%20call%20request%20on%20your%20website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full text-xs font-bold text-slate-950 bg-signal-400 hover:bg-signal-300 transition-colors"
                    >
                      Ping Us on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                /* Form matching Image 2 */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  
                  {serverError && (
                    <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/80 flex items-start gap-3 text-rose-300 text-xs">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  {/* Honeypot Field */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="websiteUrlHoneypot">Leave this blank</label>
                    <input
                      type="text"
                      id="websiteUrlHoneypot"
                      tabIndex={-1}
                      autoComplete="off"
                      {...register('websiteUrlHoneypot')}
                    />
                  </div>

                  {/* Field 1: Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Tremblay"
                      className={`w-full px-4 py-3.5 rounded-xl bg-ink-950 border ${
                        errors.name ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-signal-400'
                      } text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-signal-400 transition-colors`}
                      {...register('name')}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1 font-medium">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Field 2: Work email */}
                  <div>
                    <label htmlFor="workEmail" className="block text-xs font-bold text-slate-300 mb-2">
                      Work email
                    </label>
                    <input
                      id="workEmail"
                      type="email"
                      placeholder="jane@yourbusiness.ca"
                      className={`w-full px-4 py-3.5 rounded-xl bg-ink-950 border ${
                        errors.workEmail ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-signal-400'
                      } text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-signal-400 transition-colors`}
                      {...register('workEmail')}
                    />
                    {errors.workEmail && (
                      <p className="text-[11px] text-rose-400 mt-1 font-medium">{errors.workEmail.message}</p>
                    )}
                  </div>

                  {/* Field 3: What are you interested in? */}
                  <div>
                    <label htmlFor="interestedIn" className="block text-xs font-bold text-slate-300 mb-2">
                      What are you interested in?
                    </label>
                    <select
                      id="interestedIn"
                      className={`w-full px-4 py-3.5 rounded-xl bg-ink-950 border ${
                        errors.interestedIn ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-signal-400'
                      } text-sm text-white focus:outline-none focus:ring-1 focus:ring-signal-400 transition-colors cursor-pointer`}
                      {...register('interestedIn')}
                    >
                      <option value="Voice AI agent">Voice AI agent</option>
                      <option value="AI Automation">AI Automation</option>
                      <option value="AI Chatbots">AI Chatbots</option>
                      <option value="Scheduling Apps">Scheduling Apps</option>
                      <option value="Website Creation">Website Creation</option>
                      <option value="App Development">App Development</option>
                      <option value="Multiple services / Not sure yet">Multiple services / Not sure yet</option>
                    </select>
                    {errors.interestedIn && (
                      <p className="text-[11px] text-rose-400 mt-1 font-medium">{errors.interestedIn.message}</p>
                    )}
                  </div>

                  {/* Field 4: Tell us about your business */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-300 mb-2">
                      Tell us about your business
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="We run a dental clinic in Mississauga and miss a lot of after-hours calls..."
                      className={`w-full px-4 py-3.5 rounded-xl bg-ink-950 border ${
                        errors.message ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-signal-400'
                      } text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-signal-400 transition-colors resize-none`}
                      {...register('message')}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 font-medium">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button (Matching Image 2: Cyan pill button "Request my free call") */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-8 rounded-full text-sm sm:text-base font-extrabold text-slate-950 bg-signal-500 hover:bg-signal-400 transition-all duration-200 shadow-lg shadow-signal-500/25 hover:shadow-signal-500/35 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin text-slate-950" />
                          <span>Requesting your free call...</span>
                        </>
                      ) : (
                        <>
                          <span>Request my free call</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-3 font-medium">
                      Toronto, Ontario • Serving Canadian & North American businesses
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
