import React from 'react'
import { Header } from './components/layout/Header'
import { HeroSection } from './components/sections/HeroSection'
import { IndustriesSection } from './components/sections/IndustriesSection'
import { ProblemOutcomeSection } from './components/sections/ProblemOutcomeSection'
import { SolutionsSection } from './components/sections/SolutionsSection'
import { HowItWorksSection } from './components/sections/HowItWorksSection'
import { DemoShowcaseSection } from './components/sections/DemoShowcaseSection'
import { IntegrationsSection } from './components/sections/IntegrationsSection'
import { SecurityComplianceSection } from './components/sections/SecurityComplianceSection'
import { WhyWiseAiSection } from './components/sections/WhyWiseAiSection'
import { EngagementModelsSection } from './components/sections/EngagementModelsSection'
import { FaqSection } from './components/sections/FaqSection'
import { FinalCtaSection } from './components/sections/FinalCtaSection'
import { Footer } from './components/layout/Footer'
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp'

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Clean Header */}
      <Header />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Industries We Serve (with Real Usecases & High-Res Photography) */}
        <IndustriesSection />

        {/* 3. The Problem & Outcome */}
        <ProblemOutcomeSection />

        {/* 4. Solutions */}
        <SolutionsSection />

        {/* 5. How It Works (4-Phase Engineering Roadmap) */}
        <HowItWorksSection />

        {/* 6. Interactive Live Demo Showcase */}
        <DemoShowcaseSection />

        {/* 7. Integrations */}
        <IntegrationsSection />

        {/* 8. Security & Canadian Compliance (PIPEDA, SOC 2, HIPAA, Sovereignty) */}
        <SecurityComplianceSection />

        {/* 9. Why WISE AI */}
        <WhyWiseAiSection />

        {/* 10. Engagement Models */}
        <EngagementModelsSection />

        {/* 11. FAQ */}
        <FaqSection />

        {/* 12. Final CTA & Lead Capture Form (Posts to n8n Webhook) */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  )
}

export default App
