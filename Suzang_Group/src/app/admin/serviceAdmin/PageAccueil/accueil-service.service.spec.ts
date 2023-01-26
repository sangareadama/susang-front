import { TestBed } from '@angular/core/testing';

import { PageAccueilService } from './accueil-service.service';

describe('AccueilServiceService', () => {
  let service: PageAccueilService;

  beforeEach(() => { 
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageAccueilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
