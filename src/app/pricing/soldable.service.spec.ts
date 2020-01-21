import { TestBed } from '@angular/core/testing';

import { SoldableService } from './soldable.service';

describe('SoldableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoldableService = TestBed.get(SoldableService);
    expect(service).toBeTruthy();
  });
});
