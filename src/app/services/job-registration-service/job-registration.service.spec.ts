import { TestBed } from '@angular/core/testing';

import { JobRegistrationService } from './job-registration.service';

describe('JobRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobRegistrationService = TestBed.get(JobRegistrationService);
    expect(service).toBeTruthy();
  });
});
