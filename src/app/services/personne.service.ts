import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Personne} from '../models/personnes';
import {error} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http: HttpClient) {}
  getAllPersonnes(){
    const url = 'https://equipe04.chez-wam.info:443/api/joueurs';
    return this.http.get<Personne[]>(url);

  }
  addPersonne(personne: Personne): void{
    const url = 'https://equipe04.chez-wam.info:443/api/joueurs';
    this.http.post<Personne>(url, personne).subscribe();
  }
}
