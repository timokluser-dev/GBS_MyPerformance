import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkOverviewPageComponent } from './mark-overview-page.component';

describe('MarkOverviewPageComponent', () => {
  let component: MarkOverviewPageComponent;
  let fixture: ComponentFixture<MarkOverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkOverviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
