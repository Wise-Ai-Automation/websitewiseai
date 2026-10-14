export interface ServiceFeature {
  title: string
  description: string
  iconName: string
}

export interface ServiceProcessStep {
  number: string
  title: string
  description: string
}

export interface ServiceFaq {
  question: string
  answer: string
}

export interface ServiceStat {
  value: string
  label: string
}

export interface ServiceMockupTile {
  iconName: string
  label: string
  value: string
  note: string
}

export interface ServiceDetail {
  id: string
  slug: string
  iconName: string
  badge: string
  name: string
  shortDescription: string
  heroHeadline: string
  heroDescription: string
  heroStats: ServiceStat[]
  mockupTitle: string
  mockupTiles: ServiceMockupTile[]
  heroImageUrl: string
  heroImageAlt: string
  overviewHeading: string
  overviewBody: string
  features: ServiceFeature[]
  howItWorks: ServiceProcessStep[]
  idealFor: string[]
  faqs: ServiceFaq[]
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: 'voice-ai',
    slug: 'voice-ai-agents',
    iconName: 'PhoneCall',
    badge: '24/7 Phone Answering',
    name: 'Voice AI Agents',
    shortDescription: 'AI phone agents that answer every call, book appointments, and qualify leads — 24/7, in English and French.',
    heroHeadline: 'A professional AI receptionist for your business.',
    heroDescription: 'Answer routine calls, capture enquiries, and support bookings — even when your team is busy or the day is done. Our voice agents pick up on the first ring, hold a natural conversation, and book directly into your calendar, in English and French.',
    heroStats: [
      { value: '< 800ms', label: 'Conversational latency' },
      { value: '24/7/365', label: 'Coverage, no exceptions' },
      { value: '7–14 days', label: 'From kickoff to live' },
    ],
    mockupTitle: "Today's call activity",
    mockupTiles: [
      { iconName: 'PhoneIncoming', label: 'Calls answered today', value: '42', note: 'Zero missed calls' },
      { iconName: 'Clock', label: 'Average pick-up', value: '1st ring', note: '< 800ms response' },
      { iconName: 'CalendarCheck2', label: 'Appointments booked', value: '11', note: 'Synced to calendar' },
      { iconName: 'Languages', label: 'Languages handled', value: 'EN / FR', note: 'Auto-detected' },
    ],
    heroImageUrl: 'https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'A professional taking a phone call at a café table with a laptop open',
    overviewHeading: 'Built around your actual call flow, not a generic script',
    overviewBody: 'We start by auditing your real call recordings, FAQs, and booking rules, then engineer a custom neural voice with natural Canadian cadence and strict guardrails against hallucination. The agent answers questions, triages urgency, checks live calendar availability, and books the appointment directly into your system — all before the caller would have finished leaving a voicemail.',
    features: [
      { title: 'AI call answering & FAQs', description: 'Every call is picked up immediately and handled using your business knowledge base — no hold queues, no voicemail.', iconName: 'PhoneIncoming' },
      { title: 'Natural, low-latency voice', description: 'Sub-second response times with natural pacing — most callers cannot tell it apart from a human receptionist.', iconName: 'AudioWaveform' },
      { title: 'Booking & calendar integration', description: 'Two-way sync with Google Calendar, Outlook, Calendly, or Jane App locks in appointments in real time.', iconName: 'CalendarCheck2' },
      { title: 'Lead capture & qualification', description: 'Asks the right questions, scores intent, and routes high-value callers to the right person.', iconName: 'ListChecks' },
      { title: 'Bilingual English & French', description: 'Auto-detects the caller\'s language and switches naturally mid-conversation.', iconName: 'Languages' },
      { title: 'Warm human transfer', description: 'Hands off to your team with full conversation context whenever a caller asks for a person.', iconName: 'PhoneForwarded' },
    ],
    howItWorks: [
      { number: '01', title: 'Discovery & call audit', description: 'We review your historical calls, FAQs, and booking rules to map every caller intent and edge case.' },
      { number: '02', title: 'Voice & script engineering', description: 'We build a custom neural voice and conversation flow with deterministic guardrails against hallucination.' },
      { number: '03', title: 'Telephony & CRM integration', description: 'We connect your phone lines, calendar, and CRM so bookings and transcripts sync automatically.' },
      { number: '04', title: 'Live testing & rollout', description: 'We run stress tests across accents and edge cases, then route live calls with shadow monitoring.' },
    ],
    idealFor: ['Clinics & healthcare practices', 'Real estate agencies', 'Home service & trade companies', 'Law firms & legal practices', 'Hotels & restaurants', 'Car dealerships'],
    faqs: [
      { question: 'How natural does the voice actually sound?', answer: 'We use low-latency neural speech synthesis tuned with realistic inflection, breathing pauses, and contextual pacing. Most callers cannot distinguish the agent from a real receptionist.' },
      { question: 'How long until it\'s live?', answer: 'A standard voice agent is built, tested, and answering real calls within 7 to 14 days, including discovery, scripting, voice design, and integration.' },
      { question: 'Can it transfer to a real person?', answer: 'Yes. The agent executes a warm transfer with full conversation context whenever a caller asks for a human or an edge case requires one.' },
      { question: 'Is it compliant with Canadian privacy law?', answer: 'Yes. We build to PIPEDA and provincial standards like Ontario\'s PHIPA, with Canadian data residency options for healthcare and enterprise clients.' },
      { question: 'What phone systems does it work with?', answer: 'We connect directly to Twilio, RingCentral, Vonage, Bell/Rogers SIP trunks, and traditional PBX setups.' },
    ],
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    iconName: 'Workflow',
    badge: 'End-to-End Workflow',
    name: 'AI Automation',
    shortDescription: 'Automate repetitive work: follow-ups, invoicing, data entry, and CRM updates across the tools you already use.',
    heroHeadline: 'Make work flow. Automate what slows you down.',
    heroDescription: 'Connect your tools, streamline repetitive tasks, and give your team more time for meaningful work — with practical AI and workflow automation built around your actual business process, not a generic template.',
    heroStats: [
      { value: '0', label: 'Manual re-entry between tools' },
      { value: '24/7', label: 'Follow-ups keep running' },
      { value: '7–14 days', label: 'Typical build timeline' },
    ],
    mockupTitle: 'A connected workflow',
    mockupTiles: [
      { iconName: 'Database', label: 'Leads synced to CRM', value: '128', note: 'Zero manual entry' },
      { iconName: 'MessageSquareText', label: 'Follow-ups sent', value: '37', note: 'On schedule' },
      { iconName: 'Receipt', label: 'Invoices generated', value: '19', note: 'Auto-triggered' },
      { iconName: 'Webhook', label: 'Connected tools', value: '6', note: 'Running live' },
    ],
    heroImageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'Two team members reviewing an automated workflow dashboard on their laptops',
    overviewHeading: 'Your existing tools, finally talking to each other',
    overviewBody: 'Most businesses lose hours a week moving the same information between a CRM, a calendar, an invoicing tool, and email. We map that workflow end-to-end and build automations — using native integrations, Zapier, Make.com, or custom webhooks — so a new lead, a booked job, or a closed deal triggers everything downstream automatically, with human approval kept wherever a decision actually matters.',
    features: [
      { title: 'Business process automation', description: 'Connect your apps, route requests, trigger tasks, and reduce manual data entry across everyday operations.', iconName: 'Webhook' },
      { title: 'AI knowledge & training', description: 'Help staff find answers from your approved company policies, procedures, and training resources, with sources cited.', iconName: 'BookOpen' },
      { title: 'CRM & lead management', description: 'Capture inquiries, keep customer records organized, assign follow-ups, and help your team stay on top of every lead.', iconName: 'Database' },
      { title: 'Document & reporting automation', description: 'Extract information, prepare summaries, route documents for approval, and generate repeatable reports.', iconName: 'Receipt' },
      { title: 'Automated follow-up sequences', description: 'SMS and email follow-ups fire on your timeline, not whenever someone remembers.', iconName: 'MessageSquareText' },
      { title: 'Reporting dashboards', description: 'A live view of what\'s moving through your pipeline, without exporting a single spreadsheet.', iconName: 'BarChart3' },
    ],
    howItWorks: [
      { number: '01', title: 'Map your process', description: 'We learn how the task works today, what slows it down, which systems are involved, and where human approval is needed.' },
      { number: '02', title: 'Build and connect', description: 'We configure the workflow, connect your approved tools, test different scenarios, and add safeguards for errors or exceptions.' },
      { number: '03', title: 'Monitor and improve', description: 'Your team can review activity, track exceptions, and refine the workflow as your business processes change.' },
      { number: '04', title: 'Expand when ready', description: 'We start with one business problem, prove the value, then extend automation to the next bottleneck.' },
    ],
    idealFor: ['Healthcare & long-term care', 'Professional services', 'Real estate & mortgages', 'Home services & trades', 'Corporate teams & HR', 'Accounting & finance'],
    faqs: [
      { question: 'What tools can you connect?', answer: 'Most CRMs, calendars, helpdesks, and payment tools with a public API — including HubSpot, Salesforce, GoHighLevel, Google Calendar, Jane App, Stripe, and Shopify. If it has an API, we can usually wire it in.' },
      { question: 'Do we need to replace our existing software?', answer: 'Usually not. Where supported, workflows connect to the tools you already use — we assess your current systems before recommending any changes.' },
      { question: 'Can AI make decisions automatically?', answer: 'AI can classify, summarize, and extract information. For sensitive or consequential actions, the workflow requires a human to review and approve the result.' },
      { question: 'How long does a typical build take?', answer: 'Most automation builds are live within 7 to 14 days, depending on how many tools and workflows are involved.' },
      { question: 'Is our data secure in transit?', answer: 'Yes. All data moving between systems is encrypted in transit, and we follow PIPEDA-aligned handling practices throughout.' },
    ],
  },
  {
    id: 'ai-chatbots',
    slug: 'ai-chatbots',
    iconName: 'MessageSquare',
    badge: 'On-Site Lead Capture',
    name: 'AI Chatbots',
    shortDescription: 'Website chatbots trained on your business that answer questions, capture leads, and hand off to your team.',
    heroHeadline: 'Your business, answering in seconds — day or night.',
    heroDescription: 'A chatbot trained on your actual services, FAQs, and policies — not a generic script. It answers visitor questions with sourced, accurate information, captures and qualifies leads around the clock, and hands off to your team the moment a conversation needs a human.',
    heroStats: [
      { value: '24/7', label: 'Visitor coverage' },
      { value: '< 2s', label: 'Typical response time' },
      { value: '1 script tag', label: 'To install on your site' },
    ],
    mockupTitle: 'Live conversation activity',
    mockupTiles: [
      { iconName: 'MessageSquare', label: 'Conversations today', value: '64', note: 'Answered instantly' },
      { iconName: 'UserCheck', label: 'Leads qualified', value: '22', note: 'Captured & scored' },
      { iconName: 'Handshake', label: 'Handed to your team', value: '9', note: 'Warm handoff' },
      { iconName: 'Clock', label: 'Average response', value: '< 2s', note: 'Day or night' },
    ],
    heroImageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'A person checking a chat conversation on a phone next to an open laptop',
    overviewHeading: 'Trained on your content, with sources — not a stock FAQ',
    overviewBody: 'We train the chatbot on your actual services, pricing structure, policies, and FAQs, then design conversation flows for your most common visitor questions. It shows the source behind an answer where relevant, says when it cannot verify something, and captures contact details and intent before handing off — so your team opens a conversation that is already qualified instead of starting from "hi, I have a question."',
    features: [
      { title: 'Answers grounded in your content', description: 'Responses are based on your actual services, FAQs, and policies — not generic AI guesses, and can reference the source document.', iconName: 'BookOpen' },
      { title: 'Lead capture & qualification', description: 'Collects contact details and qualifying answers before a conversation ever reaches your inbox.', iconName: 'UserCheck' },
      { title: 'Warm handoff to your team', description: 'Escalates to a live chat or booked call the moment a conversation needs a human touch, or when it can\'t verify an answer.', iconName: 'Handshake' },
      { title: 'Multi-language support', description: 'Serves visitors in English and French, with additional languages available on request.', iconName: 'Languages' },
      { title: 'CRM lead logging', description: 'Every captured lead and transcript is logged directly into your CRM in real time.', iconName: 'Database' },
      { title: 'One script tag to install', description: 'Drops into any website platform — no rebuild required.', iconName: 'Code2' },
    ],
    howItWorks: [
      { number: '01', title: 'Train on your content', description: 'We ingest your website, FAQs, and service documentation to ground the chatbot\'s answers.' },
      { number: '02', title: 'Design conversation flows', description: 'We map the questions visitors actually ask and the qualifying details you need to capture.' },
      { number: '03', title: 'Embed on your site', description: 'A single script tag adds the chatbot to your site, styled to match your brand.' },
      { number: '04', title: 'Review & refine', description: 'We review real conversations and tune responses so accuracy improves over time.' },
    ],
    idealFor: ['Clinics & healthcare practices', 'Real estate agencies', 'Home service & trade companies', 'Law firms & legal practices', 'Hotels & restaurants', 'Car dealerships'],
    faqs: [
      { question: 'Will it work with my existing website?', answer: 'Yes. The chatbot installs via a single script tag and works on any website platform, including WordPress, Webflow, and custom builds.' },
      { question: 'Will the chatbot make up answers?', answer: 'It\'s built to answer from your approved content, cite the source where relevant, and say when it can\'t find a reliable answer rather than guessing — then route the question to your team.' },
      { question: 'Can it book appointments directly?', answer: 'Yes, when paired with our scheduling integration it can check availability and book directly into your calendar during the conversation.' },
      { question: 'Does it integrate with our CRM?', answer: 'Yes. Captured leads and full transcripts sync to your CRM in real time, the same way our voice agents do.' },
      { question: 'Is visitor data handled securely?', answer: 'Yes. Conversations are encrypted in transit and handled under PIPEDA-aligned data practices.' },
    ],
  },
  {
    id: 'scheduling-apps',
    slug: 'scheduling-apps',
    iconName: 'Calendar',
    badge: 'Zero Double-Bookings',
    name: 'Scheduling Apps',
    shortDescription: 'Smart booking systems with reminders, time-zone handling, and calendar sync — built for your workflow.',
    heroHeadline: 'Scheduling that keeps your business moving.',
    heroDescription: 'Manage appointments, rescheduling, staff rosters, open shifts, and call-outs in one connected workflow. Spend less time chasing updates by phone or text, and more time supporting your customers and team.',
    heroStats: [
      { value: '0', label: 'Double-bookings' },
      { value: '2-way', label: 'Real-time calendar sync' },
      { value: '7–14 days', label: 'Typical build timeline' },
    ],
    mockupTitle: 'Scheduling overview — today',
    mockupTiles: [
      { iconName: 'CalendarCheck2', label: 'Appointments today', value: '18', note: 'Zero conflicts' },
      { iconName: 'Users', label: 'Staff scheduled', value: '6', note: 'Across all roles' },
      { iconName: 'SlidersHorizontal', label: 'Open shifts filled', value: '3', note: 'Auto-notified' },
      { iconName: 'BellRing', label: 'Reminders sent', value: '24', note: 'No-shows reduced' },
    ],
    heroImageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'An open planner with a monthly calendar and a cup of coffee on the desk',
    overviewHeading: 'Scheduling rules that match your real operation',
    overviewBody: 'Generic booking widgets assume every business works the same way. We build around your actual rules — multiple staff, multiple locations, service-specific durations, buffer times between appointments, open-shift coverage, and call-out handling — then connect it to the calendars your team already uses, with automated reminders that cut no-shows.',
    features: [
      { title: 'Appointment booking', description: 'Let customers book services based on staff availability, service duration, and business hours, with confirmations and reminders sent automatically.', iconName: 'CalendarCheck2' },
      { title: 'Rescheduling & cancellations', description: 'Change appointment times, manage cancellations, update calendars, and offer newly available times to waitlisted customers.', iconName: 'RefreshCw' },
      { title: 'Staff scheduling', description: 'Create rosters by role, location, and availability. Track assigned shifts and help managers spot coverage gaps before they become a problem.', iconName: 'Users' },
      { title: 'Open shift management', description: 'Publish uncovered shifts to eligible staff, notify the right team members, and record assignments after manager approval.', iconName: 'SlidersHorizontal' },
      { title: 'Call-out workflows', description: 'Record staff call-outs, flag the affected shift, notify the authorized scheduler, and start a structured coverage process.', iconName: 'BellRing' },
      { title: 'Notifications & reporting', description: 'Send confirmations, reminders, and shift updates, then review changes and coverage status through a central dashboard.', iconName: 'RefreshCw' },
    ],
    howItWorks: [
      { number: '01', title: 'Set your rules', description: 'We configure your services, working hours, roles, availability, and approval requirements.' },
      { number: '02', title: 'Capture a request', description: 'The system receives a booking, reschedule request, availability update, or staff call-out.' },
      { number: '03', title: 'Run the workflow', description: 'We check conditions, update the schedule, and notify the right people automatically.' },
      { number: '04', title: 'Review & improve', description: 'You track outcomes, resolve exceptions, and refine the rules as your operation changes.' },
    ],
    idealFor: ['Healthcare & long-term care', 'Salons, spas & wellness', 'Professional services', 'Home services & trades', 'Recruitment & staffing', 'Multi-location businesses'],
    faqs: [
      { question: 'Which calendars do you support?', answer: 'Google Calendar, Microsoft Outlook, Calendly, Jane App, and Acuity Scheduling, with custom integrations available for other systems.' },
      { question: 'Can it handle multiple staff and locations?', answer: 'Yes. Scheduling rules, availability, and service durations can be set independently per staff member or location.' },
      { question: 'How does a staff call-out work?', answer: 'A call-out flags the affected shift, notifies the authorized scheduler, surfaces eligible coverage options, and tracks the outcome — it never auto-assigns staff without the approvals you require.' },
      { question: 'Can reminders be customized?', answer: 'Yes. You control the channel (SMS or email), timing, and message content for every reminder.' },
      { question: 'Does it work with the voice agent?', answer: 'Yes. Our voice agents and chatbots can book directly into the same scheduling system, so every channel stays in sync.' },
    ],
  },
  {
    id: 'website-creation',
    slug: 'website-creation',
    iconName: 'Globe',
    badge: 'Conversion-Optimized',
    name: 'Website Creation',
    shortDescription: 'Fast, modern websites designed to convert visitors into customers, with AI built in from day one.',
    heroHeadline: 'A better website. A smarter business.',
    heroDescription: 'Modern, mobile-friendly websites for clinics, restaurants, and service businesses — with booking, lead capture, and workflow automation built in from day one, engineered to turn visitors into booked calls instead of bounced tabs.',
    heroStats: [
      { value: 'Sub-second', label: 'Page load performance' },
      { value: 'Built-in', label: 'AI chat & lead capture' },
      { value: 'Mobile-first', label: 'Every build' },
    ],
    mockupTitle: 'Your business, online',
    mockupTiles: [
      { iconName: 'Zap', label: 'Load performance', value: 'Sub-second', note: 'Mobile-optimized' },
      { iconName: 'Target', label: 'Lead capture points', value: '4', note: 'Forms + chatbot' },
      { iconName: 'Search', label: 'SEO foundation', value: 'Ready', note: 'Structured data' },
      { iconName: 'Smartphone', label: 'Mobile-first build', value: '100%', note: 'Every page' },
    ],
    heroImageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'A dark-mode code editor next to a second monitor showing a website design preview',
    overviewHeading: 'A site built to earn the call, not just look good',
    overviewBody: 'We design around your actual conversion goal — a booked call, a filled form, a phone pickup — then build a fast, mobile-first site around it, with an AI chatbot and lead capture wired in from launch day instead of bolted on later. Every project starts with a clear scope before work begins, so there are no surprises in what you\'re getting.',
    features: [
      { title: 'Built for your business type', description: 'Restaurant menus, booking and service pages, online stores, or a professional services site — each built around how customers actually find and use it.', iconName: 'Target' },
      { title: 'Built-in AI lead capture', description: 'A chatbot and lead forms are integrated from day one, not added as an afterthought.', iconName: 'MessageSquare' },
      { title: 'Sub-second load performance', description: 'Optimized builds that load fast on mobile connections, where most visitors actually are.', iconName: 'Zap' },
      { title: 'Mobile-first responsive build', description: 'Designed for phones first, then scaled up — not the other way around.', iconName: 'Smartphone' },
      { title: 'SEO foundation', description: 'Structured data, clean markup, and fast performance give you a real starting position in search.', iconName: 'Search' },
      { title: 'Easy content updates', description: 'You can update copy, images, and offers without waiting on a developer.', iconName: 'FilePenLine' },
    ],
    howItWorks: [
      { number: '01', title: 'Discover & plan', description: 'We learn about your business, customers, pages, features, content, and integrations.' },
      { number: '02', title: 'Design & build', description: 'We design and build a responsive website, organize your content, and configure the agreed functionality.' },
      { number: '03', title: 'AI lead capture integration', description: 'We wire in the chatbot, forms, and CRM logging before launch, not after.' },
      { number: '04', title: 'Test & launch', description: 'We test on mobile and desktop, connect your domain and analytics, and hand over access.' },
    ],
    idealFor: ['Restaurants, cafés & catering', 'Salons, spas & wellness', 'Contractors & home services', 'Consultants & professional services', 'Retail & local shops', 'Clinics & healthcare practices'],
    faqs: [
      { question: 'How long does a new site take?', answer: 'Most builds are live within 2 to 4 weeks depending on scope, with a clear timeline agreed before we start.' },
      { question: 'Can you build a website for my restaurant?', answer: 'Yes. A restaurant website can include a digital menu, photo gallery, hours, location, reservation links, online-ordering integration, and catering inquiry forms.' },
      { question: 'Can customers book appointments on my website?', answer: 'Yes. We integrate a suitable booking platform or scope a custom booking workflow as part of your site.' },
      { question: 'Do you provide hosting and domain registration?', answer: 'These can be included in a managed package or arranged separately — the final quote specifies ownership, renewal costs, and support responsibilities.' },
      { question: 'Can it connect to our voice agent or CRM?', answer: 'Yes. Lead forms and the built-in chatbot sync directly into your CRM and can hand off to your voice agent.' },
    ],
  },
  {
    id: 'app-development',
    slug: 'app-development',
    iconName: 'Smartphone',
    badge: 'Web & Mobile',
    name: 'App Development',
    shortDescription: "Custom web and mobile apps that put your business in your customers' pockets.",
    heroHeadline: 'Custom apps for the way your business works.',
    heroDescription: 'Turn repetitive tasks into simple digital workflows. We help you plan and build practical web apps, customer portals, booking tools, inventory systems, and staff apps — with automation where it adds real value, on a secure cloud backend built around your process.',
    heroStats: [
      { value: 'iOS & Android', label: 'Or responsive web' },
      { value: 'Custom', label: 'Backend & APIs' },
      { value: 'Secure', label: 'Cloud infrastructure' },
    ],
    mockupTitle: 'Your business at a glance',
    mockupTiles: [
      { iconName: 'LayoutDashboard', label: 'Bookings module', value: 'Included', note: 'Appointments & calendars' },
      { iconName: 'ServerCog', label: 'Custom portals', value: 'Client & staff', note: 'Purpose-built' },
      { iconName: 'Plug', label: 'Backend', value: 'Secure cloud', note: 'Encrypted data' },
      { iconName: 'BellRing', label: 'Notifications', value: 'Push + SMS', note: 'Keeps everyone informed' },
    ],
    heroImageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=80',
    heroImageAlt: 'A hand holding a smartphone displaying a custom business app dashboard, with a laptop showing app screens in the background',
    overviewHeading: 'Built for your workflow, not a generic app template',
    overviewBody: 'Whether it\'s a client-facing booking app or an internal tool your staff uses every day, we map the problem first — the users, the pain points, the business rules — then design the screens and build a secure, custom backend around it, integrated with the CRM, scheduling, and voice systems you already run on.',
    features: [
      { title: 'Booking & scheduling apps', description: 'Let customers book services and help your team manage availability, changes, and cancellations.', iconName: 'LayoutDashboard' },
      { title: 'Inventory & order apps', description: 'Keep products, stock levels, and orders organized in one place, with alerts before you run out.', iconName: 'ServerCog' },
      { title: 'Business management apps', description: 'Bring customer records, job tracking, task assignment, and reporting together in one dashboard.', iconName: 'Plug' },
      { title: 'Field service apps', description: 'Help mobile teams coordinate work orders, capture photos and signatures, and keep customers updated.', iconName: 'Wrench' },
      { title: 'Staff & workforce apps', description: 'Manage staff availability, shift workflows, leave requests, and role-based access from one app.', iconName: 'Users' },
      { title: 'Ongoing support & iteration', description: 'We stay involved after launch to fix issues and ship improvements as your business grows.', iconName: 'Wrench' },
    ],
    howItWorks: [
      { number: '01', title: 'Map the problem', description: 'We define your users, pain points, key screens, business rules, and what success looks like.' },
      { number: '02', title: 'Prototype & build', description: 'We design the screens, choose the right technology, build the core workflow, and connect required services.' },
      { number: '03', title: 'Test & improve', description: 'We validate permissions, data handling, mobile usability, and integrations before anything goes live.' },
      { number: '04', title: 'Launch & support', description: 'We launch in stages and stay on for ongoing support and iteration as your needs evolve.' },
    ],
    idealFor: ['Restaurants & cafés', 'Salons & wellness businesses', 'Contractors & trades', 'Retail & e-commerce', 'Professional services', 'Clinics & healthcare practices'],
    faqs: [
      { question: 'Do we need separate iPhone and Android apps?', answer: 'Not always. A responsive web app often covers the first version well. Native iOS and Android apps make sense when device features, app-store distribution, or user needs justify the extra cost — we\'ll walk through the trade-offs during scoping.' },
      { question: 'How long does a custom app take to build?', answer: 'Timelines vary with scope — a focused internal tool can ship in a few weeks, while a full client-facing app typically takes longer. We give you a clear timeline after scoping.' },
      { question: 'Can the app connect to our existing software?', answer: 'Often, yes, where a suitable API or integration exists. Feasibility, access permissions, and any ongoing vendor fees are reviewed during discovery.' },
      { question: 'Who owns the app and its data?', answer: 'Ownership, source-code access, hosting, and data export are defined clearly in the project agreement before development begins — it\'s yours.' },
      { question: 'Can we start with a small budget?', answer: 'Yes. A focused prototype or minimum viable product can test one core workflow before investing in additional features or platforms.' },
    ],
  },
]

export const getServiceBySlug = (slug: string): ServiceDetail | undefined =>
  serviceDetails.find((s) => s.slug === slug)
