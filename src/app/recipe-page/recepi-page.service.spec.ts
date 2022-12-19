import { TestBed } from '@angular/core/testing';

import { RecepiPageService } from './recepi-page.service';

describe('RecepiPageService', () => {
  let service: RecepiPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecepiPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
