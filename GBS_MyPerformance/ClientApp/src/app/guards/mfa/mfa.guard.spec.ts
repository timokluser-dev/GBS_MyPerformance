import { TestBed, async, inject } from '@angular/core/testing';

import { MfaGuard } from './mfa.guard';

describe('MfaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MfaGuard]
    });
  });

  it('should ...', inject([MfaGuard], (guard: MfaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
