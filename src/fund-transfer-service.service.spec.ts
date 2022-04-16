import { TestBed } from '@angular/core/testing';

import { FundTransferServiceService } from './fund-transfer-service.service';

describe('FundTransferServiceService', () => {
  let service: FundTransferServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundTransferServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
