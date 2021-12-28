import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTextComponentComponent } from './icon-text-component.component';

describe('IconTextComponentComponent', () => {
  let component: IconTextComponentComponent;
  let fixture: ComponentFixture<IconTextComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconTextComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
