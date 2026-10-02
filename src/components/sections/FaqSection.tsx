import React, { useState } from 'react'
import { siteContent, FaqItem } from '../../content/siteContent'
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react'

export const FaqSection: React.FC = () => {
  const faqs = siteContent.faq
  const [openId, setOpenId] = useState<string | null>(faqs[0].id)

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" className="py-24 bg-white border-b border-slate-200 relative scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-slate-900 leading-[1.12]">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-slate-500 leading-[1.7]">
            Everything you need to know about our custom voice agents, latency, phone compatibility, Canadian privacy, and integration workflow.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq: FaqItem) => {
            const isOpen = openId === faq.id

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-50 border-blue-400 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-2xl"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-blue-600 text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className="px-6 pb-6 pt-1 text-sm text-slate-700 leading-relaxed border-t border-slate-200/80"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Have more questions banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <MessageSquare className="w-5 h-5 text-blue-600 shrink-0" />
            <div>
              <p className="text-sm font-bold text-slate-900">Have a specific Canadian compliance or SIP question?</p>
              <p className="text-xs text-slate-600">Ask us anything about PIPEDA, PHIPA for clinics, or bilingual French models.</p>
            </div>
          </div>
          <a
            href={siteContent.brand.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-emerald-900 bg-emerald-100 border border-emerald-300 hover:bg-emerald-200 transition-colors shrink-0"
          >
            Chat with an Engineer
          </a>
        </div>

      </div>
    </section>
  )
}
