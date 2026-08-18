import { env } from './env'

export const siteMetadata = {
  description:
    'Production-ready Angular SSR template with typed routes, theme support, health checks, tests, and Docker defaults.',
  name: 'Angular Template Fullstack',
  shortName: 'ATF',
  url: env.publicUrl.replace(/\/$/, ''),
} as const

export const getCanonicalUrl = (path = '/') => {
  return new URL(path, siteMetadata.url).toString()
}
