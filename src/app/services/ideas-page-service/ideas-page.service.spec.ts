import { TestBed } from '@angular/core/testing';

import { IdeasPageService } from './ideas-page.service';

describe('IdeasPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdeasPageService = TestBed.get(IdeasPageService);
    expect(service).toBeTruthy();
  });
});
