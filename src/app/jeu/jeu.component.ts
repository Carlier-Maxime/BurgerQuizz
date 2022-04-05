import { Question } from './../models/question';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { Reponse } from '../models/reponse';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {


  tabQuestions:Observable<Question[]> = new Observable();
  tabQuestionsLive:Question[] = [];
  estTrie:boolean = false;
  tab:Question[] = [];
  current_question:Question | undefined;
  timeLeft: number = 60;
  categorie:number = 0;
  nbQuestions:number = 10;

  tabQuestionRetourne:Question[] = [];

  constructor(private http: HttpClient,private router: Router) { }

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

  triSelect(id:number){
    this.categorie = id;
    this.tabQuestions = this.recupQuestions(id);
    this.estTrie = true;
    this.tabQuestions.subscribe(value => {this.tabQuestionsLive = value;this.retourneQuestion();});
  }


  retourneQuestion(){
    let randNumber = 0;
    let questionsChoisi:Question[] = []
    for(let i = 0 ; i < this.nbQuestions ; i++){
      randNumber = Math.random() * this.tabQuestionsLive.length-1;
      randNumber = Math.ceil(randNumber);
      questionsChoisi.push(this.tabQuestionsLive[randNumber]);
      let index  = this.tabQuestionsLive.indexOf(this.tabQuestionsLive[randNumber]);
      this.tabQuestionsLive.splice(index, 1);
    }


    this.tabQuestionRetourne = questionsChoisi;

    console.log(this.tabQuestionRetourne);


  }

  ngOnInit(): void {
  }

}

