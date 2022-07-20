import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomizeReportRoutingModule } from './customize-report-routing.module';
import { ReportListComponent } from './report-list/report-list.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ReportAnalysisComponent } from './report-analysis/report-analysis.component';
import { ReportComponent } from './report/report.component';
import { HeadingComponent } from './heading/heading.component';


@NgModule({
  declarations: [
    ReportListComponent,
    AccountDetailsComponent,
    ReportAnalysisComponent,
    ReportComponent,
    HeadingComponent
  ],
  imports: [
    CommonModule,
    CustomizeReportRoutingModule
  ]
})
export class CustomizeReportModule { }
