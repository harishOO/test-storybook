import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: '',
    component: ReportComponent
  },
  {
    path: 'reportlist',
    component: ReportListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomizeReportRoutingModule { }
