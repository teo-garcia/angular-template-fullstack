import { TestBed } from '@angular/core/testing'

import { Home } from './home'

describe('Home', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
    }).compileComponents()
  })

  it('renders the hero icon', () => {
    const fixture = TestBed.createComponent(Home)
    fixture.detectChanges()

    expect(fixture.nativeElement.querySelector('svg')).not.toBeNull()
  })
})
