import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feature1Component } from './feature1.component';
// import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: Feature1Component,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'handel',
        pathMatch: 'full',
      },
      {
        path: 'handel',
        loadComponent: () =>
          import('./handel-feature1/handel-feature1.component').then(
            (m) => m.HandelFeature1Component,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
