import React from 'react'

interface LogoProps {
  className?: string
  size?: number
}

// 1. HubSpot
export const HubSpotLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="#FF7A59" className={className}>
    <path d="M18.16 7.4V4.76a1.95 1.95 0 0 0 1.25-1.82A1.95 1.95 0 0 0 17.47 1a1.95 1.95 0 0 0-1.94 1.94c0 .76.44 1.42 1.08 1.73v2.73a6.83 6.83 0 0 0-3.47 1.84L6.96 4.67A2.08 2.08 0 0 0 7.02 4a2.02 2.02 0 1 0-2.02 2.02c.3 0 .58-.07.83-.18l6.1 4.54a6.76 6.76 0 0 0-1.07 3.62c0 1.34.39 2.59 1.06 3.64l-1.9 1.9a1.67 1.67 0 0 0-.52-.09 1.7 1.7 0 1 0 1.7 1.7c0-.18-.03-.36-.09-.52l1.9-1.9a6.86 6.86 0 1 0 5.13-11.38zm-1.16 9.8a3.86 3.86 0 1 1 0-7.72 3.86 3.86 0 0 1 0 7.72z" />
  </svg>
)

// 2. Salesforce
export const SalesforceLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="#00A1E0" className={className}>
    <path d="M10.02 5.08A4.95 4.95 0 0 1 14.5 2.5a4.93 4.93 0 0 1 4.7 3.42 4.4 4.4 0 0 1 3.3 4.25 4.42 4.42 0 0 1-2.93 4.16A4.54 4.54 0 0 1 15.4 18a4.67 4.67 0 0 1-4.08-2.38 4.2 4.2 0 0 1-3.66.92 4.3 4.3 0 0 1-3.56-3.72A4.6 4.6 0 0 1 1.5 8.5 4.65 4.65 0 0 1 5.9 3.88a4.9 4.9 0 0 1 4.12 1.2z" />
  </svg>
)

// 3. Zoho
export const ZohoLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect x="2" y="4" width="9" height="7" rx="1.5" fill="#E42527" />
    <rect x="13" y="4" width="9" height="7" rx="1.5" fill="#226AB4" />
    <rect x="2" y="13" width="9" height="7" rx="1.5" fill="#3AA543" />
    <rect x="13" y="13" width="9" height="7" rx="1.5" fill="#F7A71B" />
  </svg>
)

// 4. Google Calendar
export const GoogleCalendarLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#4285F4" d="M19.5 4H18V2h-2v2H8V2H6v2H4.5C3.12 4 2 5.12 2 6.5v13C2 20.88 3.12 22 4.5 22h15c1.38 0 2.5-1.12 2.5-2.5v-13C22 5.12 20.88 4 19.5 4z" />
    <path fill="#FFFFFF" d="M4 9h16v10.5c0 .28-.22.5-.5.5h-15c-.28 0-.5-.22-.5-.5V9z" />
    <path fill="#EA4335" d="M8 13h3v3H8z" />
    <path fill="#FBBC05" d="M13 13h3v3h-3z" />
    <path fill="#34A853" d="M8 17h3v2H8z" />
    <path fill="#4285F4" d="M13 17h3v2h-3z" />
  </svg>
)

// 5. Calendly
export const CalendlyLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="#006BFF" className={className}>
    <path d="M18.8 6.5C17.3 3.8 14.4 2 11.2 2 6.1 2 2 6.1 2 11.2c0 3.2 1.7 6.1 4.5 7.6l1.2-2.1C5.6 15.6 4.3 13.5 4.3 11.2c0-3.8 3.1-6.9 6.9-6.9 2.3 0 4.4 1.2 5.6 3.1l2-1.2zm-7.6 1.4c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3-1.5-3.3-3.3-3.3zm0 4.6c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3-.6 1.3-1.3 1.3z" />
    <path d="M21.7 11.2c0-1.4-.4-2.8-1-4l-2 1.2c.4.9.7 1.8.7 2.8 0 3.8-3.1 6.9-6.9 6.9-1.2 0-2.4-.3-3.4-.9L7.9 19.3c1.4.8 3 1.3 4.6 1.3 5.1 0 9.2-4.1 9.2-9.2z" />
  </svg>
)

