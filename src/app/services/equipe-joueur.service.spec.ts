import { TestBed } from '@angular/core/testing';

import { EquipeJoueurService } from './equipe-joueur.service';

describe('EquipeJoueurService', () => {
  let service: EquipeJoueurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipeJoueurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
