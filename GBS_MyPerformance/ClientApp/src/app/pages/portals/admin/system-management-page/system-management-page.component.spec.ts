import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemManagementPageComponent } from './system-management-page.component';

describe('SystemManagementPageComponent', () => {
  let component: SystemManagementPageComponent;
  let fixture: ComponentFixture<SystemManagementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemManagementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