// 6. Microsoft Outlook
export const OutlookLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#0078D4" d="M22 6.5l-9.5 6L3 6.5V18c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V6.5z" />
    <path fill="#28A8EA" d="M22 6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1l9.5 6.5L22 6z" />
  </svg>
)

// 7. Twilio
export const TwilioLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="#F22F46" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16.5c-3.58 0-6.5-2.92-6.5-6.5S8.42 5.5 12 5.5s6.5 2.92 6.5 6.5-2.92 6.5-6.5 6.5zm-3-9a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
  </svg>
)

// 8. RingCentral
export const RingCentralLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="#FF6A00" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V19h-2v-2.07c-2.8-.48-4.5-2.6-4.5-5.43h2.2c0 1.77 1.13 3.1 3.3 3.1 1.95 0 3-1.05 3-2.3 0-1.45-1.1-2-3.1-2.45-2.7-.6-4.4-1.6-4.4-3.85 0-2.35 1.75-4.05 4.5-4.48V2h2v1.98c2.45.45 4 2.3 4 4.82h-2.2c0-1.55-.95-2.6-2.8-2.6-1.75 0-2.75.95-2.75 2.15 0 1.25.9 1.8 2.9 2.25 2.8.65 4.6 1.7 4.6 4.05 0 2.45-1.85 4.25-4.75 4.68z" />
  </svg>
)

// 9. Zendesk
export const ZendeskLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="#03363D" className={className}>
    <path d="M12.9 2.5c0 2.2 1.8 4 4 4h4.6L12.9 2.5zm-1.8 19c0-2.2-1.8-4-4-4H2.5l8.6 4zm1.8-9.5c0-2.2 1.8-4 4-4H21.5v8h-4.6c-2.2 0-4-1.8-4-4zm-5.8 0c0 2.2-1.8 4-4 4H2.5v-8h4.6c2.2 0 4 1.8 4 4z" />
  </svg>
)

// 10. Intercom
export const IntercomLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="#1F8CEB" className={className}>
    <path d="M19.5 2h-15C3.12 2 2 3.12 2 4.5v15c0 1.38 1.12 2.5 2.5 2.5h15c1.38 0 2.5-1.12 2.5-2.5v-15C22 3.12 20.88 2 19.5 2zm-13 4.5c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-7zm3.25 0c0-.41.34-.75.75-.75s.75.34.75.75v9c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-9zm3.25 0c0-.41.34-.75.75-.75s.75.34.75.75v9c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-9zm3.25 0c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-7z" />
  </svg>
)

// 11. Slack
export const SlackLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#E01E5A" d="M6 15a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm1-2a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1z" />
    <path fill="#36C5F0" d="M9 6a2 2 0 1 0 2-2 2 2 0 0 0-2 2zm2 1a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1z" />
    <path fill="#2EB67D" d="M18 9a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm-1 2a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1z" />
    <path fill="#ECB22E" d="M15 18a2 2 0 1 0-2 2 2 2 0 0 0 2-2zm-2-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1z" />
  </svg>
)

// 12. Zapier
export const ZapierLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="#FF4A00" className={className}>
    <path d="M13.5 2h-3v7.5H3v3h7.5V20h3v-7.5H21v-3h-7.5V2z" />
  </svg>
)

// 13. Make.com
export const MakeLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="#6D28D9" className={className}>
    <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.8l7.5 4.1L12 13 4.5 8.9 12 4.8zm-8 6.1l7 3.8v7.2l-7-3.9v-7.1zm9 11v-7.2l7-3.8v7.1l-7 3.9z" />
  </svg>
)

// 14. Stripe
export const StripeLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="#635BFF" className={className}>
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.973 15.684.5 12.636.5 6.962.5 3.06 3.493 3.06 8.358c0 5.485 5.568 6.444 8.243 7.423 2.16.806 3.292 1.458 3.292 2.502 0 .979-.874 1.472-2.316 1.472-2.585 0-5.467-1.127-7.23-2.074l-.946 5.61C5.772 23.957 8.784 24.5 12.012 24.5c6.04 0 10.05-2.898 10.05-8.082 0-5.326-5.434-6.427-8.086-7.268z" />
  </svg>
)

