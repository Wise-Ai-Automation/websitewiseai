import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { siteContent } from '../../content/siteContent'
import { submitLead } from '../../lib/supabase'
import confetti from 'canvas-confetti'
import {
  Sparkles,
  CheckCircle2,
  Send,
  Loader2,
  Phone,
  ShieldCheck,
  Check,
  AlertTriangle,
  Lock
} from 'lucide-react'
import { WhatsAppIcon } from '../common/WhatsAppIcon'

// Zod schema for client-side form validation
const leadFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Please enter your full name (at least 2 characters)' })
    .max(100),
  workEmail: z
    .string()
    .email({ message: 'Please enter a valid work email address' }),
  phoneNumber: z
    .string()
    .min(7, { message: 'Please enter a valid phone number' })
    .max(25),
  companyName: z
    .string()
    .min(2, { message: 'Please enter your business or practice name' }),
  industry: z
    .string()
    .min(1, { message: 'Please select your industry' }),
  message: z
    .string()
    .min(5, { message: 'Please share what you want your voice agent to do (at least 5 characters)' })
    .max(2000),
  websiteUrlHoneypot: z.string().optional(),
})

type LeadFormData = z.infer<typeof leadFormSchema>

export const FinalCtaSection: React.FC = () => {
  const { headline, subheadline, reassuranceCopy, benefits } = siteContent.finalCta
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      fullName: '',
      workEmail: '',
      phoneNumber: '',
      companyName: '',
      industry: '',
      message: '',
      websiteUrlHoneypot: '',
    },
  })

  const onSubmit = async (data: LeadFormData) => {
    if (data.websiteUrlHoneypot && data.websiteUrlHoneypot.trim() !== '') {
      setIsSuccess(true)
      return
    }

    setIsSubmitting(true)
    setServerError(null)

    try {
      const result = await submitLead({
        name: data.fullName,
        email: data.workEmail,
        phone: data.phoneNumber,
        company: data.companyName,
        industry: data.industry,
        message: data.message,
        source: 'landing_page_demo_form',
      })

      if (result.success) {
        setIsSuccess(true)
        reset()
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#0284c7', '#0369a1', '#10b981', '#3b82f6'],
          })
        } catch {
          // Fallback
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
    <section id="book-demo" className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 border-b border-slate-200 relative overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Reassurance, Benefits, Direct WhatsApp Contact */}
          <div className="lg:col-span-5 space-y-7">
            <div className="space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Start Your Implementation</span>
              </div>

              <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 leading-[1.12] leading-tight">
                {headline}
              </h2>

              <p className="text-base text-slate-500 leading-[1.7]">
                {subheadline}
              </p>

              <p className="text-sm font-bold text-blue-700">
                {reassuranceCopy}
              </p>
            </div>

            {/* 3 Reassurance Benefits */}
            <div className="space-y-3 pt-1">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5 text-blue-700">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm text-slate-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp Callout Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#25D366]">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Prefer to chat on WhatsApp?</h4>
                  <p className="text-xs text-slate-500">Fast technical answers directly from our Canadian team</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <a
                  href={`tel:${siteContent.brand.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2 text-xs font-mono text-slate-700 hover:text-blue-600 font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>{siteContent.brand.contact.displayPhone}</span>
                </a>

                <a
                  href={siteContent.brand.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Privacy & Compliance Assurance */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-1.5 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                <Lock className="w-4 h-4 text-blue-600" />
                <span>Canadian Data Protection Guarantee</span>
              </div>
              <p className="text-xs text-blue-900/80 leading-relaxed">
                We operate under PIPEDA regulations. Your client and company records are never sold or shared. Strict confidentiality guaranteed.
              </p>
            </div>

          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200 p-7 sm:p-10 shadow-xl shadow-blue-500/5 relative">
              
              {isSuccess ? (
                /* Success View */
                <div className="py-12 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center mx-auto text-emerald-600 shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-slate-900">
                    Demo Request Received!
                  </h3>

                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Our Canadian voice engineering team will review your requirements and reach out via phone or email within 24 business hours to schedule your interactive live demo.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>

                    <a
                      href={siteContent.brand.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
                    >
                      Ping Us on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                /* Standard Lead Submission Form */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  
                  {serverError && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-xs">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
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

                  {/* Row 1: Full Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-slate-800 mb-1.5">
                        Full Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Sarah Jenkins"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          errors.fullName ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-blue-600'
                        } text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors`}
                        {...register('fullName')}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="workEmail" className="block text-xs font-bold text-slate-800 mb-1.5">
                        Work Email <span className="text-blue-600">*</span>
                      </label>
                      <input
                        id="workEmail"
                        type="email"
                        placeholder="s.jenkins@clinicpractice.ca"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          errors.workEmail ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-blue-600'
                        } text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors`}
                        {...register('workEmail')}
                      />
                      {errors.workEmail && (
                        <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.workEmail.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-bold text-slate-800 mb-1.5">
                        Phone Number <span className="text-blue-600">*</span>
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        placeholder="+1 (226) 432-9876"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          errors.phoneNumber ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-blue-600'
                        } text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors`}
                        {...register('phoneNumber')}
                      />
                      {errors.phoneNumber && (
                        <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.phoneNumber.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-xs font-bold text-slate-800 mb-1.5">
                        Company / Practice Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        placeholder="Toronto Metro Health Group"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          errors.companyName ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-blue-600'
                        } text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors`}
                        {...register('companyName')}
                      />
                      {errors.companyName && (
                        <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.companyName.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Industry Dropdown */}
                  <div>
                    <label htmlFor="industry" className="block text-xs font-bold text-slate-800 mb-1.5">
                      Industry <span className="text-blue-600">*</span>
                    </label>
                    <select
                      id="industry"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                        errors.industry ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-blue-600'
                      } text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors cursor-pointer`}
                      {...register('industry')}
                    >
                      <option value="" disabled>Select your industry</option>
                      {siteContent.industries.map((ind, i) => (
                        <option key={i} value={ind.name} className="bg-white text-slate-900">
                          {ind.name}
                        </option>
                      ))}
                      <option value="Other Industry" className="bg-white text-slate-900">
                        Other High-Volume Phone Business
                      </option>
                    </select>
                    {errors.industry && (
                      <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.industry.message}</p>
                    )}
                  </div>

                  {/* Row 4: What do you want your voice agent to do? */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-800 mb-1.5">
                      What do you want your voice agent to do? <span className="text-blue-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="e.g. We receive ~80 calls a day. We want the agent to answer after-hours calls, qualify new patient insurance, and book appointments directly into Jane App..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                        errors.message ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-blue-600'
                      } text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors`}
                      {...register('message')}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-8 rounded-xl text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-md shadow-blue-500/20 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Securing Demo Reservation...</span>
                        </>
                      ) : (
                        <>
                          <span>Book my free demo</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 mt-3 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Zero obligation • Canadian PIPEDA Compliant • Demo ready in 7-14 days</span>
                    </div>
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
