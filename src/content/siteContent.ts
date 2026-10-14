export interface StatItem {
  id: string
  value: string
  label: string
  description: string
  isPlaceholder?: boolean
}

export interface SolutionItem {
  id: string
  title: string
  description: string
  badge: string
  iconName: string
  benefits: string[]
}

export interface StepItem {
  number: string
  title: string
  subtitle: string
  description: string
  deliverables: string[]
  timeline: string
}

export interface CallMessage {
  speaker: 'agent' | 'customer'
  text: string
  timestamp: string
}

export interface DemoScenario {
  id: string
  title: string
  category: string
  callerName: string
  duration: string
  outcome: string
  summary: string
  audioUrl: string
  dialogue: CallMessage[]
}

export interface IndustryItem {
  id: string
  name: string
  tagline: string
  imageUrl: string
  useCase: string
  keyFeatures: string[]
  impactMetric: string
}

export interface IntegrationCategory {
  category: string
  tools: { name: string; tag?: string }[]
}

export interface ComplianceBadge {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
}

export interface WhyFeature {
  title: string
  description: string
  iconName: string
}

export interface TestimonialItem {
  id: string
  quote: string
  authorRole: string
  industry: string
  isPlaceholder: boolean
}

export interface EngagementPlan {
  id: string
  name: string
  description: string
  badge?: string
  isMostChosen?: boolean
  features: string[]
  idealFor: string
  ctaText: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const siteContent = {
  brand: {
    name: 'Wise AI Automation',
    tagline: 'AI Systems That Do the Work For You',
    location: 'Toronto, Ontario — serving all of Canada 🇨🇦',
    contact: {
      phone: '+1 416 555 0142',
      displayPhone: '+1 (416) 555-0142',
      alternatePhone: '+1 (226) 201-0271',
      whatsappUrl: 'https://wa.me/12262010271?text=Hi%20Wise%20AI%20Automation%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call',
      whatsappMessage: 'Hi Wise AI Automation, I\'d like to book a free strategy call',
      email: 'hello@wiseaiautomation.ca',
      operatingHours: 'Monday – Friday, 8:00 AM – 7:00 PM EST (24/7 AI System Operation)',
    },
    meta: {
      copyrightYear: 2026,
    }
  },

  complianceBadges: [
    {
      id: 'pipeda',
      title: 'PIPEDA Compliant',
      subtitle: 'Canadian Privacy Standard',
      description: 'Strict adherence to Canada\'s Personal Information Protection and Electronic Documents Act with local Canadian data residency options.',
      icon: 'ShieldCheck',
    },
    {
      id: 'soc2',
      title: 'SOC 2 Type II Aligned',
      subtitle: 'Security & Availability',
      description: 'Rigorous architectural controls governing caller data confidentiality, integrity, and end-to-end telemetry isolation.',
      icon: 'Lock',
    },
    {
      id: 'hipaa',
      title: 'HIPAA & PHIPA Ready',
      subtitle: 'Healthcare Grade',
      description: 'Designed for medical clinics and healthcare practices requiring safeguarded patient health information workflows.',
      icon: 'HeartHandshake',
    },
    {
      id: 'encryption',
      title: '256-Bit TLS Telephony',
      subtitle: 'Bank-Grade Transport',
      description: 'All inbound and outbound audio streams and call transcripts are protected with TLS 1.3 and AES-256 encryption.',
      icon: 'FileCheck2',
    },
  ] as ComplianceBadge[],

  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Live Demos', href: '#demo-showcase' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],

  hero: {
    headline: 'Voice agents that sound human and work like your best employee.',
    subheadline: 'WISE AI builds custom voice AI agents that answer every call, qualify every lead and book every appointment, 24/7, in your brand\'s voice.',
    primaryCta: 'Book a free call',
    secondaryCta: 'View live call simulation',
    trustPoints: [
      'Live in 7-14 days',
      'Natural, low-latency voice',
      'Connects to your CRM and calendar',
    ],
    sampleCall: {
      agentName: 'WISE AI Practice Assistant',
      customerName: 'Marcus Vance',
      status: 'Call Completed • 1m 24s',
      transcript: [
        {
          speaker: 'agent' as const,
          text: "Thanks for calling Lakeview Medical Clinic. I'm the digital practice assistant. How can I help you today?",
          timestamp: '00:02'
        },
        {
          speaker: 'customer' as const,
          text: "Hi, I have persistent knee pain and I need to book an in-person consultation with Dr. Miller this Thursday afternoon.",
          timestamp: '00:08'
        },
        {
          speaker: 'agent' as const,
          text: "I can help with that, Marcus. I have an opening this Thursday at 2:30 PM or 4:00 PM. Which works better for you?",
          timestamp: '00:15'
        },
        {
          speaker: 'customer' as const,
          text: "2:30 PM is perfect. Please reserve that slot.",
          timestamp: '00:20'
        },
        {
          speaker: 'agent' as const,
          text: "You're all set for Thursday at 2:30 PM. I've sent an SMS confirmation and digital intake link to this number. Is there anything else?",
          timestamp: '00:28'
        }
      ],
      bookingCard: {
        title: 'Appointment Confirmed',
        doctor: 'Dr. Sarah Miller, MD',
        date: 'Thursday, 2:30 PM EST',
        patient: 'Marcus Vance',
        syncedTo: 'EMR / EHR & Practice Calendar'
      }
    }
  },

  industries: [
    {
      id: 'healthcare',
      name: 'Clinics & Healthcare Practices',
      tagline: 'Patient intake, triage, and physician calendar booking 24/7',
      imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      useCase: 'Handles peak morning phone queues, triages urgent vs routine requests, verifies health insurance details, and schedules directly into Jane App, AthenaHealth, or Telus EMR.',
      keyFeatures: ['PHIPA & HIPAA compliant intake', 'Doctor calendar synchronization', 'Automated SMS intake links'],
      impactMetric: 'Eliminates 90% of morning phone wait times',
    },
    {
      id: 'realestate',
      name: 'Real Estate Agencies',
      tagline: 'Instant response to property sign calls and portal inquiries',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      useCase: 'Answers calls from yard signs and MLS listings within seconds, provides listing specifications, pre-qualifies buyers by budget and timeline, and schedules private showings.',
      keyFeatures: ['Live MLS listing answers', 'Buyer qualification & scoring', 'Instant agent handoff via SMS'],
      impactMetric: '3x higher showing conversion rate',
    },
    {
      id: 'homeservices',
      name: 'Home Service & Trade Companies',
      tagline: 'Emergency dispatch and job quote scheduling around the clock',
      imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      useCase: 'Captures high-ticket HVAC, plumbing, electrical, and roofing calls when techs are in the field. Assesses urgency and assigns dispatch windows directly into ServiceTitan or Jobber.',
      keyFeatures: ['After-hours emergency routing', 'Service territory postal code check', 'Jobber & ServiceTitan sync'],
      impactMetric: 'Zero missed emergency service calls',
    },
    {
      id: 'lawfirms',
      name: 'Law Firms & Legal Practices',
      tagline: 'Professional client intake, case screening, and consultation booking',
      imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
      useCase: 'Screens incoming legal inquiries against firm practice areas, performs basic conflict checks, gathers initial incident details, and schedules paid consultations with partners.',
      keyFeatures: ['Confidential case pre-screening', 'Practice area routing', 'Clio & PracticePanther sync'],
      impactMetric: '100% of new client leads answered immediately',
    },
    {
      id: 'hospitality',
      name: 'Hotels & Restaurants',
      tagline: 'Room reservations, event catering inquiries, and table bookings',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      useCase: 'Answers repetitive guest inquiries about check-in, parking, amenities, and room availability, while taking restaurant reservations and routing catering leads.',
      keyFeatures: ['OpenTable & SevenRooms sync', 'Multilingual guest assistance', 'Direct PBX room routing'],
      impactMetric: 'Saves 25+ front desk hours weekly',
    },
    {
      id: 'automotive',
      name: 'Car Dealerships',
      tagline: 'Service bay appointment booking and inventory test drive scheduling',
      imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      useCase: 'Routes callers between service, parts, and sales. Books routine maintenance and recalls directly into DealerSocket or Reynolds & Reynolds, and schedules test drives.',
      keyFeatures: ['VIN & mileage logging', 'Service bay schedule integration', 'Sales lead warm transfer'],
      impactMetric: '40% increase in scheduled service appointments',
    },
  ] as IndustryItem[],

  theProblem: {
    statement: 'Every missed call is a missed customer.',
    subtext: 'When customers call, they want an immediate answer. Voicemails go unreturned, hold times frustrate callers, and staff get overwhelmed. WISE AI solves this with custom voice agents.',
    stats: [
      {
        id: 'availability',
        value: '24/7/365',
        label: 'Continuous Availability',
        description: 'Zero unanswered calls after business hours, over weekends, or during holidays.',
        isPlaceholder: true,
      },
      {
        id: 'latency',
        value: '< 800 ms',
        label: 'Human-Paced Latency',
        description: 'Instant, natural conversational cadence without awkward robotic pauses.',
        isPlaceholder: true,
      },
      {
        id: 'speed',
        value: '3x Faster',
        label: 'Lead Response Time',
        description: 'Instant inbound pick-up and outbound callbacks within seconds of form submissions.',
        isPlaceholder: true,
      },
      {
        id: 'reduction',
        value: '60%+',
        label: 'Fewer Missed Opportunities',
        description: 'Eliminates busy signals and long hold queues during sudden call volume spikes.',
        isPlaceholder: true,
      },
    ] as StatItem[],
  },

  whatWeBuild: {
    eyebrow: 'WHAT WE BUILD',
    headline: 'AI systems that do the work for you',
    subheadline: 'From the first phone ring to the final invoice, we automate the busywork so your team can focus on customers.',
  },

  solutions: [
    {
      id: 'voice-ai',
      title: 'Voice AI Agents',
      badge: '24/7 Phone Answering',
      iconName: 'PhoneCall',
      description: 'AI phone agents that answer every call, book appointments, and qualify leads — 24/7, in English and French.',
      benefits: ['Instant 1st ring pick-up', 'Appointment booking & triage', 'Bilingual English & French support']
    },
    {
      id: 'ai-automation',
      title: 'AI Automation',
      badge: 'End-to-End Workflow',
      iconName: 'Workflow',
      description: 'Automate repetitive work: follow-ups, invoicing, data entry, and CRM updates across the tools you already use.',
      benefits: ['CRM data entry & syncing', 'Automated follow-ups & billing', 'Cross-tool custom webhooks']
    },
    {
      id: 'ai-chatbots',
      title: 'AI Chatbots',
      badge: 'On-Site Lead Capture',
      iconName: 'MessageSquare',
      description: 'Website chatbots trained on your business that answer questions, capture leads, and hand off to your team.',
      benefits: ['Trained on your knowledge base', 'Captures qualified inbound leads', 'Warm live handoff to staff']
    },
    {
      id: 'scheduling-apps',
      title: 'Scheduling Apps',
      badge: 'Zero Double-Bookings',
      iconName: 'Calendar',
      description: 'Smart booking systems with reminders, time-zone handling, and calendar sync — built for your workflow.',
      benefits: ['Real-time 2-way calendar sync', 'Automated SMS/email reminders', 'Custom buffer times & time zones']
    },
    {
      id: 'website-creation',
      title: 'Website Creation',
      badge: 'Conversion-Optimized',
      iconName: 'Globe',
      description: 'Fast, modern websites designed to convert visitors into customers, with AI built in from day one.',
      benefits: ['High-converting modern UI', 'Built-in AI lead capture & forms', 'Sub-second page load performance']
    },
    {
      id: 'app-development',
      title: 'App Development',
      badge: 'Web & Mobile',
      iconName: 'Smartphone',
      description: "Custom web and mobile apps that put your business in your customers' pockets.",
      benefits: ['Custom client & staff portals', 'iOS & Android responsive apps', 'Secure cloud backends & APIs']
    },
  ] as SolutionItem[],

  howItWorks: [
    {
      number: '01',
      title: 'Discovery & Telephony Audit',
      subtitle: 'Mapping your caller intents, edge cases, and call flows',
      description: 'We audit your historical call recordings, frequently asked questions, qualification rules, and existing Canadian phone setup to engineer a precise operational blueprint.',
      deliverables: [
        'Complete Call Logic & Decision Tree',
        'FAQ & Objection Knowledge Base',
        'Telephony Architecture Assessment'
      ],
      timeline: 'Days 1 – 3'
    },
    {
      number: '02',
      title: 'Voice Persona & Script Engineering',
      subtitle: 'Designing natural speech cadence and conversational guardrails',
      description: 'We engineer a tailored neural voice with natural Canadian conversational cadence, zero robotic awkward pauses, and strict guardrails to eliminate hallucinations.',
      deliverables: [
        'Custom Neural Voice Model Selection',
        'Strict Anti-Hallucination Guardrails',
        'Seamless Human Transfer Protocols'
      ],
      timeline: 'Days 4 – 7'
    },
    {
      number: '03',
      title: 'Two-Way Telephony & CRM Integration',
      subtitle: 'Connecting live calendars, EHR/EMR, and dispatch systems',
      description: 'We connect your agent directly into your phone lines (Twilio, Bell, Rogers, SIP PBX), calendar (Google, Outlook, Jane App), and CRM for real-time bi-directional data flow.',
      deliverables: [
        'Direct Phone Line / SIP Trunk Hookup',
        'Live Calendar Conflict Resolution',
        'Automated CRM Lead & Transcript Logging'
      ],
      timeline: 'Days 8 – 11'
    },
    {
      number: '04',
      title: 'Live Stress-Testing & Monitored Rollout',
      subtitle: 'Rigorous scenario verification before going 100% live',
      description: 'We run 100+ simulated test calls with varied accents, background noise, and edge cases. Once verified, we route live calls with shadow monitoring and weekly optimization.',
      deliverables: [
        '100+ Scenario Stress-Test Audit',
        'Fail-safe Fallback Routing Activated',
        'Weekly Prompt Tuning & Call Analytics'
      ],
      timeline: 'Days 12 – 14'
    },
  ] as StepItem[],

  demoScenarios: [
    {
      id: 'clinic',
      title: 'Dental & Healthcare Practice',
      category: 'Healthcare & Dental Practices',
      callerName: 'Patient: Dental Intake',
      duration: '1m 12s',
      outcome: 'Consultation Scheduled & EMR Logged',
      summary: 'Patient calls dental clinic to schedule dental checkup. Voice AI checks calendar openings, answers questions, and locks in appointment.',
      audioUrl: 'https://storage.googleapis.com/synthflow-website-assets/Dental%20%28Healthcare%29.mp3',
      dialogue: [
        {
          speaker: 'agent',
          timestamp: '00:02',
          text: "Thank you for calling Lakeview Health Clinic. How can I help you today?"
        },
        {
          speaker: 'customer',
          timestamp: '00:08',
          text: "Hi, I'd like to book an appointment for a dental checkup and teeth cleaning this week if possible."
        },
        {
          speaker: 'agent',
          timestamp: '00:15',
          text: "I can help with that right away. Do you have a preferred day or time that works best for you?"
        },
        {
          speaker: 'customer',
          timestamp: '00:22',
          text: "Thursday afternoon would be great."
        },
        {
          speaker: 'agent',
          timestamp: '00:28',
          text: "Dr. Watson has an opening this Thursday at 2:30 PM. Shall I reserve that slot for you?"
        },
        {
          speaker: 'customer',
          timestamp: '00:34',
          text: "Yes, 2:30 PM is perfect."
        },
        {
          speaker: 'agent',
          timestamp: '00:39',
          text: "You're all confirmed for Thursday at 2:30 PM. I've sent a digital intake link and SMS confirmation to your number. See you then!"
        }
      ]
    },
    {
      id: 'realestate',
      title: 'Real Estate Outbound Reactivation',
      category: 'Real Estate & Property',
      callerName: 'Lead: Past Buyer',
      duration: '0m 45s',
      outcome: 'Lead Reactivated & Showing Scheduled',
      summary: 'Voice AI conducts proactive outbound follow-up to previous buyer inquiries, confirms buying criteria, and arranges a private home tour.',
      audioUrl: 'https://storage.googleapis.com/synthflow-website-assets/Real%20Estate%20Outbound%20Reactivation%20Campaign%20%28Real%20Estate%29.mp3',
      dialogue: [
        {
          speaker: 'agent',
          timestamp: '00:02',
          text: "Hi there! This is Alex from Summit Realty. I'm following up on your previous inquiry regarding homes in Ontario. Are you still looking to buy this season?"
        },
        {
          speaker: 'customer',
          timestamp: '00:09',
          text: "Yes, we've actually been looking for 4-bedroom detached homes with a yard under $900k."
        },
        {
          speaker: 'agent',
          timestamp: '00:16',
          text: "That's fantastic. We just listed a beautiful 4-bedroom property on Highland Avenue that matches your criteria exactly. Would you like to tour it this Saturday?"
        },
        {
          speaker: 'customer',
          timestamp: '00:26',
          text: "Saturday afternoon around 2 PM would be ideal."
        },
        {
          speaker: 'agent',
          timestamp: '00:31',
          text: "Saturday at 2:00 PM is reserved for you. Our listing specialist Jordan will meet you there. I've sent the address and confirmation to your phone."
        }
      ]
    },
    {
      id: 'software',
      title: 'Software Demo Booking (Larissa)',
      category: 'B2B SaaS & Tech',
      callerName: 'Prospect: Operations Director',
      duration: '0m 58s',
      outcome: 'Discovery Call Qualified & Calendar Locked',
      summary: 'Larissa engages B2B software inquiries, evaluates current tool stack, identifies operational needs, and schedules an account executive demonstration.',
      audioUrl: 'https://storage.googleapis.com/synthflow-website-assets/Software%20Demo%20Booking%20Larissa%20%28Software%29.mp3',
      dialogue: [
        {
          speaker: 'agent',
          timestamp: '00:02',
          text: "Hi! This is Larissa from the product team. Thanks for requesting a walkthrough of our automation platform. What's the main bottleneck you're looking to solve?"
        },
        {
          speaker: 'customer',
          timestamp: '00:10',
          text: "We spend way too many hours manually transferring lead data between our CRM and invoicing tools."
        },
        {
          speaker: 'agent',
          timestamp: '00:18',
          text: "That's exactly what our workflow connectors automate in real time. How many team members would be using the system?"
        },
        {
          speaker: 'customer',
          timestamp: '00:26',
          text: "About 15 to 20 people across our sales and operations teams."
        },
        {
          speaker: 'agent',
          timestamp: '00:32',
          text: "Perfect fit for our business tier. Let's get you set up with a tailored product demo with our solutions engineer. Do you have 20 minutes this Wednesday at 11:00 AM EST?"
        },
        {
          speaker: 'customer',
          timestamp: '00:43',
          text: "Wednesday at 11 AM works well."
        },
        {
          speaker: 'agent',
          timestamp: '00:47',
          text: "Awesome! The calendar invite and Zoom link are in your inbox. Looking forward to showing you the platform."
        }
      ]
    }
  ] as DemoScenario[],

  integrations: {
    heading: 'Plugs into the tools you already use',
    subheading: 'WISE AI connects seamlessly to your existing telephony, CRM, and calendar stack without forcing your team to learn a new interface.',
    categories: [
      {
        category: 'CRMs',
        tools: [
          { name: 'HubSpot', tag: 'Native API' },
          { name: 'Salesforce', tag: 'Enterprise' },
          { name: 'Zoho CRM' },
          { name: 'GoHighLevel' },
          { name: 'Pipedrive' },
        ]
      },
      {
        category: 'Calendars & Scheduling',
        tools: [
          { name: 'Google Calendar' },
          { name: 'Calendly' },
          { name: 'Microsoft Outlook' },
          { name: 'Jane App (Health)' },
          { name: 'Acuity Scheduling' },
        ]
      },
      {
        category: 'Telephony & PBX',
        tools: [
          { name: 'Twilio' },
          { name: 'RingCentral' },
          { name: 'Vonage' },
          { name: 'Nextiva' },
          { name: 'Canadian SIP Trunking' },
        ]
      },
      {
        category: 'Helpdesks & Support',
        tools: [
          { name: 'Zendesk' },
          { name: 'Freshdesk' },
          { name: 'Intercom' },
          { name: 'Gorgias' },
        ]
      },
      {
        category: 'Automation & Messaging',
        tools: [
          { name: 'WhatsApp Business' },
          { name: 'Slack' },
          { name: 'Zapier' },
          { name: 'Make.com' },
          { name: 'Custom REST Webhooks' },
        ]
      },
      {
        category: 'Payments & E-Commerce',
        tools: [
          { name: 'Stripe' },
          { name: 'Shopify' },
          { name: 'Square' },
        ]
      }
    ] as IntegrationCategory[]
  },

  whyWiseAi: {
    heading: 'Not a template. A voice built for your business.',
    subheading: 'Generic voice bots sound robotic, make mistakes, and frustrate callers. We build dedicated, customized agents engineered around your actual business operations.',
    points: [
      {
        title: 'Custom Voice & Personality',
        description: 'Tuned specifically to reflect your brand tone — whether clinical and reassuring, professional and authoritative, or energetic and warm.',
        iconName: 'Mic'
      },
      {
        title: 'Human-Level Response Speed',
        description: 'Sub-second audio latency ensures callers never experience awkward delays or robotic conversational pauses.',
        iconName: 'Zap'
      },
      {
        title: 'Secure Handling of Call Data',
        description: 'Enterprise-grade encryption for all call transcripts, caller telemetry, and PII, complying with strict Canadian PIPEDA and SOC 2 standards.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Smooth Handoff to a Human',
        description: 'When callers request a human or an edge case occurs, the agent executes a warm live transfer with the conversation context intact.',
        iconName: 'PhoneForwarded'
      },
      {
        title: 'Ongoing Optimization & Reporting',
        description: 'Continuous analysis of call recordings, conversation logs, and sentiment metrics to constantly refine accuracy and conversion.',
        iconName: 'TrendingUp'
      }
    ] as WhyFeature[]
  },

  testimonials: [
    {
      id: 'test-1',
      quote: 'Our front desk was missing dozens of patient calls during morning rushes. The custom voice agent handles initial triage and scheduling seamlessly, cutting missed calls to near zero.',
      authorRole: 'Practice Manager (Placeholder)',
      industry: 'Multi-location Dental & Health Practice',
      isPlaceholder: true
    },
    {
      id: 'test-2',
      quote: 'Speed-to-lead changed overnight. Every prospective homebuyer calling from our yard signs or portals gets an instant, natural voice conversation and an appointment booked directly in our CRM.',
      authorRole: 'Managing Broker (Placeholder)',
      industry: 'Regional Real Estate Brokerage',
      isPlaceholder: true
    },
    {
      id: 'test-3',
      quote: 'Handling emergency after-hours dispatch without putting stressed homeowners on hold has saved our dispatch team hours every single night.',
      authorRole: 'Operations Director (Placeholder)',
      industry: 'Residential HVAC & Plumbing Services',
      isPlaceholder: true
    }
  ] as TestimonialItem[],

  engagementModels: [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Ideal for single-location businesses looking to eliminate missed calls and automate basic appointments.',
      features: [
        'Dedicated custom voice agent',
        'Standard business hours or after-hours coverage',
        'Inbound call answering & triage',
        'Direct calendar integration (Google / Outlook / Calendly)',
        'Standard CRM lead logging',
        'Email & SMS call summary alerts',
        '7-14 day deployment turnaround'
      ],
      idealFor: 'Solo practitioners, boutique clinics, local service firms',
      ctaText: 'Contact us for pricing'
    },
    {
      id: 'growth',
      name: 'Growth',
      isMostChosen: true,
      badge: 'Most Chosen',
      description: 'Full-featured Voice AI for high-volume businesses requiring inbound qualification, outbound follow-ups, and CRM workflows.',
      features: [
        'Everything in Starter, plus:',
        '24/7/365 full-time inbound & outbound coverage',
        'Multi-step lead qualification & custom scoring',
        'Outbound appointment confirmation & follow-up calls',
        'Two-way deep CRM integration (HubSpot, Salesforce, GHL)',
        'Smart warm transfer to live team members',
        'Multi-language support (English + French)',
        'Weekly prompt tuning & performance analytics'
      ],
      idealFor: 'Growing medical practices, busy real estate teams, home service companies',
      ctaText: 'Contact us for pricing'
    },
    {
      id: 'custom',
      name: 'Custom / Enterprise',
      description: 'Tailored architecture for multi-location groups, high-compliance organizations, and custom telephony setups.',
      features: [
        'Everything in Growth, plus:',
        'Unlimited concurrent call handling capacity',
        'Custom voice cloning & bespoke persona modeling',
        'Multi-branch / multi-provider routing logic',
        'Canadian on-premise PBX or SIP trunk integration',
        'Dedicated Canadian account engineer & SLA guarantees',
        'Custom PIPEDA/HIPAA Business Associate Agreements',
        'Continuous bespoke model fine-tuning'
      ],
      idealFor: 'Hospital networks, franchise operations, enterprise dealerships',
      ctaText: 'Contact us for pricing'
    }
  ] as EngagementPlan[],

