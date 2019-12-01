import { TestBed } from '@angular/core/testing';

import { PeopelsHttpsService } from './peopels-https.service';

describe('PeopelsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopelsServiceService = TestBed.get(PeopelsServiceService);
    expect(service).toBeTruthy();
  });
});
