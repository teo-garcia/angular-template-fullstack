import { Component, computed, inject } from '@angular/core'
import { LucideLaptop, LucideMoon, LucideSun } from '@lucide/angular'

import {
  type ThemePreference,
  ThemeService,
} from '../../services/theme.service'

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.html',
  imports: [LucideLaptop, LucideMoon, LucideSun],
})
export class ThemeSwitch {
  private readonly themeService = inject(ThemeService)

  protected readonly preference = this.themeService.preference

  protected readonly nextPreference = computed<ThemePreference>(() => {
    switch (this.preference()) {
      case 'light': {
        return 'dark'
      }
      case 'dark': {
        return 'system'
      }
      default: {
        return 'light'
      }
    }
  })

  protected cyclePreference() {
    this.themeService.setPreference(this.nextPreference())
  }
}
