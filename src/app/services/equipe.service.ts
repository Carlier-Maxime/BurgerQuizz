import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../models/equipe';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private http: HttpClient) { }
  getEquipeId(id: string | number): Observable<Equipe[]> {
    const url = 'https://equipe04.chez-wam.info:443/api/equipes?id_equipe=eq.' + id;
    return this.http.get<Equipe[]>(url);
  }
  /*
  getNom(id : string|number) :string{
    let tmp = this.getEquipeId(id);
    //console.log (tmp.pipe(map(x=>x[0].nom)));
    //tmp.subscribe(x=> console.log(x[0].nom));
    /*tmp.subscribe(value => {
      let nom = "";
      nom= value.nom;
      return nom;
    })
*/
/*
    return "non";
  }
  */

}