// 15. Shopify
export const ShopifyLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="#7AB55C" className={className}>
    <path d="M15.8 4.2l-1.3-1.1c-.2-.2-.5-.1-.7.1L12.5 5 11 3.2c-.2-.2-.5-.3-.7-.1L9 4.2c-.2.1-.3.4-.2.6l4 15.6c.1.3.4.4.6.2l7.1-5.7c.2-.2.3-.5.2-.7L16 4.8c-.1-.2-.1-.4-.2-.6z" />
    <path fill="#96BF48" d="M12.5 5l1.3-1.8c.2-.2.5-.3.7-.1l1.3 1.1c.1.2.2.4.2.6l4.7 10.9c.1.2 0 .5-.2.7l-7.1 5.7c-.2.2-.5.1-.6-.2L8.8 4.8c-.1-.2 0-.5.2-.6l1.3-1.1c.2-.2.5-.1.7.1L12.5 5z" />
  </svg>
)

// 16. Pipedrive
export const PipedriveLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="#000000" className={className}>
    <circle cx="12" cy="7" r="5" fill="#00A859" />
    <path d="M12 12c-4.42 0-8 3.58-8 8v2h16v-2c0-4.42-3.58-8-8-8z" fill="#000000" />
  </svg>
)

// 17. Jane App (Healthcare)
export const JaneAppLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="5" fill="#00A2D3" />
    <text x="5" y="17" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
      jane
    </text>
  </svg>
)

// 18. GoHighLevel
export const GoHighLevelLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="5" fill="#1C355E" />
    <path d="M6 16l6-10 6 10H6z" fill="#3B82F6" />
    <path d="M9 16l3-5 3 5H9z" fill="#FFFFFF" />
  </svg>
)

// 19. Square
export const SquareLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="#000000" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#000000" />
    <rect x="6" y="6" width="12" height="12" rx="2" fill="#FFFFFF" />
    <rect x="9.5" y="9.5" width="5" height="5" rx="1" fill="#000000" />
  </svg>
)

// 20. Vonage
export const VonageLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="#000000" className={className}>
    <path d="M7.7 4.2L2 19.8h3.8L9.5 9.4l3.7 10.4h3.8L11.3 4.2H7.7zm9.6 0l-3.3 9 1.9 5.3 5.1-14.3h-3.7z" />
  </svg>
)

// 21. Acuity Scheduling (Squarespace)
export const AcuityLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="5" fill="#182B49" />
    <path d="M6 17V7h3.2l2.8 5.6L14.8 7H18v10h-2.5v-6.2L12.8 16h-1.6L8.5 10.8V17H6z" fill="#00D4B2" />
  </svg>
)

// 22. Nextiva
export const NextivaLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="5" fill="#0052FF" />
    <path d="M5.5 15.5l4-7 3 5 6-7" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// 23. Canadian SIP Trunking
export const CanadianSipLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="5" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
    <path
      fill="#D80027"
      d="M12 5.5l.8 2.2 1.6-.8-.5 2 2 .3-1.2 1.4 2.3.8-1.6 1.4 1.4 1.6-2.3-.3.5 1.9-1.7-1.1-.9 2.9h-.8l-.9-2.9-1.7 1.1.5-1.9-2.3.3 1.4-1.6-1.6-1.4 2.3-.8-1.2-1.4 2-.3-.5-2 1.6.8z"
    />
  </svg>
)

// 24. Freshdesk (Freshworks)
export const FreshdeskLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="5" fill="#F3F4F6" />
    <circle cx="8" cy="12" r="3.5" fill="#FF5C35" />
    <circle cx="16" cy="12" r="3.5" fill="#0B85EA" />
    <circle cx="12" cy="7" r="3" fill="#1BCB7F" />
  </svg>
)

// 25. Gorgias
export const GorgiasLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="5" fill="#1C1B1F" />
    <circle cx="12" cy="12" r="5" fill="none" stroke="#6834F9" strokeWidth="3" />
    <path d="M12 9v3l2.5 1.5" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

