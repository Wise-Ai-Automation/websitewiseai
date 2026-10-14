import React from 'react'
import { HeroSection } from '../components/sections/HeroSection'
import { IndustriesSection } from '../components/sections/IndustriesSection'
import { ProblemOutcomeSection } from '../components/sections/ProblemOutcomeSection'
import { SolutionsSection } from '../components/sections/SolutionsSection'
import { DemoShowcaseSection } from '../components/sections/DemoShowcaseSection'
import { IntegrationsSection } from '../components/sections/IntegrationsSection'
import { SecurityComplianceSection } from '../components/sections/SecurityComplianceSection'
import { WhyWiseAiSection } from '../components/sections/WhyWiseAiSection'
import { EngagementModelsSection } from '../components/sections/EngagementModelsSection'
import { FaqSection } from '../components/sections/FaqSection'
import { FinalCtaSection } from '../components/sections/FinalCtaSection'

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Industries We Serve (with Real Usecases & High-Res Photography) */}
      <IndustriesSection />

      {/* 3. The Problem & Outcome */}
      <ProblemOutcomeSection />

      {/* 4. What We Build / 6 Services */}
      <SolutionsSection />

      {/* 5. Interactive Live Demo Showcase */}
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
    </>
  )
}

export default HomePage
