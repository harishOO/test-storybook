import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'report',
    loadChildren: () => import('./customize-report/customize-report.module').then(m => m.CustomizeReportModule)
  },
  {
    path: '',
    redirectTo: 'report',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