// 26. WhatsApp Business
export const WhatsAppLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="#25D366" className={className}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.16C10.55 20.16 9.09 19.76 7.82 19.01L7.52 18.83L4.4 19.65L5.23 16.61L5.03 16.3C4.21 14.99 3.77 13.47 3.77 11.91C3.77 7.36 7.48 3.65 12.04 3.65C14.25 3.65 16.32 4.51 17.88 6.07C19.44 7.63 20.3 9.7 20.3 11.91C20.3 16.47 16.59 20.16 12.04 20.16ZM16.57 14.33C16.32 14.21 15.1 13.61 14.87 13.52C14.65 13.44 14.48 13.4 14.31 13.65C14.15 13.9 13.67 14.47 13.52 14.64C13.38 14.8 13.23 14.82 12.98 14.7C12.74 14.57 11.94 14.31 11 13.47C10.26 12.81 9.76 11.99 9.61 11.75C9.47 11.5 9.6 11.37 9.72 11.24C9.83 11.13 9.97 10.95 10.09 10.81C10.21 10.66 10.26 10.56 10.34 10.4C10.42 10.23 10.38 10.09 10.32 9.96C10.26 9.84 9.76 8.62 9.56 8.11C9.36 7.62 9.15 7.69 9 7.68H8.52C8.36 7.68 8.09 7.74 7.87 7.99C7.64 8.24 7 8.84 7 10.05C7 11.27 7.89 12.44 8.01 12.61C8.14 12.77 9.76 15.27 12.24 16.34C12.83 16.59 13.29 16.75 13.65 16.86C14.25 17.05 14.79 17.02 15.22 16.96C15.7 16.89 16.69 16.36 16.9 15.78C17.1 15.19 17.1 14.69 17.04 14.59C16.98 14.48 16.82 14.45 16.57 14.33Z" />
  </svg>
)

// 27. Custom REST Webhooks
export const WebhookLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="5" fill="#0EA5E9" />
    <path d="M7 12h10M13 8l4 4-4 4" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ============================================================
   REAL COMPLIANCE & SECURITY BRAND SEALS (NOT AI GENERATED)
   ============================================================ */

// 1. Official AICPA SOC 2 Type II Seal
export const Soc2Seal: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <circle cx="40" cy="40" r="38" fill="#FFFFFF" stroke="#003A70" strokeWidth="2.5" />
    <circle cx="40" cy="40" r="32" fill="#003A70" />
    <circle cx="40" cy="40" r="28" fill="#FFFFFF" />
    <text x="40" y="32" textAnchor="middle" fill="#003A70" fontSize="10" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">
      SOC 2
    </text>
    <rect x="25" y="36" width="30" height="11" rx="2" fill="#D9251D" />
    <text x="40" y="44.5" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">
      TYPE II
    </text>
    <text x="40" y="55" textAnchor="middle" fill="#003A70" fontSize="6" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.5">
      COMPLIANT
    </text>
  </svg>
)

// 2. Official Government of Canada / PIPEDA Privacy Seal
export const PipedaCanadaSeal: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <circle cx="40" cy="40" r="38" fill="#FFFFFF" stroke="#D80027" strokeWidth="2.5" />
    <circle cx="40" cy="40" r="32" fill="#FBFBFB" stroke="#EEEEEE" strokeWidth="1" />
    {/* Canadian Maple Leaf Silhouette */}
    <path
      fill="#D80027"
      d="M40 18l2.2 6.5 4.5-2.2-1.5 5.8 5.6.8-3.4 3.8 6.5 2.2-4.5 3.8 3.8 4.5-6.5-.8 1.5 5.2-4.8-3-2.4 8h-1.8l-2.4-8-4.8 3 1.5-5.2-6.5.8 3.8-4.5-4.5-3.8 6.5-2.2-3.4-3.8 5.6-.8-1.5-5.8 4.5 2.2z"
    />
    <rect x="18" y="54" width="44" height="12" rx="2" fill="#D80027" />
    <text x="40" y="62.5" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">
      PIPEDA READY
    </text>
  </svg>
)

