import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {

  tabQuestions = new Observable();
  tab = [];

  constructor(private http: HttpClient) { }

  appelRequete():Observable<any>{

    const url = 'https://equipe04.chez-wam.info/api/questions';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.get<any>(url, httpOptions)
      .pipe(
        map(res => res.data),
        catchError(err => {
          console.log('Erreur http : ', err);
          return of([]);
        }),
      );

  }


  ngOnInit(): void {
    this.tabQuestions = this.appelRequete();
  }

}

