import { z } from 'zod'

const envSchema = z.object({
  nodeEnv: z.enum(['development', 'production', 'test']).default('development'),
  publicUrl: z.string().url().default('http://localhost:3000'),
})

// `process` only exists on the server (Node SSR); the client bundle has no
// polyfill. Read it defensively so this module is safe to import from browser
// code, mirroring how the other templates guard `process` in `seo.ts`.
const hasProcess = typeof process !== 'undefined'

const nodeEnv = (() => {
  const value = hasProcess ? process.env['NODE_ENV'] : undefined

  if (value === 'development' || value === 'production' || value === 'test') {
    return value
  }

  return 'development'
})()

const publicUrl = hasProcess
  ? (process.env['NG_APP_PUBLIC_URL'] ?? 'http://localhost:3000')
  : 'http://localhost:3000'

export const env = envSchema.parse({
  nodeEnv,
  publicUrl,
})

export const isDevelopment = env.nodeEnv === 'development'
export const isProduction = env.nodeEnv === 'production'
