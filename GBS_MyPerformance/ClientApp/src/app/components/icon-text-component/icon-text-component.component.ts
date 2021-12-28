import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-text-component',
  templateUrl: './icon-text-component.component.html',
  styleUrls: ['./icon-text-component.component.scss'],
  exportAs: 'IconTextComponentComponent'
})
export class IconTextComponentComponent implements OnInit {
  @Input() iconClass!: string;
  @Input() textContent!: string;
  @Input() showHomeLink = false;

  constructor() {}

  ngOnInit() {}
}
