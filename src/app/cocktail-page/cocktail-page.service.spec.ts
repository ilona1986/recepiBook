import { TestBed } from '@angular/core/testing';

import { CocktailPageService } from './cocktail-page.service';

describe('CocktailPageService', () => {
  let service: CocktailPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
