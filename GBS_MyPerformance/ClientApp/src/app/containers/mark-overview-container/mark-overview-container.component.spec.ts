import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkOverviewContainerComponent } from './mark-overview-container.component';

describe('MarkOverviewContainerComponent', () => {
  let component: MarkOverviewContainerComponent;
  let fixture: ComponentFixture<MarkOverviewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkOverviewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkOverviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
