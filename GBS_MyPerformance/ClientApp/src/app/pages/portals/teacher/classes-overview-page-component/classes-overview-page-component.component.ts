import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-classes-overview-page-component',
  templateUrl: './classes-overview-page-component.component.html',
  styleUrls: ['./classes-overview-page-component.component.scss'],
})
export class ClassesOverviewPageComponentComponent implements OnInit {
  public breadcrumbs = [{name: 'Klassen', link: null}];

  constructor() {}

  ngOnInit() {}
}
