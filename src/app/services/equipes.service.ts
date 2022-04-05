import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipesService {

  constructor(private http: HttpClient) {}

  addJoueurToEquipe(idJoueur: number, idEntreprise: number): void {
    const url = '';
  }
}
