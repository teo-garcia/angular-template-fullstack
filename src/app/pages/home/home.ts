import { Component, inject } from '@angular/core'
import { LucideZap } from '@lucide/angular'

import { HealthService } from '../../services/health.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [LucideZap],
})
export class Home {
  private readonly healthService = inject(HealthService)

  protected readonly healthQuery = this.healthService.healthQuery
}
