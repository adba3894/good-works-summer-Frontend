import { TestBed } from '@angular/core/testing';

import { AdminProjectService } from './admin-project.service';

describe('AdminProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminProjectService = TestBed.get(AdminProjectService);
    expect(service).toBeTruthy();
  });
});
