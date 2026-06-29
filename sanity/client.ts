import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || 'ie0ztvh9',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || 'production',
  apiVersion: '2026-06-29',
  useCdn: false,
})
