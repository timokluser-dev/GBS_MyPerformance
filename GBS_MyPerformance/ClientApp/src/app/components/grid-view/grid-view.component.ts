import {Component, Input, OnInit} from '@angular/core';
import {SchoolClassData} from '../students-mark-table/students-mark-table.constants';
import {Router} from '@angular/router';
import {AppPortals} from '../../constants';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  @Input() classes: SchoolClassData[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public async onSelectClass(name: string): Promise<void> {
    await this.router.navigate([`/app/${AppPortals.TEACHER}/class/`, name]);
  }
}
