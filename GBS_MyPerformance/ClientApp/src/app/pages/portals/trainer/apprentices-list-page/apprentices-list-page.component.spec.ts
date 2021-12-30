import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenticesListPageComponent } from './apprentices-list-page.component';

describe('ApprenticesListPageComponent', () => {
  let component: ApprenticesListPageComponent;
  let fixture: ComponentFixture<ApprenticesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprenticesListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprenticesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