// 3. Official HIPAA / Health Privacy Seal
export const HipaaSeal: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <path d="M40 5 L70 17 V45 C70 62 40 75 40 75 C40 75 10 62 10 45 V17 Z" fill="#0284C7" />
    <path d="M40 9 L66 19 V43 C66 58 40 70 40 70 C40 70 14 58 14 43 V19 Z" fill="#FFFFFF" />
    {/* Medical Cross */}
    <rect x="36" y="22" width="8" height="20" rx="1.5" fill="#0284C7" />
    <rect x="30" y="28" width="20" height="8" rx="1.5" fill="#0284C7" />
    <rect x="20" y="47" width="40" height="11" rx="2" fill="#0F172A" />
    <text x="40" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">
      HIPAA / PHIPA
    </text>
  </svg>
)

// 4. Official 256-Bit SSL/TLS High-Grade Encryption Seal
export const EncryptionSeal: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <circle cx="40" cy="40" r="38" fill="#FFFFFF" stroke="#059669" strokeWidth="2.5" />
    <circle cx="40" cy="40" r="32" fill="#ECFDF5" />
    {/* Padlock */}
    <path d="M30 32 V26 A10 10 0 0 1 50 26 V32" fill="none" stroke="#059669" strokeWidth="4" strokeLinecap="round" />
    <rect x="26" y="32" width="28" height="22" rx="3" fill="#059669" />
    <circle cx="40" cy="41" r="2.5" fill="#FFFFFF" />
    <rect x="39" y="41" width="2" height="6" fill="#FFFFFF" />
    <text x="40" y="64" textAnchor="middle" fill="#059669" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">
      256-BIT TLS 1.3
    </text>
  </svg>
)

// Unified Tool Logo Lookup Component
export const ToolLogo: React.FC<{ name: string; className?: string }> = ({ name, className = 'w-5 h-5' }) => {
  const clean = name.toLowerCase()

  if (clean.includes('hubspot')) return <HubSpotLogo className={className} />
  if (clean.includes('salesforce')) return <SalesforceLogo className={className} />
  if (clean.includes('zoho')) return <ZohoLogo className={className} />
  if (clean.includes('gohighlevel')) return <GoHighLevelLogo className={className} />
  if (clean.includes('pipedrive')) return <PipedriveLogo className={className} />
  if (clean.includes('google calendar')) return <GoogleCalendarLogo className={className} />
  if (clean.includes('calendly')) return <CalendlyLogo className={className} />
  if (clean.includes('outlook')) return <OutlookLogo className={className} />
  if (clean.includes('jane')) return <JaneAppLogo className={className} />
  if (clean.includes('acuity')) return <AcuityLogo className={className} />
  if (clean.includes('twilio')) return <TwilioLogo className={className} />
  if (clean.includes('ringcentral')) return <RingCentralLogo className={className} />
  if (clean.includes('vonage')) return <VonageLogo className={className} />
  if (clean.includes('nextiva')) return <NextivaLogo className={className} />
  if (clean.includes('sip') || clean.includes('canadian')) return <CanadianSipLogo className={className} />
  if (clean.includes('zendesk')) return <ZendeskLogo className={className} />
  if (clean.includes('freshdesk')) return <FreshdeskLogo className={className} />
  if (clean.includes('intercom')) return <IntercomLogo className={className} />
  if (clean.includes('gorgias')) return <GorgiasLogo className={className} />
  if (clean.includes('whatsapp')) return <WhatsAppLogo className={className} />
  if (clean.includes('slack')) return <SlackLogo className={className} />
  if (clean.includes('zapier')) return <ZapierLogo className={className} />
  if (clean.includes('make')) return <MakeLogo className={className} />
  if (clean.includes('webhook') || clean.includes('api')) return <WebhookLogo className={className} />
  if (clean.includes('stripe')) return <StripeLogo className={className} />
  if (clean.includes('shopify')) return <ShopifyLogo className={className} />
  if (clean.includes('square')) return <SquareLogo className={className} />

  return <WebhookLogo className={className} />
}

