import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'feature-auth',
    loadChildren: () =>
      import('@platform/feature-auth').then((m) => m.featureAuthRoutes),
  },
];
