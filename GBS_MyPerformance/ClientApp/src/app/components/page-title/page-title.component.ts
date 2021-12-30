import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent implements OnInit {
  @Input() title!: string;
  @Input() editTitle: string = null;
  @Input() showEdit!: boolean;
  @Output() editClick: EventEmitter<EditClickEvent> = new EventEmitter<EditClickEvent>();
  @Input() editActive = false;
  @Input() showBack = false;
  @Input() showBreadcrumb = false;
  @Input() breadcrumbItems: {name: string; link: string}[];

  constructor(private location: Location) {}

  ngOnInit() {}

  onEditClick(): void {
    this.editActive = !this.editActive;
    this.editClick.emit({edit: this.editActive});
  }

  onBackClick() {
    this.location.back();
  }
}

export interface EditClickEvent {
  edit: boolean;
}
