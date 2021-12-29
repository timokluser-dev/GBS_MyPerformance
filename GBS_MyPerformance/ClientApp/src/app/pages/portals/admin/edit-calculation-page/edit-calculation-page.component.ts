import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {data} from '../mock';

@Component({
  selector: 'app-edit-calculation-page',
  templateUrl: './edit-calculation-page.component.html',
  styleUrls: ['./edit-calculation-page.component.scss'],
})
export class EditCalculationPageComponent implements OnInit {
  public professionId: string;
  public data = data;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.professionId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  get profession(): any {
    const profession = this.data.professions.filter(p => p.id === this.professionId)[0];
    return profession ? profession : null;
  }
}
