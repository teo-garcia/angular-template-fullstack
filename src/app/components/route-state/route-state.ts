import { Component, input } from '@angular/core'
import { RouterLink } from '@angular/router'

export type RouteStateVariant = 'error' | 'loading' | 'not-found'

@Component({
  selector: 'app-route-state',
  templateUrl: './route-state.html',
})
export class RouteState {
  readonly description = input.required<string>()
  readonly details = input<string | undefined>(undefined)
  readonly title = input.required<string>()
  readonly variant = input.required<RouteStateVariant>()

  protected role(): string | undefined {
    if (this.variant() === 'loading') {
      return 'status'
    }

    if (this.variant() === 'error') {
      return 'alert'
    }

    return undefined
  }

  protected iconClass(): string {
    return this.variant() === 'loading'
      ? 'size-16 text-muted-foreground animate-spin md:size-20 lg:size-24'
      : 'size-16 text-muted-foreground md:size-20 lg:size-24'
  }
}

@Component({
  selector: 'app-route-loading-state',
  template: `
    <app-route-state
      description="Preparing the next screen with the latest data."
      title="Loading"
      variant="loading"
    />
  `,
  imports: [RouteState],
})
export class RouteLoadingState {}

@Component({
  selector: 'app-route-not-found-state',
  template: `
    <app-route-state
      description="The page you are looking for does not exist."
      title="Page not found"
      variant="not-found"
    >
      <a
        actions
        class="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        routerLink="/"
      >
        Return home
      </a>
    </app-route-state>
  `,
  imports: [RouteState, RouterLink],
})
export class RouteNotFoundState {}
