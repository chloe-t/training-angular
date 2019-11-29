import { TestBed, async, inject } from '@angular/core/testing';

import { AuthentificationsGuard } from './authentifications.guard';

describe('AuthentificationsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthentificationsGuard]
    });
  });

  it('should ...', inject([AuthentificationsGuard], (guard: AuthentificationsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
