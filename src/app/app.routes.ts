import { MainComponent } from './layouts/main/main.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'feature1',
        pathMatch: 'full',
      },
      {
        path: 'feature1',
        loadChildren: () =>
          import('./features/feature1/feature1.routing.module').then(
            (m) => m.FeatureRoutingModule,
          ),
        title: 'Bài đăng',
      },
      {
        path: 'feature2',
        loadChildren: () =>
          import('./features/feature2/feature2.routing.module').then(
            (m) => m.Feature2RoutingModule,
          ),
        title: 'Bài đăng',
      },
      {
        path: '**',
        redirectTo: '/',
      },
    ],
    title: 'Home page',
  },
];
