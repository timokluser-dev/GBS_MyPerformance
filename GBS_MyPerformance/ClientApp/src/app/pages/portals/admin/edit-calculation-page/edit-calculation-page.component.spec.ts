import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCalculationPageComponent } from './edit-calculation-page.component';

describe('EditCalculationPageComponent', () => {
  let component: EditCalculationPageComponent;
  let fixture: ComponentFixture<EditCalculationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCalculationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCalculationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
