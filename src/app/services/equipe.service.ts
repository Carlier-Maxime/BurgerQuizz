import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../models/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private http: HttpClient) { }
  getEquipeId(id: string | number): Observable<Equipe[]> {
    const url = 'https://equipe04.chez-wam.info:443/joueurs?id_joueur=eq.1' + id;
    return this.http.get<Equipe[]>(url);
  }
  getNom(id : string|number):string{
    return this.getEquipeId(id).subscribe(x=>x.nom)
  }

}
