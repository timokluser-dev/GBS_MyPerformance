import { TestBed, async, inject } from '@angular/core/testing';

import { UserHomeRedirectGuard } from './user-home-redirect.guard';

describe('UserHomeRedirectGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserHomeRedirectGuard]
    });
  });

  it('should ...', inject([UserHomeRedirectGuard], (guard: UserHomeRedirectGuard) => {
    expect(guard).toBeTruthy();
  }));
});
