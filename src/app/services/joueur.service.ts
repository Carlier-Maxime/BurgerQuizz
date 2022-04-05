import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  constructor(private http: HttpClient) { }
  getJoueurs():Observable<Personne[]>{
    const url = 'https://equipe04.chez-wam.info:443/api/joueurs';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.get<Personne[]>(url, httpOptions)
      .pipe(
        map(res => res),
        catchError(err => {
          console.log('Erreur http : ', err);
          return of([]);
        }),
      );
  }

  getJoueur(id: string | number): Observable<Personne[]> {
    const url = 'https://equipe04.chez-wam.info:443/joueurs?id_joueur=eq.1' + id;
    return this.http.get<Personne[]>(url);
  }

  getClassementCroissant():Observable<Personne[]>{
    console.log("Tri croissant joueur");
    let tmpTab = this.getJoueurs().pipe(map((data)=>{
        data.sort((p1,p2)=>{
        return p1.id_joueur < p2.id_joueur ? -1 : 1
        })
      return data;
    }));
    tmpTab.subscribe(x=>console.log(x));
    return tmpTab;
  }

  getClassementDecroissant():Observable<Personne[]>{
    console.log("Tri decroissant joueur");
    let tmpTab = this.getJoueurs().pipe(map((data)=>{
      data.sort((p1,p2)=>{
      return p1.id_joueur > p2.id_joueur ? -1 : 1})
      return data
    }));
    tmpTab.subscribe(x=>console.log(x));
    return tmpTab;
  }
}

