import { TestBed } from '@angular/core/testing';
import { PageServicesItemService } from './page-services.service';


describe('PageServicesItemService', () => {
  let service: PageServicesItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageServicesItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
