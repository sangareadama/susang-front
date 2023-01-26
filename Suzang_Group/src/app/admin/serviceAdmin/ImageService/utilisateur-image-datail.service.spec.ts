import { TestBed } from '@angular/core/testing';

import { UtilisateurImageDatailService } from './utilisateur-image-datail.service';

describe('UtilisateurImageDatailService', () => {
  let service: UtilisateurImageDatailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilisateurImageDatailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
