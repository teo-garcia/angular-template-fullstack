import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((module) => module.Home),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/route-state/route-state').then(
        (module) => module.RouteNotFoundState
      ),
  },
]
