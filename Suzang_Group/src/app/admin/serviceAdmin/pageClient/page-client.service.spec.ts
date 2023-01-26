import { TestBed } from '@angular/core/testing';

import { PageClientService } from './page-client.service';

describe('PageClientService', () => {
  let service: PageClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
