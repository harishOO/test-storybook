import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { reportList } from '../report-list.model';


@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {

  @Input() report:reportList;

  @Output() onReportSelection = new EventEmitter<Event>();


  constructor() { }

  ngOnInit(): void {
  }


  onReportClick(id: any) {
    this.onReportSelection.emit(id);
  }

}
