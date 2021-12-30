import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEditPeriodPageComponent } from './manage-edit-period-page.component';

describe('ManageEditPeriodPageComponent', () => {
  let component: ManageEditPeriodPageComponent;
  let fixture: ComponentFixture<ManageEditPeriodPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEditPeriodPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEditPeriodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
