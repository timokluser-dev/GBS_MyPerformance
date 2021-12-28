import { TestBed, async, inject } from '@angular/core/testing';

import { DevRouteGuard } from './dev-route.guard';

describe('DevRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevRouteGuard]
    });
  });

  it('should ...', inject([DevRouteGuard], (guard: DevRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
