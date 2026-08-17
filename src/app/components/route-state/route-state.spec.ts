import { TestBed } from '@angular/core/testing'
import { provideRouter } from '@angular/router'

import {
  RouteLoadingState,
  RouteNotFoundState,
  RouteState,
} from './route-state'

describe('RouteState', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteState, RouteLoadingState, RouteNotFoundState],
      providers: [provideRouter([])],
    }).compileComponents()
  })

  it('marks the error variant as an alert', () => {
    const fixture = TestBed.createComponent(RouteState)
    fixture.componentRef.setInput('description', 'Something broke.')
    fixture.componentRef.setInput('title', 'Something went wrong')
    fixture.componentRef.setInput('variant', 'error')
    fixture.detectChanges()

    const section = fixture.nativeElement.querySelector('section')
    expect(section.getAttribute('role')).toBe('alert')
    expect(section.getAttribute('aria-live')).toBeNull()
  })

  it('announces the loading variant politely', () => {
    const fixture = TestBed.createComponent(RouteLoadingState)
    fixture.detectChanges()

    const section = fixture.nativeElement.querySelector('section')
    expect(section.getAttribute('role')).toBe('status')
    expect(section.getAttribute('aria-live')).toBe('polite')
  })

  it('renders details only when provided', () => {
    const fixture = TestBed.createComponent(RouteState)
    fixture.componentRef.setInput('description', 'Something broke.')
    fixture.componentRef.setInput('title', 'Something went wrong')
    fixture.componentRef.setInput('variant', 'error')
    fixture.detectChanges()

    expect(fixture.nativeElement.querySelector('pre')).toBeNull()

    fixture.componentRef.setInput('details', 'Stack trace')
    fixture.detectChanges()

    expect(fixture.nativeElement.querySelector('pre').textContent).toContain(
      'Stack trace'
    )
  })

  it('offers a way home from the not-found state', () => {
    const fixture = TestBed.createComponent(RouteNotFoundState)
    fixture.detectChanges()

    const link = fixture.nativeElement.querySelector('a')
    expect(link.textContent.trim()).toBe('Return home')
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain(
      'Page not found'
    )
  })
})
