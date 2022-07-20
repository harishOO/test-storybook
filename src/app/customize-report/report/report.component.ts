import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { reportList } from '../report-list.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  @Input() header:string = "Customize Your Report";
  @Input() subHeader:string = "Select the components to include and/or exclude in your report";

  @Input() reports: reportList[] = [];

  @Output() onReportSelection : any = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.reports = [{
      id: '1',
      title: 'Your Current Portfolio',
      status: 'check',
      heading:'primary'
  },{
    id: '2',
    title: 'Your Current Portfolio',
    status: 'check',
    heading:'3'
  },{
    id: '3',
    title: 'Your Current Portfolio',
    status: 'check',
    heading:'2'
  }]
  }

  
  onReportClick(id: any) {
    this.onReportSelection.emit(id);
  }
}
