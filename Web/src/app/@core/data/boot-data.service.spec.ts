import { TestBed, inject } from '@angular/core/testing';

import { BootDataService } from './boot-data.service';

describe('BootDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BootDataService]
    });
  });

  it('should be created', inject([BootDataService], (service: BootDataService) => {
    expect(service).toBeTruthy();
  }));
});
