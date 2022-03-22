import { TestBed } from '@angular/core/testing';

import { FormetService } from './formet.service';

describe('FormetService', () => {
  let service: FormetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
