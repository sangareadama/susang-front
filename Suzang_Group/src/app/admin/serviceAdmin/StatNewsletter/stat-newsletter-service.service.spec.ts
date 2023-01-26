import { TestBed } from '@angular/core/testing';

import { StatNewsletterServiceService } from './stat-newsletter-service.service';

describe('StatNewsletterServiceService', () => {
  let service: StatNewsletterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatNewsletterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
