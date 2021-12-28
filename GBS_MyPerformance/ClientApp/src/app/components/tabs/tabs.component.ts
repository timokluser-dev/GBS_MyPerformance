import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Input() tabs!: string[];
  @Output() tabChange: EventEmitter<string> = new EventEmitter<string>();
  activeTab: string;

  constructor() {}

  ngOnInit() {
    this.onTabClick(this.tabs[0]);
  }

  onTabClick(tab: string) {
    this.activeTab = tab;
    this.tabChange.emit(this.activeTab);
  }
}
