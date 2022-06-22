import { TestBed } from '@angular/core/testing';

import { CollectWeekdaysService } from './collect-weekdays.service';

describe('CollectWeekdaysService', () => {
  let service: CollectWeekdaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectWeekdaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
