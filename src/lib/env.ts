import { z } from 'zod'

const envSchema = z.object({
  nodeEnv: z.enum(['development', 'production', 'test']).default('development'),
  publicUrl: z.string().url().default('http://localhost:3000'),
})

const nodeEnv = (() => {
  const value = process.env['NODE_ENV']

  if (value === 'development' || value === 'production' || value === 'test') {
    return value
  }

  return 'development'
})()

export const env = envSchema.parse({
  nodeEnv,
  publicUrl: process.env['NG_APP_PUBLIC_URL'] ?? 'http://localhost:3000',
})

export const isDevelopment = env.nodeEnv === 'development'
export const isProduction = env.nodeEnv === 'production'
