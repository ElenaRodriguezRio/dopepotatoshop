import { TestBed } from '@angular/core/testing';

import { PotatoMockService } from './potato-mock.service';

describe('PotatoMockService', () => {
  let service: PotatoMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotatoMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
