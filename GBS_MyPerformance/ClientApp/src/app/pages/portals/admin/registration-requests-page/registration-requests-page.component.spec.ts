import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationRequestsPageComponent } from './registration-requests-page.component';

describe('RegistrationRequestsPageComponent', () => {
  let component: RegistrationRequestsPageComponent;
  let fixture: ComponentFixture<RegistrationRequestsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationRequestsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
