import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassStudentDetailPageComponent } from './class-student-detail-page.component';

describe('ClassStudentDetailPageComponent', () => {
  let component: ClassStudentDetailPageComponent;
  let fixture: ComponentFixture<ClassStudentDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassStudentDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassStudentDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
