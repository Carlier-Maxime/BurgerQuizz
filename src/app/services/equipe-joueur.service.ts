import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { EquipeJoueur } from '../models/equipe-joueur';
import { EquipeService } from './equipe.service';
import { JoueurService } from './joueur.service';

@Injectable({
  providedIn: 'root'
})
export class EquipeJoueurService {
  constructor(private http: HttpClient,private joueurequipeService : JoueurService,private equipeService : EquipeService) { }

  getEquipeJoueur():Observable<EquipeJoueur[]>{
    const url = 'https://equipe04.chez-wam.info:443/api/equipes_joueurs';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.get<EquipeJoueur[]>(url, httpOptions)
      .pipe(
        map(res => res),
        catchError(err => {
          console.log('Erreur http : ', err);
          return of([]);
        }),
      );
  }

  getEquipeJoueurId(id: string | number): Observable<EquipeJoueur[]> {
    const url = 'https://equipe04.chez-wam.info:443/joueurs?id_joueur=eq.1' + id;
    return this.http.get<EquipeJoueur[]>(url);
  }
/*
  getEquipeNom(id: string | number):string{
    return this.equipeService.getNom(id);
  }
*/
  /*
  getClassementCroissant():Observable<EquipeJoueur[]>{
    console.log("Tri croissant joueur");
    let tmpTab = this.getEquipeJoueur().pipe(map((data)=>{
        data.sort((p1,p2)=>{
        return p1.reduce() < p2.id_joueur ? -1 : 1
        })
      return data;
    }));
    tmpTab.subscribe(x=>console.log(x));
    return tmpTab;
  }
  */
}
