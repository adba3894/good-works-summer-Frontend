import { TestBed } from '@angular/core/testing';

import { AdminLoginService } from './admin-login.service';

describe('AdminLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminLoginService = TestBed.get(AdminLoginService);
    expect(service).toBeTruthy();
  });
});
