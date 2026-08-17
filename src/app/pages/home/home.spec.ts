import { provideHttpClient, withFetch } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'
import { provideAngularQuery } from '@tanstack/angular-query-experimental'
import { QueryClient } from '@tanstack/query-core'

import { Home } from './home'

describe('Home', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
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

  it('renders the hero icon', () => {
    const fixture = TestBed.createComponent(Home)
    fixture.detectChanges()

    expect(fixture.nativeElement.querySelector('svg')).not.toBeNull()
  })

  it('renders the health status once the query resolves', async () => {
    const fixture = TestBed.createComponent(Home)
    fixture.detectChanges()

    await vi.waitFor(() => {
      fixture.detectChanges()
      expect(fixture.nativeElement.textContent).toContain('Health status: ok')
    })
  })
})
