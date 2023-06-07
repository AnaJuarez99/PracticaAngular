import { TestBed } from '@angular/core/testing';

import { PonentesService } from './ponentes.service';

describe('PonentesService', () => {
  let service: PonentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PonentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
