import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesOverviewPageComponentComponent } from './classes-overview-page-component.component';

describe('ClassesOverviewPageComponentComponent', () => {
  let component: ClassesOverviewPageComponentComponent;
  let fixture: ComponentFixture<ClassesOverviewPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesOverviewPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesOverviewPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