  faq: [
    {
      id: 'faq-1',
      question: 'How natural does the voice sound?',
      answer: 'Our voice agents use the latest low-latency neural speech synthesis models tuned with realistic inflection, natural breathing pauses, and contextual pacing. Most callers cannot distinguish the voice agent from a real human receptionist.'
    },
    {
      id: 'faq-2',
      question: 'How long does setup take?',
      answer: 'A standard custom voice agent is built, tested, and live within 7 to 14 days. We handle the discovery, conversational scripting, voice design, integration with your CRM and calendar, and live testing.'
    },
    {
      id: 'faq-3',
      question: 'Is WISE AI compliant with Canadian privacy laws (PIPEDA)?',
      answer: 'Yes. As a Canadian business based in Ontario, WISE AI is built to comply with PIPEDA (Personal Information Protection and Electronic Documents Act) and provincial health privacy standards (such as Ontario\'s PHIPA). We offer data residency options to ensure your customer data stays strictly on Canadian soil.'
    },
    {
      id: 'faq-4',
      question: 'Can the agent transfer calls to a human team member?',
      answer: 'Yes. The voice agent can execute warm transfers to any specified phone number or department whenever a caller explicitly asks for a human, when an urgent situation arises, or when high-value VIP criteria are met.'
    },
    {
      id: 'faq-5',
      question: 'Which languages are supported?',
      answer: 'We support over 30 languages including English and French (Canadian French & Parisian French), Spanish, and German. Agents can automatically detect the language a caller speaks and switch dynamically in real time.'
    },
    {
      id: 'faq-6',
      question: 'Is call data secure and encrypted?',
      answer: 'Yes. All voice data, transcripts, and customer records are transmitted over TLS 1.3 encryption and stored with AES-256 encryption. We adhere to strict data privacy principles, operate with SOC 2 Type II controls, and never sell or misuse your proprietary conversation data.'
    },
    {
      id: 'faq-7',
      question: 'What phone systems and CRMs does it integrate with?',
      answer: 'WISE AI connects directly to major Canadian and international telephony systems (Twilio, RingCentral, Vonage, Bell/Rogers SIP, traditional PBX) and CRMs (HubSpot, Salesforce, GoHighLevel, Jane App, Clio, Jobber, Zoho).'
    },
    {
      id: 'faq-8',
      question: 'How is pricing structured?',
      answer: 'Because every business has different call volumes, workflows, and integration requirements, we do not use rigid cookie-cutter plans. Pricing includes a one-time custom build and onboarding fee plus a predictable monthly usage model based on your expected call minutes. Contact us for a tailored quote.'
    }
  ] as FaqItem[],

