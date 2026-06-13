import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { injectQuery } from '@tanstack/angular-query-experimental'
import { firstValueFrom } from 'rxjs'

import { type HealthResponse, parseHealthResponse } from '../../lib/health'

@Injectable({ providedIn: 'root' })
export class HealthService {
  private readonly http = inject(HttpClient)

  readonly healthQuery = injectQuery(() => ({
    queryFn: () =>
      firstValueFrom(
        this.http.get<HealthResponse>('/api/health', {
          responseType: 'json',
        })
      ).then((response) => parseHealthResponse(response)),
    queryKey: ['health'],
  }))
}
