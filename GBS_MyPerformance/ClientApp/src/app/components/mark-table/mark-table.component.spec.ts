import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkTableComponent } from './mark-table.component';

describe('MarkTableComponent', () => {
  let component: MarkTableComponent;
  let fixture: ComponentFixture<MarkTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
