import { TestBed } from '@angular/core/testing';

import { CollectMonthdaysService } from './collect-monthdays.service';

describe('CollectMonthdaysService', () => {
  let service: CollectMonthdaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectMonthdaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
