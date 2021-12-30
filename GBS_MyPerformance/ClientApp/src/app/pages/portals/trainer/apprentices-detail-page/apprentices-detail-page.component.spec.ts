import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenticesDetailPageComponent } from './apprentices-detail-page.component';

describe('ApprenticesDetailPageComponent', () => {
  let component: ApprenticesDetailPageComponent;
  let fixture: ComponentFixture<ApprenticesDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprenticesDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprenticesDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
