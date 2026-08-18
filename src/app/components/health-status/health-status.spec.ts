import { provideHttpClient, withFetch } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'
import { provideAngularQuery } from '@tanstack/angular-query-experimental'
import { QueryClient } from '@tanstack/query-core'

import { HealthStatus } from './health-status'

describe('HealthStatus', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthStatus],
      providers: [
        provideHttpClient(withFetch()),
        provideAngularQuery(
          new QueryClient({
            defaultOptions: { queries: { gcTime: 0, retry: false } },
          })
        ),
      ],
    }).compileComponents()
  })

  it('renders the resolved health status', async () => {
    const fixture = TestBed.createComponent(HealthStatus)
    fixture.detectChanges()

    await vi.waitFor(() => {
      fixture.detectChanges()
      expect(fixture.nativeElement.textContent).toMatch(/OK/i)
    })
  })
})
