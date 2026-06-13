import { DOCUMENT, isPlatformBrowser } from '@angular/common'
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core'

export type ThemePreference = 'dark' | 'light' | 'system'

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT)
  private readonly platformId = inject(PLATFORM_ID)
  readonly preference = signal<ThemePreference>('system')

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return
    }

    const stored = this.readStoredPreference()

    if (stored) {
      this.preference.set(stored)
    }

    this.applyTheme(this.preference())
  }

  setPreference(preference: ThemePreference) {
    this.preference.set(preference)

    if (isPlatformBrowser(this.platformId)) {
      this.document.defaultView?.localStorage.setItem('theme', preference)
      this.applyTheme(preference)
    }
  }

  private readStoredPreference(): ThemePreference | null {
    const storage = this.document.defaultView?.localStorage

    if (!storage) {
      return null
    }

    const stored = storage.getItem('theme')

    if (stored === 'dark' || stored === 'light' || stored === 'system') {
      return stored
    }

    return null
  }

  private applyTheme(preference: ThemePreference) {
    const root = this.document.documentElement
    const matchMedia = this.document.defaultView?.matchMedia
    const prefersDark =
      typeof matchMedia === 'function'
        ? matchMedia('(prefers-color-scheme: dark)').matches
        : false
    const resolved =
      preference === 'system' ? (prefersDark ? 'dark' : 'light') : preference

    root.classList.toggle('dark', resolved === 'dark')
    root.dataset['theme'] = resolved
  }
}
