import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  @Input() heading = 'Customize Your Report';

  @Input() Sub = 'Select the components to include and/or exclude in your report';


  constructor() { }

  ngOnInit(): void {
  }

}
