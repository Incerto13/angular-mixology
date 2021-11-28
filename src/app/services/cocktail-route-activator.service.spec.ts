import { TestBed } from '@angular/core/testing';

import { CocktailRouteActivatorService } from './cocktail-route-activator.service';

describe('CocktailRouteActivatorService', () => {
  let service: CocktailRouteActivatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailRouteActivatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
