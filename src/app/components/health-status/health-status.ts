import { Component, computed, inject } from '@angular/core'
import { LucideLoaderCircle } from '@lucide/angular'

import type { HealthStatus as HealthStatusType } from '../../../lib/health'
import { HealthService } from '../../services/health.service'

const HEALTH_STATUS_DOT: Record<HealthStatusType, string> = {
  degraded: 'bg-yellow-500 ring-yellow-500/20',
  down: 'bg-red-500 ring-red-500/20',
  ok: 'bg-green-500 ring-green-500/20',
}

@Component({
  selector: 'app-health-status',
  templateUrl: './health-status.html',
  imports: [LucideLoaderCircle],
})
export class HealthStatus {
  private readonly healthService = inject(HealthService)

  protected readonly healthQuery = this.healthService.healthQuery

  protected readonly statusLabel = computed(() => {
    if (this.healthQuery.isPending()) {
      return 'CHECKING'
    }

    return (this.healthQuery.data()?.status ?? 'unreachable').toUpperCase()
  })

  protected readonly statusDot = computed(() => {
    const status = this.healthQuery.data()?.status

    return status ? HEALTH_STATUS_DOT[status] : HEALTH_STATUS_DOT.down
  })
}
