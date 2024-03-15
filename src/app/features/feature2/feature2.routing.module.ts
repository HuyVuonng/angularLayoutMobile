import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feature2Component } from './feature2.component';
// import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: Feature2Component,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'handel2',
        pathMatch: 'full',
      },
      {
        path: 'handel2',
        loadComponent: () =>
          import('./handel-feature2/handel-feature2.component').then(
            (m) => m.HandelFeature2Component,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feature2RoutingModule {}
