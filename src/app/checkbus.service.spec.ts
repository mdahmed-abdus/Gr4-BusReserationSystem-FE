import { TestBed } from '@angular/core/testing';

import { CheckbusService } from './checkbus.service';

describe('CheckbusService', () => {
  let service: CheckbusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckbusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
