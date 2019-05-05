import { TestBed } from '@angular/core/testing';

import { BaseUrlService } from './base-url.service';

describe('BaseUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseUrlService = TestBed.get(BaseUrlService);
    expect(service).toBeTruthy();
  });
});
