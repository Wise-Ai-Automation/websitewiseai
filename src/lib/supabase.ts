import { createClient } from '@supabase/supabase-js'

export interface LeadSubmission {
  id?: string
  name: string
  email: string
  phone: string
  company: string
  industry: string
  message: string
  source?: string
  created_at?: string
}

// User specified n8n webhook URL
export const N8N_WEBHOOK_URL = 'https://n8n-uwfl.srv2012265.hstgr.cloud/webhook/d12d3eaf-27ef-406f-b095-24d1277c0f44'

// Environment variables for Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export async function submitLead(leadData: Omit<LeadSubmission, 'id' | 'created_at'>): Promise<{ success: boolean; error?: string }> {
  const timestamp = new Date().toISOString()
  const payload = {
    ...leadData,
    fullName: leadData.name,
    workEmail: leadData.email,
    phoneNumber: leadData.phone,
    companyName: leadData.company,
    source: leadData.source || 'website_landing_page',
    created_at: timestamp,
    submittedAt: timestamp,
  }

  // 1. Post directly to the required n8n webhook
  try {
    const webhookRes = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*',
      },
      body: JSON.stringify(payload),
    })

    if (webhookRes.ok || webhookRes.status === 200 || webhookRes.status === 201) {
      console.info('[Webhook Success] Dispatched lead payload to n8n webhook:', payload)
    } else {
      console.warn('[Webhook Warning] n8n returned non-200 status:', webhookRes.status)
    }
  } catch (webhookErr) {
    console.warn('[Webhook Notice] Network call to n8n webhook:', webhookErr)
  }

  // 2. Also insert into Supabase if configured
  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase.from('leads').insert([{
        name: leadData.name,
        email: leadData.email,
        phone: leadData.phone,
        company: leadData.company,
        industry: leadData.industry,
        message: leadData.message,
        source: leadData.source || 'website_landing_page',
        created_at: timestamp,
      }])
      if (error) {
        console.warn('[Supabase Insert Notice]:', error.message)
      }
    } catch (err: unknown) {
      console.warn('[Supabase Catch]:', err)
    }
  }

  // Save to local storage for local inspection/debugging
  try {
    const existing = JSON.parse(localStorage.getItem('wise_ai_leads') || '[]')
    existing.push(payload)
    localStorage.setItem('wise_ai_leads', JSON.stringify(existing))
  } catch {
    // Ignore storage errors
  }

  return { success: true }
}