  finalCta: {
    eyebrow: 'GET STARTED',
    headline: 'Book your free strategy call',
    subheadline: "Tell us about your business and we'll show you exactly where AI can save you hours every week. No pressure, no jargon — just a clear plan.",
    phone: '+1 (416) 555-0142',
    displayPhone: '+1 (416) 555-0142',
    email: 'hello@wiseaiautomation.ca',
    location: 'Toronto, Ontario — serving all of Canada',
    reassuranceCopy: 'Speak with our Canadian AI automation engineers. No pressure, no jargon.',
    benefits: [
      'Tailored assessment of where AI can save your team 10+ hours a week',
      'Clear roadmap across Voice AI, automation, CRM, and custom apps',
      'Zero obligation, zero pressure — just an actionable execution plan'
    ],
    whatsappPrompt: 'Prefer a fast chat? Message us directly on WhatsApp:'
  },

  footer: {
    description: 'Wise AI Automation designs, builds, and deploys intelligent AI systems that do the work for you — from voice telephony to end-to-end operational automation. Based in Toronto, Ontario.',
    links: {
      solutions: [
        { label: 'Voice AI Agents', href: '/services/voice-ai-agents' },
        { label: 'AI Automation', href: '/services/ai-automation' },
        { label: 'AI Chatbots', href: '/services/ai-chatbots' },
        { label: 'Scheduling Apps', href: '/services/scheduling-apps' },
        { label: 'Website Creation', href: '/services/website-creation' },
        { label: 'App Development', href: '/services/app-development' },
      ],
      company: [
        { label: 'Services We Provide', href: '#services' },
        { label: 'Industries We Serve', href: '#industries' },
        { label: 'Live Demos', href: '#demo-showcase' },
        { label: 'Security & Compliance', href: '#security-compliance' },
        { label: 'Integrations', href: '#integrations' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
      legal: [
        { label: 'Privacy Policy (PIPEDA)', href: '#privacy-policy' },
        { label: 'Terms of Service', href: '#terms-of-service' },
        { label: 'Security Overview', href: '#security-compliance' },
      ]
    }
  }
}
