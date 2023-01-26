import { TestBed } from '@angular/core/testing';

import { PageAtoutService } from './page-atout.service';

describe('PageAtoutService', () => {
  let service: PageAtoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageAtoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
