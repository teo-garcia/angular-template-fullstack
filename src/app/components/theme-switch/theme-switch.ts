import { Component, inject } from '@angular/core'

import {
  type ThemePreference,
  ThemeService,
} from '../../services/theme.service'

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.html',
})
export class ThemeSwitch {
  private readonly themeService = inject(ThemeService)

  protected readonly preference = this.themeService.preference

  protected setPreference(preference: ThemePreference) {
    this.themeService.setPreference(preference)
  }
}
