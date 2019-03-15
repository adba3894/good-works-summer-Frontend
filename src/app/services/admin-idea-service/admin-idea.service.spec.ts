import { TestBed } from '@angular/core/testing';

import { AdminIdeaService } from './admin-idea.service';

describe('AdminIdeaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminIdeaService = TestBed.get(AdminIdeaService);
    expect(service).toBeTruthy();
  });
});
