import { Question } from './../models/question';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { Reponse } from '../models/reponse';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {


  tabQuestions:Observable<Question[]> = new Observable();
  tabQuestionsLive:Observable<Question[]> = new Observable();
  estTrie:boolean = false;
  tab:Question[] = [];

  constructor(private http: HttpClient) { }

  recupQuestions(id:number):Observable<Question[]>{

    const url = 'https://equipe04.chez-wam.info:443/api/questions?id_catetgorie=eq.' + id;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    let a = this.http.get<Question[]>(url, httpOptions)
      .pipe(
        map(res => res),
        catchError(err => {
          console.log('Erreur http : ', err);
          return of([]);
        }),
      );

    return a;
  }

  recupReponses(id:number):Observable<Reponse[]>{
    const url = 'https://equipe04.chez-wam.info/api/reponses?id_question=eq.' + id;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.get<Reponse[]>(url, httpOptions)
      .pipe(
        map(res => res),
        catchError(err => {
          console.log('Erreur http : ', err);
          return of([]);
        }),
      );

  }

  triSelEtPoivre(){

    /*
    this.tabQuestions.pipe(filter(question => question.id_catetgorie == 2));
    let tabIdQuestion:number[] = [];
    this.tabQuestions.subscribe(value => tabIdQuestion.push(value.id_question));
    this.tabReponses.pipe(filter(reponse => {if(tabIdQuestion.indexOf(reponse.id_question) != -1) return true;
    else{
      return false;
    }}))
    this.tabQuestions.subscribe(value => console.log(value));
    this.estTrie = true;
    */

    this.tabQuestions = this.recupQuestions(2);
    /*
    this.tabReponses = this.recupReponses();
    let tabIdQuestion:number[] = [];

    this.tabQuestions.subscribe(value => {
      this.tab = [...value];
      this.tabReponses.subscribe(value => {if(this.tab.indexOf(value) != -1)})
    });
    */

    this.estTrie = true;
  }

  triNuggets(){
    /*
    this.tabQuestions.pipe(filter(question => question.id_catetgorie == 1));
    let tabIdQuestion:number[] = [];
    this.tabQuestions.subscribe(value => tabIdQuestion.push(value.id_question));
    this.tabReponses.pipe(filter(reponse => {if(tabIdQuestion.indexOf(reponse.id_question) != -1) return true;
    else{
      return false;
    }}))

    this.estTrie = true;
    */
    this.tabQuestions = this.recupQuestions(1);
    this.estTrie = true;

  }



  ngOnInit(): void {


  }

}

