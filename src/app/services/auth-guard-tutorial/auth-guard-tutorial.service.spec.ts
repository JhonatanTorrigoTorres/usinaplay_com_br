import { TestBed } from '@angular/core/testing';

import { AuthGuardTutorialService } from './auth-guard-tutorial.service';

describe('AuthGuardTutorialService', () => {
  let service: AuthGuardTutorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardTutorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
