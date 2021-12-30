import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsMarkTableComponent } from './students-mark-table.component';

describe('StudentsMarkTableComponent', () => {
  let component: StudentsMarkTableComponent;
  let fixture: ComponentFixture<StudentsMarkTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsMarkTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsMarkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
