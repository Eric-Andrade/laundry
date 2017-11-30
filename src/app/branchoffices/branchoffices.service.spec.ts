import { TestBed, inject } from '@angular/core/testing';

import { BranchofficesService } from './branchoffices.service';

describe('BranchofficesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BranchofficesService]
    });
  });

  it('should be created', inject([BranchofficesService], (service: BranchofficesService) => {
    expect(service).toBeTruthy();
  }));
});
