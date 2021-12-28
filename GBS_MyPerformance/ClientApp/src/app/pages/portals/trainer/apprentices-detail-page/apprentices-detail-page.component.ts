import {Component, OnInit} from '@angular/core';
import {EditModes} from '../../../../containers/mark-overview-container/mark-overview-container.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-apprentices-detail-page',
  templateUrl: './apprentices-detail-page.component.html',
  styleUrls: ['./apprentices-detail-page.component.scss'],
})
export class ApprenticesDetailPageComponent implements OnInit {
  public studentId: string;

  // enum mapping
  public editModes = EditModes;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.studentId = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
