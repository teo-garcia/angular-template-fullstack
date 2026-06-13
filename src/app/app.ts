import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { ThemeSwitch } from './components/theme-switch/theme-switch'

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, ThemeSwitch],
})
export class App {}
