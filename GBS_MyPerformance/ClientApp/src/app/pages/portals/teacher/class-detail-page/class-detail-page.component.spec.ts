import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDetailPageComponent } from './class-detail-page.component';

describe('ClassDetailPageComponent', () => {
  let component: ClassDetailPageComponent;
  let fixture: ComponentFixture<ClassDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
