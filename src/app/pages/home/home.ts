import { Component, inject } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { LucideZap } from '@lucide/angular'

import { siteMetadata } from '../../../lib/seo'

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [LucideZap],
})
export class Home {
  private readonly title = inject(Title)

  constructor() {
    this.title.setTitle(`${siteMetadata.shortName} | Home`)
  }
}
