
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CompStoreComponent } from './views/comp-store/comp-store.component';


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'component-store' },
  { path: 'component-store', children:
    [
      { path: '', component: CompStoreComponent },
    ]
  },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
